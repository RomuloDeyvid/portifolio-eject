<script lang="ts">
import Footer from '../Footer.vue';
import NavBar from '../NavBar.vue'
import SecaoVideo from '../SecaoVideo.vue';
import DepoimentoCarrosel from '../SecaoCarrosel/DepoimentoCarrosel.vue';
import Tecnologias from '../Tecnologias.vue';
import Desenvolvedores from '../Desenvolvedores.vue';
import NossosProjetos from '../SecaoProjetos/NossosProjetos.vue';
import PaginaDeProjetos from './PaginaDeProjetos.vue';
// import ProjectsView from '@/views/ProjectsView.vue';
import Acceptability from '../Acceptability.vue';
export default {
    components: { NavBar, Footer, SecaoVideo, DepoimentoCarrosel, Tecnologias, Desenvolvedores, PaginaDeProjetos, Acceptability, NossosProjetos }

}

</script>

<template>

    <NavBar />

    <SecaoVideo />

    <NossosProjetos />

    <DepoimentoCarrosel />

    <Acceptability />

    <Tecnologias />

    <Desenvolvedores />

    <Footer />


</template>

<style scoped></style>
