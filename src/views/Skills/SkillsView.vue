<template>
	<div class="section fp-auto-height-responsive">
		<div class="section-container">
			<h1>Skills</h1>
			<div class="skill-list-container">
				<template v-for="(skill, index) in skillList">
					<div
						:key="index"
						class="df fd-column wp-30"
						:class="{ 'mr-20': index < skillList.length }"
					>
						<h3>{{ skill.title }}</h3>
						<ul class="skill-list">
							<li
								v-for="item in skill.skills"
								:key="item"
								class="mb-10 fz-24"
							>
								{{ item }}
							</li>
						</ul>
					</div>
				</template>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'SkillView',
	data() {
		return {
			skillList: [
				{
					title: 'HTML / CSS',
					skills: [
						'HTML5 / CSS3 / SCSS',
						'WAI-ARIA',
						'Responsive web design',
						'Cross-browser compatibility',
						'UI / UX',
					],
				},
				{
					title: 'Javascript',
					skills: [
						'ES6 / Vue',
						'Rest API',
						'gojs / echarts / mapbox',
						'Unit test',
					],
				},
				{
					title: 'Tools',
					skills: [
						'VS Code / Adobe PS',
						'Git / Git flow / CI / CD / Scrum / Jira',
						'Postman / Swagger',
						'NPM / webpack',
						'Docker',
					],
				},
			],
		};
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

.skill-list-container {
	display: flex;
	font-size: rem(24px);

	@media(max-width: rem(640px)) {
		flex-direction: column;
		font-size: rem(20px);
	}
}
.skill-list {
	padding-left: rem(40px);
	list-style: disc;
}

.wp-30 {
	@media(max-width: rem(640px)) {
		width: 100%;
	}
}
</style>
