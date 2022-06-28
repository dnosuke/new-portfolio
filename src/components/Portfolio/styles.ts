import styled from "styled-components";

export const Container = styled.div`
    margin-top: 2rem;
    .name {
        display: flex;
        flex-direction: column;
        h2 {
            align-self: center;
            font-size: 1.25rem;
        }
        span {
            align-self: center;
        }
}
`;

export const Data = styled.div`
    display: flex;
    flex-direction: column;
    overflow: initial;
    padding: 0 3.5rem;
    margin-bottom: 2rem;

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

.button:hover i {
    transform: translate(.25rem);
    background-color: hsl(250, 69%, 69%);
}

    img {
        width: 265px;
        border-radius: .5rem;
        margin-bottom: 1rem;
        align-self: center;
    }

    @media screen and (min-width: 1024px){ 
     flex-direction: row;
     justify-content: center;
     margin-top: 4rem;
     padding: 0 17rem;

     img {
            width: 400px;
        }

        .itens {
            margin-left: 2rem;
        }
    }
`;