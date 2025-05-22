<template>
    <section>
        <h2 class="titulo-secao">TECNOLOGIAS UTILIZADAS</h2>
        <div class="secao-tecnologias">
            <div class="icones-tecnologias">
                <i class="fa-brands fa-html5 fa-5x" style="color: #E5532D;"></i>
            </div>
            <div class="icones-tecnologias">
                <i class="fa-brands fa-css3-alt fa-5x" style="color: #379AD6;"></i>
            </div>
            <div class="icones-tecnologias">
                <i class="fa-brands fa-vuejs fa-5x" style="color: #08C384;"></i>
            </div>
            <div class="icones-tecnologias">
                <i class="fa-brands fa-js fa-5x" style="color: #F0DB4E;"></i>

            </div>
            <div class="icones-tecnologias">
                <i class="fa-brands fa-figma fa-4x pt-2" style="color: #A55EFF;"></i>
            </div>

        </div>

    </section>
</template>

<style scoped>
.icone-svg {
    position: absolute;
    bottom: 0;

}

.secao-tecnologias {
    display: flex;
    width: 70%;
    margin: auto;
    gap: 1em;
    padding-top: 2em;
    padding-bottom: 3em;
    padding-left: 10px;
}

section {
    background-color: #C7E6F6;
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
    width: 70%;

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

@media (min-width: 360px) and (max-width: 499px) {
    .titulo-secao {
        position: relative;
        display: flex;
        width: 90%;
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

    .fa-5x {
        font-size: 2em;
    }

    .fa-4x {
        font-size: 1.7em;
        padding-top: 3px;
    }

    .secao-tecnologias {
        width: 90%;
        gap: 0.5em;
        padding-top: 0.25em;
        padding-bottom: 1em;
        padding-left: 10px;
    }
}

@media (min-width: 500px) and (max-width: 699px) {
    .titulo-secao {
        position: relative;
        display: flex;
        width: 90%;
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

    .fa-5x {
        font-size: 3em;
    }

    .fa-4x {
        font-size: 2.5em;
        padding-top: 3px;
    }

    .secao-tecnologias {
        width: 90%;
        gap: 1em;
        padding-top: 1em;
        padding-bottom: 2em;
        padding-left: 10px;
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

    .fa-5x {
        font-size: 4em;
    }

    .fa-4x {
        font-size: 3.5em;
        padding-top: 4px;
    }

    .secao-tecnologias {
        gap: 1em;
        padding-top: 1em;
        padding-bottom: 2em;
        padding-left: 10px;
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

    .fa-5x {
        font-size: 4em;
    }

    .fa-4x {
        font-size: 3.5em;
        padding-top: 4px;
    }

    .secao-tecnologias {
        gap: 1em;
        padding-top: 1em;
        padding-bottom: 2em;
        padding-left: 10px;
    }
}
</style>