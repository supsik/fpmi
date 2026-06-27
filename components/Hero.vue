<template>
	<section class="hero">
		<img
			src="/images/hero-bg.webp"
			alt="ФПМИ Во славу Осетии"
			fetchpriority="high"
			loading="eager"
		/>
		<div class="hero__content">
			<div class="hero__logo">
				<IconsLogo />
				<h1>
					Фонд поддержки молодёжных инициатив
					<span>«Во славу Осетии»</span>
				</h1>
			</div>
			<a href="#about-us">Больше о нас&nbsp;&nbsp;&nbsp;→</a>
		</div>
	</section>
</template>
<script setup></script>
<style lang="scss">
.hero {
	width: 100%;
	height: 92vh;
	position: relative;

	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		position: absolute;
		top: 0;
	}

	@media (max-width: 768px) {
		height: 100vh;
	}
}

.hero__content {
	padding-top: 2vw;
	padding-bottom: 4vw;
	height: 100%;	
	display: flex;
	gap: 52px;
	flex-direction: column;
	align-items: center;
	position: relative;
	z-index: 2;
	text-transform: uppercase;

	.hero__logo {
		width: 100%;
		height: 60vh;
		display: flex;
		flex-direction: column;
		align-items: center;

		svg {
			width: 30%;
			height: auto;
			max-width: 640px;
			min-width: 420px;
		}
	}

	h1 {
		margin-top: 32px;
		color: #FFF;
		font-weight: 500;
		font-size: clamp(0.875rem, 0.6426rem + 1.005vw, 1.125rem);
		text-align: center;

		span {
			display: block;
			font-size: clamp(2rem, 1.5352rem + 2.0101vw, 2.5rem);
			font-weight: 700;
			margin-top: 8px;
		}
	}

	a {
		width: 320px;
		min-height: 56px;
		border-radius: 50px;
		display: grid;
		place-items: center;
		font-size: 22px;
		font-weight: 700;
		color: $mainColor;
		margin-top: auto;
		background-color: #FFF;
	}

	@media (max-width: 768px) {
		padding-bottom: 108px;
		justify-content: center;

		.hero__logo svg {
			width: 70%;
			min-width: unset;
		}

		a {
			position: absolute;
			bottom: 52px;
		}
	}
}
</style>
