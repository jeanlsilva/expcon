import styled from 'styled-components';

export const HeroSection = styled.section`
    height: 100vh;
`;

export const Container = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media (max-width: 1650px) {
        h1 {
            font-size: 3.2rem;
            letter-spacing: .32rem;
        }

        h2 {
            font-size: 1.5rem;
            letter-spacing: .15rem;
        }

        button {
            font-size: 1rem;
            letter-spacing: .1rem;
            width: 220px;
            height: 60px;
        }
    }
`;

export const HeroContainer = styled.div`
    width: 100%;
    height: 100vh;
    position: absolute;
    z-index: -1;
    top: 0;
`;

export const Image1 = styled.div`
    width: 100%;
    background: url('/assets/images/Image1.png');
    background-size: cover;
    background-repeat: no-repeat;
`;

export const Image2 = styled.div`
    width: 100%;
    background: url('/assets/images/Image2.png');
    background-size: cover;
    background-repeat: no-repeat;
`;

export const Image3 = styled.div`
    width: 100%;
    background: url('/assets/images/Image3.png');
    background-size: cover;
    background-repeat: no-repeat;
`;

export const BulletWrapper = styled.div`
    display: flex;
    position: absolute;
    top: calc(100vh - 37px - 17px);
`;

export const Bullet = styled.div`
    width: 16px;
    height: 17px;    
    border-radius: 50%;
    margin: 0 5px;
    background: transparent;
    border: 1px solid var(--white);

    &.selected {
        background: var(--white);
    }
`;

export const Title = styled.h1`
    font-family: 'Helvetica 65 Medium', sans-serif;
    font-weight: bold;
    letter-spacing: 6.5px;
    font-size: 65px;
    margin-bottom: 32px;
    color: var(--white);
    text-align: center;
`;

export const Subtitle = styled.h2`
    font-family: 'Helvetica 25 UltraLight', sans-serif;
    font-weight: lighter;
    letter-spacing: 3.2px;
    font-size: 32px;
    max-width: 820px;
    text-align: center;
    margin-bottom: 43px;
    color: var(--white);
`;