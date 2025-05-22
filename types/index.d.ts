import { App } from 'vue'

declare module 'vue-carousel-card'

export declare interface ICarouselCard {
  setActiveItem: (index: number | string) => void
  prev: () => void
  next: () => void
}

export declare interface ICarouselCardItem {
}
export interface Projeto {
  id: number;
  type: string;
  name: string;
  path: string;
  img: string;
  cor: string;
  image1: string;
  prints: string[];
  descricao: string;
  link: string;
  cores: string[];
  logos: string[];
  tecnologias: string[];
  coresTecnologias: string[];
}
declare const _default: {
  CarouselCard: ICarouselCard
  install: (app: App) => any
}

declare const CarouselCard: ICarouselCard

declare const CarouselCardItem: ICarouselCardItem

export {
  CarouselCard,
  CarouselCardItem
}

export default _default
