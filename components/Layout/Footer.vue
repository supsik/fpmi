<template>
	<footer class="footer container">
		<div class="footer-wr">
			<div class="footer__top">
				<IconsLogo />
				<h2>
					Фонд поддержки молодёжных инициатив
					<span>«Во славу Осетии»</span>
				</h2>
			</div>
			<div class="footer__content">
				<nav>
					<h3>Навигация</h3>
					<ul>
						<li>
							<a href="#about-us">Чем мы занимаемся</a>
						</li>
						<li>
							<a href="#why-us">Почему мы</a>
						</li>
						<li>
							<a href="#faq">Частые вопросы</a>
						</li>
					</ul>
				</nav>
				<div class="footer__soc-section">
					<h3>Напишите нам</h3>
					<ul>
						<li>
							<a href="" aria-label="Наш вк канал">
								<IconsVK />
							</a>
						</li>
						<li>
							<a href="" aria-label="Наш телеграм канал">
								<IconsTelegram />
							</a>
						</li>
					</ul>
				</div>
			</div>
			<div class="footer__bottom">
				<p>2026 ФПМИ «Во славу Осетии» </p>
			</div>
		</div>
	</footer>
</template>
<script setup>

</script>
<style lang='scss'>
.footer {
	background-image: linear-gradient(#1F2C60, #111836);
}

.footer-wr {
	padding-top: 42px;
	display: flex;
	color: #FFF;
}

.footer__top {
	display: flex;
	align-items: center;
	gap: 20px;

	h2 {
		font-size: clamp(0.875rem, 0.7007rem + 0.7538vw, 1.0625rem);
		font-weight: 500;
		text-align: center;
		color: #FFF;
		text-transform: uppercase;
		margin-top: 18px;
	}

	span {
		display: block;
		font-size: clamp(1.875rem, 1.4102rem + 2.0101vw, 2.375rem);
		font-weight: 700;
	}

	svg {
		width: 120px;
		min-width: 120px;
		height: auto;
	}

	@media (max-width: 768px) {
		flex-direction: column;

		svg {
			width: 30%;
		}
	}
}

.footer__content {
	margin-top: 52px;
	display: grid;
	grid-template-columns: repeat(2, auto);
	justify-content: flex-start;
	gap: 180px;

	h3 {
		font-size: 24px;
		font-weight: 500;
	}

	nav > ul {
		margin-top: 24px;
		display: flex;
		flex-direction: column;
		gap: 12px;
		font-size: 20px;
		font-weight: 400;

		li {
			opacity: .5;
			transition: .3s;

			&:hover {
				opacity: 1;
			}
		}
	}

	@media (max-width: 768px) {
		grid-template-columns: 1fr;
		gap: 42px;
	}
}

.footer__soc-section {
	ul {
		margin-top: 24px;
		display: flex;
		gap: 16px;
	}

	li {
		color: #0A0F1F;
		transition: .3s;

		&:hover {
			color: #FFF;
		}
	}
}

.footer__bottom {
	margin-top: 64px;
	display: flex;
	padding-block: 18px;
	border-top: 1px solid #26336B;
	align-items: center;
	color: #26336B;
	font-weight: 500;
}
</style>