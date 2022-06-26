import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;

    .tabs {
        display: flex;
        justify-content: space-evenly;
        margin-bottom: 2rem;

        h3 {
            cursor: pointer;
        }

        h3:hover {
            color: red;
        }

        i {
            font-size: 1.8rem;
        }
    }
`;

export const Data = styled.div`
    display: grid;
    grid-template-columns: 1fr max-content 1fr;
    column-gap: 1.5rem;

    .rounder {
        display: inline-block;
        width: 13px;
        height: 13px;
        background-color: red;
        border-radius: 50%;
    }

    .line {
        display: block;
        width: 1px;
        height: 100%;
        background-color: red;
        transform: translate(6px, -7px);
    }
`;