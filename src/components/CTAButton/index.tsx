import { ButtonContainer, Container } from "./styles";

interface ButtonProps {
    children: React.ReactNode;
}

export default function CTAButton({ children }: ButtonProps) {
    return (
        <Container>
            <ButtonContainer onClick={() => window.location.href = '/pricing'}>
                {children}
            </ButtonContainer>
        </Container>        
    )
}