<template>
	<DialogBase
		id="work-detail-dialog"
		:fit-height="true"
		:width="width"
		:height="height"
		type="WorkDetailDialog"
		@close="$emit('close')"
	>
		<div class="detail-header">
			<h2 class="fz-24 mt-0 mb-10">
				{{ title }}
			</h2>
			<p class="mg-0">
				{{ description }}
			</p>
			<a
				v-if="link"
				rel="noopener"
				target="_blank"
				:href="link"
				class="db"
			>
				{{ link }}
			</a>
		</div>

		<div class="mlr-30 mb-30 ovy-auto">
			<img
				ref="image"
				:src="image"
				:alt="title"
				class="img"
			>
		</div>
	</DialogBase>
</template>

<script>
import DialogBase from './DialogBase';

export default {
	name: 'WorkDetailDialog',
	components: {
		DialogBase,
	},
	props: {
		title: {
			type: String,
			default: 'Work Detail',
		},
		description: {
			type: String,
			default: 'Description',
		},
		image: {
			type: String,
			required: true,
		},
		link: {
			type: String,
			default: null,
		},
	},
	data() {
		return {
			body: null,
		};
	},
	computed: {
		width() {
			return String(window.innerWidth - 80);
		},
		height() {
			return String(window.innerHeight - 80);
		},
	},
	created() {
		this.body = document.querySelector('body');
		this.body.classList.add('ov-hidden');
	},
	beforeDestroy() {
		this.body.classList.remove('ov-hidden');
	},
};
</script>

<style lang="scss" scoped>
.detail-header {
	padding: rem(30px);
	background: #fff;
}

.img {
	display: block;
	width: 100%;
}
</style>
