import styled, { css } from 'styled-components';

interface LabelProps {
    color: string;
}

export const MainContent = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 8%;

    h2 {
        font-family: 'Helvetica 25 UltraLight', sans-serif;
        font-size: 2.8rem;
        letter-spacing: .28rem;
        margin-bottom: 32px;
        font-weight: lighter;
    }

    @media (max-width: 1650px) {
        h1 {
            font-size: 3.5rem;
            letter-spacing: .35rem;
            margin-top: 150px;
            margin-bottom: 60px;
        }

        h2 {
            font-size: 1.8rem;
            letter-spacing: .2rem;
            margin-bottom: 20px;
        }
    }
`;

export const Title = styled.h1`
    margin-top: 308px;
    margin-bottom: 121px;
    font-size: 4.5rem;
    letter-spacing: .45rem;
`;

export const Label = styled.label<LabelProps>`
    position: relative;
    user-select: none;

    ${props => css`
        color: ${props.color};
        
        input {
            position: absolute;
            opacity: 0;
            cursor: pointer;
            height: 0;
            width: 0;
        }

        span {
            position: relative;
            top: 0;
            left: 0;
            height: 28px;
            width: 29px;
            border-radius: 50%;
            border: 3px solid var(--black);
            margin-right: 13px;
        }

        input:checked ~ span {
            background-color: ${props.color};
            border: 3px solid ${props.color};
        }

        span:after {
            content: '';
            position: absolute;
            display: none;
        }

        input:checked ~ span:after {
            display: block;
        }

        span:after {
            top: 9px;
            left: 9px;
            width: 10px;
            height: 10px;
            border-radius 50%;
            background: ${props.color};
        }
    `}
`;

export const SelectPlan = styled.div`
    margin-bottom: 148px;

    form {
        display: flex;
    }

    input {
        margin-right: .8rem;
        width: 20px;
        transform: scale(2);
    }

    label {
        font-size: 2.3rem;
        letter-spacing: .23rem;
        font-weight: bolder;
        margin-left: .8rem;
        margin-right: 2.8rem;
        display: flex;

        align-items: center;
    }

    @media (max-width: 1650px) {
        margin-bottom: 80px;

        label {
            font-size: 1.8rem;
            letter-spacing: .18rem;
        }

        span {
            width: 20px;
            height: 20px;
        }

        span:after {
            top: 5px;
            left: 5px;
        }
    }
`;

export const SecondaryArea = styled.div`
    display: flex;
    justify-content: space-between;

    >div:first-child {
        width: 47.5%;
    }

    >div:last-child {
        width: 42.5%;
    }

    h2 {
        margin-bottom: 49px;
    }

    .billing {
        margin-left: 10%;
    }
    
    form {
        display: flex;
        flex-direction: column;        

        >div {
            display: flex;
            justify-content: space-between;

            label {
                width: 47.5%;
            }
        }

        label {
            display: flex;
            flex-direction: column;
            font-size: 1.375rem;
            font-weight: bold;
            letter-spacing: .135rem;

            input, select {
                margin-top: 12px;
                margin-bottom: 31px;
                height: 74px;
                padding: 20px 38px;
                font-size: 1.75rem;
                letter-spacing: .175rem;
                font-family: 'Helvetica 25 UltraLight', sans-serif;
                font-weight: lighter;
                border: 2px solid var(--black);
                transition: border-bottom 0.5s;
            }

            input:focus {
                border-bottom: 8px solid var(--purple);
            }
        }
    }

    @media (max-width: 1650px) {
        >div:first-child, >div:last-child {
            width: 48%;

            input, select {
                height: 56px;
                font-size: 1.25rem;
                letter-spacing: .125rem;
                padding: 12px 16px;
            }

            label {
                font-size: 1rem;
                letter-spacing: .1rem;
            }

            h2 {
                margin-bottom: 20px;
            }
        }
    }
`;

export const CardInformation = styled.div``;

export const AgreementArea = styled.div`
    width: 41%;
    margin-top: 125px;
    margin-left: 5%;
    padding-bottom: 233px;

    p {
        font-size: 1.375rem;
        letter-spacing: .1375rem;

        span {
            font-weight: bold;
            color: var(--purple);

        }
    }

    button {
        margin-top: 31px;
        border: 0;
        width: 217px;
        height: 60px;
        border-radius: 79px;
        color: var(--white);
        font-size: 1.25rem;
        letter-spacing: .125rem;
        background: transparent linear-gradient(90deg, #1FE1E9 0%, #5E33D1 34%, #D34848 65%, #FFB33F 100%) 0% 0% no-repeat padding-box;
    }
`;