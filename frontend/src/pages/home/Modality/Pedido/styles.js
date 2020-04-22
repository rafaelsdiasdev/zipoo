import styled from 'styled-components'

export const Container = styled.div`
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 30px;
    padding-left: 25px;
    padding-right: 25px;
    background-color: #fff;
    height: 100vh;
`

export const Estabelecimentos = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const Refresh = styled.button`
    background-color: #fff;
    border: 0; 
    margin-bottom: 20px;

    &:focus {
        box-shadow: 0 0 0 0;
        border: 0 none;
        outline: 0;
    }

    @keyframes roll {
            0% {
                transform: rotate(0);
            }
            100% {
                transform: rotate(360deg);
            }
        }
`

export const Button = styled.button`
    background-color: #1c9271;
    font-size: 18px;
    margin-bottom: 10px;
    text-align: center;
    padding: 12px 60px;
    border-radius: 10px;
    border: 1px solid #1c9271;
    color: #fff;
    transition: opacity 0.5s;
    width: 100%;
    opacity: 0.7;

    &:focus{
    box-shadow: 0 0 0 0;
    outline: 0;
    }
`
