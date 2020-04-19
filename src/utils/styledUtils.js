import { css } from "styled-components";

export const devices = {
    mobileS: (...args)=> css`
        @media (min-width:320px){
            ${css(...args)}
        }
    `,

    mobileM: (...args)=> css`
        @media (min-width:375px){
            ${css(...args)}
        }
    `,

     mobileL: (...args)=> css`
        @media (min-width:425px){
            ${css(...args)}
        }
    `,

     mobileXL: (...args)=> css`
        @media (min-width:525px){
            ${css(...args)}
        }
    `,

    tablet: (...args)=> css`
        @media (min-width:768px){
            ${css(...args)}
        }
    `,

    tabletL: (...args)=> css`
    @media (min-width:880px){
        ${css(...args)}
    }
    `,

    laptop: (...args)=> css`
        @media (min-width:1024px){
            ${css(...args)}
        }
    `,

    laptopL: (...args)=> css`
        @media (min-width:1226px){
            ${css(...args)}
        }
    `,
    laptopXL: (...args)=> css`
        @media (min-width:1440px){
            ${css(...args)}
        }
    `,

    desktop: (...args)=> css`
    @media (min-width:2560px){
        ${css(...args)}
    }
    `,
}


