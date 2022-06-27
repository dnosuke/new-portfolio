import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 2rem;
    margin-left: 2rem;
    margin-right: 2rem;
    margin-bottom: 2.5rem;
    cursor: pointer;

    h2 {
        text-align: center;
        font-size: 1.25rem;
    }
    
    i {
        color: hsl(250, 69%, 61%);
        font-size: 1.5rem;
    }
    
    .progress::-webkit-progress-value {
        background-color: hsl(250, 69%, 61%) !important;
}
    .progress::-moz-progress-bar {
        background-color: hsl(250, 69%, 61%) !important;
}
  
    .progress::-ms-fill {
        background-color: hsl(250, 69%, 61%) !important;
        border: none;
}

    .name {
        align-self: center;
        margin-bottom: .5rem;
}
    .skill {
        display: flex;
        justify-content: space-between;
    }

    .stack {
        display: flex;
        justify-content: space-around;
    }
`;
