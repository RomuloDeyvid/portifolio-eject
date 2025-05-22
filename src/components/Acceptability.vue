<template>
  <section>
    <div class="secao-aceitabilidade">
      <div class="firs-coll">
        <div class="content">
          <div class="title">
            <h2>ACEITABILIDADE</h2>
          </div>
          <div class="topico" @click="showGraph('indicacao')">
            <img src="../assets/imagens/seta-laranja.svg" alt="Seta laranja">
            <p>
              Você indicaria os serviços da EJECT para um amigo?
            </p>
          </div>
          <div class="topico" @click="showGraph('time')">
            <img src="../assets/imagens/seta-laranja.svg" alt="Seta laranja">
            <p>
              Como você avalia o time de desenvolvimento?
            </p>
          </div>
          <div class="topico" @click="showGraph('entrega')">
            <img src="../assets/imagens/seta-laranja.svg" alt="Seta laranja">
            <p>
              Como você avalia a entrega final?
            </p>
          </div>
          <span>Os gráficos são gerados a partir de respostas do formulário de satisfação do cliente</span>
        </div>
      </div>
      <div class="second-coll-indicacao" v-if="currentGraph === 'indicacao'">
        <Graphic />
      </div>
      <div class="second-coll-time" v-if="currentGraph === 'time'">
        <GraphicTime />
      </div>
      <div class="second-coll-entrega" v-if="currentGraph === 'entrega'">
        <GraphicEntrega />
      </div>
      <div class="frase-mobile">
        Os gráficos são gerados a partir de respostas do formulário de satisfação do cliente
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Graphic from './Graphic.vue';
import GraphicEntrega from './GraphicEntrega.vue';
import GraphicTime from './GraphicTime.vue';

const currentGraph = ref<string>('indicacao');

const showGraph = (graphName: string): void => {
  currentGraph.value = graphName;
};
</script>

<style scoped>
.frase-mobile {
  display: none;
}

section {
  height: 574px;
  background-color: #A9E1FF;
}

.secao-aceitabilidade {
  width: 100%;
  display: grid;
  grid-template-columns: 50% 50%;
  margin: auto;
}

.firs-coll {
  height: 100%;
  border-radius: 0 10px 10px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 46px;
  width: 10%;
  margin: auto;
}

.content {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.topico {
  display: flex;
  align-items: start;
  cursor: pointer;
  width: 100%;
}

.topico img {
  margin-top: 8px;
  margin-right: 5px;
  width: 10px;
  height: 17px;
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

p {
  font-family: 'Montserrat';
  font-size: 1.25rem;
  font-weight: 600;
  color: #003D73;
  width: 330px;
}

.second-coll-indicacao,
.second-coll-time,
.second-coll-entrega {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 90%;
  margin: auto;
}

span {
  font-family: 'Montserrat';
  font-size: 0.8rem;
  font-style: italic;
  color: #003D73;
  margin-top: 180px;
  font-weight: 300;
  margin-top: 100px;
}

/* Responsive styles */
@media (min-width: 360px) and (max-width: 499px) {
  section {
    height: auto;
  }
  
  .secao-aceitabilidade {
    grid-template-columns: 1fr;
    width: 100%;
  }
  
  .firs-coll {
    width: 90%;
    padding: 20px 0;
  }
  
  .title h2 {
    font-size: 1.5rem;
  }
  
  p {
    width: 100%;
    font-size: 1rem;
  }
  
  .second-coll-indicacao,
  .second-coll-time,
  .second-coll-entrega {
    width: 95%;
    height: 200px;
  }
  
  span {
    display: none;
  }
  
  .frase-mobile {
    display: block;
    font-family: 'Montserrat';
    font-size: 0.8rem;
    font-style: italic;
    color: #003D73;
    width: 80%;
    margin: 20px auto;
    padding-bottom: 20px;
  }
}

@media (min-width: 500px) and (max-width: 699px) {
  section {
    height: auto;
  }
  
  .secao-aceitabilidade {
    grid-template-columns: 1fr;
    width: 90%;
  }
  
  .firs-coll {
    width: 100%;
    padding: 30px 0;
  }
  
  .second-coll-indicacao,
  .second-coll-time,
  .second-coll-entrega {
    width: 100%;
    height: 200px;
  }
  
  span {
    display: none;
  }
  
  .frase-mobile {
    display: block;
    font-family: 'Montserrat';
    font-size: 0.8rem;
    font-style: italic;
    color: #003D73;
    width: 80%;
    margin: 30px auto;
    padding-bottom: 20px;
  }
}

@media (min-width: 700px) and (max-width: 999px) {
  .secao-aceitabilidade {
    width: 85%;
  }
  
  .firs-coll {
    width: 85%;
  }

  .second-coll-indicacao,
  .second-coll-time,
  .second-coll-entrega {
    height: 215px;
    width: 70%;
  }

  .frase-mobile {
    display: block;
    font-family: 'Montserrat';
    font-size: 0.8rem;
    font-style: italic;
    color: #003D73;
    width: 60%;
    margin: 50px auto 0 auto;
    padding-bottom: 20px;
  }
}

@media (min-width: 1000px) and (max-width: 1300px) {
  .secao-aceitabilidade {
    width: 90%;
  }
}

@media (max-width: 1000px) {
  .title h2 {
    font-size: 1rem;
  }

  section {
    display: flex;
    flex-direction: column;
    height: auto;
    padding-left: 0;
    max-width: 100%;
  }

  .secao-aceitabilidade {
    grid-template-columns: 1fr;
  }

  .firs-coll {
    padding-top: 20px;
    padding-bottom: 17px;
    align-items: start;
    padding-left: 22px;
  }

  .second-coll-indicacao,
  .second-coll-time,
  .second-coll-entrega {
    height: 215px;
    width: 100%;
    
  }

  span {
    display: none;
  }

  .topico img {
    margin-top: 0;
  }

  .topico p {
    width: 307px;
    font-size: 0.75rem;
  }

  .title {
    font-size: 1rem;
  }

  .title::before {
    width: 3px;
    height: 17px;
    margin-top: 10px;
  }
}
</style>