import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value++
  }
  const projects = [
    {
      id: 1, name: 'ADM Consult', path: '/imagens/adm-consult.png', type: 'Sites', img: '../assets/imagens/logo-adm.png', cor: 'background: #047577', image1: '../assets/imagens/image1-adm.png',
      prints: ['../assets/imagens/image1-adm.png', '../assets/imagens/image2-adm.png', '../assets/imagens/image3-adm.png', '../assets/imagens/image4-adm.png', '../assets/imagens/image5-adm.png'],
      descricao: 'O site desenvolvido para a ADM Consult foi projetado para atender às necessidades de um site institucional, proporcionando uma plataforma clara e objetiva para apresentar os serviços oferecidos pela empresa. Além disso, incluiu uma seção dedicada a cases de sucesso, destacando conquistas obtidas ao longo dos anos e reforçando a credibilidade da marca. Com foco em atrair novos clientes, o design e a estrutura do site foram planejados para criar uma navegação intuitiva e uma experiência agradável para os visitantes.',
      link: 'https://admconsult.site/', imagem1: '../assets/imagens/image1-adm.png',
      cores: ['#00988C', '#F4F4F4', '#579D97', '#3C4551', '#047577'],
      logos: ['../assets/imagens/logo-adm.png'],
      tecnologias: ['fa-brands fa-html5 fa-5x', 'fa-brands fa-css3-alt fa-5x', 'fa-brands fa-js fa-5x', 'fa-brands fa-python fa-5x'],
      coresTecnologias: ['#E5532D', '#379AD6', '#F0DB4E', '#379AD6']
    },

    {
      id: 2, name: 'Observatório de desigualdades', path: '/imagens/ism.png', type: 'Sites', img: '../assets/imagens/logo-ism.png', cor: 'background: #8B8B8B', image1: '../assets/imagens/image1-ism.png',
      prints: ['../assets/imagens/image1-ism.png', '../assets/imagens/image2-ism.png', '../assets/imagens/image3-ism.png', '../assets/imagens/image4-ism.png', '../assets/imagens/image5-ism.png'],
      descricao: 'O site do Observatório da Desigualdade foi desenvolvido para servir como uma plataforma de disseminação de conhecimento e engajamento em torno dos estudos sobre Insuficiência Socioeconômica Multidimensional (ISM) no Brasil. Resultado de anos de pesquisas dedicadas à análise da Pobreza e Desigualdade, o projeto busca apresentar o conceito de ISM como um fenômeno multidimensional que reflete as complexidades e desigualdades estruturais das sociedades capitalistas modernas.',
      link: 'https://ism.ccsa.ufrn.br/', imagem1: '../assets/imagens/image1-ism.png',
      cores: ['#272245', '#3F4D64', '#788BAB', '#8B8B8B', '#A3411E'],
      logos: ['../assets/imagens/logo-ism.png'],
      tecnologias: ['fa-brands fa-html5 fa-5x', 'fa-brands fa-css3-alt fa-5x', 'fa-brands fa-js fa-5x', 'fa-brands fa-python fa-5x'],
      coresTecnologias: ['#E5532D', '#379AD6', '#F0DB4E', '#379AD6']
    },

    { id: 3, name: 'Georisco', path: '/imagens/georisco.png', type: 'Sites' },
    { id: 4, name: 'Lumus', path: '/imagens/lumus.png', type: 'Sites' },

    {
      id: 5, name: 'Consej', path: '/imagens/consej.png', type: 'Sites', img: '../assets/imagens/logo-consej.png', cor: 'background: #073650', image1: '',
      prints: ['../assets/imagens/image1-consej.png', '../assets/imagens/image2-consej.png', '../assets/imagens/image3-consej.png', '../assets/imagens/image4-consej.png', '../assets/imagens/image5-consej.png'],
      descricao: 'Este é o site institucional desenvolvido para apresentar os serviços oferecidos pela Empresa Júnior de Direito da UFRN. O site tem como objetivo fornecer informações claras e objetivas sobre as soluções jurídicas oferecidas, com foco em praticidade, acessibilidade e qualidade.',
      link: 'https://consej.ufrn.br/', imagem1: '../assets/imagens/image1-consej.png',
      cores: ['#073650', '#006790', '#4AB8CF', '#F0BD7E', '#B18755'],
      logos: ['../assets/imagens/logo-consej.png'],
      tecnologias: ['fa-brands fa-html5 fa-5x', 'fa-brands fa-css3-alt fa-5x', 'fa-brands fa-js fa-5x', 'fa-brands fa-python fa-5x'],
      coresTecnologias: ['#E5532D', '#379AD6', '#F0DB4E', '#379AD6']
    },

    {
      id: 6, name: 'Literatura Brasileira Traduzida', path: '/imagens/literatura.png', type: 'Sistemas', img: '../assets/imagens/logo-literatura.png', cor: 'background: #EF6984', image1: '../assets/imagens/image1-literatura.png',
      prints: ['../assets/imagens/image1-literatura.png', '../assets/imagens/image2-literatura.png', '../assets/imagens/image3-literatura.png', '../assets/imagens/image4-literatura.png', '../assets/imagens/image5-literatura.png'],
      descricao: 'O sistema desenvolvido se dedica à literatura brasileira traduzida para o inglês. Todo conteúdo é o resultado de um projeto de pesquisa interinstitucional que terá continuidade e será constantemente atualizado para que possamos disponibilizar ao público o máximo de informações possíveis sobre a nossa literatura traduzida. As peças radiofônicas da seção de audiolivros são criações artísticas produzidas pelo Laboratório PRO.SOM da UFBA.',
      link: 'https://literaturabrasiltraduzida.com.br/', imagem1: '../assets/imagens/image1-literatura.png',
      cores: ['#310000', '#641630', '#95305A', '#620464', '#EF6984'],
      logos: ['../assets/imagens/logo-literatura.png'],
      tecnologias: ['fa-brands fa-html5 fa-5x', 'fa-brands fa-css3-alt fa-5x', 'fa-brands fa-js fa-5x', 'fa-brands fa-python fa-5x'],
      coresTecnologias: ['#E5532D', '#379AD6', '#F0DB4E', '#379AD6']
    },

    {
      id: 7, name: 'FBC Finanças', path: '/imagens/financas.png', type: 'Sistemas', img: '../assets/imagens/logo-FBC.png', cor: 'background: #5CB85C',
      prints: ['../assets/imagens/image1-fbc.png', '../assets/imagens/image2-fbc.png', '../assets/imagens/image3-fbc.png', '../assets/imagens/image4-fbc.png', '../assets/imagens/image5-fbc.png'],
      descricao: 'O FBC é um sistema que compara dados financeiros com informações da bolsa de valores, fornecendo análises e insights sobre o desempenho do mercado.',
      link: 'https://fbcfinancas.com.br/', imagem1: '../assets/imagens/image1-fbc.png',
      cores: ['#0E4607', '#333333', '#008000', '#5CB85C', '#69CCF7'],
      logos: ['../assets/imagens/logo-FBC.png'],
      tecnologias: ['fa-brands fa-html5 fa-5x', 'fa-brands fa-css3-alt fa-5x', 'fa-brands fa-js fa-5x', 'fa-brands fa-python fa-5x'],
      coresTecnologias: ['#E5532D', '#379AD6', '#F0DB4E', '#379AD6']

    },


    { id: 8, name: 'Tecno Diesel', path: '/imagens/tecno-diesel.png', type: 'E-commerce' },
    { id: 9, name: 'MCI Materiais Cirúrgicos', path: '/imagens/mci.png', type: 'E-commerce' },
    { id: 10, name: 'Affiliates', path: '/imagens/affiliates.png', type: 'Landing Pages' },
    { id: 11, name: 'Grãos de Mostarda', path: '/imagens/grao.png', type: 'Landing Pages' },

    {
      id: 12, name: 'Green Gardens', path: '/imagens/green.png', type: 'Landing Pages', img: '../assets/imagens/logo-gardens.png', cor: 'background:#242C12', image1: '../assets/imagens/image1.png',
      prints: ['../assets/imagens/image1-gardens.png', '../assets/imagens/image2-gardens.png', '../assets/imagens/image3-gardens.png', '../assets/imagens/image4-gardens.png', '../assets/imagens/image5-gardens.png'],
      descricao: `Green gardens é uma empresa de paisagismo que está iniciando no mercado e decidiu começar com sua presença online através de um site.
      O projeto elaborado pela EJECT teve 3 meses de duração, onde fizemos um trabalho de elaboração de identidade visual e sua aplicação no site para atender as demandas de nosso cliente.`,
      link: 'https://juliosoares.pythonanywhere.com', imagem1: '../assets/imagens/image1.png',
      cores: ['#0B0E05', '#242C12', '#525E36', '#808B68', '#9DA68B'],
      logos: ['../assets/imagens/logo1-gardens.png', '../assets/imagens/logo2-gardens.png', '../assets/imagens/logo3-gardens.png', '../assets/imagens/logo4-gardens.png', '../assets/imagens/logo5-gardens.png'],
      tecnologias: ['fa-brands fa-figma fa-4x pt-2', 'fa-brands fa-html5 fa-5x', 'fa-brands fa-css3-alt fa-5x', 'fa-brands fa-js fa-5x', 'fa-brands fa-python fa-5x'],
      coresTecnologias: ['#A55EFF', '#E5532D', '#379AD6', '#F0DB4E', '#379AD6'],
    },
  ];

  return { count, doubleCount, increment, projects }
})
