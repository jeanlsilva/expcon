import styled from 'styled-components';

export const FinalSectionArea = styled.section`
    height: 814px;
    background: var(--gray-900);
`;

export const MainContent = styled.div`
    height: 100%;
    display: flex;
    justify-content: space-around;

    @media (max-width: 1366px) {
        h1 {
            font-size: 3.5rem;
            letter-spacing: .35rem;
        }

        p {
            font-size: 2.5rem;
            letter-spacing: .25rem;
        }
    }
`;

export const TextArea = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const ButtonArea = styled.div`
    display: flex;
    align-items: center;
`;

export const Title = styled.h1`
    font-size: 4.5rem;
    font-size: bold;
    font-weight: .45rem;
    color: var(--light-red);
    margin-bottom: 21px;
`;

export const Subtitle = styled.p`
    color: var(--white);
    font-size: 3.2rem;
    font-weight: lighter;
    letter-spacing: .32rem;
`;