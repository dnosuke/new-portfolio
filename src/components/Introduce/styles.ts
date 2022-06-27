import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: flex-start;
    margin-left: 2rem;
    margin-right: 2rem;
    margin-bottom: 2rem;
   
    
    h1 {
        font-size: 2rem;
    }
    h2 {
        font-size: 1.25rem;
    }

    img {
        width: 170px;
        height: 170px;
        border-radius: 150px;
    }

    .social {
        display: flex;
        flex-direction: column;
        color: hsl(250, 69%, 61%);
        font-size: 1.5rem;
        align-items: center;
        align-self: center;
        justify-content: flex-end;
        margin-left: 2rem;

    }

    .name {
        margin-left: 1.5rem;
        flex-shrink: 222;

        p {
            margin-bottom: 1.5rem;
        }
    }
    
    .button {
        align-self: flex-start;
        align-items: center;
        background-color: hsl(250, 69%, 61%);
        color: #FFF;
        padding: 1rem;
        border-radius: .5rem;
        font-weight: 500;
    }
    .button:hover {
        background-color: hsl(250, 69%, 69%);
    }

    .scroll-button {
        display: flex;
        align-self: center;
        align-items: center;
        color: hsl(250, 69%, 61%);
        transition: .3s;

        p { 
            margin-bottom: unset;
        }

    }

    .scroll-button:hover {
        transform: translateY(.25rem);
    }

    .button__icon {
        margin-left: .5rem;

    }

    #scroll-mouse {
        font-size: 2rem;
    }
    
    #scroll-arrow {
        font-size: 1.25rem;
    }

    .scroll-name {
        font-size: .813rem;
        color: hsl(250, 69%, 61%);
        font-weight: 500;
        margin-right: 10px;
    }

    @media only screen and (max-width: 800px) {
        order: 1;

        .scroll-button {
            display: none;
        }
    }

    @media screen and (max-width: 400px){
        flex-direction: row;
        flex-wrap: wrap;
        margin-left: 0.5rem;
        margin-right: 0.5rem;
        
        .social {
            align-self: center;
            flex-shrink: 233;
        }
        .name {
            order: 1;
        }
        img {
            margin-left: 3rem;
            margin-bottom: 1rem;
        }
        
}
    @media screen and (min-width: 568px){
        margin-left: 2rem;
        margin-right: 2rem;
        order: unset;
        
        .home {
            display: flex;
        }
}

`;