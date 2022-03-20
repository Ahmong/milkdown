/**
 * Author        : Ahmong
 * Date          : 2021-12-27 17:48
 * LastEditTime  : 2022-03-21 01:33
 * LastEditors   : Ahmong
 * License       : GNU GPL v3
 * ---
 * Description   : 
 * ---
 */
/* Copyright 2021, Milkdown by Mirone. */
import { createPlugin } from '@milkdown/utils';
import links from 'remark-inline-links';
import { parserOptionsPlugin } from '../parser-option';

import { filterHTMLPlugin } from './filter-html';

export const zwmarkdownPlugins = [
    parserOptionsPlugin,
    createPlugin(() => ({
        remarkPlugins: () => [links, filterHTMLPlugin],
    }))(),
];
