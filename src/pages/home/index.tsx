// Styles
import { Container } from "@/styles/Global";
import { Text } from "@/styles/Text";
import { Button } from "@/styles/Buttons";

// Components
import { Stack } from "@/components/Stack";
import { Project } from "@/components/Project";
import { NavBar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

// Data
import { stackData } from "@/utils/stackData";
import { userData } from "@/utils/userData";

// Page Style
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
} from "./style";


export const Home = (): JSX.Element => {
  return (
  <>
    <NavBar/>
    <main>
      <Header>
        <Container>
          <HeaderContent>
            <Text as="h1" type="heading1" color="grey5">
              Progredindo por meio da tecnologia{" "}
            </Text>
            <Text type="body1" color="grey6">
              Sou um desenvolvedor web full stack, participei
              de diversos projetos resolvendo problemas de alto nível e
              desenvolvendo habilidades técnicas e comportamentais
            </Text>
            <HeaderButtonsArea>
              <Button as="a" href="#projetos">
                Projetos
              </Button>
              <Button as="a" href="#tecnologias" type="btLink" color="grey5">
                Tecnologias
              </Button>
            </HeaderButtonsArea>
          </HeaderContent>
        </Container>
      </Header>
      <StackSection id="tecnologias">
        <Container>
          <Text as="h4" type="heading3" color="grey1">
            Ferramentas que domino
          </Text>
          <StackCards>
            {stackData.map((stack, index) => (
              <Stack key={index} title={stack.title} icon={stack.img} />
            ))}
          </StackCards>
        </Container>
      </StackSection>
      <ProjectsArea id="projetos">
        <Container>
          <ProjectAreaWrapperColumns>
            <ProjectsAreaSocialMediaMessage>
              <Text as="h2" type="heading4" color="grey1">
                Vamos nos conectar?
              </Text>
              <Text as="p" type="body1" color="grey2">
                No Linkedin estou sempre compartilhando projetos que desenvolvi
                e registrando minha evolução. Caso deseje se conectar ou trocar algumas
                mensagens, estarei disponível
              </Text>
              <Button
                type="primary"
                target="_blank"
                as="a"
                href={`https://www.linkedin.com/in/${userData.linkedinUser}`}
              >
                Acessar perfil no LinkedIn
              </Button>
            </ProjectsAreaSocialMediaMessage>
            <ProjectsAreaContent>
              <Text type="body1" color="grey2" css={{ marginBottom: "$2" }}>
                Projetos
              </Text>
              <Text as="h3" type="heading2" color="grey1">
                Organização e{" "}
                <Text as="span" color="brand1" type="heading2">
                  dedicação
                </Text>{" "}
                em cada detalhe
              </Text>
              <Project />
            </ProjectsAreaContent>
          </ProjectAreaWrapperColumns>
        </Container>
      </ProjectsArea>
    </main>
    <Footer/>
  </>
  );
};
