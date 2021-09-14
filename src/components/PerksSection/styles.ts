import styled from 'styled-components';

export const Container = styled.div`
    height: 967px;
    background: var(--light-red);
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center; 
`;

export const MainContent = styled.div`   
    width: 90%;
    margin: 0 auto;

    hr {
        width: 100px;
        border: 3px solid var(--white);
        margin-bottom: 27.5px;
    }

    @media (max-width: 1650px) {
        h1 {
            font-size: 3.5rem;
            letter-spacing: .35rem;
            margin-bottom: 40px;
        }

        h2 {
            font-size: 2.5rem;
            letter-spacing: .25rem;
        }

        p {
            font-size: 1.5rem;
            letter-spacing: .15rem;
        }
    }
`;

export const Title = styled.h1`
    font-size: 4.5rem;
    font-weight: bold;
    letter-spacing: .45rem;
    color: var(--white);
    padding: 0 4%;
    margin-bottom: 83.5px;
`;

export const ColumnsArea = styled.div`
    display: flex;
    justify-content: space-around;
`;

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 25%;
`;

export const ColumnTitle = styled.h2`
    font-size: 3.2rem;
    letter-spacing: .32rem;
    font-weight: bold;
    margin-bottom: 28px;
    color: var(--white);
`;

export const ColumnText = styled.p`
    font-size: 2.2rem;
    font-weight: lighter;
    letter-spacing: .22rem;
`;