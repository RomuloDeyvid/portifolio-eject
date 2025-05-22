<script lang="ts">
import { defineComponent } from 'vue';


export default defineComponent({
    name: 'ImageGallery',
    props: {
        projeto: {
            type: Object,
            required: true
        }
    },
    data() {
        return {
            currentImage: this.projeto.prints[0],


        };
    },
    setup(props) {
        const image1 = props.projeto.prints[0]
        return image1
    },
    methods: {
        setImage(imageUrl: string) {
            this.currentImage = imageUrl;
        }
    }

}

)

</script>

<template>
    <section>
        <div class="title">
            <h2>{{ projeto.name }}</h2>
        </div>
        <div class="content-gallery">

            <div class="image-gallery">
                
                <div class="large-image">
                    <img :src="currentImage" alt="Imagem Grande">
                </div>

                
                <div class="thumbnails">
                    <img v-for="(print, index) in projeto.prints" :key="index" :src="print" alt="miniatura"
                        @click="setImage(print)" :class="{ 'selected-thumbnail': currentImage === print }"
                        class="thumbnail-image" />
                </div>
            </div>
            <div class="textGallery">
                <p class="descricao">{{ projeto.descricao }}</p>
                <a :href="projeto.link"><button>VER MAIS</button></a>
            </div>
        </div>
    </section>

</template>

<style scoped>
section {
    padding-top: 131px;
}

.content-gallery {
    max-width: 1160px;
    background-color: white;
    display: flex;
    margin-top: 37px;
}

.image-gallery {
    max-width: 760px;
}

.large-image {
    max-width: 760px;
    height: 504px;
}

.thumbnails {
    display: flex;
    justify-content: space-between
}

.thumbnails img {
    max-width: 160px;
    height: 123px;
    cursor: pointer;
}

.thumbnail-image.selected-thumbnail {
    transform: scale(1.0);
    border: 2px solid #003D73;
}

.textGallery {
    max-width: 360px;
    height: 504px;
    margin-left: 40px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.textGallery p {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 30px;
    text-align: justify;

    color: #000000;
}

.textGallery button {
    width: 164px;
    height: 40px;
    background: #003D73;
    font-size: 25px;
    line-height: 30px;
    font-family: 'Exo 2';
    color: #ffffff;
    border-radius: 10PX;
}

@media (max-width: 880px) {
    .image-gallery {
        max-width: 100%;
    }

    .thumbnails img {
        max-width: 100px;
        max-height: 90px;
    }

    .large-image {
        max-width: 600px;
        height: auto;
    }

    .textGallery {
        height: auto;
        padding-right: 10px;
    }
    .textGallery p {
    
    font-size: 14px;
    line-height: 15px;
    
}
}


@media (max-width:768px) {
    .content-gallery {
        flex-direction: column;
        max-width: 600px;
    }

    .textGallery {
        max-width: 600px;
        margin: 0;
    }

    section {
        padding: 24px;
        width: 100%;
    }

    .large-image {
        max-width: 100%;
    }

    .thumbnails img {
        max-width: 70px;
        height: 62px;
    }

    .thumbnails {
        max-width: 600px;
    }

    .textGallery p {
        margin-top: 14px;
        font-size: 0.75rem;
        font-weight: 400;
        line-height: 16.43px;
    }

    .textGallery button {
        margin-top: 1em;
        width: 100px;
        height: 30px;
        font-size: 0.75rem;
        line-height: 16.43px;
        
    }
}
</style>