import { CTAButton, Header } from "../../styles/global";
import Menu from "../Menu";
import { BlackSectionArea, Column, ColumnsArea, ColumnText, ColumnTitle, MainContent, Title } from "./styles";

export default function BlackSection() {
    return (
        <BlackSectionArea id="black">
            <Header>
                <Menu color="var(--gray-900)" />
                <CTAButton 
                    onClick={() => window.location.href = '/pricing'} 
                    color="var(--gray-900)">
                        TRY IT NOW
                </CTAButton>
            </Header>
            <MainContent>
                <Title>PERKS</Title>
                <ColumnsArea>
                    <Column color="var(--light-red)">
                        <hr />
                        <ColumnTitle>
                            Subscription Payment Model
                        </ColumnTitle>
                        <ColumnText>
                            No commitment, cancel anytime. Never worry 
                            about forgetting a payment again!
                        </ColumnText>
                    </Column>
                    <Column color="var(--cyan)">
                        <hr />
                        <ColumnTitle>
                            No Fee Cancelation Policy
                        </ColumnTitle>
                        <ColumnText>
                            No commitment, cancel anytime. Never worry 
                            about forgetting a payment again!
                        </ColumnText>
                    </Column>
                    <Column color="var(--yellow)">
                        <hr />
                        <ColumnTitle>
                            Subscription Payment Model
                        </ColumnTitle>
                        <ColumnText>
                            No commitment, cancel anytime. Never worry 
                            about forgetting a payment again!
                        </ColumnText>
                    </Column>
                </ColumnsArea>
            </MainContent>
        </BlackSectionArea>
    )
}