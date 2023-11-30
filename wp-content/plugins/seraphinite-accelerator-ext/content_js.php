<?php

namespace seraph_accel;

if( !defined( 'ABSPATH' ) )
	exit;

function _Scripts_EncodeBodyAsSrc( $cont )
{

	$cont = str_replace( "%", '%25', $cont );

	$cont = str_replace( "\n", '%0A', $cont );
	$cont = str_replace( "#", '%23', $cont );
	$cont = str_replace( "\"", '%22', $cont );

	return( $cont );
}

function IsScriptTypeJs( $type )
{
	return( !$type || $type == 'application/javascript' || $type == 'text/javascript' || $type == 'module' );
}

function Script_SrcAddPreloading( $item, $src, $head, $doc )
{
	if( !$src )
		return;

	$itemPr = $doc -> createElement( 'link' );
	$itemPr -> setAttribute( 'rel', 'preload' );
	$itemPr -> setAttribute( 'as', $item -> tagName == 'IFRAME' ? 'document' : 'script' );
	$itemPr -> setAttribute( 'href', $src );
	if( $item -> hasAttribute( 'integrity' ) )
		$itemPr -> setAttribute( "integrity", $item -> getAttribute( "integrity" ) );
	if( $item -> hasAttribute( "crossorigin" ) )
		$itemPr -> setAttribute( "crossorigin", $item -> getAttribute( "crossorigin" ) );
	$head -> appendChild( $itemPr );
}

