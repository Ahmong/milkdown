/* Copyright 2021, Milkdown by Mirone. */

import { injectGlobal } from '@emotion/css';
import { themeFactory } from '@milkdown/core';
import { injetExtColor } from '@milkdown/design-system';

import { code, typography } from './font';
import { mixin } from './mixin';
import { override } from './override';
import { slots } from './slots';
import { view } from './view';
import { darkColor, lightColor, themeDark, themeLight } from './zwnord';

export const font = {
    typography,
    code,
};

export const size = {
    radius: '4px',
    lineWidth: '1px',
};

export const zwNordLight = themeFactory({
    font,
    size,
    color: lightColor,
    extColor: Object.keys(themeLight),
    mixin,
    slots,
    global: (themeTool) => {
        const css = injectGlobal;
        css`
            ${view};
            ${override(themeTool)}
        `;

        injetExtColor(themeLight);
    },
});

export const zwNordDark = themeFactory({
    font,
    size,
    color: darkColor,
    extColor: Object.keys(themeDark),
    mixin,
    slots,
    global: (themeTool) => {
        const css = injectGlobal;
        css`
            ${view};
            ${override(themeTool)}
        `;

        injetExtColor(themeDark);
    },
});

const darkMode = Boolean(window.matchMedia?.('(prefers-color-scheme: dark)').matches);
export const zwnord = darkMode ? zwNordDark : zwNordLight;

export { mixin } from './mixin';
export { override } from './override';
export { slots } from './slots';
export { view } from './view';
export { color, darkColor, lightColor } from './zwnord';
