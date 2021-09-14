import styled, { css } from 'styled-components';

interface ColumnProps {
    color: string;
}

export const PricingSectionArea = styled.div`
    background: var(--gray-900);
    color: var(--white);
`;

export const MainContent = styled.div`
    padding: 15% 10% 0 10%;

    @media (max-width: 1650px) {
        h1 {
            font-size: 3.5rem;
            letter-spacing: .35rem;
        }

        h2 {
            font-size: 2.5rem;
            letter-spacing: .35rem;
        }
    }
`;

export const Title = styled.h1`
    font-size: 4.5rem;
    letter-spacing: .45rem;
    margin-bottom: 38px;
`;

export const Subtitle = styled.h2`
    font-size: 3.2rem;
    letter-spacing: .32rem;
    font-weight: lighter;
    margin-bottom: 204px;
`;

export const Column = styled.div<ColumnProps>`
    ${props => css`
        button {
            border: 0;
            background: ${props.color};
            width: 335px;
            height: 84px;
            border-radius: 79px;
            color: var(--white);
            font-size: 1.5rem;
            font-weight: lighter;
            margin-bottom: 256px;
        }

        h1, h2 {
            color: ${props.color};
        }

        hr {
            width: 141px;
            border: 3px solid ${props.color};
            margin-bottom: 20.5px;
        }
    `}
`;

export const ColumnHeader = styled.div`
    h2 {
        font-size: 2.625rem;
        margin-bottom: 19.5px;
        font-weight: normal;
    }

    h1 {
        font-size: 8.4rem;
        margin-bottom: 42px;
    }
`;

export const ColumnText = styled.div`
    li {
        font-family: 'Helvetica 25 UltraLight', sans-serif;
        font-size: 2.9rem;
        font-weight: lighter;
        letter-spacing: .29rem;
        list-style-position: inside;
        list-style-image: url('/assets/images/musical-note_1.svg');
        line-height: 64px;

        span {
            margin-left: 10px;
        }
    }

    ul {
        margin-bottom: 38px;
    }
`;

export const ColumnsArea = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0 10%;

    @media (max-width: 1650px) {
        h1 {
            font-size: 3.5rem;
            letter-spacing: .35rem;
        }

        h2 {
            font-size: 2.5rem;
            letter-spacing: .35rem;
        }

        li {
            font-size: 2rem;
            letter-spacing: .2rem;
        }

        button {
            width: 270px;
            height: 70px;
            font-size: 1rem;
            letter-spacing: .1rem;
        }
    }
`;