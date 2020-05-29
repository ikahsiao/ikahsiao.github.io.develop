<template>
	<div>
		<div class="bg1"></div>
		<header class="pos-a left-0 top-0 df ai-center jc-sb w-max pd-20 zi-lv1">
			<a
				class="logo"
				href="#about"
			>
				<img
					src="@/assets/images/logo.png"
					alt="ika hsiao"
					class="w-40 h-40"
				>
			</a>

			<button
				class="menu-button hamburger hamburger--spin"
				:class="{' is-active': menuActive}"
				type="button"
				@click="toggleMenu"
			>
				<span class="hamburger-box">
					<span class="hamburger-inner" />
				</span>
			</button>

			<nav
				v-if="menuActive"
				class="menu"
			>
				<ul @click="toggleMenu">
					<li
						class="fz-20 mb-20"
						data-menuanchor="about"
					>
						<a href="#about">about</a>
					</li>
					<li
						class="fz-20 mb-20"
						data-menuanchor="skills"
					>
						<a href="#skills">skills</a>
					</li>
					<li
						class="fz-20 mb-20"
						data-menuanchor="works"
					>
						<a href="#works">works</a>
					</li>
				</ul>
			</nav>
		</header>

		<full-page
			id="fullpage"
			ref="fullpage"
			:options="options"
		>
			<AboutView />
			<div class="section">
				Second section ...
			</div>
			<div class="section">
				Third section ...
			</div>
		</full-page>
	</div>
</template>

<script>
import AboutView from 'components/about/AboutView';

export default {
	name: 'App',
	components: {
		AboutView,
	},
	data() {
		return {
			options: {
				anchors: ['about', 'skills', 'works'],
				menu: '.menu',
			},
			menuActive: false,
		};
	},
	methods: {
		toggleMenu() {
			this.menuActive = !this.menuActive;

			this.$refs.fullpage.api.setAllowScrolling(!this.menuActive);
		},
	},
};
</script>

<style lang="scss">
.section {
  padding: 80px;
}

.logo {
  position: relative;
  z-index: 1000;
  transition: 0.3s;

  &:hover {
    transform: rotate(10deg);
  }
}

.menu-button {
  position: relative;
  z-index: 1000;
}

.menu {
  position: absolute;

  ul {
    position: fixed;
    left: 0;
    top: 0;
    z-index: 900;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: rgba(0, 0, 0, 0.4);
  }

  li {
    font-size: 30px;
    margin: 20px 0;
    text-transform: capitalize;
  }
}
</style>
