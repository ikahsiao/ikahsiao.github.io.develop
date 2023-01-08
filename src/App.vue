<template>
	<div>
		<div class="bg" />
		<header class="header">
			<a
				class="logo"
				href="#about"
			>
				<img
					src="@/assets/images/logo.png"
					alt="ika hsiao portfolio"
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
					<li class="fz-20 mb-20">
						<a href="#about">about</a>
					</li>
					<li class="fz-20 mb-20">
						<a href="#skills">skills</a>
					</li>
					<li class="fz-20 mb-20">
						<a href="#works">works</a>
					</li>
				</ul>
			</nav>
		</header>

		<AboutView id="about" />
		<SkillsView id="skills" />
		<WorksView id="works" />

		<DialogContainer
			v-for="dialog in dialogs"
			:key="dialog.type"
			:type="dialog.type"
			:config="dialog.config"
		/>
	</div>
</template>

<script>
import { mapState } from 'vuex';
import DialogContainer from 'components/Dialog/DialogContainer';
import AboutView from 'views/About/AboutView';
import SkillsView from 'views/Skills/SkillsView';
import WorksView from 'views/Works/WorksView';

export default {
	name: 'App',
	components: {
		AboutView,
		DialogContainer,
		SkillsView,
		WorksView,
	},
	data() {
		return {
			menuActive: false,
		};
	},
	computed: {
		...mapState('Dialog', ['dialogs']),
	},
	created() {
		this.body = document.querySelector('body');
	},
	methods: {
		toggleMenu() {
			this.menuActive = !this.menuActive;

			if (this.menuActive) {
				this.body.classList.add('ov-hidden');
			} else {
				this.body.classList.remove('ov-hidden');
			}
		},
	},
};
</script>

<style lang="scss">
html {
	scroll-behavior: smooth;
}

@media screen and (prefers-reduced-motion: reduce) {
	html {
		scroll-behavior: auto;
	}
}

.header {
	position: sticky;
	left: 0;
	top: 0;
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 100%;
	padding: rem(40px 25px);
	z-index: 2;


	@media(max-width: rem(640px)) {
		padding: rem(20px 40px);
		position: fixed;
		background: linear-gradient(
			180deg,
			rgba(244, 244, 244, 1) 0%,
			rgba(244, 244, 244, 0.9) 50%,
			rgba(244, 244, 244, 0.8) 80%,
			rgba(244, 244, 244, 0)
			100%);
	}
}
.section {
	scroll-behavior: smooth;
	position: relative;
	z-index: 1;
  padding: rem(140px 80px 80px);


	@media(max-width: rem(640px)) {
		padding: rem(140px 40px 40px);
		height: auto !important;
		min-height: calc(100vh - 140px);

		.fp-tableCell {
			height: auto !important;
			min-height: calc(100vh - 140px);
		}
	}
}

.logo {
  position: relative;
  transition: 0.3s;

  &:hover {
    transform: rotate(10deg);
  }
}

.menu-button {
  position: relative;
  z-index: 5;
	outline: none;
	padding: 0;

	&.is-active {
		.hamburger-inner {
			background: #fff;

			&::before, &::after {
				background: #fff;
			}
		}
	}
}

.menu {
  position: absolute;

  ul {
    position: fixed;
    left: 0;
    top: 0;
    z-index: 4;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
		padding-top: rem(150px);
    background: rgba(0, 0, 0, 0.6);
  }

  li {
    font-size: 30px;
    margin: 20px 0;
    text-transform: capitalize;
  }

	a {
		color: #fff;
		text-decoration: none;
		font-size: rem(48px);
	}
}

</style>
