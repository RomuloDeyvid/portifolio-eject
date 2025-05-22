<template>
    <section>
        <div class="firs-coll">
            <div class="content">
                <div class="title">
                    <h2>ACEITABILIDADE</h2>
                </div>
                <div class="topico" @click="showGraph('indicacao')">
                    <img src="../assets/imagens/seta-laranja.svg" alt="">
                    <p>
                        Você indicaria os serviços da EJECT para um amigo?
                    </p>
                </div>
                <div class="topico" @click="showGraph('time')">
                    <img src="../assets/imagens/seta-laranja.svg" alt="">
                    <p>
                        Como você avalia o time de desenvolvimento?
                    </p>
                </div>
                <div class="topico" @click="showGraph('entrega')">
                    <img src="../assets/imagens/seta-laranja.svg" alt="">
                    <p>
                        Como você avalia a entrega final?
                    </p>

                </div>
                <span>Os gráficos são gerados a partir de respostas do formulário de satisfação do cliente</span>
            </div>
        </div>
        <div class="second-coll-indicacao" v-if="currentGraph === 'indicacao'">
            <Graphic />
        </div>
        <div class="second-coll-time" v-if="currentGraph === 'time'">
            <GraphicTime />
        </div>
        <div class="second-coll-entrega" v-if="currentGraph === 'entrega'">
            <GraphicEntrega />
        </div>
        <div class="frase-mobile"> Os gráficos são gerados a partir de respostas do formulário de satisfação do cliente
        </div>
    </section>

</template>

<script lang="ts">
import Graphic from './Graphic.vue';
import GraphicEntrega from './GraphicEntrega.vue';
import GraphicTime from './GraphicTime.vue';
import { defineComponent, ref } from 'vue'


export default defineComponent({
    name: 'Acceptability',
    components: {
        Graphic,
        GraphicEntrega,
        GraphicTime
    },
    setup() {
        const currentGraph = ref('indicacao')

        const showGraph = (graphName: string) => {
            currentGraph.value = graphName;
        }
        return {
            currentGraph,
            showGraph
        }
    }
})

</script>

<style scoped>
.frase-mobile {
    display: none;
}

section {
    height: 574px;
    background-color: #A9E1FF;
    display: grid;
    grid-template-columns: 50% 50%;
}

.firs-coll {
    background: #0787CB;
    height: 100%;
    border-radius: 0 10px 10px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 46px;
}

.content {
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.topico {
    display: flex;
    align-items: start;
    cursor: pointer;
}

.topico img {
    margin-top: 8px;
    margin-right: 5px;
    width: 10px;
    height: 17px;
}

.title h2 {
    /* TITULO */
    font-family: 'Exo 2';
    font-style: normal;
    font-weight: 700;
    font-size: 36px;
    line-height: 36px;
    color: white;
    margin-left: 4px;
}

.title::before {
    content: '';
    display: inline-block;
    width: 7px;
    height: 35px;
    background: linear-gradient(180deg, #FF9F16 0%, #FCCC04 71%);
}

p {
    font-family: 'Montserrat';
    font-size: 1.25rem;
    font-weight: 600;
    color: #FFFFFF;
    width: 330px;

}

.second-coll-indicacao,
.second-coll-time,
.second-coll-entrega {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
}

span {
    font-family: 'Montserrat';
    font-size: 0.625rem;
    font-style: italic;
    color: #FFFFFF;
    margin-top: 180px;
    font-weight: 300;
    margin-top: 100px;
}

@media (max-width: 1000px) {
    .title h2 {
        font-size: 1rem;
    }

    section {
        display: flex;
        flex-direction: column;
        height: auto;
        padding-left: 0;
        max-width: 100%;
    }

    .firs-coll {
        padding-top: 20px;
        padding-bottom: 17px;
        align-items: start;
        padding-left: 22px;
    }

    .second-coll-indicacao,
    .second-coll-time,
    .second-coll-entrega {
        height: 215px;
    }

    span {
        display: none;
    }

    .topico img {
        margin-top: 0;
    }

    .topico p {
        width: 307px;
        font-size: 0.75rem;
    }

    .title {
        font-size: 1rem;

    }

    .frase-mobile {
        margin-top: 30px;
        display: block;
        font-family: 'Montserrat';
        font-size: 0.563rem;
        font-style: italic;
        color: #003D73;
        width: 318px;
        margin-left: 17px;
        margin-top: 50px;
        padding-bottom: 20px;
    }

    .title::before {
        width: 3px;
        height: 17px;
        margin-top: 10px;
    }

}
</style>