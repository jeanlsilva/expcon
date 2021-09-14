import { Header } from "../../styles/global";
import Menu from "../Menu";
import { Column, ColumnHeader, ColumnsArea, ColumnText, MainContent, PricingSectionArea, Subtitle, Title } from "./styles";

export default function PricingSection() {
    return (
        <PricingSectionArea>
            <Header>
                <Menu color="var(--white)" />
            </Header>
            <MainContent>
                <Title>PRICING</Title>
                <Subtitle>
                    Test out our app today! Choose from three 
                    subscription Based payment models.
                </Subtitle>
            </MainContent>
            <ColumnsArea>
                <Column color="var(--light-red)">
                    <ColumnHeader>
                        <h2>BASIC</h2>
                        <hr />
                        <h2>MONTHLY</h2>
                        <h1>$9</h1>
                    </ColumnHeader>
                    <ColumnText>
                        <ul>
                            <li><span>Very good</span></li>
                            <li><span>Amazing</span></li>
                            <li><span>Perfect job</span></li>
                            <li><span>Love this</span></li>
                            <li><span>It's so good</span></li>
                            <li><span>Features</span></li>
                        </ul>
                        <button>SELECT</button>
                    </ColumnText>
                </Column>
                <Column color="var(--yellow)">
                    <ColumnHeader>
                        <h2>ADVANCED</h2>
                        <hr />
                        <h2>YEARLY</h2>
                        <h1>$99</h1>
                    </ColumnHeader>
                    <ColumnText>
                        <ul>
                            <li><span>Very very good</span></li>
                            <li><span>Even Amazing</span></li>
                            <li><span>Perfect job</span></li>
                            <li><span>Love this more</span></li>
                            <li><span>It's so so good</span></li>
                            <li><span>More Features</span></li>
                        </ul>
                        <button>SELECT</button>
                    </ColumnText>
                </Column>
                <Column color="var(--cyan)">
                    <ColumnHeader>
                        <h2>PRO</h2>
                        <hr />
                        <h2>YEARLY</h2>
                        <h1>$120</h1>
                    </ColumnHeader>
                    <ColumnText>
                        <ul>
                            <li><span>Very very good</span></li>
                            <li><span>Even Amazing</span></li>
                            <li><span>Perfect job</span></li>
                            <li><span>Love this more</span></li>
                            <li><span>It's so so good</span></li>
                            <li><span>More Features</span></li>
                        </ul>
                        <button>SELECT</button>
                    </ColumnText>
                </Column>
            </ColumnsArea>
        </PricingSectionArea>
    );
}