import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
        text-decoration: none;
    }

    body {
        max-width: 100vw;
        min-height: 100vh;
        font-family: 'Public Sans', sans-serif;
    }
`;

export const styleGuide = {
    colors: {
        primary: {
            DarkBlue: "hsl(233, 26%, 24%)",
            LimeGreen: "hsl(136, 65%, 51%)",
            BrightCyan: "hsl(192, 70%, 51%)",
        },

        neutral: {
            GrayishBlue: "hsl(233, 8%, 62%)",
            LightGrayishBlue: "hsl(220, 16%, 96%)",
            VeryLightGray: "hsl(0, 0%, 98%)",
            White: "hsl(0, 0%, 100%)",
        },
    },
};
