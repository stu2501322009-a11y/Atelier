export interface ServiceCard {
  id: string;
  title: string;
  description: string;
  image: string;
  link: string;
}

export const services: ServiceCard[] = [
  {
    id: 'tailor-visit',
    title: 'Шивач на адрес',
    description:
      'Наш експерт ще Ви посети, за да вземе мерки и дрехи директно от дома или офиса Ви в град Пловдив и региона.',
    image:
      'https://images.pexels.com/photos/36356684/pexels-photo-36356684.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    link: '/services#plovdiv',
  },
  {
    id: 'individual-design',
    title: 'Индивидуален дизайн',
    description:
      'Изработка на рокли и облекла за официални събития. Превръщаме мечтаната визия в реалност.',
    image:
      'https://images.pexels.com/photos/8365189/pexels-photo-8365189.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    link: '/individual-design',
  },
  {
    id: 'b2b',
    title: 'Ишлеме (B2B)',
    description:
      'Цялостна реализация на Вашите модни линии. От кройката до готовия продукт.',
    image:
      'https://images.pexels.com/photos/29308434/pexels-photo-29308434.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    link: '/b2b',
  },
  {
    id: 'home-textile',
    title: 'Интериорен текстил',
    description:
      'Професионален шев и корекции на пердета, завеси, покривала и други текстилни изделия.',
    image:
      'https://images.pexels.com/photos/34998225/pexels-photo-34998225.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    link: '/services#home-textile',
  },
];

export interface GallerySlide {
  title: string;
  beforeImage: string;
  afterImage: string;
}

export const gallerySlides: GallerySlide[] = [
  {
    title: 'Вталяване на панталон',
    beforeImage:
      'https://images.pexels.com/photos/47040/meter-tape-measure-measure-gage-47040.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    afterImage:
      'https://images.pexels.com/photos/35238345/pexels-photo-35238345.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    title: 'Вталяване на сако',
    beforeImage:
      'https://images.pexels.com/photos/9302046/pexels-photo-9302046.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    afterImage:
      'https://images.pexels.com/photos/38561617/pexels-photo-38561617.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    title: 'Корекция на дънки',
    beforeImage:
      'https://images.pexels.com/photos/36799021/pexels-photo-36799021.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    afterImage:
      'https://images.pexels.com/photos/14852082/pexels-photo-14852082.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
];

export const heroImage =
  'https://images.pexels.com/photos/15355281/pexels-photo-15355281.jpeg?auto=compress&cs=tinysrgb&h=650&w=940';

export const navLinks = [
  { label: 'Начало', path: '/' },
  { label: 'Услуги', path: '/services' },
  { label: 'Индивидуален Дизайн', path: '/individual-design' },
  { label: 'Ишлеме (B2B)', path: '/b2b' },
  { label: 'Галерия', path: '/gallery' },
  { label: 'Мерки', path: '/how-to-measure' },
  { label: 'За нас', path: '/about' },
  { label: 'Контакти', path: '/contact' },
];
