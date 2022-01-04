/* Copyright 2021, Milkdown by Mirone. */
/* Copyright 2021, Milkdown by Mirone. */
import { css } from '@emotion/css';
import { createCmd, createCmdKey } from '@milkdown/core';
import { wrapIn, wrappingInputRule } from '@milkdown/prose';
import { createNode, createShortcut } from '@milkdown/utils';

import { SupportedKeys } from '../supported-keys';

type Keys = SupportedKeys['Blockquote'];

const id = 'blockquote';

export const WrapInBlockquote = createCmdKey();

export const blockquote = createNode<Keys>((utils) => {
    const style = utils.getStyle(
        (themeTool) =>
            css`
                line-height: 1.75rem;
                & > * {
                    margin-left: 2rem;
                    margin-right: 2.15rem;
                    border-left: 4px solid ${themeTool.extColor('blockQuoteIndent')};
                    padding-left: 1rem;
                }
                * {
                    font-size: 1rem;
                    line-height: 1.5rem;
                }
            `,
    );

    return {
        id,
        schema: () => ({
            content: 'block+',
            group: 'block',
            defining: true,
            parseDOM: [{ tag: 'blockquote' }],
            toDOM: (node) => ['blockquote', { class: utils.getClassName(node.attrs, id, style) }, 0],
            parseMarkdown: {
                match: ({ type }) => type === id,
                runner: (state, node, type) => {
                    state.openNode(type).next(node.children).closeNode();
                },
            },
            toMarkdown: {
                match: (node) => node.type.name === id,
                runner: (state, node) => {
                    state.openNode('blockquote').next(node.content).closeNode();
                },
            },
        }),
        inputRules: (nodeType) => [wrappingInputRule(/^\s*>\s$/, nodeType)],
        commands: (nodeType) => [createCmd(WrapInBlockquote, () => wrapIn(nodeType))],
        shortcuts: {
            [SupportedKeys.Blockquote]: createShortcut(WrapInBlockquote, 'Mod-Shift-b'),
        },
    };
});
