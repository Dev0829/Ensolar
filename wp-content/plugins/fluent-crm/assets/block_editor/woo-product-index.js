!function(){var e={2703:function(e,t){var n;!function(){"use strict";var r={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var a=typeof n;if("string"===a||"number"===a)e.push(n);else if(Array.isArray(n)){if(n.length){var l=o.apply(null,n);l&&e.push(l)}}else if("object"===a){if(n.toString!==Object.prototype.toString&&!n.toString.toString().includes("[native code]")){e.push(n.toString());continue}for(var c in n)r.call(n,c)&&n[c]&&e.push(c)}}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(n=function(){return o}.apply(t,[]))||(e.exports=n)}()}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={exports:{}};return e[r](a,a.exports,n),a.exports}n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,{a:t}),t},n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){"use strict";var e=wp.blockEditor,t=e.InspectorControls,r=e.PanelColorSettings,__=(e.MediaUpload,e.MediaUploadCheck,wp.i18n.__),o=wp.components,a=o.PanelBody,l=o.PanelRow,c=o.ToggleControl,i=o.SelectControl,u=(o.Button,function(e){var n=e.attributes,o=n.productId,u=n.showDescription,s=n.showPrice,p=n.template,m=n.backgroundColor,f=n.contentColor,d=n.pricingColor,g=e.setAttributes;return o?React.createElement(t,null,React.createElement(a,{title:"Template Settings",initialOpen:!0},React.createElement(l,null,React.createElement("div",{className:"fluent-singleProduct-template-settings"},React.createElement(i,{label:__("Design Template"),value:p,options:[{value:"left",name:"Image Left"},{value:"top",name:"Image Top"},{value:"none",name:"No Image"}].map((function(e){return{value:e.value,label:e.name}})),onChange:function(e){return g({template:e})}}),React.createElement(c,{label:__("Show Description"),checked:u,onChange:function(){return g({showDescription:!u})}}),React.createElement(c,{label:__("Show Price"),checked:s,onChange:function(){return g({showPrice:!s})}})))),React.createElement("div",{className:"fluent-singleProduct-titleAndSubtitle-settings"},React.createElement(r,{title:__("Customization"),colorSettings:[{value:f,onChange:function(e){g({contentColor:e})},label:__("Content Color")},{value:m,onChange:function(e){g({backgroundColor:e})},label:__("Background Color")},{value:d,onChange:function(e){g({pricingColor:e})},label:__("Pricing Color")}]}))):null}),s=(window.wp.i18n,n(2703)),p=n.n(s);function m(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?m(Object(n),!0).forEach((function(t){d(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function g(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,a=[],_n=!0,l=!1;try{for(n=n.call(e);!(_n=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);_n=!0);}catch(e){l=!0,o=e}finally{try{_n||null==n.return||n.return()}finally{if(l)throw o}}return a}}(e,t)||function(e,t){if(e){if("string"==typeof e)return h(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?h(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function h(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var b=wp.components,y=b.RadioControl,v=b.Spinner,w=wp.element,E=w.useState,R=w.useEffect,_=(wp.i18n.__,function(e){var t=e.attributes,n=t.productId,r=t.showDescription,o=t.showPrice,a=t.buttonText,l=t.customImage,c=t.template,i=t.backgroundColor,u=t.contentColor,s=t.pricingColor,m=e.setAttributes,d=wp.blockEditor.InnerBlocks,h=g(E([]),2),b=h[0],w=h[1],_=g(E(""),2),C=_[0],S=_[1],k=g(E(""),2),O=k[0],P=k[1],j=g(E({}),2),N=j[0],I=j[1],x=g(E(!1),2),A=x[0],D=x[1],T=g(E(!1),2),L=T[0],B=T[1],M=g(E(!1),2),z=(M[0],M[1]);R((function(){n?K(n):U()}),[]);var F=wp.apiFetch,H=wp.url.addQueryArgs,U=function(e){B(!0),F({path:H("wc/store/products",f({per_page:6},e))}).then((function(e){w(e)})).catch((function(e){z(!0)})).finally((function(){B(!1)}))},K=function(e){D(!0),F({path:H("wc/store/products/"+e)}).then((function(e){I(e),m({productId:e.id}),D(!1)}))},Q={backgroundColor:i,color:u},V=p()("fcw_p","fcw_template_"+c,{fc_product_loading:A}),$=p()("fcw_search_box",{fc_product_loading:A});return[React.createElement("div",null,A&&React.createElement("div",{style:Q,className:"fc_woo_loader"},React.createElement(v,null),React.createElement("h3",null,"Loading product")),N.id&&n?React.createElement("div",{style:Q,className:V},"none"!=c&&React.createElement("div",{className:"fcw_image"},React.createElement("img",{src:l||N&&N.images&&N.images.length&&N.images[0].src||""})),React.createElement("div",{className:"fcw_p_content"},React.createElement("h2",{style:{color:u},className:"fcw_p_title",dangerouslySetInnerHTML:{__html:N.name}}),r&&React.createElement("div",{style:{color:u},className:"fcw_p_desc",dangerouslySetInnerHTML:{__html:N.short_description}}),o&&React.createElement("div",{style:{color:s},className:"fcw_p_price",dangerouslySetInnerHTML:{__html:N.price_html}}),React.createElement("div",{className:"fcb_p_button"},React.createElement(d,{template:[["core/buttons",{},[["core/button",{text:a,url:N.permalink,align:"left"}]]]],templateLock:"all"})))):React.createElement("div",{className:$},React.createElement("h4",null,"Search and Select a Product"),React.createElement("hr",null),React.createElement("div",{style:{marginBottom:"25px",display:"flex"},className:"fluent-single-product-search-bar"},React.createElement("div",{style:{width:"80%"}},React.createElement("input",{placeholder:"product",style:{width:"100%",height:"30px"},value:C,onChange:function(e){S(e.target.value)},onKeyDown:function(e){"Enter"!==e.key&&""!==e.target.value||U({search:C})}})),React.createElement("button",{style:{width:"20%",height:"30px"},onClick:function(){U({search:C})}},"Search")),L?React.createElement("h2",null,React.createElement(v,null)):React.createElement("div",{className:"fcw_results"},b&&b.length?React.createElement(y,{selected:O,options:b.map((function(e){return{value:e.id.toString(),label:e.name}})),onChange:function(e){P(e)}}):React.createElement("div",{className:"fcw_products_not_found"},React.createElement("h2",null,"No products found!"))),React.createElement("div",{style:{marginTop:"20px"},className:"components-button is-primary",onClick:function(){K(O)}},"Done")))]}),C=wp.element.Fragment,S=window.wp.blockEditor,k={productId:{type:"number",default:null},showDescription:{type:"boolean",default:!0},showPrice:{type:"boolean",default:!0},buttonText:{type:"string",default:(0,wp.i18n.__)("Buy Now")},customImage:{type:"string",default:""},backgroundColor:{type:"string",default:"#fffeeb"},contentColor:{type:"string",default:""},pricingColor:{type:"string",default:""},template:{type:"string",default:"left"}},O=wp.element.createElement,P=wp.i18n.__,j=wp.blocks.registerBlockType,N=O("svg",{width:20,height:20},O("path",{d:"M0 0h24v24H0V0z",fill:"none"}),O("path",{fill:"#96588a",d:"M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"}));j("fluentcrm/woo-product",{title:P("Product Block"),description:P("Product Block For your Email"),category:"layout",icon:N,keywords:[P("product"),P("woocommerce"),P("card")],supports:{align:["wide","full"],html:!0},attributes:k,edit:function(e){return React.createElement(C,null,React.createElement("div",{className:"fluent-single-product-block"},React.createElement(_,{attributes:e.attributes,setAttributes:e.setAttributes})),React.createElement(u,{attributes:e.attributes,setAttributes:e.setAttributes}))},save:function(e){return React.createElement("div",null,React.createElement(React.Fragment,null,React.createElement(S.InnerBlocks.Content,null)))}})}()}();