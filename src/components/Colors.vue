<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'ColorList',
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
        <div class="colors">
            <div class="title">
                <h2>CORES</h2>
            </div>
            <ul>
                <li v-for="(color, index) in projeto.cores" :key="index" :style="{ background: color }">
                    {{ color }}
                </li>
            </ul>
        </div>
    </section>
</template>


<style scoped>
section {
    width: 100%;
    margin-top: 78px;
    
}

.colors {
    max-width: 1160px;
    display: flex;
    flex-direction: column;
    align-items: start;
    margin: auto;
}

ul {
    display: flex;
    gap: 41px;
    margin-top: 37px;
}

li {
    width: 200px;
    height: 53px;
    font-size: 1.25rem;
    font-family: 'Montserrat';
    color: #FFFFFF;
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: center;

}

@media (max-width: 1160px) {
    .colors {
        width: 100%;
    }

    ul {
        gap: 30px;
        flex-wrap: wrap;
    }

    li {
        width: 160px;
    }

}

@media (max-width:768px) {
    section {
        margin-top: 10px;
    }

    ul {
        margin-top: 21px;
        gap: 16px;
    }

    li {
        max-width: 69px;
        font-size: 0.563rem;
        max-height: 45px;

    }
}
</style>