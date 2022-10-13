import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
    }

    body {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        color: white;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        background-color: ${({ theme }) => theme.color.neutral};
    }
`;

export default GlobalStyle;
