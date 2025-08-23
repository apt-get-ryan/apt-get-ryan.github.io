import "./globals.css";
import Header from "@/components/Header/Header";
import Menu from "@/components/Menu/Menu";
import { Wrapper } from "@/components/Wrapper/Wrapper";
import { useMenuStore } from "@/stores/menu";
import { MainSection } from "@/components/MainSection/MainSection";
import { Footer } from "@/components/Footer/Footer";
import AppWrapper from "@/components/AppWrapper";

export const metadata = {
  title: 'Portfólio - Ryan Guimarães',
  description: 'Portfólio de Ryan Guimarães, Desenvolvedor React',
   icons: {
    icon: "/logo.svg",
  },
}



export default function RootLayout({ children }) {
  
  return (

    <html lang="pt-BR" suppressHydrationWarning>
      <body>
        <AppWrapper className="bg-blue-500 text-slate-950 dark:text-slate-50">
          <Menu/>
          <Wrapper>
            <Header/>
            <MainSection>
            {children}
            </MainSection>
            <Footer/>
          </Wrapper>
        </AppWrapper>
      </body>
    </html>
  )
}
