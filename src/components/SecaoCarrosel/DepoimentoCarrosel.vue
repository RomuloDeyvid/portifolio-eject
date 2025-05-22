<template>
    <section>
        <h2 class="titulo-secao">DEPOIMENTOS</h2>
        <div class="carousel-container">
            <div ref="carouselRef" class="container-carrosel" @mousedown="startDrag" @mousemove="onDrag"
                @mouseup="endDrag" @mouseleave="endDrag" @touchstart="startDrag" @touchmove="onDrag" @touchend="endDrag"
                :style="{ transform: `translateX(${position}px)`, transition: isDragging ? 'none' : 'transform 0.3s ease' }">
                <div v-for="(depoimento, index) in depoimentos" :key="index" class="carousel-item" :class="{ 'last-item': index === depoimentos.length - 1 }">
                    <div class="card card-side bg-base-100 shadow-xl">
                        <div class="image-container">
                            <figure>
                                <img :src="depoimento.imagem"  class="depoimeto-foto" />
                            </figure>
                            
                        </div>
                        <div class="card-body">
                            <img src="../../../public/assets/imagens/aspas-abertura.png" alt=""
                                class="depoimento-abre-aspas" />
                            <p class="depoimento-texto">{{ depoimento.texto }}</p>
                            <img src="../../../public/assets/imagens/aspas-fechando.png" alt=""
                                class="depoimento-abre-aspas fecha-aspas" />
                            <p class="depoimento-cargo">{{ depoimento.cargo }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { ref, onMounted, reactive } from 'vue';

interface Depoimento {
    
    imagem: string;
    texto: string;
    cargo: string;
}

// Dados dos depoimentos
const depoimentos: Depoimento[] = reactive([
    {
        imagem: "../../../public/assets/imagens/cassiano.jpg",
        texto: "O site ficou muito bom, todas as demandas foram atendidas prontamente. O serviço prestado atendeu a todas as nossas expectativas",
        cargo: "Cassiano Trovão - Coordenador do Projeto de extensão ISM"
    },
    {
        imagem: "../../../public/assets/imagens/edimar.jpg",
        texto: "Fomos muito bem atendidos durante toda a execução do projeto. Apesar de algumas dificuldades mútuas de entendimento pelas diferenças das área em que atuamos, a equipe foi muito didática e paciente para que todos os passos do projeto fossem compreendidos e executados da melhor maneira. Estamos muito satisfeitos.",
        cargo: "Edimar Rockembach - Negócios e MICE da Visit Iguaçu CVB"
    },
    {
        imagem: "../../../public/assets/imagens/karen.jpg",
        texto: "Adorei o projeto, ficou do jeito que pensamos. A equipe foi transparente e organizada.",
        cargo: "Karen Edyanne - Vice-presidente da Enfasis Jr"
    },
    {
        imagem: "../../../public/assets/imagens/larissa.jpg",
        texto: "Muito satisfeita com o atendimento!",
        cargo: "Larissa Borsato - Gerente de relacionamento do Maceió CVB"
    },
    {
        imagem: "../../../public/assets/imagens/kalliny.jpg",
        texto: "A ideia criativa foi minha e vocês criaram um produto que atendeu todas as expectativas da minha ideia. Parabéns a toda equipe da Eject!",
        cargo: "Kalliny Gomes - Gerente Executiva do Natal Convention Bureau"
    },
    {
        imagem: "../../../public/assets/imagens/heitor.jpg",
        texto: "Parabenizo a equipe pelo profissionalismo, compreensão com os limites de se trabalhar com o serviço público e competência na realização dos produtos.",
        cargo: "Heitor Andrade - Coordenador do Projeto de extensão PPGAU"
    }
]);

// Referência para o elemento do carrossel
const carouselRef = ref<HTMLElement | null>(null);

// Estado para controlar o arrasto
const isDragging = ref(false);
const startX = ref(0);
const position = ref(0);
const startPosition = ref(0);

// Função para iniciar o arrasto
const startDrag = (e: MouseEvent | TouchEvent) => {
    isDragging.value = true;

    if (e instanceof MouseEvent) {
        startX.value = e.clientX;
    } else {
        startX.value = e.touches[0].clientX;
    }

    startPosition.value = position.value;
};

// Função para arrastar
const onDrag = (e: MouseEvent | TouchEvent) => {
    if (!isDragging.value) return;

    let currentX: number;

    if (e instanceof MouseEvent) {
        currentX = e.clientX;
    } else {
        currentX = e.touches[0].clientX;
    }

    const diff = currentX - startX.value;
    position.value = startPosition.value + diff;

    // Limitar o arrasto para não ultrapassar os limites do carrossel
    const carousel = carouselRef.value;
    if (carousel) {
        const minPosition = window.innerWidth - carousel.scrollWidth;
        position.value = Math.max(minPosition, Math.min(0, position.value));
    }
};

// Função para finalizar o arrasto
const endDrag = () => {
    isDragging.value = false;
};

// Inicializar o carrossel
onMounted(() => {
    // Ajustar posição inicial se necessário
    const carousel = carouselRef.value;
    if (carousel) {
        // Verificar se o carrossel é maior que a tela
        const isOverflowing = carousel.scrollWidth > window.innerWidth;
        if (!isOverflowing) {
            // Centralizar o carrossel se não for maior que a tela
            position.value = (window.innerWidth - carousel.scrollWidth) / 2;
        }
    }
});
</script>

<style scoped>
section {
    background-color: #FCCC04;
    

}
.last-item {
  padding-right: 37em;
}
.titulo-secao {
    position: relative;
    padding-left: 20px;
    color: #003D73;
    font-family: "Exo 2", sans-serif;
    font-size: 36px;
    font-style: normal;
    font-weight: 700;
    padding-top: 2rem;
    margin: auto;
    background-color: #FCCC04;
    width: 70%;
}

.titulo-secao::before {
    content: "";
    position: absolute;
    left: 8px;
    bottom: 8px;
    width: 7px;
    height: 35px;
    background: linear-gradient(to top, #5494D8, #003C64);
    line-height: 25px;
    border-radius: 10px;
}

.carousel-container {
    overflow: hidden;
    background-color: #FCCC04;
    cursor: grab;
    width: 70%;
    margin: auto;           
    
}

.carousel-container:active {
    cursor: grabbing;
}

.container-carrosel {
    display: flex;
    
    gap: 1em;
    user-select: none;
    will-change: transform;
    padding: 2em 0;
}

.carousel-item {
    flex: 0 0 auto;
    height: fit-content;
}

.depoimeto-foto {
    width: 260px;
    height: 260px;
    object-fit: cover;
}

.card-body {
    display: flex;
    padding-top: 1rem;
    background-color: #E6B900;
    border-radius: 0 10px 10px 0;
    padding: 1rem 1rem 0.5rem 1rem;
    gap: 0;
    flex-direction: column;
}

.card:hover .card-body {
    display: flex;
}

.card:hover .depoimento-autor {
    display: none;
}

.depoimento-autor {
    position: absolute;
    width: 100%;
    text-align: center;
    z-index: 1;
    border-radius: 0 0 10px 10px;
    bottom: 0;
    left: 0;
    background-color: #957800;
    color: white;
    padding: 7px;
}

.nome-autor {
    color: white;
    font-family: "Exo 2", sans-serif;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
}

.image-container {
    width: 260px;
    height: 260px;
    position: relative;
    display: inline-block;
}

.depoimeto-foto {
    width: 260px;
    height: 260px;
    display: block;
    border-radius: 10px 10px 10px 10px;
}

.depoimento-abre-aspas {
    width: 30px;
    height: 30px;
}

.depoimento-texto {
    color: var(--preto, #000);
    font-family: Montserrat, sans-serif;
    font-size: 16px;
    font-style: italic;
    font-weight: 400;
    line-height: normal;
    width: 360px;
    text-align: justify;
    align-content: center;
    margin: auto;
}

.fecha-aspas {
    align-self: flex-end;
}

.depoimento-cargo {
    color: #000;
    font-family: Montserrat, sans-serif;
    font-size: 15px;
    font-style: normal;
    font-weight: 300;
}

@media (min-width: 360px) and (max-width: 499px) {
    .carousel-container {
        padding: 0 5%;
    }

    .titulo-secao {
        position: relative;
        display: flex;
        width: 90%;
        font-size: 16px;
        padding-top: 0.5rem;
        margin: auto;
        padding-left: 12px;
    }

    .titulo-secao::before {
        left: 8px;
        bottom: 2px;
        width: 3px;
        height: 17px;
    }

    .image-container {
        width: 120px;
        height: 140px;
    }

    .depoimeto-foto {
        width: 120px;
        height: 140px;
    }

    .depoimento-autor {
        padding: 6px 0;
    }

    .nome-autor {
        font-size: 10px;
    }

    .depoimento-texto {
        font-size: 9px;
        width: fit-content;
    }

    .depoimento-abre-aspas {
        width: 15px;
        height: 15px;
    }

    .depoimento-cargo {
        font-size: 9px;
    }

    .card-body {
        width: 190px;
        height: 140px;
    }
}

@media (min-width: 500px) and (max-width: 699px) {
    .carousel-container {
        padding: 0 5%;
    }

    .titulo-secao {
        position: relative;
        display: flex;
        width: 90%;
        font-size: 18px;
        padding-top: 0.5rem;
        margin: auto;
        padding-left: 10px;
    }

    .titulo-secao::before {
        left: 4px;
        bottom: 3px;
        width: 3px;
        height: 20px;
    }

    .image-container {
        width: 160px;
        height: 180px;
    }

    .depoimeto-foto {
        width: 160px;
        height: 180px;
    }

    .depoimento-autor {
        padding: 7px 0;
    }

    .nome-autor {
        font-size: 13px;
    }

    .depoimento-texto {
        font-size: 12px;
        width: fit-content;
    }

    .depoimento-abre-aspas {
        width: 20px;
        height: 20px;
    }

    .depoimento-cargo {
        font-size: 12px;
    }

    .card-body {
        width: 250px;
        height: 180px;
        padding: 0.5rem 1rem 0.5rem 1rem;
    }
}

@media (min-width: 700px) and (max-width: 999px) {
    .titulo-secao {
        position: relative;
        display: flex;
        font-size: 22px;
        padding-top: 0.5rem;
        margin: auto;
        padding-left: 10px;
    }

    .titulo-secao::before {
        left: 4px;
        bottom: 6px;
        width: 3px;
        height: 20px;
    }

    .image-container {
        width: 180px;
        height: 200px;
    }

    .depoimeto-foto {
        width: 180px;
        height: 200px;
    }

    .depoimento-autor {
        padding: 10px 0;
    }

    .nome-autor {
        font-size: 15px;
    }

    .depoimento-texto {
        font-size: 13px;
        width: fit-content;
    }

    .depoimento-abre-aspas {
        width: 22px;
        height: 22px;
    }

    .depoimento-cargo {
        font-size: 13px;
    }

    .card-body {
        width: 280px;
        height: 200px;
        padding: 0.5rem 1rem 0.5rem 1rem;
    }
}

@media (min-width: 1000px) and (max-width: 1300px) {
    .titulo-secao {
        position: relative;
        display: flex;
        font-size: 30px;
        padding-top: 1rem;
        margin: auto;
        padding-left: 15px;
    }

    .titulo-secao::before {
        left: 4px;
        bottom: 6px;
        width: 5px;
        height: 30px;
    }

    .image-container {
        width: 195px;
        height: 220px;
    }

    .depoimeto-foto {
        width: 100%;
        height: 220px;
    }

    .depoimento-autor {
        padding: 12px 0;
        width: 100%;
    }

    .nome-autor {
        font-size: 18px;
    }

    .depoimento-texto {
        font-size: 15px;
        width: fit-content;
    }

    .depoimento-abre-aspas {
        width: 27px;
        height: 27px;
    }

    .depoimento-cargo {
        font-size: 15px;
    }

    .card-body {
        width: 310px;
        height: 220px;
        padding: 0.5rem 1rem 0.5rem 1rem;
    }
}
</style>