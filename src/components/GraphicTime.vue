<template>
  <div class="grafico-barras">
    <div class="porcentagens">
      <h1 class="otimo" style="">85%</h1>
      <h1 class="bom" style="">10%</h1>
      <h1 class="razoavel" style="">5%</h1>
      <h1 class="ruim" style="">0%</h1>

    </div>
    <BarChart :data="chartData" :options="chartOptions" />
    <div class="labels">
      <h2>Ótimo</h2>
      <h2>Bom</h2>
      <h2>Razoável</h2>
      <h2>Ruim</h2>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, type PropType } from 'vue';
import { Bar } from 'vue-chartjs';
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  type ChartData,
  type ChartOptions,
} from 'chart.js';

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

export default defineComponent({
  name: 'GraficoBarras',
  components: {
    BarChart: Bar,
  },
  setup() {
    const chartData = computed<ChartData<'bar'>>(() => ({
      labels: ['Ótimo', 'Bom', 'Razoável', 'Ruim'],
      datasets: [
        {
          label: 'Porcentagem',
          data: [85, 10, 5, 0.0001],
          backgroundColor: ['#FF9F16', '#BA9A14', '#003D73', '#189BE1'],
          hoverBackgroundColor: ['#E68A00', '#A07F12', '#002B50', '#0F7EBF'],
          borderRadius: 10,
          borderWidth: 1,
          barThickness: 57,
        },
      ],
    }));

    const chartOptions = computed<ChartOptions<'bar'>>(() => ({
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        x: {
          grid: {
            display: false,
          },
          ticks: {
            display:false,
          },
          border:{
            display: false,
          }
         
        },
        y: {
          grid:{
            display:false,
          },
          beginAtZero: true,
          ticks: {
            display: false,
          },
          border:{
            display: false,
          }
        },
      },
      plugins: {
        legend: {
          display: false,
        },
        tooltip: {
          enabled:false,
          callbacks: {
            label: (context) => {
              const value = context.raw;
              return `${value}%`;
            },
          },
        },
        datalabels: {
          anchor: 'end',
          align: 'end',
          formatter: (value: number) => `${value}%`,
          color: '#000',
          font: {
            size: 12,
            weight: 'bold',
          },
        },
      },
    }));


    

    return {
      chartData,
      chartOptions,
    };
  },
});
</script>

<style scoped>
.grafico-barras {
  height: 233px;
  width: 500px;
  margin-bottom: 150px;
}
.porcentagens{
  display: flex; 
  width: 100%;
}
h1{
  font-size: 2.813rem;
  font-family: 'Montserrat';
  font-weight: 700;
  font-style: italic;
  line-height: 30px;
  width: 30px;
}
.otimo{
  position: relative; 
  left: 40px; 
  top: 0px; 
  color:#FF9F16;
}
.bom{
  position: relative; 
  left: 130px; 
  top: 190px; 
  color:#BA9A14;
}
.razoavel{
  position: relative; 
  left: 230px; 
  top: 205px; 
  color:#003D73;
}
.ruim{
  position: relative; 
  left: 310px; 
  top: 215px; 
  color:#189BE1;
}

.labels{
  display: flex;
  gap: 55px;
  width: 100%;
  justify-content: center;
}
.labels h2{
  font-family: 'Montserrat';
  font-size: 1.25rem;
  font-style: italic;
  font-weight: 500;
  color: #003C64;
}

@media (max-width:1000px) {
    .grafico-barras{
      height: 200px;
      margin-top: 150px;
    }
    h1{
    font-size: 2rem;
    }
    .otimo{
      top: 8px;
    }
    .bom{
      top:170px;
      left: 27%;
    }
    .razoavel{
      top:180px;
    }
    .ruim{
      top: 190px;
      left: 65%;
    }
    .labels h2{
    font-size: 0.875rem;
  }
  .labels{
    gap: 75px;
  }
  
}


@media (max-width: 600px) {
  .grafico-barras {
    height: 150px;
    width: 100%;
  }
  h1{
    font-size: 2rem;
  }
  .otimo{
    left: 9%;
    top: 5px;
  }
  .bom{
    top: 125px;
    left: 29%;
  }
  .razoavel{
    top:135px;
    left: 49%;
  }
  .ruim{
    left:67%;
    top:140px;
  }
  .grafico-barras .chartjs-render-monitor{
    font-size: 14px !important;
  }
  .labels{
    gap: 15%;
  }
  .labels h2{
    font-size: 0.875rem;
  }
}
@media (max-width:514px) {
  .ruim{
    left: 65%;
  }
}
@media (max-width:490px) {
  .bom{
    left: 27%;
  }
  .razoavel{
    left: 46%;
  }
  
}
@media (max-width:440px) {
  .ruim{
    left: 62%;
  }
  .razoavel{
    left: 44%;
  }
  .bom{
    left: 25%;
  }
  
}
@media (max-width:400px) {
  .labels{
    gap:52px;
  }
  .ruim{
    left: 59%;
  }
  .razoavel{
    left: 42%;
  }
  
}
@media (max-width:365px){
  .labels{
    gap: 40px;
  }
  .ruim{
    left: 55%;
  }
  .bom{
    left: 23%;
  }
  .razoavel{
    left: 40%;
  }
}
</style>