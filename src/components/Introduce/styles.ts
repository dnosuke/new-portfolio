import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    flex-grow: 1;
   
    
    h1 {
        font-size: 40px;
    }
    h2 {
        font-size: 20px;
    }
    
    .button {
        align-self: flex-start;
        align-items: center;
        background-color: #8000ff;
        color: #FFF;
        padding: 1rem;
        border-radius: 0.5rem;
        font-weight: 500;
    }
    .button:hover {
        background-color: #ff0000;
    }

    .scroll-button {
        display: flex;
        align-items: center;
        color: red;
        transition: .3s;
    }

    .scroll-button:hover {
        transform: translateY(.25rem);
    }

    #scroll-mouse {
        font-size: 2rem;
    }
    
    #scroll-arrow {
        font-size: 1.25rem;
    }

    .scroll-name {
        font-size: 30px;
        color: red;
        font-weight: 500;
        margin-right: 10px;
    }

    @media only screen and (max-width: 800px) {
        order: 1;

        .scroll-button {
            display: none;
        }
    }

    @media screen and (max-width: 350px){
        margin-left: 0.5rem;
        margin-right: 0.5rem;
}
    @media screen and (min-width: 768px){
        margin-left: 1rem;
        margin-right: 1rem;
        order: unset;
}
`;