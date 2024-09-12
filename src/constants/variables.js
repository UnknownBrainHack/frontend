import { css } from "styled-components";

export const hexToRgb = (hex) => {
  const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  hex = hex.replace(shorthandRegex, function (m, r, g, b) {
    return r + r + g + g + b + b;
  });

  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16),
    }
    : null;
};

export const rgba = (hex, alpha) => {
  const color = hexToRgb(hex);
  return `rgba(${color.r}, ${color.g}, ${color.b}, ${alpha})`;
};

export const mobile = '@media screen and (max-width: 480px)';
export const tablet = '@media screen and (max-width: 960px)';
export const laptop = '@media screen and (max-width: 1200px)';

export const MOBILE = 480;
export const TABLET = 960;
export const LAPTOP = 1200;


export const CONTAINER_DESKTOP = '1320px';
export const CONTAINER_TABLET = '720px';
export const LAYOUT_PADDING = '20px';

export const LIGHT_GRAY = '#EFEFEF';
export const RED = '#e01313';
// export const VIOLET = '#9200ff';
export const VIOLET = '#ff9900';
export const BLUE = '#0166FF';
export const DARK_BLUE = '#00359a';
export const BLACK = '#101010';
export const LIGHT_BLUE = '#d8e7fe';
export const GRAY_3 = '#828282';
export const GRAY = '#A4A3A3';
export const WHITE = '#FFFFFF';
export const BORDER_NORMAL = '12px';

export const SHADOW_BIG = (COLOR = VIOLET) =>
  `0px 44px 150px 20px ${rgba(COLOR, 0.25)}`;
export const SHADOW_SMALL = (COLOR = VIOLET) =>
  `0px 22px 55px 11px ${rgba(COLOR, 0.25)}`;

export const TRANSITION = '0.3s cubic-bezier(0.215, 0.61, 0.355, 1)';

export const scrollbar = css`
  /* FF */
  scrollbar-color: rgba(34, 50, 84, 0.3) transparent;
  scrollbar-width: thin;

  &::-webkit-scrollbar-track {
    background-color: transparent;
  }

  &::-webkit-scrollbar {
    width: 12px;
    height: 12px;
    max-height: 20px;
    background-color: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgba(34, 50, 84, 0.3);
    background-clip: padding-box;
    border: 3px solid transparent;
    border-radius: 7px;
  }
`;
