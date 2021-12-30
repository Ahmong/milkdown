/* Copyright 2021, Milkdown by Mirone. */
/* Copyright 2021, Milkdown by Mirone. */
import { css } from '@emotion/css';
import { createCmd, createCmdKey } from '@milkdown/core';
import { markRule, toggleMark } from '@milkdown/prose';
import { createMark, createShortcut } from '@milkdown/utils';

import { SupportedKeys } from '../supported-keys';

type Keys = SupportedKeys['CodeInline'];
const id = 'code_inline';

export const ToggleInlineCode = createCmdKey();

export const codeInline = createMark<Keys>((utils) => {
    const style = utils.getStyle(
        ({ extColor, size, font }) =>
            css`
                background-color: ${extColor('backgroundPrimaryAlt')};
                color: ${extColor('inlineCode')};
                border-radius: ${size.radius};
                font-family: ${font.code};
                font-weight: 400;
                font-size: 0.9rem;
                padding: 0 0.2rem;
            `,
    );
    return {
        id,
        schema: () => ({
            excludes: '_',
            parseDOM: [{ tag: 'code' }],
            toDOM: (mark) => ['code', { class: utils.getClassName(mark.attrs, 'code-inline', style) }],
            parseMarkdown: {
                match: (node) => node.type === 'inlineCode',
                runner: (state, node, markType) => {
                    state.openMark(markType);
                    state.addText(node.value as string);
                    state.closeMark(markType);
                },
            },
            toMarkdown: {
                match: (mark) => mark.type.name === id,
                runner: (state, _, node) => {
                    state.addNode('inlineCode', undefined, node.text || '');

                    return true;
                },
            },
        }),
        inputRules: (markType) => [markRule(/(?:^|[^`])(`([^`]+)`)$/, markType)],
        commands: (markType) => [createCmd(ToggleInlineCode, () => toggleMark(markType))],
        shortcuts: {
            [SupportedKeys.CodeInline]: createShortcut(ToggleInlineCode, 'Mod-e'),
        },
    };
});
