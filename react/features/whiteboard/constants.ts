/**
 * Fixed name of the whiteboard fake participant.
 */
export const WHITEBOARD_PARTICIPANT_NAME = 'Whiteboard';

/**
 * Whiteboard ID.
 */
export const WHITEBOARD_ID = 'whiteboard';

/**
 * Whiteboard UI Options.
 */
export const WHITEBOARD_UI_OPTIONS = {
    canvasActions: {
        allowedShapes: [
            'arrow', 'diamond', 'ellipse', 'freedraw', 'line', 'rectangle', 'selection', 'text', 'image'
        ],
        allowedShortcuts: [
            'cut', 'deleteSelectedElements', 'redo', 'selectAll', 'undo'
        ],
        disableAlignItems: false,
        disableFileDrop: false,
        disableGrouping: false,
        disableHints: false,
        disableLink: false,
        disableShortcuts: false,
        disableVerticalAlignOptions: true,
        fontSizeOptions: [ 's', 'm', 'l' ],
        hideArrowHeadsOptions: false,
        hideColorInput: false,
        hideClearCanvas: false,
        hideFontFamily: false,
        hideHelpDialog: true,
        hideIOActions: false,
        hideLayers: false,
        hideLibraries: true,
        hideLockButton: false,
        hideOpacityInput: false,
        hideSharpness: false,
        hideStrokeStyle: false,
        hideTextAlign: false,
        hideThemeControls: true,
        hideUserList: true,
        saveAsImageOptions: {
            defaultBackgroundValue: false,
            disableScale: true,
            disableSelection: false,
            disableClipboard: false,
            disableSceneEmbed: true,
            hideTheme: false
        }
    }
};

/**
 * Whiteboard default lower limit.
 */
export const MIN_USER_LIMIT = 10;

/**
 * Whiteboard soft limit diff.
 */
export const USER_LIMIT_THRESHOLD = 5;
