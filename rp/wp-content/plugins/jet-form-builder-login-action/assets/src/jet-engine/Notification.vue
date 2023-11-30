<template>
	<div class="jet-fb-hubspot-notification">
		<JetFormEditorRow :label="label( 'user_login_field' )">
			<select v-model="instance.user_login_field">
				<option value="">--</option>
				<option v-for="field in fields" :value="field">{{ field }}</option>
			</select>
		</JetFormEditorRow>
		<JetFormEditorRow :label="label( 'user_pass_field' )">
			<select v-model="instance.user_pass_field">
				<option value="">--</option>
				<option v-for="field in fields" :value="field">{{ field }}</option>
			</select>
		</JetFormEditorRow>
		<JetFormEditorRow :label="label( 'remember_field' )">
			<select v-model="instance.remember_field">
				<option value="">--</option>
				<option v-for="field in fields" :value="field">{{ field }}</option>
			</select>
		</JetFormEditorRow>
		<JetFormEditorRow :label="label( 'secure_cookie' )">
			<input type="checkbox" v-model="instance.secure_cookie"/>
		</JetFormEditorRow>
	</div>
</template>

<script>
import { getLocalizedFullPack } from '../source'
import { JetFormEditorRow } from "jfb-editor"

const { source, label, help } = getLocalizedFullPack;

export default {
	name: 'login',
	components: {
		JetFormEditorRow,
	},
	props: {
		value: Object,
		fields: Array,
		jsonSource: Array
	},
	data: function () {
		return {
			instance: {},
		};
	},
	created: function () {
		this.instance = JSON.parse( JSON.stringify( this.value || {} ) );
	},
	watch: {
		instance( newResponse ) {
			this.$emit( 'input', newResponse );
		},
	},
	methods: {
		label: attr => label( attr ),
		help: attr => help( attr ),
	},

}
</script>