"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DefaultQuillToolbarOptions = void 0;
/**
 * variable holding a default quill toolbar. It looks like this:
 *
 * ```javascript
 * export const DefaultQuillToolbarOptions = [
 *   [{ header: [1, 2, 3, 4, 5, 6, false] }],
 *   ['bold', 'italic', 'underline', 'strike'], // toggled buttons
 *   ['blockquote', 'code-block'],
 *   [{ list: 'ordered' }, { list: 'bullet' }],
 *   [{ indent: '-1' }, { indent: '+1' }],
 *
 *   [{ align: [] }],
 *   ['link', 'image', 'video'],
 *
 *   ['clean'], // remove formatting button
 * ]
 * ```
 *
 * ### Usage
 *
 * ```javascript
 * import { DefaultQuillToolbarOptions } from '@adminjs/design-system`
 * ```
 *
 *
 * @memberof RichText
 * @alias DefaultQuillToolbarOptions
 */
exports.DefaultQuillToolbarOptions = [
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
    ['bold', 'italic', 'underline', 'strike'],
    ['blockquote', 'code-block'],
    [{ list: 'ordered' }, { list: 'bullet' }],
    [{ indent: '-1' }, { indent: '+1' }],
    [{ align: [] }],
    ['link', 'image', 'video'],
    ['clean'],
];
