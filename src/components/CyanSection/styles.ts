import styled from 'styled-components';

export const CyanSectionArea = styled.section`
    height: 100vh;
    background: var(--cyan);
`;

export const LeftArea = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;

    img {
        position: absolute;
    }

    img:first-child {
        top: calc(50% - 300px);
        left: -4%;
    }

    img:last-child {
        transform: rotate(150deg);
        margin-left: 0;
        top: 35%;
    }
`;

export const RightArea = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Title = styled.h1`
    font-size: 4.5rem;
    letter-spacing: .45rem;
    color: var(--white);
    margin-bottom: 66px;
    padding: 0 5%;
`;

export const ColumnsArea = styled.div`
    display: flex;
    justify-content: space-around;
`;

export const Column = styled.div`
    max-width: 22.5%;
`;

export const ColumnTitle = styled.h2`
    font-size: 2.2rem;
    letter-spacing: .32rem;
    color: var(--white);
    margin-bottom: 24px;
`;

export const ColumnText = styled.p`
    font-size: 2.2rem;
    letter-spacing: .22rem;
    line-height: 41px;
`;

export const MainContent = styled.div`
    height: calc(100vh - 62px);
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: relative;
    overflow: hidden;

    @media (max-width: 1650px) {
        h1 {
            font-size: 3.5rem;
            letter-spacing: .35rem;
        }

        h2, p {
            font-size: 1.5rem;
            letter-spacing: .15rem;
        }

        img {
            width: 30%;
        }

        img:first-child {
            top: calc(50% - 200px);
        }
    }
`;