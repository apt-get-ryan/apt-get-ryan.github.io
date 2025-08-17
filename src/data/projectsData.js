const wildBeastDescription = <p>
    Wild Beast é um site leve visualmente que aplica o uso eficiente de <strong>CSS Grid</strong> e <strong>Flexbox</strong> para criar um <em className="underline !decoration-blue-600">layout responsivo</em>, fluído e esteticamente moderno. Estruturado para se adaptar perfeitamente a diferentes tamanhos de tela, o projeto equilibra o uso de <strong>Grid CSS</strong> para organizar o conteúdo e <strong>Flexbox</strong> para lidar com ajustes finos de alinhamentos e espaçamentos.
  </p>


//"Projeto WildBeasts desenvolvido a partir do tutorial da Origamid, com foco em responsividade utilizando CSS Grid e boas práticas de layout no frontend."
const projectsData = [
  {
    imageSources: [ 
      "/images/projects/frontend/wildbeasts-mobile.png",
      "/images/projects/frontend/wildbeasts.png",
    ],
    altText: "Captura do projeto Wildbeast",
    title: "Wildbeast",
    description: wildBeastDescription
  },
  {
    imageSources: [
      "/images/projects/frontend/login.png"
    ],
    title: "Login com validação",
    description: "Um formulário de registro baseado em um tutorial da Fireship, porém com Javascript puro. Há alguns critérios de validação para a senha que devem ser cumpridos."
  },
  {
    imageSources: ["/images/minha-foto.jpeg"],
    title: "Placeholder",
    description: "Placeholder",
    altText: "Teste 3"
  }
];

export default projectsData;