<script lang="ts">
import BannerProject from '@/components/BannerProject.vue';
import GalleryProject from '@/components/GalleryProject.vue';
import Colors from '@/components/Colors.vue';
import Logotipos from '@/components/Logotipos.vue';
import Tecnologias from '@/components/Tecnologias.vue'
import TecnologiasProjetos from '@/components/TecnologiasProjetos.vue';
export default{
    components:{ BannerProject, GalleryProject, Colors, Logotipos, TecnologiasProjetos}
}
;
</script>

<template>
    <main>
        <BannerProject :projeto="{}"></BannerProject>
        <GalleryProject :projeto="{}"></GalleryProject>
        <Colors :projeto="{}"></Colors>
        <Logotipos :projeto="{}"></Logotipos>
        <TecnologiasProjetos :projeto="{}"></TecnologiasProjetos>
    </main>
</template>

<style>
    .banner{
        width: 100%;
        height: 340px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    main{
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: white;
    }
    .title{
        width: 100%;
        display: flex; 
    }
    .title h2{
        /* TITULO */
        font-family: 'Exo 2';
        font-style: normal;
        font-weight: 700;
        font-size: 36px;
        line-height: 36px;
        color: #003D73;
        margin-left: 4px;
    }
    .title::before{
        content: '';
        display: inline-block;
        width: 7px;
        height: 35px;
        background: linear-gradient(180deg, #FF9F16 0%, #FCCC04 71%);
    }

    

    @media (max-width:1000px) {
        section{
            padding-left: 16px;
        }
        
    }
    @media (max-width:768px) {
        .title::before{
            height: 17px;
            width: 3px;
        }
        .title h2{
            font-size: 1rem;
            line-height: 17px;
        }
        
    }
    
</style>