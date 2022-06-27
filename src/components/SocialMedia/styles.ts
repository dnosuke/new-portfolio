import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    color: hsl(250, 69%, 61%);
    font-size: 1.5rem;
    align-items: center;
    align-self: center;
    justify-content: flex-end;
    margin-left: 2rem;

    @media screen and (max-width: 400px){
        align-items: flex-start;
}


`;