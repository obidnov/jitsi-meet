export * from './functions.any';

/**
 * Whether or not there are always on labels.
 *
 * @returns {boolean}
 */
export function isAlwaysOnTitleBarEmpty() {
    const bar = document.querySelector('#alwaysVisible>div');

    return bar?.childNodes.length === 0;
}

/**
 * Detect if timer is alone on panel.
 *
 * @returns {boolean}
 */
export function isTimerAlone() {
    const el = document.querySelector('#autoHide>div.subject-info-container');

    return el?.childNodes.length === 1;
}