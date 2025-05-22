<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: "Logos",
    props: {
        projeto: {
            type: Object,
            required: true
        }

    }

})

</script>
<template>
    <section>
        <div class="logos">
            <div class="title">
                <h2>LOGOTIPO</h2>
            </div>
            <div class="lista">
                <ul>
                    <li v-for="(logo, index) in projeto.logos" :key="index">

                        <img :src="logo" :alt="logo" class="logo" />
                    </li>
                </ul>
            </div>
        </div>
    </section>
</template>

<style scoped>
section {
    margin-top: 76px;
    width: 100%;
    display: flex;
    justify-content: center;
}

.logo{
    width: 300px;
}

.logos {
    width: 1160px;
    display: flex;
    flex-direction: column;
}

.lista {
    display: flex;
    
}

img {
    width: 80%;
    object-fit: cover;
}

ul {
    max-width: 760px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin-top: 70px;
    flex-wrap: wrap;
    row-gap: 150px;
    column-gap: 30px;
}

li {
    padding: 10px;
    text-align: center;
    flex: 1 0 30%;
    /* Define uma largura base de 30% para cada item */
    box-sizing: border-box;
}

@media (max-width: 803px) {
    img {
        max-width: 50%;
    }

    .logos {
        flex-direction: column;
    }

    ul {
        row-gap: 50px;
    }
}

@media (max-width:768px) {
    section {
        margin-top: 24px;
    }

    ul {
        row-gap: 39px;
        column-gap: 10px;
        margin-top: 18px;
    }

    img {
        max-width: 98px;
    }
}
</style>