/* Copyright 2021, Milkdown by Mirone. */
import { ThemePack } from '@milkdown/design-system';
import { darken, lighten, mix, saturate, transparentize } from 'polished';

export const Nord = {
    // Polar Night.
    // Used for backgrounds in dark theme or text in light theme.

    // nord0: The Origin color of Polar Night.
    // For background in dark theme or plain text in light theme.
    dark0: '#2e3440',

    // nord1: Brighter shade color based on nord0.
    // In dark theme, used for status bars, editor gutters, panels, modals;
    //   Floating popups like notifications or auto completion;
    //   Form components like buttons, text/select fields or checkboxes.
    // In light theme, used for inconspicuous UI text;
    //   State animations like button is hovered, active or focused.
    dark1: '#3b4252',

    // nord2: More brighter shade color of nord0.
    // In dark theme, used for currently active text line, selection, highlighting;
    // In dark/light theme, used as an brighter variant for the same target
    //   elements like nord1.
    dark2: '#434c5e',

    // nord3: Brightest shade color based on nord0.
    // In dark theme, used for indent- and wrap guide marker,
    //   invisible/non-printable characters.
    // In light theme, next to nord0 and nord2 as darker variants,
    //   also used for the most subtle/inconspicuous UI text elements.
    dark3: '#4c566a',

    // Snow Storm.
    // Used for text or base UI elements in light theme.
    // In bright to dark style, uses nord6 as base color and
    //   nord5/nord6 as highlights.
    // In dark to bright style, uses nord4 as base color and
    //   nord5/nord4 as hightlights.

    // nord4: The original color of Snow Storm.
    // In dark theme, used for text editor caret.
    // In light theme, used for status base, editor gutters, panels, modals;
    //   Floating popups like notifications or auto completion;
    //   Form components like buttons, text/select fields or checkboxes.
    //   Also works fine for inconspicuous elements like borders or as
    //   dropshadow between different components.
    light0: '#d8dee9',

    // nord5: Brighter shade color of nord4.
    // In dark theme, used for inconspicuous UI text elements; Also state
    //   animations like a more brighter text color when hovered, active or focused.
    // In light theme, used for currently active text line, selection- and highlighting.
    light1: '#e5e9f0',

    // nord6: Brightest shade color base on nord4.
    // In dark theme, used for elevated UI text elements.
    // In light theme, used for background and area coloring.
    light2: '#eceff4',

    // Frost.
    // The heart palette of Nord, a group of four bluish colors that are
    //   commonly used for primary UI component and text highlighting elements.
    // All colors of this palette are used the same in both dark & light theme.

    // nord7: Like frozen polar water.
    // Used for UI elements that should, next to the primary accent color nord8,
    //   standout and get more visual attention.
    frost0: '#8fbcbb',

    // nord8: Like pure and clear ice.
    // The bright and shiny primary accent color used for primary UI elements
    //   with main usage purposes that require the most visual attention.
    frost1: '#88c0d0',

    // nord9: Like arctic waters.
    // A more darkened and less saturated color used for secondary UI elements
    //   that also require more visual attention than other elements.
    frost2: '#81a1c1',

    // nord10: Like deep arctic ocean.
    // A dark and intensive color used for tertiary UI elements that require
    //   more visual attention than default elements.
    frost3: '#5e81ac',

    // Aurora
    // Five colorful components reminiscent of "Aurora borealis", sometimes
    //   referred to as polar lights.

    // nord11: Used for UI elements rendering error states like linter markers.
    // Similar to brown-red.
    auroraRed: '#bf616a',

    // nord12: Rarely used for UI elements, but it may indicate a more advanced
    //   or dangerous functionality.
    // Similar to orange.
    auroraOrange: '#d08770',

    // nord13: Used for UI elements rendering warning state like linter markers.
    // Similar to brown-yellow.
    auroraYellow: '#ebcb8b',

    // nord14: Used for UI elements rendering success states and visualizations.
    // Similar to gray-green.
    auroraGreen: '#a3be8c',

    // nord15: Rarely used for UI elements, but it may indicate a more uncommon
    //   functionality.
    // Similar to gray-purple.
    auroraPurple: '#b48ead',
};

