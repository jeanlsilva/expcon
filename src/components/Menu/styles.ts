import styled, { css } from 'styled-components';

interface LogoProps {
    color?: string;
}

interface ContainerProps {
    color?: string;
}

export const Container = styled.div<ContainerProps>`
    display: inline-flex;
    align-items: center;
    position: relative;
    top: 5%;
    cursor: pointer;

    @keyframes listTransition {
        from {
            opacity: 0;
        }

        to {
            opacity: 1;
        }
    }

    @keyframes transition {
        from {
            width: 5%;
            height: 5%;
        }

        to {
            width: 100%;
            height: 100%;
        }
    }

    >div {
        position: absolute;
        width: 600px;
        height: 600px;
        top: -53%;
        left: -20%;
        overflow: hidden;
        z-index: -1;
        display: none;
    }

    svg {
        margin-right: 20px;
    }

    ul {
        position: absolute;
        left: 0;
        top: 40px;
        width: 304px;
        margin-top: 28px;
        animation-name: listTransition;
        animation-duration: 6s;

        li {
            font-size: 47px;
            letter-spacing: 4.7px;
            list-style: none;
        }
    }

    .banana {
        display: block;
    }

    ${props => css`
        li {
            color: ${'var(--white)'} 
        }

        li:hover {
            color: ${props.color}
        }
    `}
`;

export const Circle = styled.div`
    width: 600px;
    height: 600px;
    border-radius: 50%;
    background: var(--black);

    position: absolute;
    left: -30%;
    top: -35%;
    z-index: -1;

    animation-name: transition;
    animation-duration: 3s;
`;

export const Logo = styled.h1<LogoProps>`
    font-family: 'Helvetica 25 UltraLight', sans-serif;
    font-size: 48px;
    font-weight: lighter;

    ${props => css`
        color: ${props.color || 'var(--black)'};
    `}
`;

export const MenuItems = styled.ul`
    display: none;
`;


