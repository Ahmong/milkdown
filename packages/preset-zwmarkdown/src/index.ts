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
