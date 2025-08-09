import { ContentBox } from "@/components/contentBox/ContentBox";
import { FaPalette } from "react-icons/fa6";
import Image  from "next/image";
export default function Design() {
  return (
    <>
      <div className="mx-auto text-2xl container font-medium px-6 my-4">
        <span className="flex items-center">
          <FaPalette className="inline"/>&nbsp;Olá mundo!
        </span>
      </div>
      <ContentBox className={"container mx-auto px-4"}>
        <p className="mb-2">Durante a pandemia, quando tudo parecia parado, encontrei um refúgio inesperado: a edição de imagens. Comecei sem saber muito, só com curiosidade e tempo livre.</p>
        <p className="mb-2">
          Com tutoriais na internet e testando por conta própria, fui aprendendo aos poucos. Cada imagem que eu editava era uma forma de escapar do caos lá fora — quase como uma terapia. Com o tempo, fui pegando o jeito, e o que era só um hobbie virou possibilidades infinitas.
        </p>
        <p className="mb-2">
          Percebi que podia usar aquilo pra ajudar pequenos comércios a melhorarem sua presença digital. Foi assim que comecei no design, transformando curiosidade em propósito.
        </p>
      </ContentBox>
      {/* <ContentBox className={"container mx-auto my-6 mt-4 px-4"}>
        <div className="relative w-full grid md:grid-cols-3 grid-cols-1 md:flex-row flex-wrap gap-2">
          <img src={"/images/design/yeshua-promocao.jpg"} fill className="w-full"/>
          <img src={"/images/design/post.jpg"}  fill className="w-full"/>
          <div>
            <img src={"/images/design/yeshua-cartao-visita.jpg"}  fill className="w-full"/>
            <span className="h-2 block"></span>
            <img src={"/images/design/meu-cartao.jpg"}  fill className="w-full col-start-2"/>
          </div>
        </div>
      </ContentBox> */}
      <ContentBox className={"container mx-auto my-6 mt-4 px-4"}>
        <div className="relative columns-3xs lg:columns-3 w-full grid-cols-1 gap-2">
          <img src={"/images/design/yeshua-promocao.jpg"} className="w-full mb-2"/>
          <img src={"/images/design/post.jpg"} className="w-full  mb-2"/>
          <img src={"/images/design/yeshua-cartao-visita.jpg"} className="w-full  mb-2"/>
          <img src={"/images/design/meu-cartao.jpg"} className="w-full col-start-2  mb-2"/>
        </div>
      </ContentBox>
    </>
  )
}