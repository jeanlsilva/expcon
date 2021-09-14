import { Header } from "../../styles/global";
import Menu from "../Menu";
import { Column, ColumnsArea, ColumnText, ColumnTitle, Container, MainContent, Title } from "./styles";

export default function PerksSection() {
    return (
        <section>
            <Header>
                <Menu color="var(--light-red)" />
            </Header>
            <Container>
                <MainContent>
                    <Title>PERKS</Title>
                    <ColumnsArea>
                        <Column>
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
            </Container>
        </section>
    );
}