import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;

    .name{ 
        align-self: center;
        text-align: center;
        margin-bottom: 1.5rem;
}

    h2 {
        font-size: 1.25rem;
    }

    .tabs {
        justify-content: space-evenly;
        margin-bottom: 2rem;

        div {
            display: flex;
        }
        
        h3 {
            align-self: center;
            cursor: pointer;
            margin-left: 0.5rem;
            font-size: 1.125rem;
        }

        h3:hover {
            color: hsl(250, 8%, 65%);
        }

        i {
            font-size: 1.8rem;
        }

        i.calendar {
            font-size: .75rem;
            color: hsl(250, 8%, 65%);
        }
    }

`;

export const Data = styled.div`
    display: grid;
    grid-template-columns: 1fr max-content 1fr;
    column-gap: 1.5rem;
    margin-left: 2rem;
    margin-right: 2rem;

    .rounder {
        display: inline-block;
        width: 13px;
        height: 13px;
        background-color: hsl(250, 69%, 61%);
        border-radius: 50%;
    }

    .line {
        display: block;
        width: 1px;
        height: 100%;
        background-color: hsl(250, 69%, 61%);
        transform: translate(6px, -7px);
    }

    @media screen and (min-width: 500px){ 
        width: 420px;
        align-self: center;
    }

    @media screen and (min-width: 1024px){ 
        width: 600px;
    }
`;