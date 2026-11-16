<template>
  <div class="article-page">
    <div class="container">
      <div class="article-page__box">
        <div class="article__top-side">
          <a href="/">← Назад</a>
          <div class="article__date">
            <IconsCalendar />
            {{ articleData.date }}
          </div>
        </div>
        <h1>{{ articleData.title }}</h1>
        <div class="article__content" v-html="articleData.content" />
      </div>
    </div>
    <LayoutFooter />
  </div>
</template>
<script setup lang="ts">
import articles, { type SelfArticleType } from "~/lib/articles";

const route = useRoute();

const articleData: ComputedRef<SelfArticleType> = computed(() => {
  const id = Number(route.params.id);

  return articles[id]! as SelfArticleType;
});

if (!articleData.value) {
  throw createError({
    statusCode    : 404,
    statusMessage : "Статья не найдена",
  });
}

useSeoMeta({
  title         : articleData.value.title,
  ogTitle       : articleData.value.title,
  description   : articleData.value.description,
  ogDescription : articleData.value.description,
});
</script>
<style lang="scss">
.article-page__box {
  min-height: 92vh;
  padding-block: 52px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  h1 {
    margin-top: 16px;
    color: $mainColor;
    font-weight: 900;
    font-size: 32px;
  }

  @media (max-width: 1024px) {
    padding-block: 32px;
    h1 {
      font-size: clamp(1.125rem, 0.5815rem + 2.1739vw, 1.625rem);
    }
  }
}

.article__top-side {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .article__date {
    font-size: 14px;
    font-weight: 500;
    display: flex;
    align-items: center;
    gap: 6px;
    opacity: 0.4;

    svg {
      width: 14px;
      height: auto;
    }
  }

  a {
    color: $mainColor;
    font-weight: 500;
    font-size: 20px;
  }

  @media (max-width: 1024px) {
    a {
      font-size: 16px;
    }

    .article__date {
      font-size: 12px;
    }
  }
}

.article__content {
  margin-top: 8px;

  .images-content {
    width: 80%;
    margin-top: 32px;
    display: flex;
    gap: 20px;

    img {
      width: 100%;
      flex: 1;
      height: auto;
    }
  }

  .tags {
    margin-top: 20px;
    display: flex;
    flex-wrap: wrap;
    gap: 2px 8px;

    li {
      font-size: 18px;
      font-weight: 500;
      color: $mainColor;
    }
  }

  p {
    font-size: 18px;
    margin-top: 16px;
  }

  @media (max-width: 1024px) {
    margin-top: 0;

    .tags {
      li {
        font-size: clamp(0.75rem, 0.4783rem + 1.087vw, 1rem);
      }
    }

    p {
      font-size: clamp(0.75rem, 0.4783rem + 1.087vw, 1rem);
      margin-top: 12px;
    }
  }

  @media (max-width: 768px) {
    .images-content {
      width: 60%;
      flex-wrap: wrap;

      img {
        width: 100%;
        min-width: 280px;
        flex: unset;
      }
    }
  }
}
</style>