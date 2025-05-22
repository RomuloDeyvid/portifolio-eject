<template>
    <div class="porcen-otimo">
      <h2>{{ porcentagemOtimo }}%</h2>
      <p>Ótimo</p>
    </div>
    <div class="graphic">
      <DoughnutChart :data="chartData" :options="chartOptions" />
    </div>
    <div class="porcen-bom">
      <h2>{{ porcentagemBom }}%</h2>
      <p>Bom</p>
    </div>
    <div class="porcen-razoavel">
      <h2>{{ porcentagemRazoavel }}%</h2>
      <p>Razoável</p>
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
      porcentagemOtimo: {
        type: Number as PropType<number>,
        default: 80,
      },
      porcentagemBom: {
        type: Number as PropType<number>,
        default: 15,
      },
      porcentagemRazoavel: {
        type: Number as PropType<number>,
        default: 5,
      },
    },
    setup(props) {
      const chartData = computed<ChartData<'doughnut'>>(() => ({
        labels: ['Ótimo', 'Bom', 'Razoável'], // Labels em português
        datasets: [
          {
            data: [props.porcentagemOtimo, props.porcentagemBom, props.porcentagemRazoavel],
            backgroundColor: ['#FF9F16', '#BA9A14', '#003C64'], // Cores para os segmentos
            hoverBackgroundColor: ['#FF8C00', '#FFB84D', '#336B8E'],
            borderWidth: 0,
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
  .porcen-otimo {
    height: 250px;
    width: 110px;
    margin-left: 100px;
  }
  .porcen-otimo h2 {
    font-family: 'italic';
    font-size: 3.125rem;
    color: #FF9F16;
    font-weight: 700;
    height: 50px;
  }
  .porcen-otimo p {
    font-family: 'italic';
    font-size: 1.25rem;
    color: #FF9F16;
    font-weight: 500;
    width: 50px;
  }
  .porcen-bom {
    height: 250px;
    width: 110px;
    position: relative;
    top: 190px;
  }
  .porcen-bom h2 {
    font-family: 'italic';
    font-size: 3.125rem;
    color: #BA9A14;
    font-weight: 700;
    height: 50px;
  }
  .porcen-bom p {
    font-family: 'italic';
    font-size: 1.25rem;
    color:#BA9A14;
    font-weight: 500;
    width: 50px;
  }
  .porcen-razoavel {
    height: 250px;
    width: 110px;
    position: relative;
    top:285px;
    left: -225px;
  }
  .porcen-razoavel h2 {
    font-family: 'italic';
    font-size: 3.125rem;
    color:#003C64;
    font-weight: 700;
    height: 50px;
  }
  .porcen-razoavel p {
    font-family: 'italic';
    font-size: 1.25rem;
    color: #003C64;
    font-weight: 500;
    width: 50px;
  }
  .graphic canvas {
    width: 340px;
  }
  @media(max-width: 1130px) {
    .porcen-otimo, .porcen-bom, .porcen-razoavel {
      width: 60px;
    }
    .porcen-otimo{
        margin-left: 20px;
    }
    .porcen-otimo h2, .porcen-bom h2, .porcen-razoavel h2 {
      font-size: 2.25rem;
      height: 35px;
    }
    .porcen-razoavel{
        left: -190px;
    }
  }
  
  @media (max-width:1000px) {
    .porcen-otimo h2, .porcen-bom h2, .porcen-razoavel h2 {
      font-size: 2rem;
    }
    .porcen-otimo p, .porcen-bom p, .porcen-razoavel p {
      font-size: 0.75rem;
    }
    .porcen-otimo {
      padding-top: 30px;
    }
    .porcen-bom {
      padding-bottom: 40px;
      top: 150px;
    }
    .porcen-razoavel{
        top: 190px;
        left: -130px;
    }
    .graphic canvas {
      height: 144px !important;
      width: 144px !important;
    }
  }
  </style>
  