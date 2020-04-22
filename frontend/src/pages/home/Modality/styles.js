import styled from 'styled-components'

export const Container = styled.div`
    margin-top: 50px;
    ul {
        display: flex;
        justify-content: center;
        list-style-type: none;
        justify-content: space-around;

        li {
            width: 50%;
        }
    }
`

export const Button = styled.button`
    width: 100%;
    background-color: #e0e2e2;
    border: 0;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    padding: 8px 15px;
    font-size: 24px;

    &:focus{
    box-shadow: 0 0 0 0;
    border: 0 none;
    outline: 0;
    }
`
