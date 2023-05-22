import { NavBar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Text } from "@/styles/Text";
import { Container } from "@/styles/Global";
import { userData } from "@/utils/userData";
import { Button } from "@/styles/Buttons";

import {
    Header,
    HeaderContent,
    HeaderButtonsArea
  } from "../home/style"

export const About = (): JSX.Element => {
    return (
        <>
        <NavBar/>
            <main>
                <Header>
                    <Container>
                        <HeaderContent>
                            <Text as="h1" type="heading1" color="grey5">
                                Sobre Mim{" "}
                            </Text>
                            <Text type="body1" color="grey6">
                            Iniciei meus estudos em desenvolvimento web no início de 2022. Após alguns meses estudando conteúdos livres na internet, notei que para evoluir necessitaria de um foco específico e muita organização, foi nesse momento que encontrei o curso de desenvolvimento web full stack da Kenzie Academy Brasil e decidi participar do processo seletivo.
                            </Text>

                            <Text type="body1" color="grey6">
                            Após passar no processo seletivo, iniciei os estudos seguindo um método focado não só em aprender, mas também em aplicar o que foi estudado. Durante o curso trabalhei com as tecnologias mais utilizadas pelo mercado e sigo em constante progresso. Hoje sou um desenvolvedor full stack capaz de contribuir positivamente no desenvolvimento de diversos projetos.
                            </Text>

                            <Text as="h1" type="heading1" color="grey5">
                                Contato{" "}
                            </Text>
                        </HeaderContent>
                            <HeaderButtonsArea>
                                {userData.whatsappNumber && (
                                <Button
                                    as="a"
                                    target="_blank"
                                    href={`https://api.whatsapp.com/send?phone=+55${userData.whatsappNumber}&text=Ol%C3%A1%2C%20venho%20por%20meio%20do%20seu%20portf%C3%B3lio%20na%20internet%2C%20gostaria%20de%20conhecer%20melhor%20seus%20servi%C3%A7os`}
                                    >
                                    Falar no whatsapp
                                </Button>
                                )}
                                <Button>
                                    Email: daavisouza.santana@gmail.com
                                </Button>
                            </HeaderButtonsArea>
                        
                    </Container>
                </Header>
            </main>
        <Footer/>
        </>
    )
}