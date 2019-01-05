import { createGlobalStyle } from 'styled-components';
import GlosaBlk from 'fonts/glosa_display_black.woff';
import BrandonBld from 'fonts/brandon/brandon-bold.woff2';
import BrandonMed from 'fonts/brandon/brandon-medium.woff2';
import BrandonReg from 'fonts/brandon/brandon-regular.woff2';
import BrandonLte from 'fonts/brandon/brandon-light.woff2';
import LatoBld from 'fonts/lato/lato-bold.woff2';
import LatoReg from 'fonts/lato/lato-regular.woff2';
import LatoIta from 'fonts/lato/lato-italic.woff2';

import {
  $charcoal,
  $link
} from 'styles/colors';

const GlobalStyles = createGlobalStyle`
  html, body {
    margin: 0px;
    padding: 0px;
    outline: none;
    font-size: 10px;
    background: #f6f9fc;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
  }

  a {
    text-decoration: none;
    font-family: 'Lato Bld';
    transition: color 100ms ease;
    &:link, &:active, &:visited {
      color: ${$link};
    }
    &:hover {
      color: ${$charcoal};
    }
  }

  ::-webkit-scrollbar-thumb {
    background: #4353ff;
  }

  @font-face {
    font-family: 'Glosa Blk';
    src: url(${GlosaBlk});
  }

  @font-face {
    font-family: 'Brandon Bld';
    src: url(${BrandonBld});
  }

  @font-face {
    font-family: 'Brandon Med';
    src: url(${BrandonMed});
  }

  @font-face {
    font-family: 'Brandon Reg';
    src: url(${BrandonReg});
  }

  @font-face {
    font-family: 'Brandon Lte';
    src: url(${BrandonLte});
  }

  @font-face {
    font-family: 'Lato Bld';
    src: url(${LatoBld});
  }

  @font-face {
    font-family: 'Lato Reg';
    src: url(${LatoReg});
  }

  @font-face {
    font-family: 'Lato Ita';
    src: url(${LatoIta});
  }
`;

export default GlobalStyles;
