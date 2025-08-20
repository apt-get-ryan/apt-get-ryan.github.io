const wildBeastDescription = <>
  <p>
    Wild Beast é um site leve visualmente que aplica o uso eficiente de <strong>CSS Grid</strong> e <strong>Flexbox</strong> para criar um <em className="underline decoration-blue-600">layout responsivo</em>, fluído e esteticamente moderno. Estruturado para se adaptar perfeitamente a diferentes tamanhos de tela, o projeto equilibra o uso de <strong>Grid CSS</strong> para organizar o conteúdo e <strong>Flexbox</strong> para lidar com ajustes finos de alinhamentos e espaçamentos.
  </p>
  <a target="_blank" className="underline mb-2 text-center decoration-blue-600" href="https://wild-beast-apt-get-ryan.vercel.app/">Clique para ver funcionando!</a>


</>


const instagramCloneDescription = <>
  <p>
    Um clone da interface de login do Instagram utilizando <strong>Tailwind CSS</strong>, totalmente <em className="underline decoration-blue-600">responsivo</em>. O projeto recria a tela de autenticação do Instagram com foco em boas práticas de <em className="underline decoration-blue-600">front-end</em> com <strong>TailwindCSS</strong>. <strong>Flexbox</strong> e <strong>Grid responsivos</strong>, garantindo adaptação perfeita em dispositivos móveis, tablets e desktops.
  </p>
  <a target="_blank" className="underline mb-2 text-center decoration-blue-600" href="https://tailwind-instagram-clone-apt-get-ryan.vercel.app/">Clique para ver funcionando!</a>

</>
const calculadoraReactDescription = <>
  <p>Uma calculadora interativa com <strong>React e Tailwind CSS</strong>, com estado global gerenciado via <strong>Context API</strong>. O projeto permite que o usuário interaja tanto clicando nos botões quanto usando o teclado, oferecendo uma experiência intuitiva e responsiva.</p>
  <a target="_blank" className="underline mb-2 text-center decoration-blue-600" href="https://calculator-react-apt-get-ryan.vercel.app">Clique para ver funcionando!</a>

</>

const todoDescription = <>
  <p>
    Um Todo List moderno com <strong>Next.js</strong>, 
    utilizando <strong>Zustand</strong> para gerenciamento de estado 
    global, garantindo atualização eficiente e compartilhamento
    de dados entre componentes. Para criar uma <em className="underline decoration-blue-600">experiência de usuário
      interativa
    </em>, utilizei <strong>Radix UI</strong> para modais acessíveis e <strong>TipTap</strong> como 
    editor de texto rico, permitindo edição avançada das tarefas.
  </p>
  <a target="_blank" className="underline mb-2 text-center decoration-blue-600" href="https://next-todo-list-apt-get-ryan.vercel.app/">Clique para ver funcionando!</a>
</>


const loginValidacaoDescription = <>
  <p>Um formulário de registro com <strong>Javascript</strong> puro. Há alguns <strong>critérios de validação</strong> para a senha que devem ser cumpridos antes que o <em className="underline decoration-blue-600">front-end</em> permita o formulário ser enviado.</p>
  <a target="_blank" className="underline mb-2 text-center decoration-blue-600" href="https://formulario-registro-validacao-apt-get-ryan.vercel.app/">Clique para ver funcionando!</a>

</>

//https://formulario-registro-validacao-apt-get-ryan.vercel.app/


const projectsData = [
  {
    imageSources: [ 
      "/images/projects/frontend/wildbeasts-mobile.png",
      "/images/projects/frontend/wildbeasts.png",
    ],
    altText: "Captura do projeto Wildbeast",
    title: "Wildbeast",
    description: wildBeastDescription,
    githubLink: "https://github.com/apt-get-ryan/wild-beast"
  },
  {
    imageSources: [
      "/images/projects/frontend/login.png"
    ],
    altText: "Captura do projeto de Login com validação (front-end)",
    title: "Login com validação",
    description: loginValidacaoDescription,
    githubLink: "https://github.com/apt-get-ryan/formulario-registro-validacao"
  },
  {
    imageSources: [
      "/images/projects/frontend/instagram-clone-desktop.png",
      "/images/projects/frontend/instagram-clone-mobile.png",
    ],
    title: "Clone da interface de login do Instagram",
    description: instagramCloneDescription,
    altText: "Captura do clone da interface de login do Instagram responsiva",
    githubLink: "https://github.com/apt-get-ryan/tailwind-instagram-clone"
  },
  {
    imageSources: ["/images/projects/frontend/react-calculator.jpg"],
    title: "Calculadora React",
    description: calculadoraReactDescription,
    altText: "Captura da Calculadora React",
    githubLink: ""
  },
  {
    imageSources: [
      "/images/projects/frontend/next-todo-list.png",
      "/images/projects/frontend/next-todo-list-add.png",

    ],
    title: "Next Todo List",
    description: todoDescription,
    altText: "Caltura do projeto Todo List em Next"
  }
];

export default projectsData;