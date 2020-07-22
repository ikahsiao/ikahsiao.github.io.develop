<template>
	<component
		:is="type"
		:type="type"
		v-bind="{...config}"
		@close="$emit('close')"
	/>
</template>

<script>
import WorkDetailDialog from './WorkDetailDialog';

export default {
	components: {
		WorkDetailDialog,
	},
	props: {
		type: {
			type: String,
			required: true,
		},
		config: {
			type: Object,
			default: () => ({}),
		},
	},
};
</script>
