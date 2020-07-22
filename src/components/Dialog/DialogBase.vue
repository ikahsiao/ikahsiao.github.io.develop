<template>
	<div
		class="dialog-mask"
		@click.self="clickOutside"
	>
		<section
			ref="dialog"
			:style="style"
			role="dialog"
			aria-modal="true"
			class="dialog-base"
		>
			<button
				:class="{ 'animated': animationStopped }"
				class="close"
				@click="close"
			>
				<i
					class="fa fa-close"
					aria-hidden="true"
				/>
			</button>

			<slot />
		</section>
	</div>
</template>

<script>

export default {
	name: 'DialogBase',
	props: {
		type: {
			type: String,
			required: true,
		},
		title: {
			type: String,
			default: '',
		},
		// TODO: Handle auto width if needed
		width: {
			type: String,
			default: '500',
		},
		// TODO: Handle auto height if needed
		height: {
			type: String,
			default: '500',
		},
		clickToClose: {
			type: Boolean,
			default: true,
		},
		fitHeight: {
			type: Boolean,
			default: false,
		},
	},
	data() {
		return {
			style: {
				width: '600px',
				height: '600px',
				top: '50%',
				left: '50%',
				transform: 'translate(-50%, -50%)',
			},
			animationStopped: false,
		};
	},
	mounted() {
		if (this.fitHeight) {
			if (window.innerWidth < 641) {
				setTimeout(() => {
					this.$refs.dialog.style.width = `${window.innerWidth}px`;
					this.$refs.dialog.style.height = `${window.innerHeight}px`;
				}, 100);
			} else {
				setTimeout(() => {
					this.$refs.dialog.style.width = `${this.width}px`;
				}, 500);

				setTimeout(() => {
					this.$refs.dialog.style.height = `${window.innerHeight - 100}px`;
				}, 750);
			}
			this.animationStopped = true;
		}

		// Focus first focusable element
		this.$refs.dialog.querySelector('.close').focus();
	},
	beforeDestroy() {
		window.removeEventListener('resize', this.setPosition);
	},
	methods: {
		/**
		 * Handle click outside of dialog
		 */
		clickOutside() {
			if (this.clickToClose) {
				this.close();
			}
		},

		/**
		 * Close dialog
		 */
		close() {
			this.$dialog.close(this.type);
			this.$emit('close');
		},
	},
};
</script>

