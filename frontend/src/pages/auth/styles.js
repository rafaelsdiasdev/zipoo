import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 400px;
    margin: 0;
    background-color: #e1e3e3;
    min-height: calc(100vh - 60px);
    color: #1c9271;
    margin: 0 auto;
`

export const Logo = styled.img`
    margin-top: 40px;
    width: 170px;
`

export const Title = styled.h1`
    margin-top: 40px;
    margin-bottom: 10px;
    font-size: 24px;
    color: #4b8071;
`

export const Input = styled.input`
    margin-top: 8px;
    font-size: 15px;
    text-align: center;
    padding: 12px 60px;
    border-radius: 10px;
    border: 0px solid;
    background-color: #1c9271;
    color: #fff;
    font-weight: bold;
    transition: background-color 0.5s;

    &:focus {
        background-color: #fff;
        box-shadow: 0 0 0 0;
        border: 0 none;
        outline: 0;
        color: #4b8071;
    }

    &::-webkit-input-placeholder {
        color: #fff
    }
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
`

export const Button = styled.button`
    margin-top: 25px;
    margin-bottom: 50px;
    text-align: center;
    padding: 12px 60px;
    border-radius: 10px;
    border: 0px solid;
    background-color: #4f8072;
    color: #fff;
    font-weight: bold;
    transition: background-color 0.5s;
`

export const Err = styled.p`
    text-align: center;
    color: red;
    visibility: ${props => props.visibility};
`
