<template>
	<div class="section">
		<div class="section-container">
			<h1>Works</h1>
			<div class="df flex-wrap">
				<div
					v-for="(work, index) in workList"
					:key="index"
					class="item"
					@click="showDetail(work)"
				>
					<img
						:src="work.thumb"
						:alt="work.title"
						class="item-image"
					>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import SdWanThumb from '@/assets/images/work/sd-wan-thumb.jpg';
import SdWanImage from '@/assets/images/work/sd-wan-image.jpg';
import WakeOnWanThumb from '@/assets/images/work/wake-on-wan-thumb.jpg';
import WakeOnWanImage from '@/assets/images/work/wake-on-wan-image.jpg';
import CollegeWebsiteThumb1 from '@/assets/images/work/site-01-thumb.jpg';
import CollegeWebsiteImage1 from '@/assets/images/work/site-01-image.jpg';
import CollegeWebsiteThumb2 from '@/assets/images/work/site-02-thumb.jpg';
import CollegeWebsiteImage2 from '@/assets/images/work/site-02-image.jpg';
import CollegeWebsiteThumb3 from '@/assets/images/work/site-03-thumb.jpg';
import CollegeWebsiteImage3 from '@/assets/images/work/site-03-image.jpg';
import CollegeWebsiteThumb5 from '@/assets/images/work/site-05-thumb.jpg';
import CollegeWebsiteImage5 from '@/assets/images/work/site-05-image.jpg';
import ManuScriptThumb1 from '@/assets/images/work/manu-01-thumb.jpg';
import ManuScriptImage1 from '@/assets/images/work/manu-01-image.jpg';
import ManuScriptThumb2 from '@/assets/images/work/manu-02-thumb.jpg';
import ManuScriptImage2 from '@/assets/images/work/manu-02-image.jpg';
import ManuScriptThumb3 from '@/assets/images/work/manu-03-thumb.jpg';
import ManuScriptImage3 from '@/assets/images/work/manu-03-image.jpg';
import TemplateThumb1 from '@/assets/images/work/template-01-thumb.jpg';
import TemplateImage1 from '@/assets/images/work/template-01-image.jpg';
import TemplateThumb2 from '@/assets/images/work/template-02-thumb.jpg';
import TemplateImage2 from '@/assets/images/work/template-02-image.jpg';
import TemplateThumb3 from '@/assets/images/work/template-03-thumb.jpg';
import TemplateImage3 from '@/assets/images/work/template-03-image.jpg';
import TemplateThumb4 from '@/assets/images/work/template-04-thumb.jpg';
import TemplateImage4 from '@/assets/images/work/template-04-image.jpg';

export default {
	name: 'SkillView',
	data() {
		return {
			workList: [
				{
					title: 'SD-WAN cloud service',
					description: 'Front-end develop',
					image: SdWanImage,
					thumb: SdWanThumb,
					link: 'https://www.qnap.com/en-us/software/quwan',
				},
				{
					title: 'Wake on WAN device',
					description: 'Front-end develop',
					image: WakeOnWanImage,
					thumb: WakeOnWanThumb,
					link: 'https://www.qnap.com/en-us/product/qwu-100',
				},
				{
					title: 'College website',
					description: 'Design, CSS',
					image: CollegeWebsiteImage1,
					thumb: CollegeWebsiteThumb1,
					link: 'http://www.tmu.edu.tw',
				},
				{
					title: 'College website',
					description: 'Design, CSS',
					image: CollegeWebsiteImage2,
					thumb: CollegeWebsiteThumb2,
				},
				{
					title: 'College website',
					description: 'Design, CSS',
					image: CollegeWebsiteImage3,
					thumb: CollegeWebsiteThumb3,
					link: 'https://ce.ntcu.edu.tw/',
				},
				{
					title: 'College website',
					description: 'Design, CSS',
					image: CollegeWebsiteImage5,
					thumb: CollegeWebsiteThumb5,
					link: 'http://biology.thu.edu.tw/',
				},
				{
					title: 'Website manuscript',
					description: 'Design',
					image: ManuScriptImage1,
					thumb: ManuScriptThumb1,
				},
				{
					title: 'Website manuscript',
					description: 'Design',
					image: ManuScriptImage2,
					thumb: ManuScriptThumb2,
				},
				{
					title: 'Website manuscript',
					description: 'Design',
					image: ManuScriptImage3,
					thumb: ManuScriptThumb3,
				},
				{
					title: 'Website template',
					description: 'Design',
					image: TemplateImage1,
					thumb: TemplateThumb1,
				},
				{
					title: 'Website template',
					description: 'Design',
					image: TemplateImage2,
					thumb: TemplateThumb2,
				},
				{
					title: 'Website template',
					description: 'Design',
					image: TemplateImage3,
					thumb: TemplateThumb3,
				},
				{
					title: 'Website template',
					description: 'Design',
					image: TemplateImage4,
					thumb: TemplateThumb4,
				},
			],
			sliderOptions: {
				nav: false,
				controls: false,
				loop: false,
			},
		};
	},
	methods: {
		showDetail(work) {
			// this.$emit('toggle-dialog');

			this.$dialog.open(
				'WorkDetailDialog',
				{
					title: work.title,
					description: work.description,
					image: work.image,
					link: work.link,
				},
			);
		},
	},
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

.carousel-controls {
	position: relative;
	left: 30px;
	top: -10px;
	display: flex;
	align-items: center;
}

.carousel-prev, .carousel-next {
	background: none;
	border: none;
	font-size: rem(20px);
	cursor: pointer;
	outline: none;
}

.carousel-item {
	padding-right: rem(30px);

	@media(max-width: rem(640px)) {
		padding-right: 0;
	}
}

.carousel-inner-item {
	font-size: rem(24px);
	display: flex;
	flex-direction: column;
	flex: none;
	height: rem(400px);
	background: #fff;
	padding: rem(30px);
	border-radius: rem(10px);
	cursor: pointer;
}

.item {
	width: 23%;
	margin: 0 1% 50px;
	cursor: pointer;
	overflow: hidden;

	.item-image {
		display: block;
		width: 100%;
		height: auto;
		transition: 0.3s;
	}

	&:hover .item-image {
		transform: scale(1.1);
	}
}
</style>
