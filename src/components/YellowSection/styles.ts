import styled from 'styled-components';

export const YellowSectionArea = styled.section`
    background: var(--yellow);
    height: 100vh;
    position: relative;
`;

export const Container = styled.div`
    height: 100vh;
    background: url('/assets/images/Image4@2x.png');
    background-repeat: no-repeat;
    background-size: 150%;
    background-position-x: -950px;
    background-position-y: -500px;
    position: relative;
    overflow: hidden;
    clip-path: url(#myClip);

    .clipped {
        font-size: 4.5rem;
        letter-spacing: .45rem;
        position: absolute;
        top: 250px;
        right: 10%;
        color: var(--cyan);
    }

    @media (max-width: 1650px) {
        background-position-x: 100%;
        background-position-y: 40%;

        .clipped {
            right: 7%;
            font-size: 3.5rem;
            letter-spacing: .35rem;
        }
    }
`;

export const Circle = styled.circle`
    transform-origin: center center;
    stroke-width: 30;
`;

export const MainContent = styled.div`
    display: inline-flex;
    flex-direction: column;
    justify-content: center;
    position: absolute;
    z-index: 1;
    top: 0;
    right: 0;
    height: 100vh;
    width: 59%;
    padding: 0 6%;

    button {
        border: 0;
        background: var(--white);
        color: var(--yellow);
        width: 338px;
        height: 81px;
        border-radius: 79px;
        font-size: 23px;
        letter-spacing: 2.3px;
    }
    
    button:hover {
        background: transparent linear-gradient(90deg, #1FE1E9 0%, #5E33D1 44%, #D34848 74%, #FFB33F 100%) 0% 0% no-repeat padding-box;
        color: var(--white);
    }
    
    h1 {
        z-index: 1;
    }

    .clipped {
        position: relative;
        bottom: 10px;
    }

    @media (max-width: 1650px) {
        h1 {
            font-size: 3.5rem;
            letter-spacing: .35rem;
        }

        h2 {
            font-size: 2.5rem;
            letter-spacing: .25rem;
        }

        button {
            width: 270px;
            height: 70px;
            font-size: 20px;
            letter-spacing: 2px;
        }
    }
`;

export const Title = styled.h1`
    font-size: 4.5rem;
    color: var(--white);
    letter-spacing: 7.4px;
    margin-bottom: 23px;
    position: absolute;
    top: 250px;
    right: 10%;

    @media (max-width: 1650px) {
        right: 7%;
        font-size: 3.5rem;
        letter-spacing: .35rem;
    }
`;

export const Subtitle = styled.h2`
    font-size: 3.2rem;
    font-weight: lighter;
    letter-spacing: 5.1px;
    margin-bottom: 47px;
`;

export const Overlay = styled.div`
    height: 100vh;
    background: var(--yellow);

    &:before {
        content: '';
        display: block;
        width: 28.33%;
        padding-bottom: 28.33%;

        position: absolute;
        top: 35%;
        left: 42%;
        z-index: 2;
        transform: translate(-50%, -50%);

        border: solid 1000px var(--yellow);
        border-radius: 50%;        
    }
`;
