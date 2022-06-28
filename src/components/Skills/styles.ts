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
        margin-bottom: 3rem;
}
    .skill {
        display: flex;
        justify-content: space-between;
    }

    .stack {
        display: flex;
        justify-content: space-around;
    }
    
    .container-skill {
        margin-bottom: 2rem;
    }

    @media screen and (min-width: 1024px){
        align-items: center;
       
        .content-skills {
            display: flex;
        }
        .container-skill{
            width: 500px;
            margin-right: 2rem;
        }

        h2 {
            font-size: 2rem;
        }
        
        .stack {
            justify-content: center;
            
            div {
                margin-left: 1rem;
                margin-right: 3rem;
            }
        }
    }
`;
