<template>
	<div class="section">
		<div class="section-container">
			<h1>Hi, I am ika Hsiao</h1>
			<p>
				I am a front-end developer living in Hsinchu and currently working for <span>QNAP</span>.
			</p>
			<p>
				I design and build websites in modern way,
				I love coding and design in clean and clear way.
			</p>
			<p>Thank you for viewing my portfolio!</p>
		</div>
	</div>
</template>

<script>
export default {
	name: 'AboutView',
};
</script>

<style lang="scss" scoped>
h1 {
	margin: rem(0 0 30px -8px);
	font-size: rem(100px);

	@media(max-width: rem(640px)) {
		margin: rem(0 0 20px);
		font-size: rem(40px);
	}
}
h2 {
	margin: rem(0 0 20px -4px);
	font-size: rem(80px);

	@media(max-width: rem(640px)) {
		margin: rem(0 0 20px);
		font-size: rem(36px);
	}
}
p {
	margin: rem(40px 0);
	font-size: rem(40px);
	color: #666;

	span {
		color: #000;
	}

	@media(max-width: rem(640px)) {
		font-size: rem(20px);
	}
}
</style>
