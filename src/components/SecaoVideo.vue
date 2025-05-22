<template>

    <section class="secao-video">
        <p class="secao-video-titulo">Boas vindas ao portfólio da EJECT! </p>
        <video controls class="video-player">
            <source src="../assets/video/Apresentação Sistema CVB.mp4" type="video/mp4">
            Seu navegador não suporta a tag de vídeo.
        </video>
        <p class="secao-video-texto">
            Aqui você encontrará o nosso portfólio com os projetos mais recentes, refletindo a nossa paixão por soluções
            em TI. Os trabalho foram desenvolvidos com equipes multidisciplinares que dedicaram atenção aos detalhes
            objetivando entregar resultados que superem as expectativas. Explore nossas criações e sinta-se à vontade
            para falar com um dos nossos consultores para saber mais sobre o meu processo criativo.
        </p>
    </section>

</template>

<script lang="ts">
export default {}
</script>

<style scoped>
.secao-video-titulo {
    color: #FFF;
    font-family: Montserrat;
    font-size: 40px;
    font-style: normal;
    font-weight: 600;
    line-height: 30px;
    width: 70%;
    margin-top: 2rem;
}

.secao-video {
    display: flex;
    flex-direction: column;
    margin: auto;
    width: 100%;
    background-image: url("../assets/imagens/INTRODUÇÃO.png");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    align-items: center;
    row-gap: 1.5em;
}

.secao-video-texto {
    color: #FFF;
    font-family: Montserrat;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    width: 70%;
    text-align: justify;
    margin-bottom: 3em;
}

.video-player {
    width: 55%;
}

@media (min-width: 1000px) and (max-width: 1300px) {
    .secao-video-titulo {
        font-size: 35px;
    }

    .secao-video-texto {
        font-size: 18px;
    }
}

@media (min-width: 900px) and (max-width: 999px) {
    /* .secao-video {
        background-size: contain;
    } */

    .secao-video-titulo {
        font-size: 30px;
        line-height: 30px;
    }

    .secao-video-texto {
        font-size: 15px;
    }
}

@media (min-width: 700px) and (max-width: 899px) {
    /* .secao-video {
        background-size: contain;
    } */

    .secao-video-titulo {
        font-size: 20px;
        line-height: 30px;
    }

    .secao-video-texto {
        font-size: 12px;
    }
}

@media (min-width: 500px) and (max-width: 699px) {
    /* .secao-video {
        background-size: contain;
    } */

    .secao-video-titulo {
        font-size: 16px;
        line-height: 30px;
        margin-top: 1rem;
        width: 90%;
    }

    .video-player {
        width: 90%;
    }

    .secao-video-texto {
        font-size: 10px;
        width: 90%;
    }

    .secao-video {
        row-gap: 1em;
    }
}

@media (min-width: 360px) and (max-width: 499px) {
    /* .secao-video {
        background-size: contain;
    } */

    .secao-video-titulo {
        font-size: 16px;
        line-height: 30px;
        margin-top: 0.5rem;
        width: 90%;
    }

    .video-player {
        width: 90%;
    }

    .secao-video-texto {
        font-size: 10px;
        width: 90%;
    }

    .secao-video {
        row-gap: 0.5em;
    }
}
</style>