import styled from 'styled-components';

export const EmailContainer = styled.div`
    display: flex;
    align-items: center;

    p {
        color: var(--white);
        font-size: 2.2rem;
        letter-spacing: .22rem;
        margin-left: 26px;
        font-weight: lighter;
    }
`;

export const LogoContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    height: 100%;
    color: var(--white);

    h1 {
        font-size: 3rem;
        font-weight: lighter;
        letter-spacing: .3rem;
        margin-bottom: 45px;
    }

    p {
        font-size: 1.5rem;
    }
`;

export const Container = styled.div`
    height: 538px;
    background: var(--purple);
    padding: 8% 5% 6%;

    @media (max-width: 1366px) {
        p {
            font-size: 1.5rem;
            letter-spacing: .15rem;
        }
    }
`;