import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding-top: 2rem;
    row-gap: 3.5rem;

    background-color: hsl(250, 69%, 61%);
    padding: 2rem 0 3rem;
    color: white;
    
    .name {
        margin-left: 2rem;
        h2 {
            color: white;
            font-size: 1.25rem;
        }
    }

    ul {
        row-gap: 1.5rem;
        margin-left: 2rem;
    }

    a {
        color: white;
    }
    a:hover {
        color: hsl(250, 92%, 85%);
    }

    .social {
        margin-left: 2rem;
    }

    .social i {
        font-size: 1.25rem;
        margin-right: 1.5rem;
    }

    .social:hover {
        color: hsl(250, 92%, 85%);
    }

    p {
        font-size: .75rem;
        text-align: center;
        color: hsl(250, 92%, 85%);
        margin-top: 3rem;
    }

`;