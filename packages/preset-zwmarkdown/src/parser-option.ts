/**
 * Author        : Ahmong
 * Date          : 2022-01-09 22:00
 * LastEditTime  : 2022-01-12 00:22
 * LastEditors   : Ahmong
 * License       : GNU GPL v3
 * ---
 * Description   : define types for using in zwmarkdown
 * ---
 */

import { createSlice, Ctx } from "@milkdown/core";
import { MilkdownPlugin } from "@milkdown/core";

export type ParserOptionType<K extends string = string, T = any> = Record<K, T>;
export type ParserOptions = Record<string, any>;

/**
 * The dir of current md doc.
 */
export const baseDirDefault = { baseDir: '' }

/**
 * The scheme used by editor when load local image files.
 */
export const repoSchemeDefault = { repoScheme: '' };

export const parserOptionsCtx = createSlice<ParserOptions>({} as ParserOptions, 'parserOptions');

export const setParserOption = <K extends string, T> (ctx: Ctx, val: T, def: ParserOptionType<K,T>): void => {
  ctx.update(parserOptionsCtx, (options) => {
    options[Object.keys(def)[0]] = val;
    return options;
  })
}

export const getParserOption = <K extends string, T> (ctx: Ctx, def: ParserOptionType<K,T>): T => {
  const options = ctx.get(parserOptionsCtx)
  let option: T = options[Object.keys(def)[0]]
  return option;
}

export const parserOptionsPlugin: MilkdownPlugin = (pre) => {
  pre.inject(parserOptionsCtx)
  return async () => {
  }
}
