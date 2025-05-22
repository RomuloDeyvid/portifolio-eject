<template>
    <div class="porcen-sim">
      <h2>{{porcentagemSim}}%</h2>
      <p>Sim</p>
    </div>
    <div class="graphic">
      <DoughnutChart :data="chartData" :options="chartOptions" />
    </div>
    <div class="nao-identificado">
      <h2>{{ porcentagemNaoIdentificado }}%</h2>
      <p>Não identificado</p>
    </div>

  </template>
  
  <script lang="ts">
  import { defineComponent, computed, type PropType } from 'vue';
  import { Doughnut } from 'vue-chartjs';
  import { Chart as ChartJS, ArcElement, Tooltip, Legend, type ChartData, type ChartOptions } from 'chart.js';
  
  ChartJS.register(ArcElement, Tooltip, Legend);
  
  export default defineComponent({
    name: 'GraficoRosca', // Nome mais intuitivo em português
    components: {
      DoughnutChart: Doughnut,
    },
    props: {
      porcentagemNaoIdentificado: {
        type: Number as PropType<number>,
        default: 15,
      },
      porcentagemSim: {
        type: Number as PropType<number>,
        default: 85,
      },    
    },
    setup(props) {
      const chartData = computed<ChartData<'doughnut'>>(() => ({
        labels: ['Sim', 'Não Identificado'], // Labels em português
        datasets: [
          {
            data: [props.porcentagemSim, props.porcentagemNaoIdentificado],
            backgroundColor: ['#FF9F16', '#BA9A14'],
            hoverBackgroundColor: ['#FF8C00', '#8B8B00'],
            borderWidth:0,
            
          },
        ],
      }));
  
      const chartOptions = computed<ChartOptions<'doughnut'>>(() => ({
        responsive: true,
        maintainAspectRatio: false,
        rotation: 170,
        plugins: {
          legend: {
            display: false,
          },
          datalabels: {
            color: 'white',
            formatter: (value: number, context: { dataset: any; }) => {
              const dataset = context.dataset;
              const total = dataset.data.reduce((acc: any, val: any) => acc + val, 0);
              const percentage = Math.round((value / total) * 100);
              return `${percentage}%`;
            },
          },
          tooltip: {
            callbacks: {
              label: (context) => {
                const label = context.label;
                const value = context.formattedValue;
                return `${label}: ${value}%`;
              },
            },
          },
        },
        cutout: '40%',
      }));
  
      return {
        chartData,
        chartOptions,
      };
    },
  });
  </script>
<style scoped>

  .porcen-sim{
    height: 250px;
    width: 110px;
  }
  .porcen-sim h2{
    font-family: 'italic';
    font-size: 3.125rem;
    color: #FF9F16;
    font-weight: 700;
    height: 50px;
  }
  .porcen-sim p{
    font-family: 'italic';
    font-size: 1.25rem;
    color: #FF9F16;
    font-weight: 500;
    width: 50px;
  }
  .nao-identificado{
    height: 350px;
    width: 110px;
    display: flex;
    flex-direction: column;
    justify-content: end;
    align-items: end;
    margin-left: 15px;
  }
  .nao-identificado h2{
    font-size: 3.125rem;
    color: #BA9A14;
    font-weight: 700;
    height: 60px;
    width: 150px;

  }
  
  .nao-identificado p{
    font-family: 'italic';
    font-size: 1.25rem;
    color: #BA9A14;
    font-weight: 500;
    width: 150px;
  }
  span{
    display: none;
  }
  .graphic canvas{
    width: 340px;
  }
  @media(max-width: 1130px){
    .porcen-sim{
      width: 60px;
    }
    .porcen-sim h2, .nao-identificado h2{
      font-size: 2.25rem;
    }
  }

  @media (max-width:1000px) {
    .porcen-sim h2, .nao-identificado h2{
      font-size: 2.5rem;
    }
    .porcen-sim p, .nao-identificado p{
      font-size: 0.75rem;
    }
    .porcen-sim{
      padding-top: 30px;
    }
    .nao-identificado{
      margin-left: 0;
      padding-bottom: 40px;
    }
    span{
      display: block;
      font-family: 'Montserrat';
      font-style: italic;
      font-size:0.563rem ;
    }
    .graphic canvas{
      height: 144px !important;
      width: 144px !important;
    } 
  }
  @media (max-width:600px){
    .porcen-sim{
      margin-left: 20px;
    }
  }
</style>
