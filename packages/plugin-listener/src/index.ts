/**
 * Author        : Ahmong
 * Date          : 2021-11-16 23:02
 * LastEditTime  : 2022-01-08 16:03
 * LastEditors   : Ahmong
 * License       : GNU GPL v3
 * ---
 * Description   : 
 * ---
 */
/* Copyright 2021, Milkdown by Mirone. */
import { createSlice, MilkdownPlugin, prosePluginsCtx, serializerCtx, SerializerReady } from '@milkdown/core';
import { Node as ProseNode, Plugin as StatePlugin } from '@milkdown/prose';

export type DocListener = (doc: ProseNode) => void;
export type MarkdownListener = (getMarkdown: () => string) => void;
export type Listener = {
    doc?: DocListener[];
    markdown?: MarkdownListener[];
};
export const listenerCtx = createSlice<Listener>({}, 'listener');

export const listener: MilkdownPlugin = (pre) => {
    pre.inject(listenerCtx);

    return async (ctx) => {
        await ctx.wait(SerializerReady);
        const listener = ctx.get(listenerCtx);
        const serializer = ctx.get(serializerCtx);

        const plugin = new StatePlugin({
            state: {
                init: () => {
                    // do nothing
                },
                apply: (tr) => {
                    // filter the tr with meta data.
                    // So don't mix normal update of content with view decorate change
                    if (!tr.docChanged || !tr.isGeneric) return;

                    listener.markdown?.forEach((markdownListener) => {
                        markdownListener(() => serializer(tr.doc));
                    });
                    listener.doc?.forEach((docListener) => {
                        docListener(tr.doc);
                    });
                },
            },
        });
        ctx.update(prosePluginsCtx, (x) => x.concat(plugin));
    };
};
