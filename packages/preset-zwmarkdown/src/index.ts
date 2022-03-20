/**
 * Author        : Ahmong
 * Date          : 2022-03-21 01:22
 * LastEditTime  : 2022-03-21 01:33
 * LastEditors   : Ahmong
 * License       : GNU GPL v3
 * ---
 * Description   : '头部注释'
 * ---
 * FilePath      : /milkdown/packages/preset-zwmarkdown/src/index.ts
**/
/* Copyright 2021, Milkdown by Mirone. */
import { AtomList } from '@milkdown/utils';

import { marks, ModifyLink, ToggleBold, ToggleInlineCode, ToggleItalic, ToggleLink } from './mark';
import {
    InsertHardbreak,
    InsertHr,
    InsertImage,
    LiftListItem,
    ModifyImage,
    nodes,
    SinkListItem,
    SplitListItem,
    TurnIntoCodeFence,
    TurnIntoHeading,
    TurnIntoText,
    WrapInBlockquote,
    WrapInBulletList,
    WrapInOrderedList,
} from './node';
import { zwmarkdownPlugins } from './plugin';

export * from './mark';
export * from './node';
export * from './supported-keys';
export * from './parser-option';

export const zwmarkdownNodes = AtomList.create([...nodes, ...marks]);
export { zwmarkdownPlugins };
export const zwmarkdown = AtomList.create([...zwmarkdownPlugins, ...zwmarkdownNodes]);

export const commands = {
    ToggleInlineCode,
    ToggleItalic,
    ToggleLink,
    ToggleBold,

    ModifyLink,
    ModifyImage,

    WrapInBlockquote,
    WrapInBulletList,
    WrapInOrderedList,

    TurnIntoCodeFence,
    TurnIntoHeading,
    TurnIntoText,

    InsertHardbreak,
    InsertHr,
    InsertImage,

    SplitListItem,
    SinkListItem,
    LiftListItem,
} as const;
export type Commands = typeof commands;
