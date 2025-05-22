<template>
    <main class="w-full flex items-center justify-center">
        <!-- Slider wrapper -->
        <div class="w-full max-w-md relative">

            <!-- Single Slider -->
            <div v-show="sliderIndex === index" v-for="(car, index) in sliders" :key="index" class="container-carrosel">
                <img :src="car.path" alt="car" class="w-full h-56 object-cover rounded-lg shadow">
                <p class="text-center mt-3 text-gray-200 text-xl uppercase nome-projeto">
                    {{ car.name }}
                </p>
            </div>
            <!-- Single Slider end -->

            <!-- Arrows prev -->
            <button @click="prevSlider"
                class="w-10 h-10 rounded-full hover:shadow-lg active:scale-90 transition absolute left-2 top-24 text-gray-700 flex items-center justify-center  botoes-carrosel">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
            </button>
            <!-- Arrows prev end -->

            <!-- Arrows next -->
            <button @click="nextSlider"
                class="w-10 h-10 rounded-full hover:shadow-lg active:scale-90 transition absolute right-2 top-24 text-gray-700 flex items-center justify-center  botoes-carrosel">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
            </button>
            <!-- Arrows next end -->

        </div>
    </main>
</template>

<script setup>
import { ref } from "vue";

const sliders = ref([
    {
        id: 1,
        name: 'ADM Consult',
        path: '/imagens/adm-consult.png',
        type: 'site',
    },
    {
        id: 2,
        name: 'Observatório de desigualdades',
        path: '/imagens/ism.png',
        type: 'site',
    },
    {
        id: 3,
        name: 'Georisco',
        path: '/imagens/georisco.png',
        type: 'site',
    },
    {
        id: 4,
        name: 'Lumus',
        path: '/imagens/lumus.png',
        type: 'site',
    }
])

const sliderIndex = ref(0)

function prevSlider() {
    if (sliderIndex.value) {
        sliderIndex.value--
    } else {
        sliderIndex.value = sliders.value.length - 1
    }
}

function nextSlider() {
    if (sliderIndex.value < sliders.value.length - 1) {
        sliderIndex.value++
    } else {
        sliderIndex.value = 0
    }
}
</script>

<style scoped>
.max-w-md {
    max-width: 50%;
}

.w-full {
    width: 100%;
    height: 30rem;
}

.top-24 {
    top: 14rem;
}

.nome-projeto {
    color: #003D73;
    font-family: 'Montserrat';
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 600;
}

.botoes-carrosel {
    background-color: #EFCB31;
    color: #fff;
}

.container-carrosel {
    margin-bottom: 5rem;
}

.carousel {
    position: relative;
    overflow: hidden;
    width: 100%;
    max-width: 800px;
}

.carousel__viewport {
    overflow: hidden;
    width: 100%;
}

.carousel__container {
    display: flex;
    transition: transform 0.3s ease;
}

.carousel__slide {
    flex: 0 0 33%;
    /* Mostra 3 slides por vez */
    margin-right: 10px;
    user-select: none;
    opacity: 0.5;
    transform: scale(0.8);
    transition: none !important;
}

.carousel__slide.is-selected {
    opacity: 1;
    transform: scale(1);
    /* Destaque para o slide central */
}

.carousel__image {
    width: 100%;
    height: auto;
    border-radius: 8px;
}

.carousel__button {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: rgba(0, 0, 0, 0.5);
    color: white;
    border: none;
    padding: 10px;
    cursor: pointer;
    z-index: 10;
}

.prev {
    left: 10px;
}

.next {
    right: 10px;
}
</style>