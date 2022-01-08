/**
 * Author        : Ahmong
 * Date          : 2022-01-06 17:51
 * LastEditTime  : 2022-01-08 00:16
 * LastEditors   : Ahmong
 * License       : GNU GPL v3
 * ---
 * Description   : StateField of image plugin.
 * ---
 */

import { EditorState, StateField, Transaction } from "@milkdown/prose";

export type ImageState = {
  imageBasePath: string;
}

export const ImageBasePathKey = 'imageBasePathkey'

export class ImageStateField implements StateField<ImageState> {

  init (/*config: Object, instance: EditorState*/): ImageState {
    return { imageBasePath: '' }
  }

  apply ( tr: Transaction,
          value: ImageState,
          _oldState: EditorState,
          _newState: EditorState
        ): ImageState {
      const imageBasePath = tr.getMeta(ImageBasePathKey)
      if (imageBasePath) {
        return { imageBasePath }
      } else if (value) {
        return value
      } else {
        return { imageBasePath: '' }
      }
  }

  toJSON (value: ImageState): any {
    return JSON.stringify(value)
  }

  fromJSON (_config: Object, value: any, _state: EditorState): ImageState {
    return JSON.parse(value)
  }
}