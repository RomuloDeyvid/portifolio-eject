<template>
    <div class="demo">
        <div v-if="loading">Carregando...</div>
        <CarouselCard ref="carouselCardRef" :interval="7000" :autoplay="false" height="260px" type="card" arrow="always"
            @change="changeHandle" v-else>
            <!-- Usar projetosFiltrados no v-for -->
            <CarouselCardItem v-for="card in projetosFiltrados" :key="card.name" :id="card.id">
                <div class="card-carousel">
                    <img :src="card.path" :alt="card.name" class="w-full h-56 object-cover rounded-lg shadow">
                </div>
            </CarouselCardItem>
        </CarouselCard>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed, onMounted } from 'vue';
import { CarouselCard, CarouselCardItem } from './carousel-card';
import '../../../styles/index.css';
import type { ICarouselCard, Projeto } from '../../../types/index';
import { useProjectosStore } from '../../stores/projetosStore';
import { storeToRefs } from 'pinia';

export default defineComponent({
    name: 'container-carrousel',
    props: {
        tipoDeProjeto: {
            type: String,
            required: true
        }
    },
    components: { CarouselCard, CarouselCardItem },
    setup(props) {
        const projetosStore = useProjectosStore();
        const { projetos, loading } = storeToRefs(projetosStore); // Extrai o estado reativo da store

        // Carrega os projetos quando o componente é montado
        onMounted(async () => {
            await projetosStore.getProjectos();
        });

        const carouselCardRef = ref<ICarouselCard>();

        const changeHandle = (index: number) => {
            console.log(index);
        };

        // Computed property para filtrar os projetos com base no tipoDeProjeto
        const projetosFiltrados = computed(() => {
            if (props.tipoDeProjeto === 'Filtro') {
                return projetos.value; // Retorna todos os projetos
            }
            return projetos.value.filter(projeto => projeto.type === props.tipoDeProjeto); // Filtra por tipo
        });

        return {
            carouselCardRef,
            changeHandle,
            projetosFiltrados,
            loading // Retorna o estado de carregamento para uso no template
        };
    }
});
</script>

<style scoped>
.demo {
    width: 70%;
    height: 28rem;
    margin: auto;
}

.card-carousel {
    height: 100%;
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #FFF;
}

.w-full {
    width: 100%;
    height: 100%;
}

@media (min-width: 360px) and (max-width: 599px) {
    .demo {
        width: 90%;
        height: 12rem;
    }
}

@media (min-width: 600px) and (max-width: 799px) {
    .demo {
        height: 14rem;
    }
}

@media (min-width: 800px) and (max-width: 999px) {
    .demo {
        height: 18rem;
    }
}

@media (min-width: 1000px) and (max-width: 1199px) {

    .demo {
        height: 20rem;
    }
}

@media (min-width: 1200px) and (max-width: 1399px) {

    .demo {
        height: 22rem;
    }

}

@media (min-width: 1400px) and (max-width: 1599px) {

    .demo {
        height: 22rem;
    }
}

@media (min-width: 1600px) and (max-width: 1800px) {

    .demo {
        height: 25rem;
    }
}

@media (min-width: 1800px) and (max-width: 1920px) {
    .demo {
        height: 25rem;
    }
}

@media (min-width: 1921px) and (max-width: 2048px) {
    .demo {
        height: 27rem;
    }
}

@media (min-width: 2049px) and (max-width: 2560px) {
    .demo {
        height: 31rem;
    }
}

@media (min-width: 2561) and (max-width: 3840px) {
    .demo {}
}
</style>