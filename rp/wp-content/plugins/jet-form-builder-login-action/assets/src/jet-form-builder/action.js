import { getLocalizedFullPack } from '../source';

const {
		  Tools: { withPlaceholder },
		  addAction,
		  getFormFieldsBlocks,
	  } = JetFBActions;

const {
		  useState,
		  useEffect,
	  } = wp.element;

const {
		  ActionFieldsMap,
		  WrapperRequiredControl,
		  RepeaterWithState,
		  ActionModal,
	  } = JetFBComponents;

const {
		  SelectControl,
		  ToggleControl,
	  } = wp.components;

const { addFilter } = wp.hooks;

const { source, label, help } = getLocalizedFullPack;

addAction(
	'login',
	function LoginAction( {
							  settings,
							  onChangeSetting,
						  } ) {
		const [ formFields ] = useState( () => getFormFieldsBlocks( [], '--' ) );

		return <>
			<SelectControl
				label={ label( 'user_login_field' ) }
				labelPosition='side'
				value={ settings.user_login_field }
				onChange={ val => onChangeSetting( val, 'user_login_field' ) }
				options={ formFields }
			/>
			<SelectControl
				label={ label( 'user_pass_field' ) }
				labelPosition='side'
				value={ settings.user_pass_field }
				onChange={ val => onChangeSetting( val, 'user_pass_field' ) }
				options={ formFields }
			/>
			<SelectControl
				label={ label( 'remember_field' ) }
				labelPosition='side'
				value={ settings.remember_field }
				onChange={ val => onChangeSetting( val, 'remember_field' ) }
				options={ formFields }
			/>
			<ToggleControl
				label={ label( 'secure_cookie' ) }
				checked={ settings.secure_cookie }
				onChange={ val => onChangeSetting( val, 'secure_cookie' ) }
			/>

		</>;
	} );

addFilter( 'jet.fb.section.actions.header.login', 'jet-form-builder', function() {
	return <span style={ { marginTop: '0px', color: 'rgb(117, 117, 117)' } }>
		{ 'Note: if you need a redirect, use Redirect to Page.' }
	</span>;
} )