export const ZwPalette = {
    light0: '#ffffff',
    blue: '#8addff',
};

export const themeDark = {
    backgroundPrimary: Nord.dark0,
    backgroundPrimaryAlt: darken(0.07, Nord.dark0),
    backgroundSecondary: Nord.dark1,
    backgroundSecondaryAlt: Nord.dark2,
    textNormal: Nord.light2,
    textFaint: Nord.light0,
    textMuted: Nord.light1,
    textTitleH1: mix(0.3, Nord.auroraRed, Nord.auroraYellow),
    textTitleH2: Nord.auroraOrange,
    textTitleH3: mix(0.5, Nord.auroraPurple, Nord.auroraOrange),
    textTitleH4: mix(0.5, Nord.auroraOrange, Nord.auroraRed),
    textTitleH5: mix(0.4, Nord.auroraOrange, Nord.auroraGreen),
    textTitleH6: mix(0.2, Nord.auroraYellow, Nord.auroraPurple),
    textLink: lighten(0.2, saturate(0.2, Nord.frost3)),
    textA: Nord.frost3,
    textAHover: Nord.frost2,
    textMark: transparentize(0.3, Nord.frost1),
    textHighlightBg: Nord.dark3,
    blockQuoteIndent: Nord.frost0,
    preCode: Nord.light0,
    inlineCode: lighten(0.1, Nord.frost0),
    interactiveAccent: Nord.frost0,
    interactiveBefore: Nord.dark3,
    backgroundModifierBorder: Nord.dark2,
    textAccent: Nord.auroraOrange,
    interactiveAccentRgb: Nord.auroraOrange,
    vimCursor: Nord.auroraOrange,
    textSelection: Nord.dark3,
};

export const darkColor: ThemePack['color'] = {
    shadow: Nord.dark1,
    primary: Nord.frost0,
    secondary: Nord.frost2,
    neutral: Nord.light0, // main text color
    solid: Nord.light1,
    line: transparentize(0.8, Nord.frost3),
    background: Nord.dark1,
    surface: Nord.dark0, // canvas color of editor area
};

export const themeLight = {
    backgroundPrimary: Nord.light0,
    backgroundPrimaryAlt: Nord.light0,
    backgroundSecondary: Nord.light2,
    backgroundSecondaryAlt: Nord.light1,
    textNormal: Nord.dark1,
    textFaint: Nord.dark3,
    textMuted: Nord.dark2,
    textTitleH1: mix(0.3, Nord.auroraRed, Nord.auroraYellow),
    textTitleH2: Nord.auroraOrange,
    textTitleH3: mix(0.5, Nord.auroraPurple, Nord.auroraOrange),
    textTitleH4: mix(0.4, Nord.auroraOrange, Nord.auroraRed),
    textTitleH5: mix(0.4, Nord.auroraOrange, Nord.auroraGreen),
    textTitleH6: mix(0.2, Nord.auroraYellow, Nord.auroraPurple),
    // textLink: Nord.frost3,
    textLink: saturate(0.2, Nord.frost3),
    textA: Nord.frost3,
    textAHover: Nord.frost1,
    textMark: transparentize(0.3, Nord.frost1),
    textHighlightBg: Nord.light0,
    blockQuoteIndent: Nord.frost0,
    preCode: Nord.light2,
    inlineCode: darken(0.3, Nord.frost0),
    interactiveAccent: Nord.frost0,
    interactiveBefore: Nord.light0,
    backgroundModifierBorder: Nord.light1,
    textAccent: Nord.auroraOrange,
    interactiveAccentRgb: Nord.auroraOrange,
    vimCursor: Nord.auroraOrange,
    textSelection: Nord.light0,
};

export const lightColor: ThemePack['color'] = {
    shadow: Nord.dark1,
    primary: Nord.frost0,
    secondary: Nord.frost2,
    neutral: Nord.dark0, // main text color
    solid: Nord.dark3,
    line: Nord.light0,
    background: Nord.light2,
    surface: Nord.light0, // canvas color of editor area
};

export const color = {
    lightColor,
    darkColor,
} as const;
