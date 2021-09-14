import useWindowDimensions from "../../hooks/getWindowDimensionsHook";
import { CTAButton, Header } from "../../styles/global";
import Menu from "../Menu";
import { Container, MainContent, Subtitle, Title, YellowSectionArea } from "./styles";
import useMousePosition from "../../hooks/getMousePositionHook";

export default function YellowSection() {
    const { width, height } = useWindowDimensions();
    const { clientX, clientY } = useMousePosition();

    return (
        <YellowSectionArea id="yellow">
            <Title id="title">FRONT ROW SEATS</Title>            
            <Header>
                <Menu color="var(--yellow)" />
                <CTAButton 
                    onClick={() => window.location.href = '/pricing'} 
                    color="var(--yellow)">
                        TRY IT NOW
                </CTAButton>
            </Header>
            <Container>
                <svg width="0" height="0">
                    <defs>
                        <clipPath id="myClip">
                            <circle cx={clientX} cy={clientY} r={(width - 300) / 10} />                            
                            <circle cx={width / 3} cy={height / 3} r={(width - 50)/ 10} />
                            <circle cx={(width - 600) / 3} cy={height - 1000 / 3} r={(width + 900) / 10} />
                            <circle cx={width - 150} cy={height - 100} r="251"></circle>
                        </clipPath>
                    </defs>
                </svg>
                <h1 className="clipped">FRONT ROW SEATS</h1>
            </Container>
            <MainContent>
                <Subtitle>Experience concerts up close and personal.</Subtitle>
                <button>SEE DEMO</button>
            </MainContent>
        </YellowSectionArea>        
    ); 
}