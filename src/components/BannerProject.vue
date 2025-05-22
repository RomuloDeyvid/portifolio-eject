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
  overflow: hidden;
  position: relative;
}

.banner-logo {
  max-width: 80%;
  max-height: 80%;
  object-fit: contain;
  transition: all 0.3s ease;  
}

/* Tablets */
@media (max-width: 1024px) {
  .banner {
    height: 260px;
  }
  
  .banner-logo {
    max-width: 85%;
    max-height: 85%;
  }
}

/* Mobile */
@media (max-width: 768px) {
  .banner {
    height: 174px;
  }
  
  .banner-logo {
    max-width: 90%;
    max-height: 90%;
  }
}

/* Mobile pequeno */
@media (max-width: 480px) {
  .banner {
    height: 150px;
  }
}
</style>