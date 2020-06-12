<template>
	<div class="section">
		<div class="section-container">
			<h2>Hi, I am ika Hsiao.</h2>
			<p>
				I am a web front-end developer living in Hsinchu and currently working for
				<span>QNAP</span>.
			</p>
			<p>
				I build fast, efficient, standards compliant, cross device and cross browser website.
			</p>
			<p>
				I also design web site layout,love clean and simple design, exprience over 300 websites.
			</p>
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
}
h2 {
	margin: rem(0 0 20px -4px);
	font-size: rem(80px);
}
p {
	margin: rem(30px 0);
	font-size: rem(48px);
	color: #666;

	span {
		color: #000;
	}
}
</style>
