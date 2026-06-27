<template>
	<div class="portfolio container">
		<div>
			<h2>Наши проекты</h2>
			<div class="portfolio__content">
				<span>Здесь пока ничего нет</span>
			</div>
		</div>
	</div>
</template>
<script setup>

</script>
<style lang='scss'>
.portfolio {
	padding-top: 32px;
}

.portfolio__content {
	margin-top: 120px;
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	gap: 24px;

	span {
		grid-column: 2 / 4;
	}
}
</style>