import styled, { css } from 'styled-components';

interface ColumnProps {
    color: string;
}

export const BlackSectionArea = styled.section`
    background: var(--gray-900);
    height: 100vh;
`;

export const MainContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100vh;

    @media (max-width: 1650px) {
        h1 {
            font-size: 3rem;
            letter-spacing: .3rem;
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
    padding: 0 5%;
    margin-bottom: 83.5px;
`;

export const ColumnsArea = styled.div`
    display: flex;
    justify-content: space-around;
`;

export const Column = styled.div<ColumnProps>`
    display: flex;
    flex-direction: column;
    max-width: 22.5%;

    ${props => css`
        hr {
            width: 100px;
            border: 3px solid ${props.color};
            margin-bottom: 27.5px;
        }

        h2 {
            color: ${props.color};
        }        
    `}
`;

export const ColumnTitle = styled.h2`
    font-size: 3.2rem;
    letter-spacing: .32rem;
    font-weight: bold;
    margin-bottom: 28px;
`;

export const ColumnText = styled.p`
    font-size: 2.2rem;
    color: var(--white);
    font-weight: lighter;
    letter-spacing: .22rem;
`;