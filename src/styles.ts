import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-top: 5rem;

    @media screen and (min-width: 768px){
        flex-wrap: unset;
}
`;