<script lang="ts">
import BannerProject from '../../components/BannerProject.vue';
import GalleryProject from '../../components/GalleryProject.vue';
import Colors from '../../components/Colors.vue';
import Logotipos from '../../components/Logotipos.vue';
import NavBar from '../NavBar.vue';
import TecnologiasProjetos from '../../components/TecnologiasProjetos.vue';
import Footer from '../Footer.vue';
import { useCounterStore } from '../../stores/counter';
import { useProjectosStore } from '../../stores/projetosStore';
import { storeToRefs } from 'pinia';
export default {
    components: { BannerProject, GalleryProject, Colors, Logotipos, TecnologiasProjetos, NavBar, Footer },
    props: {
        id: {
            type: Number,
            required: true
        }
    },
    setup(props) {
        
        const counterStore = useCounterStore();
        const projetosStore = useProjectosStore();
        const { projetos, loading } = storeToRefs(projetosStore); 

        
        const projects = projetosStore.projetos;
        // Ensure all required fields are present and not undefined
        const projeto = projects.find(projeto => projeto.id === parseInt(String(props.id)));
        // Provide a fallback object with default values if any field is missing
        const defaultProjeto = {
            id: 0,
            name: '',
            path: '',
            type: '',
            img: '',
            cor: '',
            image1: '',
            prints: [],
            descricao: '',
            link: '',
            imagem1: '',
            cores: [],
            logos: [],
            tecnologias: [],
            coresTecnologias: []
        };
        const safeProjeto = projeto
            ? {
                ...defaultProjeto,
                ...projeto,
                img: projeto.img ?? '',
                cor: projeto.cor ?? '',
                image1: projeto.image1 ?? '',
                prints: projeto.prints ?? [],
                descricao: projeto.descricao ?? '',
                link: projeto.link ?? '',
                cores: projeto.cores ?? [],
                logos: projeto.logos ?? [],
                tecnologias: projeto.tecnologias ?? [],
                coresTecnologias: projeto.coresTecnologias ?? []
            }
            : null;
        return { projeto: safeProjeto };
    },
}
</script>

<template>
    <main>
        <NavBar />
        <BannerProject v-if="projeto" :projeto="projeto"></BannerProject>
        <GalleryProject v-if="projeto" :projeto="projeto"></GalleryProject>
        <Colors v-if="projeto" :projeto="projeto"></Colors>
        <Logotipos v-if="projeto" :projeto="projeto"></Logotipos>
        <TecnologiasProjetos v-if="projeto" :projeto="projeto"></TecnologiasProjetos>
        <Footer />
    </main>

</template>

<style>
.banner {
    width: 100%;
    height: 340px;
    display: flex;
    justify-content: center;
    align-items: center;
}

main {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: white;
}

.title {
    width: 100%;
    display: flex;
}

.title h2 {
    /* TITULO */
    font-family: 'Exo 2';
    font-style: normal;
    font-weight: 700;
    font-size: 36px;
    line-height: 36px;
    color: #003D73;
    margin-left: 4px;
}

.title::before {
    content: '';
    display: inline-block;
    width: 7px;
    height: 35px;
    background: linear-gradient(180deg, #FF9F16 0%, #FCCC04 71%);
}



@media (max-width:1000px) {
    section {
        padding-left: 16px;
    }

}

@media (max-width:768px) {
    .title::before {
        height: 17px;
        width: 3px;
    }

    .title h2 {
        font-size: 1rem;
        line-height: 17px;
    }

}
</style>