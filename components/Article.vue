<template>
  <section class="articles container">
    <div>
      <h2>Статьи</h2>
      <Swiper class="articles__content" v-bind="swiperOptions">
        <SwiperSlide v-for="article in articles" :key="article.id">
          <a :href="article.link" target="_blank">
            <img :src="article.image" alt="">
            <h2>{{ article.title }}</h2>
            <p class="article__short-description">{{ shortDescription(article.description) }}</p>
            <div class="article__bottom-side">
              <p>Открыть статью  →</p>
              <div>
                <IconsCalendar />
                {{ article.date }}
              </div>
            </div>
          </a>
        </SwiperSlide>
      </Swiper>
    </div>
  </section>
</template>
<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import articles from '~/lib/articles';
import 'swiper/css';

const swiperOptions = {
  slidesPerView : 'auto',
  spaceBetween  : 42,
};

const shortDescription = desc => {
  return desc.length < 120 ? desc : desc.slice(0, 120) + '...';
};
</script>
<style lang="scss">
.articles {
  padding-top: 52px;
}

.articles__content {
  width: 100%;
  margin-top: 42px;

  .swiper-wrapper {
    width: 100%;

    .swiper-slide a {
      width: 400px;
      display: block;
      padding: 16px 16px 20px;
      background-color: #EFEFEF;
      border-radius: 24px;

      .article__bottom-side {
        display: flex;
        justify-content: space-between;
        margin-top: 20px;

        p {
          font-size: 18px;
          font-weight: 500;
          color: $mainColor;
        }

        div {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 13px;
          opacity: .4;
        }
      }

      .article__short-description {
        margin-top: 8px;
        color: #0000009c;
      }

      img {
        width: 100%;
        height: 260px;
        object-fit: cover;
        object-position: center;
        border-radius: 16px;
      }

      h2 {
        color: $mainColor;
        margin-top: 10px;
        font-size: 22px;
        font-weight: 500;
      }
      
      @media (max-width: 1024px) {
        width: 320px;
        padding: 12px 12px 16px;

        .article__short-description {
          font-size: 13px;
        }

        .article__bottom-side {
          p {
            font-size: 16px;
          }
        }

        img {
          height: 200px;
        }

        h2 {
          font-size: 18px;
          margin-top: 6px;
        }
      }

      @media (max-width: 768px) {
        width: 40%;
        min-width: 220px;
        border-radius: 14px;
        padding: 10px 10px 12px;

        .article__short-description {
          font-size: clamp(0.625rem, 0.3987rem + 0.8621vw, 0.8125rem);
        }

        .article__bottom-side {
          p {
            font-size: clamp(0.75rem, 0.4483rem + 1.1494vw, 1rem);
          }

          div {
            font-size: 10px;

            svg {
              width: 10px;
            }
          }
        }

        img {
          height: 25%;
          border-radius: 10px;
        }

        h2 {
          font-size: clamp(0.9375rem, 0.7112rem + 0.8621vw, 1.125rem);
        }
      }
    }
  }

  @media (max-width: 1024px) {
    margin-top: 32px;
  }
}
</style>