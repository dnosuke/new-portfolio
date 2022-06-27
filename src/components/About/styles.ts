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

`;

export const Introducion = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    margin-bottom: 2.5rem;

    .text {
        margin-top: 1.5rem;
    }

    @media screen and (min-width: 568px){
        display: flex;
        flex-direction: row;

        .text {
            margin-left: 1rem;
            text-align: start;
        }
 }
`;

export const Img = styled.img`
    width: 200px;
    border-radius: .5rem;
    align-self: center;

`;

export const Info = styled.div`
    display: flex;
    justify-content: space-evenly;
    margin-bottom: 2.5rem;
    font-size: .813rem;
`;