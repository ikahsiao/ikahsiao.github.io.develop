<template>
	<div class="section">
		<div class="section-container">
			<h1>Hi, I am ika.</h1>
			<p class="fz-20">
				I am a front-end developer living in Hsinchu, worked for QNAP and RulingDigital.
				I have vair of experience in the web site design and web development
			</p>
			<p>
				In development field, I build efficient, standards compliant,
				cross device and cross browser web site.
			</p>
			<p>
				In design field, I love clean and simple but also with a passion for the details.
			</p>
			<p>
				If you are interested in me, please feel free to contact me at
				<a href="mailto:ika-design@outlook.com">here</a>
			</p>
			<p>
				Thank you for reading my portfolio.
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
	font-size: rem(30px);
	color: #666;

	span {
		color: #000;
	}

	@media(max-width: rem(640px)) {
		font-size: rem(20px);
	}
}
</style>
