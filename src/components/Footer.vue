<template>

    <footer class="footer bg-base-200 text-base-content p-10 secao-footer">

        <img src="../assets/imagens/logo-eject-footer.png" alt="" class="logo-footer-mobile">
        <hr>
        <div class="secao-imagem-footer item">
            <img src="../assets/imagens/logo-eject-footer.png" alt="" class="logo-footer">
        </div>

        <div class="secao-footer-informacoes">
            <nav class="item">
                <h6 class="footer-title tiulo-footer">Sobre</h6>
                <a class="link link-hover link-footer">Home</a>
                <a class="link link-hover link-footer">Quem somos</a>
                <a class="link link-hover link-footer">Solução</a>
                <a class="link link-hover link-footer">Contatos</a>
                <a class="link link-hover link-footer">Política e privacidade</a>
            </nav>
            <nav class="item">
                <h6 class="footer-title tiulo-footer">Serviços</h6>
                <a class="link link-hover link-footer">Sites e sistemas</a>
                <a class="link link-hover link-footer">E-commerce</a>
                <a class="link link-hover link-footer">Concepção</a>
            </nav>
            <nav class="item">
                <h6 class="footer-title tiulo-footer">Endereço</h6>
                <a class="link link-hover link-footer">inOACTA -R. Monte Sinai,1828 - Capim Macio, Natal- RN,
                    59078-360</a>
            </nav>
            <nav class="item">
                <h6 class="footer-title tiulo-footer">Fale conosco</h6>
                <a class="link link-hover link-footer">+55 (84) 99226-4221</a>
                <a class="link link-hover link-footer">contato@eject.com.br</a>
            </nav>
        </div>

    </footer>
    <div class="creditos-footer">
        <p class="creditos-texto">Feito com <span class="creditos-span">foco</span> e <span
                class="creditos-span">compromisso</span> pela EJECT</p>
    </div>

</template>

<script lang="ts">
export default {}
</script>

<style scoped>
.secao-footer-informacoes {
    display: flex;
    margin-left: 2em;

}

.secao-imagem-footer {

    display: flex;
    justify-self: center;
    align-self: center;
}

hr {
    display: none;
}

.logo-footer-mobile {
    display: none;
}

.footer-title {
    text-transform: none;
}

.logo-footer {
    width: 14em;
    height: 5.5em;
    display: flex;
}

.tiulo-footer {
    color: #FFF;
    font-family: "Exo 2";
    opacity: 1;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 36px;
    /* 150% */
}

.link-footer {
    color: #9C9C9C;
    font-family: "Exo 2";
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}

.secao-footer {
    background-color: #003C64;
}



.creditos-footer {
    width: 100%;
    background-color: #003C64;
    display: flex;
    justify-content: center;

}

.creditos-texto {
    color: #FFF;
    font-family: "Exo 2";
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    padding-bottom: 2em;
}

.creditos-span {
    font-weight: 700;
}

.item {
    display: flex;
    flex-direction: column;
}

.footer {
    column-gap: 0;
}

@media (min-width: 900px) and (max-width: 1100px) {
    .logo-footer {
        width: 10em;
        height: 4em;
    }

    .tiulo-footer {
        font-size: 16px;
    }

    .link-footer {
        font-size: 12px;
    }

    .creditos-texto {
        font-size: 12 px;
        padding-bottom: 1.5em;
    }
}

@media (min-width: 650px) and (max-width: 899px) {
    .secao-footer {
        display: flex;

    }

    .logo-footer {
        width: 10em;
        height: 3em;

    }

    .tiulo-footer {
        font-size: 14px;
        line-height: normal;
    }

    .link-footer {
        font-size: 9px;
    }

    .creditos-texto {
        font-size: 10px;
        padding-bottom: 1.5em;
    }

    .footer {
        row-gap: 2.5rem;
    }
}

@media (min-width: 360px) and (max-width: 649px) {
    .p-10 {
        padding: 1rem 2.5rem;
    }

    hr {
        display: block;
        width: 100%;
    }

    .logo-footer-mobile {
        display: flex;
        width: 80px;
        height: 30px;
        padding: 0;
    }

    .logo-footer {
        width: 80px;
        height: 30px;
        display: none;
    }

    .tiulo-footer {
        font-size: 14px;
        line-height: normal;
    }

    .link-footer {
        font-size: 9px;
    }

    .creditos-texto {
        font-size: 10px;
        padding-bottom: 1.5em;
    }

    .footer {
        row-gap: 0.5rem;
        column-gap: 1rem;
    }

    .secao-footer-informacoes {
        margin-left: 0;
    }
}
</style>