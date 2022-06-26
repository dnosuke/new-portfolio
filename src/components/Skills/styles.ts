import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 2.5rem;
    cursor: pointer;

    .skill {
        display: flex;
        justify-content: space-between;
    }

    .stack {
        display: flex;
        justify-content: space-around;
    }
`;

export const Title = styled.div`
    display: flex;
    flex-direction: column;
`;