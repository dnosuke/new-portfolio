import styled from "styled-components";



export const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 2rem;
    margin-left: 2rem;
    margin-right: 2rem;
    text-align: center;

    h2 {
        font-size: 1.25rem;
    }

    span {
        margin-bottom: 3rem;
    }

.button {
        align-self: center;
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

@media screen and (min-width: 1024px){        
        h2 {
            font-size: 2rem;
        }
}

`;

export const Introducion = styled.div`
    display: flex;
    flex-direction: column;
    text-align: initial;
    margin-bottom: 2.5rem;

    .text {
        margin-top: 1.5rem;
    }

    img {
        margin-bottom: .5rem;
        width: 200px;
        border-radius: .5rem;
        align-self: center;
    }

    @media screen and (min-width: 568px){
        display: flex;
        flex-direction: row;

        .text {
            text-align: start;
        }

        .info {
            margin-left: 4rem;
            margin-right: 4rem;
        }

    @media screen and (min-width: 1024px){        
        justify-content: center;

    img {
        width: 420px;
    }
}
 }
`;

export const Info = styled.div`
    display: flex;
    justify-content: space-evenly;
    margin-bottom: 2.5rem;
    font-size: .813rem;
`;