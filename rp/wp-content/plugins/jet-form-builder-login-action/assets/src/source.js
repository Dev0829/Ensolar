import { Actions } from "jfb-editor";

const { __ } = wp.i18n;

const getLocalizedFullPack = new Actions.EditorData( 'login' ).setLabels( {
	user_login_field: __( 'User Login Field', 'jet-form-builder-login-action' ),
	user_pass_field: __( 'User Password Field', 'jet-form-builder-login-action' ),
	remember_field: __( 'Remember Field', 'jet-form-builder-login-action' ),
	secure_cookie: __( 'Whether to use secure cookie', 'jet-form-builder-login-action' ),
} ).exportAll();

export { getLocalizedFullPack };