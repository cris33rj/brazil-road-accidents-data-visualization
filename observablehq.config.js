// See https://observablehq.com/framework/config for documentation.
export default {
  title: "Visualização de Dados",

  pages: [
    {
      name: "1 - Introdução",
      open: false,
      pages: [
        {name: "1.1 - Apresentação", path: "/1.1-Apresentacao"},
      ]
    },
    {
      name: "2 - Desenvolvimento",
      open: false,
      pages: [
        {name: "2.1 - Visão geral", path: "/2.1-Visao_geral"},
        {name: "2.2 - Análise regional", path: "/2.2-Analise_regional"},
        {name: "2.3 - Gravidade de Acidentes", path: "/2.3-Gravidade_de_acidentes"},
        {name: "2.4 - Tipos e causas de acidentes", path: "/2.4-Tipos_e_causas_de_acidentes"},
        {name: "2.5 - Locais e condições dos acidentes", path: "/2.5-Locais_e_condicoes_dos_acidentes"},
      ]
    },
    {
      name: "3 - Fechamento",
      open: false,
      pages: [
        {name: "3.1 - Discussão", path: "/3.1-Discussao"},
        {name: "3.2 - Conclusão", path: "/3.2-Conclusao"},
      ]
    }
  ],

  theme: "light",
};
