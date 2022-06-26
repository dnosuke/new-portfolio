import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 2rem;
    margin-left: 2rem;
    margin-right: 2rem;
    margin-bottom: 2rem;

    i {
        font-size: 2rem;
        margin-right: .75rem;
        color: red;
    }

    .field {
        background-color: aliceblue;
        border-radius: .5rem;
        padding: .75rem 1rem .25rem;

        label {
            font-size: small;
            color: black;
        }
        input, textarea {
            width: 100%;
            color: aqua;
            background-color: aliceblue;
            font-family: 'Courier New', Courier, monospace;
            font-size: medium;
            border: none;
            outline: none;
            padding: .25rem .5rem .5rem 0;
        }
    }

    .button {
        align-self: flex-start;
        align-items: center;
        background-color: #8000ff;
        color: #FFF;
        padding: 1rem;
        border-radius: 0.5rem;
        font-weight: 500;
    }

`;