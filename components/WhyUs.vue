<template>
	<section id="why-us" class="container why-us">
		<div class="why-us__background">
			<IconsLogo type="white" />
		</div>
		<div class="why-us-wr">
			<h2>Почему мы?</h2>
			<ul class="why-us__content">
				<li v-for="item in data" :key="item.title">
					<component :is='item.icon' />
					<h3>{{ item.title }}</h3>
					<p>{{ item.content }}</p>
				</li>
			</ul>
		</div>
	</section>
</template>
<script setup>
import Shield from './Icons/Shield.vue';
import Hands  from './Icons/Hands.vue';
import Door   from './Icons/Door.vue';

const data = [
	{
		icon    : Shield,
		title   : 'Честность',
		content : 'Мы говорим правду о сложностях и не даём пустых обещаний. Доверие — это наш главный капитал, и мы дорожим им.',
	},
	{
		icon    : Door,
		title   : 'Открытость',
		content : 'Все наши двери открыты для молодежи: любой желающий может прийти к нам с идеей, задать вопрос или стать частью команды.',
	},
	{
		icon    : Hands,
		title   : 'Искренняя забота',
		content : 'Мы вкладываем душу в каждый проект, потому что любим Осетию и верим в её молодое поколение.',
	}
];
</script>
<style lang='scss'>
.why-us {
	margin-top: 52px;
	padding-block: 52px 32px;
	background-color: $mainColor;
	position: relative;

	h2 {
		color: #FFF !important;

		&::before,
		&::after {
			background-color: #FFF !important;
		}
	}

	@media (max-width: 768px) {
		margin-top: 32px;
		padding-block: 32px;
	}
}

.why-us__background {
	width: 700px;
	position: absolute;
	z-index: 1;
	left: 50%;
	top: -100px;
	transform: translateX(-50%);
	opacity: .05;

	svg {
		width: 100%;
		height: 100%;
	}

	@media (max-width: 1024px) {
		width: 80%;
		top: 50%;
		opacity: .03;
		transform: translateX(-50%) translateY(-50%);
	}
}

.why-us-wr {
	position: relative;
	z-index: 2;
}

.why-us__content {
	width: 100%;
	margin-top: 2vw;
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: 60px;

	li {
		padding-block: 52px 32px;
		display: flex;
		flex-direction: column;
		align-items: center;
		color: #FFF;

		h3 {
			font-size: clamp(1.5rem, 0.9286rem + 1.1905vw, 2rem);
			margin-top: 20px;
			font-weight: 700;
		}

		p {
			margin-top: 14px;
			text-align: center;
			font-size: clamp(0.875rem, 0.5893rem + 0.5952vw, 1.125rem);
		}

		svg {
			min-width: 60px;
			width: 20%;
			height: auto;
		}
	}

	@media (max-width: 1024px) {
		grid-template-columns: 1fr;
		place-items: center;
		gap: 0;

		li {
			width: 60%;

			h3 {
				font-size: clamp(1.5rem, 0.6866rem + 3.5176vw, 2.375rem);
			}

			p {
				font-size: clamp(1rem, 0.5352rem + 2.0101vw, 1.5rem);
			}

			svg {
				width: 15%;
			}
		}
	}

	@media (max-width: 520px) {
		li {
			width: 100%;
			padding-block: 32px;
		}
	}
}
</style>