import styled from "styled-components";

export const Container = styled.div`
    
    .name {
        display: flex;
        flex-direction: column;
        h1 {
            align-self: center;
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
        background-color: #8000ff;
        color: #FFF;
        padding: 1rem;
        border-radius: 0.5rem;
        font-weight: 500;
    }
.button:hover i {
    transform: translate(.25rem);
}

    img {
        width: 265px;
        border-radius: .5rem;
        align-self: center;
    }
`;