import { css } from 'styled-components';
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

export const LIGHT_GRAY = '#EFEFEF';
export const VIOLET = '#9200ff';
export const BLUE = '#0166FF';
export const DARK_BLUE = '#00359a';
export const LIGHT_BLUE = '#d8e7fe';
export const GRAY_3 = '#828282';
export const GRAY = '#A4A3A3';
export const WHITE = '#FFFFFF';
export const BORDER_NORMAL = '12px';

export const SHADOW_BIG = (COLOR = VIOLET) =>
  css`0px 44px 150px 20px ${rgba(COLOR, 0.25)}`;
export const SHADOW_SMALL = (COLOR = VIOLET) =>
  css`0px 22px 55px 11px ${rgba(COLOR, 0.25)}`;

export const TRANSITION = '0.3s cubic-bezier(0.215, 0.61, 0.355, 1)';
