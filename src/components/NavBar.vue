<template>

    <div class="navbar bg-base-100 secao-nav">

        <div class="navbar-start">
            <RouterLink to="/">

                <img src="../assets/imagens/logo-eject-nav.png" alt="" class="logo-eject">
            </RouterLink>
        </div>

        <div class="navbar-center lg:flex secao-titulo">
            <p class="texto-portifolio">PORTIFÓLIO</p>
        </div>


        <div class="navbar-end">
            <a href="https://ejectufrn.com.br/" class="btn botao-nav animation-nav">ENTRE EM CONTATO</a>
        </div>

    </div>
</template>

<script lang="ts">
import { RouterLink } from 'vue-router';
import { useRoute } from 'vue-router';
const route = useRoute()


export default {
    name: 'NavBar',
    setup() {
        const paginaDeProjetos = {
            path: '/projetos',
            name: 'pagina-de-projetos',

        }
        return {
            paginaDeProjetos
        };
    },
    // suas propriedades, métodos, etc.
};
</script>

<style scoped>
.animation-nav {
    animation: 0.3s ease-in-out 0s 4 alternate none running trembles;
}

.texto-portifolio {
    color: #5494D8;
    font-family: 'Exo 2';
    font-size: 16px;
    font-weight: 700;
    font-style: normal;
}

.logo-eject {
    width: 10em;
    height: 3.5em;
    margin-left: 8em;
}

.secao-titulo {
    display: flex;
    flex-direction: column;
    gap: 0;
}

.secao-titulo::after {
    content: '';
    display: inline-block;
    width: 70px;
    height: 3px;
    background-color: #5494D8;
}

.secao-nav {
    background-color: #fff;
    box-shadow: 0 4px 10px #fff;
}

.botao-nav {
    background-color: #5494D8;
    font-family: 'Exo 2';
    font-size: 16px;
    font-weight: 700;
    color: #fff;
    border-radius: 10px;
    border: none;
    display: flex;
    min-height: 2.2rem;
    padding: 0px 35px;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    margin-right: 8em;
}

@media (min-width: 1000px) and (max-width: 1300px) {
    .logo-eject {
        width: 10em;
        height: 3.5em;
        margin-left: 4em;
    }

    .botao-nav {
        background-color: #5494D8;
        font-family: 'Exo 2';
        font-size: 16px;
        font-weight: 700;
        color: #fff;
        border-radius: 10px;
        border: none;
        display: flex;
        min-height: 2.2rem;
        padding: 0px 35px;
        justify-content: center;
        align-items: center;
        flex-shrink: 0;
        margin-right: 4em;
    }
}

@media (min-width: 700px) and (max-width: 999px) {
    .logo-eject {
        width: 8em;
        height: 3em;
        margin-left: 2em;
    }

    .botao-nav {
        background-color: #5494D8;
        font-family: 'Exo 2';
        font-size: 12px;
        font-weight: 700;
        color: #fff;
        height: 40px;
        border-radius: 10px;
        border: none;
        display: flex;
        min-height: 1em;
        padding: 0px 10px;
        justify-content: center;
        align-items: center;
        flex-shrink: 0;
        margin-right: 2em;
    }

    .texto-portifolio {
        font-size: 12px;
    }
}

@media (min-width: 500px) and (max-width: 699px) {
    .logo-eject {
        width: 7em;
        height: 2.5em;
        margin-left: 1.5em;
    }

    .botao-nav {
        background-color: #5494D8;
        font-family: 'Exo 2';
        font-size: 10px;
        font-weight: 700;
        color: #fff;
        height: 40px;
        border-radius: 10px;
        border: none;
        display: flex;
        min-height: 1em;
        padding: 0px 10px;
        justify-content: center;
        align-items: center;
        flex-shrink: 0;
        margin-right: 1.5em;
    }

    .texto-portifolio {
        font-size: 10px;
    }
}

@media (min-width: 359px) and (max-width: 499px) {
    .logo-eject {
        width: 5em;
        height: 1.8em;
        margin-left: 0.5em;
    }

    .botao-nav {
        background-color: #5494D8;
        font-family: 'Exo 2';
        font-size: 8px;
        font-weight: 700;
        color: #fff;
        height: 30px;
        border-radius: 5px;
        border: none;
        display: flex;
        min-height: 0.7em;
        padding: 0px 10px;
        justify-content: center;
        align-items: center;
        flex-shrink: 0;
        margin-right: 0.5em;
    }

    .secao-titulo::after {
        content: '';
        display: inline-block;
        width: 45px;
        height: 3px;
        background-color: #5494D8;
    }

    .texto-portifolio {
        font-size: 10px;
    }
}
</style>