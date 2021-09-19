/* Copyright 2021, Milkdown by Mirone. */
import { Schema } from 'prosemirror-model';

import { createSlice } from '../context';
import { InitReady, Mark, Node } from '../internal-plugin';
import { createTimer, Timer } from '../timing';
import { Atom, MilkdownPlugin } from '../utility';

export const SchemaReady = createTimer('schemaReady');

export const schemaCtx = createSlice<Schema>({} as Schema, 'schema');
export const nodesCtx = createSlice<Node[]>([], 'nodes');
export const marksCtx = createSlice<Mark[]>([], 'marks');
export const schemaTimerCtx = createSlice<Timer[]>([], 'schemaTimer');

export const schema: MilkdownPlugin = (pre) => {
    pre.inject(schemaCtx).inject(nodesCtx).inject(marksCtx).inject(schemaTimerCtx, [InitReady]).record(SchemaReady);

    return async (ctx) => {
        await ctx.waitTimers(schemaTimerCtx);

        const getAtom = <T extends Atom>(x: T[]) =>
            Object.fromEntries<T['schema']>(x.map(({ id, schema }) => [id, schema]));

        const nodes = getAtom(ctx.get(nodesCtx));
        const marks = getAtom(ctx.get(marksCtx));

        ctx.set(
            schemaCtx,
            new Schema({
                nodes,
                marks,
            }),
        );

        ctx.done(SchemaReady);
    };
};
