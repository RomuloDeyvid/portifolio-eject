<template>
  <RouterLink :to="`/projetos/${id}`">
    <div v-show="ready" :style="itemStyle" :class="{
      'is-active': active,
      'carousel-card-item-card': type === 'card',
      'is-in-stage': inStage,
      'is-hover': hover,
      'is-animating': animating
    }" class="carousel-card-item" @click="handleItemClick" id="clase-teste">
      <div v-if="type === 'card'" v-show="!active" class="carousel-card-mask"></div>
      <slot></slot>
    </div>

  </RouterLink>

</template>

<script lang="ts">
import { computed, defineComponent, getCurrentInstance, inject, onMounted, onUnmounted, ref } from 'vue'
import type { injectCarouselCardScope, ICarouselCardItemProps, CarouselCardItem } from './carousel-card';

const CARD_SCALE = 0.83
export default defineComponent({
  name: 'CarouselCardItem',
  props: {
    id: {
      type: [String, Number],
      required: true
    },
    name: {
      type: String,
      default: ''
    },
    label: {
      type: [String, Number],
      default: ''
    },
  },
  setup(props: ICarouselCardItemProps) {
    const instance = getCurrentInstance()
    const hover = ref(false)
    const translate = ref(0)
    const scale = ref(1)
    const active = ref(false)
    const ready = ref(false)
    const inStage = ref(false)
    const animating = ref(false)
    const carouselCardInject = inject('injectCarouselCardScope') as injectCarouselCardScope

    const parentDirection = computed(() => carouselCardInject.direction)
    const itemStyle = computed(() => parentDirection.value === 'vertical'
      ? {
        msTransform: `translateY(${translate.value}px) translateX(-50%) scale(${scale.value})`,
        webkitTransform: `translateY(${translate.value}px) translateX(-50%) scale(${scale.value})`,
        transform: `translateY(${translate.value}px) translateX(-50%) scale(${scale.value})`,
        left: '50%'
      }
      : {
        msTransform: `translateX(${translate.value}px) translateY(-50%) scale(${scale.value})`,
        webkitTransform: `translateX(${translate.value}px) translateY(-50%) scale(${scale.value})`,
        transform: `translateX(${translate.value}px) translateY(-50%) scale(${scale.value})`,
        top: '50%'
      }
    )

    const processIndex = (index: number, activeIndex: number, length: number) => {
      if (activeIndex === 0 && index === length - 1) {
        return -1
      } else if (activeIndex === length - 1 && index === 0) {
        return length
      } else if (index < activeIndex - 1 && activeIndex - index >= length / 2) {
        return length + 1
      } else if (index > activeIndex + 1 && index - activeIndex >= length / 2) {
        return -2
      }
      return index
    }
    const calculateTranslate = (index: number, activeIndex: number) => {
      const parentWidth = carouselCardInject.offsetWidth.value
      if (inStage.value) {
        return parentWidth * ((2 - CARD_SCALE) * (index - activeIndex) + 1) / 4
      } else if (index < activeIndex) {
        return -(1 + CARD_SCALE) * parentWidth / 4
      } else {
        return (3 + CARD_SCALE) * parentWidth / 4
      }
    }
    const calcTranslate = (index: number, activeIndex: number, isVertical: boolean) => {
      const distance = carouselCardInject[isVertical ? 'offsetHeight' : 'offsetWidth'].value
      return distance * (index - activeIndex)
    }
    const translateItem = (index: number, activeIndex: number, oldIndex: number | unknown) => {
      const length = carouselCardInject.items.value.length
      const parentType = carouselCardInject.type
      if (parentType !== 'card' && oldIndex !== undefined) {
        animating.value = index === activeIndex || index === oldIndex
      }
      if (index !== activeIndex && length > 2) {
        index = processIndex(index, activeIndex, length)
      }
      if (parentType === 'card') {
        if (parentDirection.value === 'vertical') {
          console.warn('[Vue-Carousel-Card Warn][Carousel-card] vertical direction is not supported in card mode')
        }
        inStage.value = Math.round(Math.abs(index - activeIndex)) <= 1
        active.value = index === activeIndex
        translate.value = calculateTranslate(index, activeIndex)
        scale.value = active.value ? 1 : CARD_SCALE
      } else {
        active.value = index === activeIndex
        translate.value = calcTranslate(index, activeIndex, parentDirection.value === 'vertical')
      }
      ready.value = true
    }
    const handleItemClick = () => {
      if (carouselCardInject && carouselCardInject.type === 'card') {
        if (instance) {
          const index = carouselCardInject.items.value.map(item => item.uid).indexOf(instance.uid)
          carouselCardInject.setActiveItem(index)
        }
      }
    }
    const paginaDeProjetos = {
      path: `/projetos/${props.id}`,
      name: 'pagina-de-projetos',

    }

    onMounted(() => {
      if (carouselCardInject.addItem && instance) {
        carouselCardInject.addItem({
          uid: instance.uid,
          ...props,
          hover,
          translate,
          scale,
          active,
          ready,
          inStage,
          animating,
          translateItem
        } as CarouselCardItem)
      }
    })
    onUnmounted(() => {
      if (carouselCardInject.removeItem && instance) {
        carouselCardInject.removeItem(instance.uid)
      }
    })

    return {
      type: carouselCardInject.type,
      ready,
      active,
      inStage,
      hover,
      animating,
      itemStyle,
      translateItem,
      handleItemClick,
      paginaDeProjetos
    }
  }
})
</script>
<style scoped>
.is-active {
  width: 45rem;
  left: -2rem;
}

