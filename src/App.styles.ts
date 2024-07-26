import {createGlobalStyle} from "styled-components"

import BicycletteBlackEot from './assets/fonts/Bicyclette-Black.eot';
import BicycletteBlackWoff from './assets/fonts/Bicyclette-Black.woff';
import BicycletteBlackWoff2 from './assets/fonts/Bicyclette-Black.woff2';
import BicycletteBlackTtf from './assets/fonts/Bicyclette-Black.ttf';
import BicycletteBoldEot from './assets/fonts/Bicyclette-Black.eot';
import BicycletteBoldWoff from './assets/fonts/Bicyclette-Bold.woff';
import BicycletteBoldWoff2 from './assets/fonts/Bicyclette-Bold.woff2';
import BicycletteBoldTtf from './assets/fonts/Bicyclette-Bold.ttf';
import BicycletteRegularWoff from './assets/fonts/Bicyclette-Regular.woff';
import BicycletteRegularWoff2 from './assets/fonts/Bicyclette-Regular.woff2';
import BicycletteRegularTtf from './assets/fonts/Bicyclette-Regular.ttf';


import EudoxusSansBoldWoff2 from './assets/fonts/EudoxusSans-Bold.woff2';
import EudoxusSansBoldWoff from './assets/fonts/EudoxusSans-Bold.woff';
import EudoxusSansBoldTtf from './assets/fonts/EudoxusSans-Bold.ttf';
import EudoxusSansMediumWoff2 from './assets/fonts/EudoxusSans-Medium.woff2';
import EudoxusSansMediumWoff from './assets/fonts/EudoxusSans-Medium.woff';
import EudoxusSansMediumTtf from './assets/fonts/EudoxusSans-Medium.ttf';

const GlobalStyles = createGlobalStyle`
    @font-face {
        font-family: 'Bicyclette';
        src:url(${BicycletteRegularWoff2}) format('woff2'),
            url(${BicycletteRegularWoff}) format('woff'),
            url(${BicycletteRegularTtf}) format('truetype');
        font-weight: 400;
        font-style: normal;
    }

    @font-face {
        font-family: 'Bicyclette';
        src:url(${BicycletteBoldEot}) format('embedded-opentype'),
            url(${BicycletteBoldWoff2}) format('woff2'),
            url(${BicycletteBoldWoff}) format('woff'),
            url(${BicycletteBoldTtf}) format('truetype');
        font-weight: 500;
        font-style: normal;
    }

    @font-face {
        font-family: 'Bicyclette';
        src:url(${BicycletteBlackEot}) format('embedded-opentype'),
            url(${BicycletteBlackWoff2}) format('woff2'),
            url(${BicycletteBlackWoff}) format('woff'),
            url(${BicycletteBlackTtf}) format('truetype');
        font-weight: 900;
        font-style: normal;
    }

    @font-face {
        font-family: 'EudoxusSans';
        src:url(${EudoxusSansBoldWoff2}) format('woff2'),
            url(${EudoxusSansBoldWoff}) format('woff'),
            url(${EudoxusSansBoldTtf}) format('truetype');
        font-weight: bold;
        font-style: normal;
    }

    @font-face {
        font-family: 'EudoxusSans';
        src:url(${EudoxusSansMediumWoff2}) format('woff2'),
            url(${EudoxusSansMediumWoff}) format('woff'),
            url(${EudoxusSansMediumTtf}) format('truetype');
        font-weight: 500;
        font-style: normal;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        width: 360px;
        font-family: "EudoxusSans", sans-serif;

        @media (width > 360px) {
            width: 100%;
        }
    }

    h1, h2 {
        font-family: "Bicyclette", sans-serif;
    }

    h3, h4, h5, h6{
        font-family: "EudoxusSans", sans-serif;
    }

`

export default GlobalStyles