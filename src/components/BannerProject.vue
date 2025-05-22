<template>
    <div class="banner" :style="projeto.cor">
        <img :src="projeto.img" alt="Logo do Projeto" class="banner-logo">
    </div>

</template>

<script lang="ts">
import type { Projeto } from 'types';
import { defineComponent } from 'vue';
import type { PropType } from 'vue';

export default defineComponent({
    name: 'banner-project',
    props: {
        projeto: {
            type: Object as PropType<Projeto>,
            required: true
        }
    }
});
</script>

<style scoped>
.banner {
    width: 100%;
    height: 340px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.banner-logo{
    width: 300px;
    height: 300px;
}

@media (max-width: 768px) {
    .banner {
        height: 174px;
    }

    img {
        height: 76px;
    }

}
</style>