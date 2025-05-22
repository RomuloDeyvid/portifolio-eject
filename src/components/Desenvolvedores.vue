<template>
    <section>
        <h2 class="titulo-secao">DESENVOLVEDORES DO PORRFÓLIO</h2>
        <div class="secao-desenvolvedores">
            <div class="carousel carousel-center bg-neutral rounded-box space-x-4">
                <div class="carousel-item">
                    <div class="desenvolvedor">
                        <div class="secao-foto-desenvolvedor">
                            <img src="../assets/imagens/bia.png" alt="Beatriz Xavier" class="foto-desenvolvedor">
                            <div class="secao-dados-desenvolvedor">
                                <p class="nome-desenvolvedor-hover">Beatriz Xavier</p>
                                <p class="cargo-desenvolvedor">UX/UI Designer</p>
                            </div>

                        </div>

                    </div>
                </div>
                <div class="carousel-item">
                    <a href="https://www.linkedin.com/in/romulodeyvid/">
                        <div class="desenvolvedor">
                            <div class="secao-foto-desenvolvedor">
                                <img src="../assets/imagens/romulo.jpg" alt="Rômulo Deyvid" class="foto-desenvolvedor">
                                <div class="secao-dados-desenvolvedor">
                                    <p class="nome-desenvolvedor-hover">Rômulo Deyvid</p>
                                    <p class="cargo-desenvolvedor">Front-End</p>
                                </div>

                            </div>

                        </div>
                    </a>
                </div>
                <div class="carousel-item">
                    <!-- <a href="https://www.linkedin.com/in/romulodeyvid/"> -->
                    <div class="desenvolvedor">
                        <div class="secao-foto-desenvolvedor">
                            <img src="../assets/imagens/rafael.jpg" alt="Rafael Nonato" class="foto-desenvolvedor">
                            <div class="secao-dados-desenvolvedor">
                                <p class="nome-desenvolvedor-hover">Rafael Nonato</p>
                                <p class="cargo-desenvolvedor">Front-End</p>
                            </div>

                        </div>

                    </div>
                    <!-- </a> -->
                </div>


            </div>
        </div>
    </section>
</template>

<style scoped>
section {
    background-color: #189BE1;
}

.carousel {
    position: relative;
}

.titulo-secao {
    position: relative;
    padding-left: 20px;
    color: #fff;
    font-family: "Exo 2";
    font-size: 36px;
    font-style: normal;
    font-weight: 700;
    margin-left: 6.5em;
    padding-top: 2rem;
    margin: auto;
    background-color: #189BE1;
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

.carousel {
    background-color: #189BE1;
    width: 100%;
}

.secao-desenvolvedores {
    display: flex;
    width: 70%;
    gap: 1em;
    margin: auto;
    padding: 1em 0 2em 0;
}

.secao-dados-desenvolvedor {
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-left: 1.5em;
}

.nome-desenvolvedor-hover {
    display: none;
    color: #FFF;
    font-family: "Exo 2";
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    z-index: 1;
}

.cargo-desenvolvedor {
    display: none;
    color: #FFF;
    text-align: center;
    font-family: Montserrat;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    z-index: 1;
}

.secao-foto-desenvolvedor {
    width: 182px;
    height: 182px;
    flex-shrink: 0;
    border-radius: 100%;
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
}

.secao-foto-desenvolvedor:hover {
    opacity: 0.7;
}

.secao-foto-desenvolvedor:hover .nome-desenvolvedor-hover {
    display: block;
}

.secao-foto-desenvolvedor:hover .cargo-desenvolvedor {
    display: block;
}

.foto-desenvolvedor {
    border-radius: 100%;

}


.nome-desenvolvedor {
    color: #FFF;
    font-family: "Exo 2";
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-align: center;
    padding-top: 0.5em;
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

    .secao-desenvolvedores {
        display: flex;
        width: 90%;
        gap: 1em;
        margin: auto;
        padding: 1em 0 2em 0;
    }

    .secao-foto-desenvolvedor {
        width: 144px;
        height: 144px;
    }

    .secao-dados-desenvolvedor {
        margin-left: 2.5em;
    }

    .nome-desenvolvedor {
        font-size: 12px;
    }

    .nome-desenvolvedor-hover {
        display: none;
        color: #FFF;
        font-family: "Exo 2";
        font-size: 10px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        z-index: 1;
    }

    .cargo-desenvolvedor {
        display: none;
        color: #FFF;
        text-align: center;
        font-family: Montserrat;
        font-size: 8px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        z-index: 1;
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

    .secao-desenvolvedores {
        width: 90%;
    }

    .titulo-secao::before {
        left: 4px;
        bottom: 3px;
        width: 3px;
        height: 20px;
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
}
</style>