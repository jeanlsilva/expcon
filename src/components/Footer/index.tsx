import { Container, EmailContainer, LogoContainer } from "./styles";
import { FiMail } from 'react-icons/fi';

export default function Footer() {
    return (
        <Container>
            <EmailContainer>
                <FiMail color="var(--white)" size={36} />
                <p>support@experienceconcerts.co</p>
            </EmailContainer>
            <LogoContainer>
                <h1>EXP|CON</h1>
                <p>2019 © All Rights Reserved | Speer Technologies Incorporated</p>
            </LogoContainer>
        </Container>
    );
}