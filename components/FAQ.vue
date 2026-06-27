<template>
	<section id="faq" class="faq container">
		<div>
			<h2>Частые вопросы</h2>
			<div class="faq__content">
				<div class="faq__item" v-for="item in data" @click="toggleItem">
					<button class="faq__question">
						<div class="faq__toggle-icon">
							<span />
							<span />
						</div>
						<p>{{ item.question }}</p>
					</button>
					<div class="faq__answer">
						<p>{{ item.answer }}</p>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>
<script setup>
const data = [
	{
		question : 'Кто может участвовать в ваших проектах?',
		answer   : 'Мы открыты для всех жителей Осетии в возрасте от 14 до 35 лет. Это могут быть школьники, студенты, молодые специалисты, творческие коллективы и даже просто ребята с идеей, которые хотят сделать что-то полезное для своей республики. Главное — искреннее желание и любовь к Осетии.',
	},
	{
		question : 'Это бесплатно? Нужно ли платить за участие?',
		answer   : 'Все наши программы, гранты и образовательные мероприятия абсолютно бесплатны для участников. Более того, мы помогаем финансово — предоставляем гранты и ресурсы для реализации лучших проектов. Для нас важно, чтобы деньги не были преградой для талантливой молодежи.',
	},
	{
		question : 'Как подать заявку на участие?',
		answer   : 'Всё просто: напишите нам в Телеграме или Максе. Контакты можно найти в подвале сайта.',
	},
	{
		question : 'Какие проекты вы поддерживаете в первую очередь?',
		answer   : 'Мы рассматриваем любые инициативы во славу Северной Осетии: экологические акции, сохранение культурного наследия и осетинского языка, патриотические мероприятия, социальные стартапы, творческие фестивали и спортивные события. Если ваша идея приносит пользу республике и людям — мы за нее!',
	},
	{
		question : 'Можно ли присоединиться к вам не как участник, а как волонтер или партнер?',
		answer   : 'Конечно! Мы всегда рады активным и неравнодушным людям. Вы можете стать частью нашей команды, помогать в организации мероприятий, делиться своими знаниями или предлагать сотрудничество от компаний и организаций. Вместе мы сильнее!',
	},
	{
		question : 'Как я узнаю о результатах? Где вы публикуете отчеты?',
		answer   : 'Мы ценим доверие и открытость. Все отчеты о проведенных мероприятиях, распределении средств и достигнутых результатах мы регулярно публикуем на нашем сайте и в социальных сетях. Никаких тайн — только честность перед вами и перед республикой.',
	},
]

const toggleItem = e => {
	const targetEl = e.currentTarget;
	targetEl.classList.toggle('active');

	const answerEl = targetEl.querySelector('.faq__answer');

	if (targetEl.classList.contains('active'))
		answerEl.style.minHeight = answerEl.scrollHeight + 24 + 'px';
	else
		answerEl.style.minHeight = 0;
}
</script>
<style lang="scss">
.faq {
	padding-block: 52px;

	@media (max-width: 768px) {
		padding-block: 32px;
	}
}

.faq__content {
	width: 100%;
	margin-top: 32px;

	@media (max-width: 768px) {
		margin-top: 24px;
	}
}

.faq__item {
	&:not(&:last-child) {
		border-bottom: 2px solid rgba($color: $mainColor, $alpha: .4);
	}

	&.active {
		.faq__toggle-icon {
			span:nth-child(2) {
				transform: rotate(0);
			}
		}
	}
}

.faq__question {
	width: 100%;
	padding-block: 20px;
	display: flex;
	align-items: center;
	font-size: 32px;
	font-weight: 900;
	background-color: transparent;
	border: none;
	cursor: pointer;

	p {
		margin-left: 42px;
		color: $mainColor;
		text-align: left;
	}

	@media (max-width: 1024px) {
		font-size: 24px;
		padding-block: 14px;

		p {
			margin-left: 32px;
		}
	}

	@media (max-width: 520px) {
		font-size: 18px;
		padding-block: 12px;

		p {
			margin-left: 24px;
		}
	}
}

.faq__answer {
	max-height: 0;
	min-height: 0;
	padding-inline: 42px;
	font-size: 24px;
	overflow: hidden;
	transition: .3s ease;

	@media (max-width: 1024px) {
		font-size: 18px;
		padding-inline: 32px;
	}

	@media (max-width: 520px) {
		font-size: 14px;
		padding-inline: 24px;
	}
}

.faq__toggle-icon {
	span {
		display: block;
		width: 20px;
		height: 4px;
		background-color: $mainColor;
		position: absolute;
		transition: .3s ease;

		&:nth-child(2) {
			transform: rotate(90deg);
		}

		@media (max-width: 1024px) {
			width: 18px;
			height: 3px;
		}

		@media (max-width: 520px) {
			width: 14px;
			height: 2px;
		}
	}
}
</style>
