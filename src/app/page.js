/* eslint-disable @next/next/no-img-element */
import { ContentBox } from "@/components/ContentBox/ContentBox";
import ParticleHero from "@/components/ParticleHero/ParticleHero";
import { FaFaceSmileWink } from "react-icons/fa6";
import { DisplayProjects } from "@/components/DisplayProjects/DisplayProjects";


export default function Home() {
    return (
        <div>
            <ParticleHero/>

            <div className="container max-w-(--breakpoint-xl) mx-auto px-4">
                <span className="flex items-center text-2xl px-1 my-4 font-medium">
                    <FaFaceSmileWink className="inline"/>&nbsp;Olá mundo!
                </span>
                <ContentBox className="my-4">
                    <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-4 justify-items-center items-center">
                        <div className="col-span-2">
                            {/* <h2 className="mb-2 text-lg font-medium">Sobre Mim</h2> */}
                            <p className="mb-2">Meu nome é Ryan Guimarães e sou Desenvolvedor com foco em <strong>React</strong> e <strong>Node.js</strong>. Tenho formação técnica e superior em andamento em Análise e Desenvolvimento de Sistemas, e uma base sólida em desenvolvimento web adquirida tanto em ambiente corporativo quanto em projetos pessoais.</p>
                            <p className="mb-2">Atuei profissionalmente com tecnologias como <strong>Bootstrap, JQuery, C#, ASP.NET MVC, Oracle SQL e JavaScript,</strong> desenvolvendo sistemas internos e automatizando processos em uma grande empresa de distribuição. Nos meus estudos e projetos pessoais, me aproximei do ecossistema <strong>React</strong> através do <strong>Next.js</strong> e venho me aprofundando com entusiasmo em práticas modernas de Front-End, como o uso do <strong>Zustand</strong> para gerenciamento de estado e a estilização com <strong>TailwindCSS</strong> — duas ferramentas que me ajudam a construir interfaces responsivas e agradáveis de forma eficiente.</p>
                            <p className="mb-2">Tenho conhecimento funcional de <strong>Redux</strong> e <strong>MobX</strong>, e estou motivado a utilizá-los com maior profundidade conforme as necessidades do time. Possuo boas noções de responsividade, versionamento com <strong>Git</strong> e estou habituado a trabalhar em ambientes que valorizam metodologias ágeis.</p>
                        </div>
                        <div>
                            <div className="relative aspect-square w-[300px] xl:w-[350px]">
                                <img src="/images/minha-foto.jpeg" alt="Jovem sorrindo em uma praça com árvores e bancos ao fundo, em um dia claro." />
                            </div>

                        </div>
                    </div>
                </ContentBox>
                <ContentBox className="my-4">
                    <p className="mb-2">Criei este espaço com muito cuidado para complementar meu currículo e, principalmente, para mostrar um pouco do que venho aprendendo e construindo ao longo da minha jornada.</p>
                    <p className="mb-2">
                        Este portfólio foi desenvolvido utilizando <strong>React.js</strong> e <strong>Next.js</strong>, framework moderno que proporciona alto desempenho e uma ótima experiência para o usuário. Para o gerenciamento de estado, implementei a biblioteca <strong>Zustand</strong>, garantindo leveza e simplicidade na arquitetura da aplicação. A estilização da interface foi feita com <strong>TailwindCSS</strong>, otimizando o design responsivo e a produtividade no desenvolvimento front-end. Também integrei bibliotecas <strong>JavaScript</strong> para complementar funcionalidades e melhorar a interatividade da aplicação.
                    </p>
                    <p className="mb-2">
                        Minha história com a programação começou antes mesmo do curso, quando dei meus primeiros passos escrevendo códigos simples em <strong>Python</strong>. Foi ali que descobri um novo mundo — e logo em seguida, me encantei pelo desenvolvimento web. Sempre fui fascinado(a) pelas infinitas possibilidades que a internet oferece, seja no entretenimento, na informação ou na forma como conecta pessoas e ideias.
                    </p>
                    <p className="mb-2">
                        Hoje, sigo explorando esse universo com curiosidade e dedicação. E é com esse espírito que espero que possamos trabalhar juntos, trazendo soluções criativas e presença digital para o seu projeto ou negócio.
                    </p>

                </ContentBox>
                <DisplayProjects/>
            </div>
        </div>
    );
}
