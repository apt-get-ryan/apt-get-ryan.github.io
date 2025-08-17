import { ContentBox } from "@/components/contentBox/ContentBox";
import ParticleHero from "@/components/particleHero/ParticleHero";
import { FaFaceSmileWink } from "react-icons/fa6";
import Image from "next/image";
import { DisplayProjects } from "@/components/displayProjects/DisplayProjects";
import motion from "motion"


export default function Home() {
    return (
        <div>
            <ParticleHero/>

            <div className="container max-w-screen-xl mx-auto px-4">
                <span className="flex items-center text-2xl px-1 my-4 font-medium">
                    <FaFaceSmileWink className="inline"/>&nbsp;Olá mundo!
                </span>
                <ContentBox className="my-4">
                    <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-4 justify-items-center items-center">
                        <div className="col-span-2">
                            {/* <h2 className="mb-2 text-lg font-medium">Sobre Mim</h2> */}
                            <p className="mb-2">Meu nome é Ryan Guimarães e sou Desenvolvedor com foco em <strong>React</strong>. Tenho formação técnica e superior em andamento em Análise e Desenvolvimento de Sistemas, e uma base sólida em desenvolvimento web adquirida tanto em ambiente corporativo quanto em projetos pessoais.</p>
                            <p className="mb-2">Atuei profissionalmente com tecnologias como <strong>Bootstrap, JQuery, C#, ASP.NET MVC, Oracle SQL e JavaScript,</strong> desenvolvendo sistemas internos e automatizando processos em uma grande empresa de distribuição. Nos meus estudos e projetos pessoais, me aproximei do ecossistema <strong>React</strong> através do <strong>Next.js</strong> e venho me aprofundando com entusiasmo em práticas modernas de Front-End, como o uso do <strong>Zustand</strong> para gerenciamento de estado e a estilização com <strong>TailwindCSS</strong> — duas ferramentas que me ajudam a construir interfaces responsivas e agradáveis de forma eficiente.</p>
                            <p className="mb-2">Tenho conhecimento funcional de <strong>Redux</strong> e <strong>MobX</strong>, e estou motivado a utilizá-los com maior profundidade conforme as necessidades do time. Possuo boas noções de responsividade, versionamento com <strong>Git</strong> e estou habituado a trabalhar em ambientes que valorizam metodologias ágeis.</p>
                        </div>
                        <div>
                            <div className="relative aspect-square w-[300px] xl:w-[350px]">
                                <Image src="/images/minha-foto.jpeg" alt="Jovem sorrindo em uma praça com árvores e bancos ao fundo, em um dia claro." fill />
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
        

    // <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
    //   <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
    //     <Image
    //       className="dark:invert"
    //       src="/next.svg"
    //       alt="Next.js logo"
    //       width={180}
    //       height={38}
    //       priority
    //     />
    //     <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
    //       <li className="mb-2">
    //         Get started by editing{" "}
    //         <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
    //           src/app/page.js
    //         </code>
    //         .
    //       </li>
    //       <li>Save and see your changes instantly.</li>
    //     </ol>

    //     <div className="flex gap-4 items-center flex-col sm:flex-row">
    //       <a
    //         className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
    //         href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         <Image
    //           className="dark:invert"
    //           src="/vercel.svg"
    //           alt="Vercel logomark"
    //           width={20}
    //           height={20}
    //         />
    //         Deploy now
    //       </a>
    //       <a
    //         className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
    //         href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         Read our docs
    //       </a>
    //     </div>
    //   </main>
    //   <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
    //     <a
    //       className="flex items-center gap-2 hover:underline hover:underline-offset-4"
    //       href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <Image
    //         aria-hidden
    //         src="/file.svg"
    //         alt="File icon"
    //         width={16}
    //         height={16}
    //       />
    //       Learn
    //     </a>
    //     <a
    //       className="flex items-center gap-2 hover:underline hover:underline-offset-4"
    //       href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <Image
    //         aria-hidden
    //         src="/window.svg"
    //         alt="Window icon"
    //         width={16}
    //         height={16}
    //       />
    //       Examples
    //     </a>
    //     <a
    //       className="flex items-center gap-2 hover:underline hover:underline-offset-4"
    //       href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <Image
    //         aria-hidden
    //         src="/globe.svg"
    //         alt="Globe icon"
    //         width={16}
    //         height={16}
    //       />
    //       Go to nextjs.org →
    //     </a>
    //   </footer>
    // </div>
    );
}
