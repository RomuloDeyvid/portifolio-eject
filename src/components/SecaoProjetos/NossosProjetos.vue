<template>
    <section>
        <div class="campo-secao">
            <div>
                <h2 class="titulo-secao">NOSSOS PROJETOS</h2>
            </div>
            <div class="seletor">

                <select class="select select-bordered" v-model="tipoDeProjeto" @change="filtrar">
                    <option selected class="opcoes">Filtro</option>
                    <option class="opcoes">Sites</option>
                    <option class="opcoes">E-commerce</option>
                    <option class="opcoes">Landing Pages</option>
                    <option class="opcoes">Sistemas</option>
                </select>
            </div>
        </div>
        <!-- <Carrosel :slides="slides" /> -->
        <ContainerCarrosel :tipo-de-projeto="tipoDeProjeto" />
    </section>


</template>

<script lang="ts">
import ContainerCarrosel from '../teste/ContainerCarrosel.vue';

export default {
    data() {
        return {
            tipoDeProjeto: 'Filtro'
        }
    },
    components: {

        ContainerCarrosel,
    },
    methods: {
        filtrar() {
            console.log(this.tipoDeProjeto)
        }
    }
}

</script>

<style scoped>
section {
    background-color: #C7E6F6;
    padding-bottom: 3rem;
}

option {
    background-color: #003C64;
    color: #fff;
}

.select {
    background-color: transparent;
    border-radius: 50px;
    border: 1px solid #003D73;
    color: #003D73;
    font-family: Montserrat;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: 30px;
    margin: auto;
    background-image: none;
    padding-inline-end: 1.5rem;
    /* 150% */
}

.opcoes {
    text-align: center;
}

.opcao1 {
    border-bottom: 5px #fff;
}

.carousel {
    width: 50%;
    height: 450px;
    display: flex;
    margin: auto;
    padding-bottom: 5em;
    padding-top: 2em;

}

.campo-secao {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 70%;
    margin: auto;
    margin-bottom: 1rem;
}

.titulo-secao {
    position: relative;
    padding-left: 20px;
    color: #003D73;
    font-family: "Exo 2";
    font-size: 36px;
    font-style: normal;
    font-weight: 700;
    margin-left: 6.5em;
    padding-top: 2rem;
    margin: auto;
    background-color: #C7E6F6;

}


.titulo-secao::before {
    content: "";
    position: absolute;
    left: 8px;
    bottom: 8px;
    width: 7px;
    height: 35px;
    background: linear-gradient(to top, #FCCC04, #FF9F16);
    line-height: 25px;
    border-radius: 10px;
}

.seletor {
    padding-top: 2rem;
}

.botoes {
    color: #fff;
    font-size: 20px;
    padding-bottom: 5px;
    padding-right: 3px;
    background-color: #FCCC04;
    border: none;
}

@media (min-width: 360px) and (max-width: 499px) {
    .titulo-secao {
        position: relative;
        display: flex;
        font-size: 16px;
        margin-left: 3em;
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

    .campo-secao {
        width: 90%;

    }

    .seletor {
        padding-top: 0.5rem;
    }

    .select {
        background-color: transparent;
        border-radius: 50px;
        border: 1px solid #003D73;
        color: #003D73;
        font-family: Montserrat;
        font-size: 10px;
        font-style: normal;
        font-weight: 600;
        line-height: 10px;
        margin: auto;
        height: 1.5rem;
        min-height: 1.5rem;
        width: 7rem;
        background-image: none;
        padding-inline-end: 0.8rem;
        /* 150% */
    }

    .opcoes {
        text-align: center;
        font-size: 10px;
    }
}

@media (min-width: 500px) and (max-width: 699px) {
    .titulo-secao {
        position: relative;
        display: flex;
        font-size: 18px;
        margin-left: 3em;
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

    .carousel {
        width: 90%;
        height: 450px;
        display: flex;
        margin: auto;
        padding-bottom: 5em;
        padding-top: 2em;

    }

    .campo-secao {
        width: 90%;

    }

    .seletor {
        padding-top: 0.5rem;
    }

    .select {
        background-color: transparent;
        border-radius: 50px;
        border: 1px solid #003D73;
        color: #003D73;
        font-family: Montserrat;
        font-size: 12px;
        font-style: normal;
        font-weight: 600;
        line-height: 30px;
        margin: auto;
        height: 2rem;
        min-height: 2rem;
        width: 8rem;
        background-image: none;
        padding-inline-end: 1.5rem;
        /* 150% */
    }

    .opcoes {
        text-align: center;
        font-size: 12px;
    }
}

@media (min-width: 700px) and (max-width: 999px) {
    .titulo-secao {
        position: relative;
        display: flex;
        font-size: 22px;
        margin-left: 3em;
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

    .select {
        background-color: transparent;
        border-radius: 50px;
        border: 1px solid #003D73;
        color: #003D73;
        font-family: Montserrat;
        font-size: 14px;
        font-style: normal;
        font-weight: 600;
        line-height: 30px;
        margin: auto;
        height: 2rem;
        min-height: 2rem;
        width: 10rem;
        background-image: none;
        padding-inline-end: 1.5rem;
        /* 150% */
    }

    .seletor {
        padding-top: 0.7rem;
    }
}

@media (min-width: 1000px) and (max-width: 1300px) {
    .titulo-secao {
        position: relative;
        display: flex;
        font-size: 30px;
        margin-left: 3em;
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

    .select {
        background-color: transparent;
        border-radius: 50px;
        border: 1px solid #003D73;
        color: #003D73;
        font-family: Montserrat;
        font-size: 20px;
        font-style: normal;
        font-weight: 600;
        line-height: 30px;
        margin: auto;
        height: 2rem;
        min-height: 2rem;
        width: 12rem;
        background-image: none;
        padding-inline-end: 1.5rem;
        /* 150% */
    }

    .seletor {
        padding-top: 1.5rem;
    }
}
</style>