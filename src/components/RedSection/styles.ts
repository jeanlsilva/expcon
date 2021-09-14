import styled from 'styled-components';

export const Container = styled.section`
    height: 100vh;
    background: var(--light-red);
    overflow: hidden;
`;

export const MainContent = styled.div`
    height: 100vh;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const LeftArea = styled.div`
    width: 55%;
    padding-left: 2%;

    h1 {
        font-size: 4.5rem;
        color: var(--white);
        letter-spacing: .45rem;
        margin-bottom: 27px;
    }

    h2 {
        font-size: 3.2rem;
        color: var(--black);
        letter-spacing: .32rem;
        margin-bottom: 41px;
        font-weight: lighter;
    }

    button {
        border: 0;
        width: 338px;
        height: 81px;
        background: var(--white);
        color: var(--light-red);
        border-radius: 79px;
        font-size: 23px;
        letter-spacing: 2.3px;
    }

    @media (max-width: 1650px) {
        width: 70%;
        padding-left: 8%;

        h1 {
            font-size: 3.5rem;
            letter-spacing: .35rem;
        }

        h2 {
            font-size: 2.5rem;
            letter-spacing: .25rem;
        }

        button {
            width: 200px;
            height: 70px;
            font-size: 20px;
            letter-spacing: .20px;
        }

        button:hover {
        background: transparent linear-gradient(90deg, #1FE1E9 0%, #5E33D1 44%, #D34848 74%, #FFB33F 100%) 0% 0% no-repeat padding-box;
        color: var(--white);
    }
    }
`;

export const LeftSoundBox = styled.img`
    position: relative;
    bottom: 80px;
`;

export const RightSoundBox = styled.img`
    position: relative;
    top: 80px;
`;

export const RightArea = styled.div`
    display: flex;
    position: relative;
    justify-content: center;

    button {
        border: 3px solid var(--white);
        background: transparent;
        color: var(--white);
        font-size: 27px;
        letter-spacing: 2.7px;
        width: 145px;
        height: 145px;
        border-radius: 50%;
        position: absolute;
        bottom: -80px;
        right: 180px;
    }

    @media (max-width: 1650px) {
        img {
            width: 35%;
            bottom: 40px;
        }

        button {
            height: 80px;
            width: 80px;
            font-size: 18px;
            letter-spacing: 1.8px;
            right: 220px;
        }
    }
`;