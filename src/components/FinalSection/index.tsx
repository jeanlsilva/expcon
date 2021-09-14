import { Header } from "../../styles/global";
import Menu from "../Menu";
import CTAButton from "../CTAButton";
import { ButtonArea, FinalSectionArea, MainContent, Subtitle, TextArea, Title } from "./styles";

export default function FinalSection() {
    return (
        <FinalSectionArea id="final">
            <Header>
                <Menu color="var(--gray-900)" />
            </Header>
            <MainContent>
                <TextArea>
                    <Title>GET EXP|CON NOW</Title>
                    <Subtitle>Purchase and download the app</Subtitle>
                </TextArea>
                <ButtonArea>
                    <CTAButton>TRY IT NOW</CTAButton>
                </ButtonArea>
            </MainContent>
        </FinalSectionArea>
    );
}