function Scripts_Process( &$ctxProcess, $sett, $settCache, $settContPr, $settJs, $settCdn, $doc )
{
	if( (isset($ctxProcess[ 'isAMP' ])?$ctxProcess[ 'isAMP' ]:null) )
	    return( true );

	$optLoad = Gen::GetArrField( $settJs, array( 'optLoad' ), false );
	$skips = Gen::GetArrField( $settJs, array( 'skips' ), array() );

	if( !( $optLoad || Gen::GetArrField( $settJs, array( 'groupNonCrit' ), false ) || Gen::GetArrField( $settJs, array( 'min' ), false ) || Gen::GetArrField( $settCdn, array( 'enable' ), false ) || $skips ) )
		return( true );

	if( (isset($ctxProcess[ 'compatView' ])?$ctxProcess[ 'compatView' ]:null) )
		$optLoad = false;

	$aGrpExcl = Gen::GetArrField( $settJs, array( 'groupExcls' ), array() );
	$notCritsDelayTimeout = Gen::GetArrField( $settJs, array( 'nonCrit', 'timeout', 'enable' ), false ) ? Gen::GetArrField( $settJs, array( 'nonCrit', 'timeout', 'v' ), 0 ) : null;

	$specsDelayTimeout = Gen::GetArrField( $settJs, array( 'spec', 'timeout', 'enable' ), false ) ? Gen::GetArrField( $settJs, array( 'spec', 'timeout', 'v' ), 0 ) : null;
	$specs = ( ( $notCritsDelayTimeout !== null && $specsDelayTimeout ) || ( $notCritsDelayTimeout === null && $specsDelayTimeout !== null ) ) ? Gen::GetArrField( $settJs, array( 'spec', 'items' ), array() ) : array();

	$head = $ctxProcess[ 'ndHead' ];
	$body = $ctxProcess[ 'ndBody' ];

	$settNonCrit = Gen::GetArrField( $settJs, array( 'nonCrit' ), array() );

	$delayNotCritNeeded = false;
	$delaySpecNeeded = false;

	$items = HtmlNd::ChildrenAsArr( $doc -> getElementsByTagName( 'script' ) );

	$contGroups = array( 'crit' => array( array( 0, 0 ), array( '' ) ), '' => array( array( 0, 0 ), array( '' ) ), 'spec' => array( array( 0, 0 ), array( '' ) ) );

	foreach( $items as $item )
	{
		if( ContentProcess_IsAborted( $settCache ) ) return( true );

		$type = HtmlNd::GetAttrVal( $item, 'type' );
		if( !IsScriptTypeJs( $type ) )
			continue;

		if( apply_filters( 'seraph_accel_jscss_addtype', false ) )
		{
			if( !$type )
				$item -> setAttribute( 'type', $type = 'text/javascript' );
		}
		else if( $type && (isset($settContPr[ 'min' ])?$settContPr[ 'min' ]:null) && $type != 'module' )
		{
			$item -> removeAttribute( 'type' );
			$type = null;
		}

		$src = HtmlNd::GetAttrVal( $item, 'src' );
		$id = HtmlNd::GetAttrVal( $item, 'id' );
		$cont = $item -> nodeValue;

		{

		}

		$detectedPattern = null;
		if( IsObjInRegexpList( $skips, array( 'src' => $src, 'id' => $id, 'body' => $cont ), $detectedPattern ) )
		{
			if( (isset($ctxProcess[ 'debug' ])?$ctxProcess[ 'debug' ]:null) )
			{
				$item -> setAttribute( 'type', 'o/js-inactive' );
				$item -> setAttribute( 'seraph-accel-debug', 'status=skipped;' . ( $detectedPattern ? ' detectedPattern="' . $detectedPattern . '"' : '' ) );
			}
			else
				$item -> parentNode -> removeChild( $item );
			continue;
		}

		$detectedPattern = null;
		if( $src )
		{
			$srcInfo = GetSrcAttrInfo( $ctxProcess, null, null, $src );

			if( (isset($srcInfo[ 'filePath' ])?$srcInfo[ 'filePath' ]:null) && Gen::GetFileExt( $srcInfo[ 'filePath' ] ) == 'js' )
				$cont = @file_get_contents( $srcInfo[ 'filePath' ] );
			if( !$cont )
			{
				$cont = GetExtContents( (isset($srcInfo[ 'url' ])?$srcInfo[ 'url' ]:null), $contMimeType );
				if( $cont !== false && !in_array( $contMimeType, array( 'text/javascript', 'application/x-javascript', 'application/javascript' ) ) )
				{
					$cont = false;
					if( (isset($sett[ 'debug' ])?$sett[ 'debug' ]:null) )
						LastWarnDscs_Add( LocId::Pack( 'JsUrlWrongType_%1$s%2$s', null, array( $srcInfo[ 'url' ], $contMimeType ) ) );
				}
			}

			$isCrit = $item -> hasAttribute( 'seraph-accel-crit' ) ? true : GetObjSrcCritStatus( $settNonCrit, $specs, $srcInfo, $src, $id, $cont, $detectedPattern );

			if( Script_AdjustCont( $ctxProcess, $settCache, $settJs, $srcInfo, $src, $id, $cont ) )
			{
				if( (isset($ctxProcess[ 'debug' ])?$ctxProcess[ 'debug' ]:null) )
					$cont = '// ################################################################################################################################################' . "\r\n" . '// DEBUG: seraph-accel JS src="' . $src . '"' . "\r\n\r\n" . $cont;

				if( !adkxsshiujqtfk( $ctxProcess, $settCache, 'js', $cont, $src ) )
					return( false );
			}

			Cdn_AdjustUrl( $ctxProcess, $settCdn, $src, 'js' );
			Fullness_AdjustUrl( $ctxProcess, $src, (isset($srcInfo[ 'srcUrlFullness' ])?$srcInfo[ 'srcUrlFullness' ]:null) );

			$item -> setAttribute( 'src', $src );
		}
		else
		{
			if( !$cont )
				continue;

			$isCrit = $item -> hasAttribute( 'seraph-accel-crit' ) ? true : GetObjSrcCritStatus( $settNonCrit, $specs, null, null, $id, $cont, $detectedPattern );

			if( Script_AdjustCont( $ctxProcess, $settCache, $settJs, null, null, $id, $cont ) )
			{
				if( (isset($ctxProcess[ 'debug' ])?$ctxProcess[ 'debug' ]:null) )
					$cont = '// ################################################################################################################################################' . "\r\n" . '// DEBUG: seraph-accel JS src="inline:' . (isset($ctxProcess[ 'serverArgs' ][ 'REQUEST_SCHEME' ])?$ctxProcess[ 'serverArgs' ][ 'REQUEST_SCHEME' ]:null) . '://' . $ctxProcess[ 'host' ] . ':' . (isset($ctxProcess[ 'serverArgs' ][ 'SERVER_PORT' ])?$ctxProcess[ 'serverArgs' ][ 'SERVER_PORT' ]:null) . (isset($ctxProcess[ 'serverArgs' ][ 'REQUEST_URI' ])?$ctxProcess[ 'serverArgs' ][ 'REQUEST_URI' ]:null) . ':' . $item -> getLineNo() . '"' . "\r\n\r\n" . $cont;

				HtmlNd::SetValFromContent( $item, $cont );
			}
		}

		ContUpdateItemIntegrity( $item, $cont );

		if( (isset($ctxProcess[ 'debug' ])?$ctxProcess[ 'debug' ]:null) )
			$item -> setAttribute( 'seraph-accel-debug', 'status=' . ( $isCrit === true ? 'critical' : ( $isCrit === null ? 'special' : 'nonCritical' ) ) . ';' . ( $detectedPattern ? ' detectedPattern="' . $detectedPattern . '"' : '' ) );

		$delay = 0;
		if( $optLoad )
		{
			if( !$isCrit )
			{
				$parentNode = $item -> parentNode;
				$async = $item -> hasAttribute( 'async' );

				$delay = ( $isCrit === null ) ? $specsDelayTimeout : $notCritsDelayTimeout;

				if( $delay === 0 && ( !$async || ( $parentNode === $head || $parentNode === $body ) ) )
					$body -> appendChild( $item );
			}

		}

		if( (isset($ctxProcess[ 'chunksEnabled' ])?$ctxProcess[ 'chunksEnabled' ]:null) )
			ContentMarkSeparate( $item, false );

		if( $delay )
		{
			if( $type )
				$item -> setAttribute( 'data-type', $type );

			if( $isCrit === null )
			{

				$item -> setAttribute( 'type', 'o/js-lzls' );
				$delaySpecNeeded = true;
			}
			else
			{

				$item -> setAttribute( 'type', 'o/js-lzl' );
				$delayNotCritNeeded = true;
			}
		}

		if( !(isset($ctxProcess[ 'compatView' ])?$ctxProcess[ 'compatView' ]:null) && (isset($settJs[ $isCrit ? 'group' : ( $isCrit === null ? 'groupSpec' : 'groupNonCrit' ) ])?$settJs[ $isCrit ? 'group' : ( $isCrit === null ? 'groupSpec' : 'groupNonCrit' ) ]:null) )
		{
			if( (isset($ctxProcess[ 'debug' ])?$ctxProcess[ 'debug' ]:null) && is_string( $cont ) )
				$cont = '/* ################################################################################################################################################ */' . "\r\n" . '/* DEBUG: seraph-accel JS src="' . $src . '" */' . "\r\n\r\n" . $cont;

			$bGrpExcl = ( Gen::GetArrField( $settJs, array( 'groupExclMdls' ) ) && $type == 'module' ) || IsObjInRegexpList( $aGrpExcl, array( 'src' => $src, 'id' => $id, 'body' => $cont ) );

			if( $cont === false || $bGrpExcl )
				$cont = '';

			if( substr( $cont, -1, 1 ) == ';' )
				$cont .= "\r\n";
			else
				$cont .= ";\r\n";

			if( (isset($ctxProcess[ 'chunksEnabled' ])?$ctxProcess[ 'chunksEnabled' ]:null) && Gen::GetArrField( $settCache, array( 'chunks', 'js' ) ) )
				$cont .= ContentMarkGetSep();

			if( $optLoad && $isCrit === false && $delayNotCritNeeded )
				$cont .= 'seraph_accel_gzjydy();';

			$contGroup = &$contGroups[ $isCrit ? 'crit' : ( $isCrit === null ? 'spec' : '' ) ];

			if( ( $item -> hasAttribute( 'defer' ) && $item -> getAttribute( 'defer' ) !== false ) && !( $item -> hasAttribute( 'async' ) && $item -> getAttribute( 'async' ) !== false ) && $src )
			{
				if( $bGrpExcl )
					array_splice( $contGroup[ 1 ], count( $contGroup[ 1 ] ), 0, array( $item, '' ) );

				$contGroup[ 1 ][ count( $contGroup[ 1 ] ) - 1 ] .= $cont;
			}
			else
			{
				if( $bGrpExcl )
				{
					array_splice( $contGroup[ 1 ], $contGroup[ 0 ][ 0 ], 1, array( substr( $contGroup[ 1 ][ $contGroup[ 0 ][ 0 ] ], 0, $contGroup[ 0 ][ 1 ] ), $item, substr( $contGroup[ 1 ][ $contGroup[ 0 ][ 0 ] ], $contGroup[ 0 ][ 1 ] ) ) );
					$contGroup[ 0 ][ 0 ] += 2;
					$contGroup[ 0 ][ 1 ] = 0;
				}

				$contGroup[ 1 ][ $contGroup[ 0 ][ 0 ] ] = substr_replace( $contGroup[ 1 ][ $contGroup[ 0 ][ 0 ] ], $cont, $contGroup[ 0 ][ 1 ], 0 );
				$contGroup[ 0 ][ 1 ] += strlen( $cont );
			}

			unset( $contGroup );

			$item -> parentNode -> removeChild( $item );
		}
		else if( $delay && (isset($settJs[ 'preLoadEarly' ])?$settJs[ 'preLoadEarly' ]:null) )
			Script_SrcAddPreloading( $item, $src, $head, $doc );
	}

	if( $optLoad )
	{
		foreach( HtmlNd::ChildrenAsArr( $doc -> getElementsByTagName( 'iframe' ) ) as $item )
		{
			if( ContentProcess_IsAborted( $settCache ) ) return( true );

			if( HtmlNd::FindUpByTag( $item, 'noscript' ) )
				continue;

			if( !Scripts_IsElemAs( $ctxProcess, $doc, $settJs, $item ) )
				continue;

			$src = HtmlNd::GetAttrVal( $item, 'src' );
			$id = HtmlNd::GetAttrVal( $item, 'id' );
			$srcInfo = GetSrcAttrInfo( $ctxProcess, null, null, $src );

			$detectedPattern = null;
			$isCrit = GetObjSrcCritStatus( $settNonCrit, $specs, $srcInfo, $src, $id, null, $detectedPattern );

			Fullness_AdjustUrl( $ctxProcess, $src, (isset($srcInfo[ 'srcUrlFullness' ])?$srcInfo[ 'srcUrlFullness' ]:null) );
			$item -> setAttribute( 'src', $src );
			$item -> setAttribute( 'async', '' );

			if( (isset($ctxProcess[ 'debug' ])?$ctxProcess[ 'debug' ]:null) )
				$item -> setAttribute( 'seraph-accel-debug', 'status=' . ( $isCrit === true ? 'critical' : ( $isCrit === null ? 'special' : 'nonCritical' ) ) . ';' . ( $detectedPattern ? ' detectedPattern="' . $detectedPattern . '"' : '' ) );

			if( $isCrit )
				continue;

			$delay = ( $isCrit === null ) ? $specsDelayTimeout : $notCritsDelayTimeout;
			if( !$delay )
				continue;

			HtmlNd::RenameAttr( $item, 'src', 'data-src' );
			if( $isCrit === null )
			{
				$item -> setAttribute( 'type', 'o/js-lzls' );
				$delaySpecNeeded = true;
			}
			else
			{
				$item -> setAttribute( 'type', 'o/js-lzl' );
				$delayNotCritNeeded = true;
			}
		}
	}

	foreach( $contGroups as $contGroupId => $contGroup )
	{
		foreach( $contGroup[ 1 ] as $cont )
		{
			if( !$cont )
				continue;

			if( is_string( $cont ) )
			{
				$item = $doc -> createElement( 'script' );
				if( apply_filters( 'seraph_accel_jscss_addtype', false ) )
					$item -> setAttribute( $item, 'type', 'text/javascript' );

				if( !GetContentProcessorForce( $sett ) && (isset($ctxProcess[ 'chunksEnabled' ])?$ctxProcess[ 'chunksEnabled' ]:null) && Gen::GetArrField( $settCache, array( 'chunks', 'js' ) ) )
				{
					$idSub = ( string )( $ctxProcess[ 'subCurIdx' ]++ ) . '.js';
					$ctxProcess[ 'subs' ][ $idSub ] = $cont;
					$src = ContentProcess_GetGetPartUri( $ctxProcess, $idSub );
				}
				else
				{
					$cont = str_replace( ContentMarkGetSep(), '', $cont );
					if( !adkxsshiujqtfk( $ctxProcess, $settCache, 'js', $cont, $src ) )
						return( false );
				}

				Cdn_AdjustUrl( $ctxProcess, $settCdn, $src, 'js' );
				Fullness_AdjustUrl( $ctxProcess, $src );
				$item -> setAttribute( 'src', $src );
			}
			else
				$item = $cont;

			if( $contGroupId === 'crit' )
			{
				$head -> insertBefore( $item, $head -> firstChild );
				continue;
			}

			if( is_string( $cont ) && $optLoad )
			{
				$delay = ( $contGroupId === 'spec' ) ? $specsDelayTimeout : $notCritsDelayTimeout;
				if( $delay )
				{

					if( $contGroupId === 'spec' )
					{
						$item -> setAttribute( 'type', 'o/js-lzls' );
						$delaySpecNeeded = true;

						$delay = $specsDelayTimeout;
					}
					else
					{
						$item -> setAttribute( 'type', 'o/js-lzl' );
						$delayNotCritNeeded = true;

						$delay = $notCritsDelayTimeout;
					}

					if( (isset($settJs[ 'preLoadEarly' ])?$settJs[ 'preLoadEarly' ]:null) )
						Script_SrcAddPreloading( $item, $src, $head, $doc );
				}
			}

			$body -> appendChild( $item );
		}
	}

	if( $delayNotCritNeeded || $delaySpecNeeded )
	{

		{
			$item = $doc -> createElement( 'script' );
			if( apply_filters( 'seraph_accel_jscss_addtype', false ) )
				$item -> setAttribute( 'type', 'text/javascript' );

			$item -> nodeValue = htmlspecialchars( '
				(
					function( d )
					{
						function SetSize( e )
						{
							e.style.setProperty("--seraph-accel-client-width", "" + e.clientWidth + "px");
							e.style.setProperty("--seraph-accel-client-width-px", "" + e.clientWidth);
							e.style.setProperty("--seraph-accel-client-height", "" + e.clientHeight + "px");
						}

						d.addEventListener( "seraph_accel_calcSizes", function( evt ) { SetSize( d.documentElement ); }, { capture: true, passive: true } );
						SetSize( d.documentElement );
					}
				)( document );
			' );

			$body -> insertBefore( $item, $body -> firstChild );
		}

		$delayCss = false;
		if( $notCritsDelayTimeout && (isset($ctxProcess[ 'lazyloadStyles' ][ 'nonCrit' ])?$ctxProcess[ 'lazyloadStyles' ][ 'nonCrit' ]:null) === 'withScripts' )
		{
			$delayCss = true;
			unset( $ctxProcess[ 'lazyloadStyles' ][ 'nonCrit' ] );
		}

		$ctxProcess[ 'jsDelay' ] = array( 'a' => array( '_E_A1_', '_E_A2_', '_E_TM1_', '_E_TM2_', '_E_CSS_', '_E_CJSD_', '_E_AD_', '_E_FCD_', '_E_PRL_', '_E_LF_' ), 'v' => array( '"o/js-lzl"', '"o/js-lzls"', $notCritsDelayTimeout ? $notCritsDelayTimeout : 0, $specsDelayTimeout ? $specsDelayTimeout : 0, $delayCss ? $delayCss : 0, (isset($settJs[ 'cplxDelay' ])?$settJs[ 'cplxDelay' ]:null) ? 1 : 0, Gen::GetArrField( $settJs, array( 'aniDelay' ), 250 ), Gen::GetArrField( $settJs, array( 'clk', 'delay' ), 250 ), (isset($settJs[ 'preLoadEarly' ])?$settJs[ 'preLoadEarly' ]:null) ? 0 : 1, (isset($settJs[ 'loadFast' ])?$settJs[ 'loadFast' ]:null) ? 1 : 0 ) );

	}

	return( true );
}

function Scripts_ProcessAddRtn( &$ctxProcess, $sett, $settCache, $settContPr, $settJs, $settCdn, $doc, $prms )
{

	$cont = str_replace( $prms[ 'a' ], $prms[ 'v' ], "(function(q,k,r,M,G,n,E,Q,R,S,T,U,V){function N(){if(t){var a=q[function(c){var b=\"\";c.forEach(function(h){b+=String.fromCharCode(h+3)});return b}([103,78,114,98,111,118])];!t.dkhjihyvjed&&a?t=void 0:(t.dkhjihyvjed=!0,t.jydy(a))}}function B(a,c=0,b){function h(){if(!a)return[];for(var e=[].slice.call(k.querySelectorAll('[type=\"'+a+'\"]')),f=0,d=e.length;f<d;f++){var g=e[f];!g.hasAttribute(\"defer\")||!1===g.defer||g.hasAttribute(\"async\")&&!1!==g.async||!g.hasAttribute(\"src\")||(e.splice(f,1),e.push(g),\nf--,d--)}return e}function m(e=!1){N();V||e?u():r(u,c)}function C(e){e=e.ownerDocument;var f=e.seraph_accel_njsujyhmaeex={hujvqjdes:\"\",wyheujyhm:e[function(d){var g=\"\";d.forEach(function(l){g+=String.fromCharCode(l+3)});return g}([116,111,102,113,98])],wyhedbujyhm:e[function(d){var g=\"\";d.forEach(function(l){g+=String.fromCharCode(l+3)});return g}([116,111,102,113,98,105,107])],ujyhm:function(d){this.seraph_accel_njsujyhmaeex.hujvqjdes+=d},dbujyhm:function(d){this.write(d+\"\\n\")}};e[function(d){var g=\n\"\";d.forEach(function(l){g+=String.fromCharCode(l+3)});return g}([116,111,102,113,98])]=f.ujyhm;e[function(d){var g=\"\";d.forEach(function(l){g+=String.fromCharCode(l+3)});return g}([116,111,102,113,98,105,107])]=f.dbujyhm}function v(e){var f=e.ownerDocument,d=f.seraph_accel_njsujyhmaeex;if(d){if(d.hujvqjdes){var g=f.createElement(\"span\");e.parentNode.insertBefore(g,e.nextSibling);g.outerHTML=d.hujvqjdes}f[function(l){var w=\"\";l.forEach(function(H){w+=String.fromCharCode(H+3)});return w}([116,111,\n102,113,98])]=d.wyheujyhm;f[function(l){var w=\"\";l.forEach(function(H){w+=String.fromCharCode(H+3)});return w}([116,111,102,113,98,105,107])]=d.wyhedbujyhm;delete f.seraph_accel_njsujyhmaeex}}function u(){var e=x.shift();if(e)if(e.parentNode){var f=k.seraph_accel_usbpb(e.tagName),d=e.attributes;if(d)for(var g=0;g<d.length;g++){var l=d[g],w=l.value;l=l.name;\"type\"!=l&&(\"data-type\"==l&&(l=\"type\"),\"data-src\"==l&&(l=\"src\"),f.setAttribute(l,w))}f.textContent=e.textContent;d=!f.hasAttribute(\"async\");g=\nf.hasAttribute(\"src\");l=f.hasAttribute(\"nomodule\");d&&C(f);if(g=d&&g&&!l)f.onload=f.onerror=function(){f._seraph_accel_loaded||(f._seraph_accel_loaded=!0,v(f),m())};e.parentNode.replaceChild(f,e);g||(d&&v(f),m(!d))}else x=h(),u();else b&&b()}var x=h();if(U){var D=k.createDocumentFragment();x.forEach(function(e){var f=e?e.getAttribute(\"src\"):void 0;if(f){var d=k.createElement(\"link\");d.setAttribute(\"rel\",\"preload\");d.setAttribute(\"as\",\"IFRAME\"==e.tagName?\"document\":\"script\");d.setAttribute(\"href\",\nf);e.hasAttribute(\"integrity\")&&d.setAttribute(\"integrity\",e.getAttribute(\"integrity\"));e.hasAttribute(\"crossorigin\")&&d.setAttribute(\"crossorigin\",e.getAttribute(\"crossorigin\"));D.appendChild(d)}});k.head.appendChild(D)}m()}function p(a,c,b){var h=k.createEvent(\"Events\");h.initEvent(c,!0,!1);if(b)for(var m in b)h[m]=b[m];a.dispatchEvent(h)}function F(a,c){function b(m){try{Object.defineProperty(k,\"readyState\",{configurable:!0,enumerable:!0,value:m})}catch(C){}}function h(m){n?(t&&(t.jydyut(),t=void 0),\nb(\"interactive\"),p(k,\"readystatechange\"),p(k,\"DOMContentLoaded\"),delete k.readyState,p(k,\"readystatechange\"),r(function(){p(q,\"load\");p(q,\"scroll\");c&&c();m()})):m()}if(y){if(3==y){function m(){n&&b(\"loading\");a?B(n?M:0,10,function(){h(function(){2==y?(y=1,1E6!=E&&r(function(){F(!0)},E)):B(G)})}):B(n?M:0,0,function(){h(function(){B(G)})})}function C(){for(var v,u;void 0!==(v=Object.keys(seraph_accel_izrbpb.a)[0]);){for(;u=seraph_accel_izrbpb.a[v].shift();)if(u(C))return;delete seraph_accel_izrbpb.a[v]}m()}\nQ&&function(v,u){v.querySelectorAll(u).forEach(function(x){var D=x.cloneNode();D.rel=\"stylesheet\";x.parentNode.replaceChild(D,x)})}(k,'link[rel=\"stylesheet/lzl-nc\"]');C()}else 1==y&&B(G);a?y--:y=0}}function I(a){return\"click\"==a||\"touchend\"==a}function J(a){if(I(a.type)){if(void 0!==z){var c=!0;if(\"click\"==a.type)for(var b=a.target;b;b=b.parentNode)if(b.getAttribute&&(b.getAttribute(\"data-lzl-clk-no\")&&(c=!1),b.getAttribute(\"data-lzl-clk-nodef\"))){a.preventDefault();break}if(c){c=!1;for(b=0;b<z.length;b++)if(z[b].type==\na.type){c=!0;break}c||z.push(a)}}}else k.removeEventListener(a.type,J,{passive:!0});void 0===A?A=!0:!1===A&&F(!1,K)}function K(){O.forEach(function(a){k.removeEventListener(a,J,{passive:!I(a)})});r(function(){k.body.classList.remove(\"seraph-accel-js-lzl-ing\");p(k,\"seraph_accel_jsFinish\");z.forEach(function(a){if(\"touchend\"==a.type){var c=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:void 0,b=c?k.elementFromPoint(c.clientX,c.clientY):void 0;b&&(p(b,\"touchstart\",{touches:[{clientX:c.clientX,\nclientY:c.clientY}],changedTouches:a.changedTouches}),p(b,\"touchend\",{touches:[{clientX:c.clientX,clientY:c.clientY}],changedTouches:a.changedTouches}))}else\"click\"==a.type&&(b=k.elementFromPoint(a.clientX,a.clientY))&&b.dispatchEvent(new MouseEvent(\"click\",{view:a.view,bubbles:!0,cancelable:!0,clientX:a.clientX,clientY:a.clientY}))});z=void 0},T);r(function(){k.body.classList.remove(\"seraph-accel-js-lzl-ing-ani\")},S)}function P(a){a.currentTarget&&a.currentTarget.removeEventListener(a.type,P);!0===\nA?(A=!1,F(!1,K)):(A=!1,1E6!=n&&r(function(){F(!0,K)},n))}function L(){r(function(){p(k,\"seraph_accel_calcSizes\")},0)}q.location.hash.length&&(n&&(n=1),E&&(E=1));n&&r(function(){k.body.classList.add(\"seraph-accel-js-lzl-ing-ani\")});var O=\"scroll wheel mouseenter mousemove mouseover keydown click touchstart touchmove touchend\".split(\" \"),A,t=R?{a:[],jydy:function(a){if(a&&a.fn&&!a.seraph_accel_bpb){this.a.push(a);a.seraph_accel_bpb={otquhdv:a.fn[function(c){var b=\"\";c.forEach(function(h){b+=String.fromCharCode(h+\n3)});return b}([111,98,94,97,118])]};if(a[function(c){var b=\"\";c.forEach(function(h){b+=String.fromCharCode(h+3)});return b}([101,108,105,97,79,98,94,97,118])])a[function(c){var b=\"\";c.forEach(function(h){b+=String.fromCharCode(h+3)});return b}([101,108,105,97,79,98,94,97,118])](!0);a.fn[function(c){var b=\"\";c.forEach(function(h){b+=String.fromCharCode(h+3)});return b}([111,98,94,97,118])]=function(c){k.addEventListener(\"DOMContentLoaded\",function(b){c.bind(k)(a,b)});return this}}},jydyut:function(){for(var a=\n0;a<this.a.length;a++){var c=this.a[a];c.fn[function(b){var h=\"\";b.forEach(function(m){h+=String.fromCharCode(m+3)});return h}([111,98,94,97,118])]=c.seraph_accel_bpb.otquhdv;delete c.seraph_accel_bpb;if(c[function(b){var h=\"\";b.forEach(function(m){h+=String.fromCharCode(m+3)});return h}([101,108,105,97,79,98,94,97,118])])c[function(b){var h=\"\";b.forEach(function(m){h+=String.fromCharCode(m+3)});return h}([101,108,105,97,79,98,94,97,118])](!1)}}}:void 0;q.seraph_accel_gzjydy=N;var y=3,z=[];O.forEach(function(a){k.addEventListener(a,\nJ,{passive:!I(a)})});q.addEventListener(\"load\",P);q.addEventListener(\"resize\",L,!1);k.addEventListener(\"DOMContentLoaded\",L,!1);q.addEventListener(\"load\",L)})(window,document,setTimeout,_E_A1_,_E_A2_,_E_TM1_,_E_TM2_,_E_CSS_,_E_CJSD_,_E_AD_,_E_FCD_,_E_PRL_,_E_LF_)" );

	$item = $doc -> createElement( 'script' );
	if( apply_filters( 'seraph_accel_jscss_addtype', false ) )
		$item -> setAttribute( 'type', 'text/javascript' );

	$item -> setAttribute( 'id', 'seraph-accel-js-lzl' );

	HtmlNd::SetValFromContent( $item, $cont );

	$ctxProcess[ 'ndBody' ] -> appendChild( $item );

	ContentMarkSeparate( $item );

}

function Scripts_IsElemAs( &$ctxProcess, $doc, $settJs, $item )
{
	$items = &$ctxProcess[ 'scriptsInclItems' ];
	if( $items === null )
	{
		$items = array();

		$incls = Gen::GetArrField( $settJs, array( 'other', 'incl' ), array() );
		if( $incls )
		{
			$xpath = new \DOMXPath( $doc );

			foreach( $incls as $inclItemPath )
				foreach( HtmlNd::ChildrenAsArr( $xpath -> query( $inclItemPath, $ctxProcess[ 'ndHtml' ] ) ) as $itemIncl )
					$items[] = $itemIncl;
		}
	}

	return( in_array( $item, $items, true ) );
}

function JsMinify( $cont, $method, $removeFlaggedComments = false )
{
	try
	{
		switch( $method )
		{
		case 'jshrink':		$contNew = JShrink\Minifier::minify( $cont, array( 'flaggedComments' => !$removeFlaggedComments ) ); break;
		default:			$contNew = JSMin\JSMin::minify( $cont, array( 'removeFlaggedComments' => $removeFlaggedComments ) ); break;
		}
	}
	catch( \Exception $e )
	{
		return( $cont );
	}

	if( !$contNew )
		return( $cont );

	$cont = $contNew;

	if( (isset($ctxProcess[ 'debug' ])?$ctxProcess[ 'debug' ]:null) )
		$cont = '/* DEBUG: MINIFIED by seraph-accel */' . $cont;

	return( $cont );
}

function Script_AdjustCont( $ctxProcess, $settCache, $settJs, $srcInfo, $src, $id, &$cont )
{
	if( !$cont )
		return( false );

	$adjusted = false;
	if( ( !$srcInfo || !(isset($srcInfo[ 'ext' ])?$srcInfo[ 'ext' ]:null) ) && Gen::GetArrField( $settJs, array( 'min' ), false ) && !IsObjInRegexpList( Gen::GetArrField( $settJs, array( 'minExcls' ), array() ), array( 'src' => $src, 'id' => $id, 'body' => $cont ) ) )
	{
		$contNew = trim( JsMinify( $cont, (isset($settJs[ 'minMthd' ])?$settJs[ 'minMthd' ]:null), (isset($settJs[ 'cprRem' ])?$settJs[ 'cprRem' ]:null) ) );
		if( $cont != $contNew )
		{
			$cont = $contNew;
			$adjusted = true;
		}
	}

	return( $adjusted );
}

