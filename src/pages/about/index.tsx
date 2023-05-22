import { NavBar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Text } from "@/styles/Text";
import { Container } from "@/styles/Global";
import { Button } from "@/styles/Buttons";

import {
    Header,
    HeaderContent,
    HeaderButtonsArea,
    StackSection,
    StackCards,
    ProjectsArea,
    ProjectsAreaSocialMediaMessage,
    ProjectsAreaContent,
    ProjectAreaWrapperColumns,
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
                            Iniciei meus estudos em desenvolvimento web no inicio de 2022. Após alguns meses estudando conteúdos livres na internet, notei que para evoluir necessitaria de um foco específico e muita organização, foi nesse momento que encontrei o curso de desenvolvimento web full stack da Kenzie Academy Brasil e decidi participar do processo seletivo.
                            </Text>

                            <Text type="body1" color="grey6">
                                
                            </Text>
                            
                        </HeaderContent>
                    </Container>
                </Header>
            </main>
        <Footer/>
        </>
    )
}