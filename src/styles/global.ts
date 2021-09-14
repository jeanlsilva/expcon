import styled, { createGlobalStyle, css } from 'styled-components';

interface CTAButtonProps {
    color: string;
}

export const GlobalStyle = createGlobalStyle`
    :root {
        --background-hero: #D34848;
        --white: #ffffff;
        --gray-600: #0000005c;
        --cyan: #1FE1E9;
        --gray-900: #191919;
        --light-red: #D34848;
        --gray-990: #0B0B0B;
        --yellow: #FFB33F;
        --gray-300: #00000029;
        --dark-red: #D1346E;
        --purple: #5E33D1;
        --black: #000000;
    }
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        @media (max-width: 1080px) {
            font-size: 93.75%;
        }

        @media (max-width: 720px) {
            font-size: 87.5%;
        }
    }

    body {
        background: var(---background-hero);
        -webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button {
        font-family: 'Helvetica Neue', sans-serif;
        font-weight: 400;
    }

    .pricing {
        height: 100vh;
        background: var(--gray-900);
    }

    .payment {
        >div {
            color: var(--black);
        }
    }

    h1, h2, h3, h4, h5, h6 {
        font-family: 'Helvetica 65 Medium', sans-serif;
    }

    p {
        font-family: 'Helvetica 35 Thin', sans-serif;
        font-weight: lighter;
    }

    button {
        cursor: pointer;
    }

    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }
`;

export const CTAButton = styled.button<CTAButtonProps>`
    border: 0;
    width: 248px;
    height: 62px;
    background: #ffffff;
    border-radius: 62px;
    font-family: 'Helvetica Neue', sans-serif;
    font-weight: bold;
    letter-spacing: 1.8px;
    position: relative;
    transition: background-color 0.5s;

    ${props => css`
        color: ${props.color}
    `}
`;

export const Header = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    position: absolute;
    z-index: 3;  
    padding: 4%;    

    button:hover {
        background: transparent linear-gradient(90deg, #1FE1E9 0%, #5E33D1 44%, #D34848 74%, #FFB33F 100%) 0% 0% no-repeat padding-box;
        color: var(--white);
    }

    @media (max-width: 1650px) {
        padding: 2%;
    }
`;