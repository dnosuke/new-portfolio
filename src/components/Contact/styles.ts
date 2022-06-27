import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 2rem;
    margin-top: 2rem;
    margin-left: 2rem;
    margin-right: 2rem;
    margin-bottom: 2rem;

.name {
    align-self: center;
    text-align: center;

    h2 {
        font-size: 1.25rem;
    }
} 

h3 {
    display: flex;
    align-items: center;
    font-size: 1.125rem;
}

    i {
        font-size: 1.5rem;
        margin-right: .75rem;
        color: hsl(250, 69%, 61%);

    }
    
    .send {
        margin-left: .5rem;
        font-size: 1.25rem;
        color: #FFF;
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
        background-color: hsl(250, 69%, 61%);
        color: #FFF;
        padding: 1rem;
        border-radius: 0.5rem;
        font-weight: 500;
    }

    .button:hover {
        background-color: hsl(250, 69%, 69%);
}

`;