#clase-teste {
  width: 70%;
  left: -2rem;
}

@media (max-width: 320px) {
  #clase-teste {
    height: 10rem;
    left: -1.5rem;
  }
}

@media (min-width: 321px) and (max-width: 360px) {
  #clase-teste {
    height: 12rem;
    left: -2rem;
  }
}

@media (min-width: 361px) and (max-width: 480px) {
  #clase-teste {
    height: 12rem;
    left: -3rem;
  }
}

@media (min-width: 481px) and (max-width: 599px) {
  #clase-teste {
    height: 12rem;
    left: -3.5rem;
  }
}

@media (min-width: 600px) and (max-width: 699px) {
  #clase-teste {
    height: 14rem;
    left: -3rem;
  }
}

@media (min-width: 700px) and (max-width: 799px) {
  #clase-teste {
    height: 16rem;
    left: -3.5rem;
  }
}

@media (min-width: 800px) and (max-width: 899px) {
  #clase-teste {
    height: 18rem;
    left: -4rem;
  }
}

@media (min-width: 900px) and (max-width: 999px) {
  #clase-teste {
    height: 19rem;
    left: -4.5rem;
  }
}

@media (min-width: 1000px) and (max-width: 1099px) {
  #clase-teste {
    height: 20rem;
    left: -4rem;
  }
}

@media (min-width: 1100px) and (max-width: 1199px) {
  #clase-teste {
    height: 21rem;
    left: -4.5rem;
  }
}

@media (min-width: 1200px) and (max-width: 1299px) {
  #clase-teste {
    height: 22rem;
    left: -5rem;
  }
}

@media (min-width: 1300px) and (max-width: 1399px) {
  #clase-teste {
    height: 23rem;
    left: -5.5rem;
  }
}

@media (min-width: 1400px) and (max-width: 1499px) {
  #clase-teste {
    height: 22rem;
    left: -6.5rem;
  }
}

@media (min-width: 1500px) and (max-width: 1599px) {
  #clase-teste {
    height: 23rem;
    left: -7rem;
  }
}

@media (min-width: 1600px) and (max-width: 1699px) {
  #clase-teste {
    left: -7.5rem;
    height: 25rem;
  }
}

@media (min-width: 1700px) and (max-width: 1800px) {
  #clase-teste {
    left: -8rem;
    height: 26rem;
  }
}

@media (min-width: 1800px) and (max-width: 1920px) {
  #clase-teste {
    width: 65%;
    left: -6rem;
    height: 26rem;
  }
}

@media (min-width: 1921px) and (max-width: 2160px) {
  #clase-teste {
    width: 65%;
    left: -6rem;
    height: 27rem;
  }
}

@media (min-width: 2161px) and (max-width: 2304px) {
  #clase-teste {
    width: 65%;
    left: -7rem;
    height: 29rem;
  }
}

@media (min-width: 2305px) and (max-width: 2560px) {
  #clase-teste {
    width: 65%;
    left: -7.5rem;
    height: 31rem;
  }
}

@media (min-width: 2561px) and (max-width: 2880px) {
  #clase-teste {
    width: 65%;
    left: -7.5rem;
    height: 35rem;
  }
}

@media (min-width: 2881px) and (max-width: 3440px) {
  #clase-teste {
    width: 65%;
    left: -8rem;
    height: 38rem;
  }
}

@media (min-width: 3441px) and (max-width: 3840px) {
  #clase-teste {
    width: 65%;
    left: -8.5rem;
    height: 40rem;
  }
}

@media (min-width: 3841px) {
  #clase-teste {
    width: 60%;
    left: -9rem;
    height: 45rem;
  }
}
</style>