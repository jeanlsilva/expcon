import { CTAButton, Header } from "../../styles/global";
import Menu from "../Menu";
import RatingStars from "../RatingStars";
import { 
    Column, 
    ColumnsArea, 
    ColumnText, 
    ColumnTitle, 
    CyanSectionArea, 
    LeftArea, 
    MainContent, 
    RightArea, 
    Title 
} from "./styles";

export default function CyanSection() {
    return (
        <CyanSectionArea id="cyan">
            <Header>
                <Menu color="var(--cyan)" />
                <CTAButton 
                    onClick={() => window.location.href = '/pricing'} 
                    color="var(--cyan)">
                        TRY IT NOW
                </CTAButton>
            </Header>
            <MainContent>
                <LeftArea>
                    <img src="/assets/images/SmallSpeaker1-03.png" alt="speaker" />
                    <img src="/assets/images/SmallSpeaker1-03.png" alt="speaker" />
                </LeftArea>
                <RightArea>
                    <Title>REVIEWS</Title>
                    <ColumnsArea>
                        <Column>
                            <RatingStars />
                            <ColumnTitle>ARTIST</ColumnTitle>
                            <ColumnText>
                                “Love it, it’s the Best.I can’t live without it!”
                            </ColumnText>
                        </Column>
                        <Column>
                            <RatingStars />
                            <ColumnTitle>PRODUCER</ColumnTitle>
                            <ColumnText>
                                “Love it, it’s the Best.I can’t live without it!”
                            </ColumnText>
                        </Column>
                        <Column>
                            <RatingStars />
                            <ColumnTitle>MUSIC FAN</ColumnTitle>
                            <ColumnText>
                                “Love it, it’s the Best.I can’t live without it!”
                            </ColumnText>
                        </Column>
                    </ColumnsArea>
                </RightArea>
            </MainContent>
        </CyanSectionArea>
    )
}