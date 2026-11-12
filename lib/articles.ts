interface BaseArticleType {
  id          : number;
  date        : string;
  title       : string;
  description : string;
  image       : string;
}

interface OutsourceArticleType extends BaseArticleType {
  type: 'outsource';
  link: string;
}

export type ArticleType = BaseArticleType | OutsourceArticleType;

const articles: ArticleType[] = [
  {
    id          : 0,
    date        : '11.11.2026',
    title       : 'На ГТРК Алания вышел выпуск, посвящённый ФПМИ «Во славу Осетии»',
    description : 'Фонд поддержки молодежных инициатив «Во славу Осетии» появился в республике. О его целях и задачах, а также о работе молодежного парламента РСО-А поговорили в утренней программе с заместителем председателя Иналом Болиевым.',
    image       : '/images/articles/article1.png',
    type        : 'outsource',
    link        : 'https://dzen.ru/a/aoLRGwxpEg9wSO8h',
  },
];

export default articles;