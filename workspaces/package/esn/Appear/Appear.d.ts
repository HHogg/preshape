import * as React from 'react';
import { MotionProps, Transition } from 'framer-motion';
import { BoxProps } from '../Box/Box';
export declare type TypeAnimation = 'Expand' | 'Fade' | 'FadeSlideUp' | 'FadeSlideRight' | 'FadeSlideDown' | 'FadeSlideLeft' | 'Pop' | 'ScaleYDown' | 'ScaleYUp';
/**
 * Using framer-motion, the Appear component provides a variety of
 * ways to make parts of the UI appear in style.
 */
export interface AppearProps extends BoxProps, MotionProps {
    /**
     * Name of the animation to play when the visibility state changes.
     *
     * @default "FadeSlideUp"
     */
    animation?: TypeAnimation;
    /**
     * Time (in milliseconds) that the animation is delayed for.
     *
     * @default 0
     */
    delay?: number;
    /**
     * Duration (in milliseconds) that the animation is played for. Not compatible with
     * spring based animations.
     *
     * @default 200
     */
    duration?: number;
    /** Callback for when the animation has ended */
    onAnimationEnd?: () => void;
    /** Callback for when the animation has started */
    onAnimationStart?: () => void;
    /** The animation origin on the X axis, from 0 -1 */
    originX?: number;
    /** The animation origin on the Y axis, from 0 -1 */
    originY?: number;
    /**
     * Framer Motion transition.
     */
    transition?: Transition;
    /**
     * Trigger for appearance/disappearance animation.
     *
     * @default true
     * */
    visible?: boolean;
    /**
     * The initial visibility state, which determines the starting
     * animation state.
     *
     * @default false
     */
    visibleInitially?: boolean;
}
declare const _default: React.ForwardRefExoticComponent<AppearProps & Pick<React.AllHTMLAttributes<HTMLElement>, "max" | "required" | "low" | "high" | "disabled" | "default" | "start" | "open" | "media" | "hidden" | "cite" | "data" | "dir" | "form" | "label" | "slot" | "span" | "summary" | "title" | "pattern" | "async" | "defer" | "manifest" | "color" | "content" | "size" | "multiple" | "children" | "list" | "step" | "className" | "id" | "prefix" | "nonce" | "tabIndex" | "lang" | "method" | "min" | "name" | "target" | "type" | "role" | "crossOrigin" | "href" | "aria-activedescendant" | "aria-atomic" | "aria-autocomplete" | "aria-busy" | "aria-checked" | "aria-colcount" | "aria-colindex" | "aria-colspan" | "aria-controls" | "aria-current" | "aria-describedby" | "aria-details" | "aria-disabled" | "aria-dropeffect" | "aria-errormessage" | "aria-expanded" | "aria-flowto" | "aria-grabbed" | "aria-haspopup" | "aria-hidden" | "aria-invalid" | "aria-keyshortcuts" | "aria-label" | "aria-labelledby" | "aria-level" | "aria-live" | "aria-modal" | "aria-multiline" | "aria-multiselectable" | "aria-orientation" | "aria-owns" | "aria-placeholder" | "aria-posinset" | "aria-pressed" | "aria-readonly" | "aria-relevant" | "aria-required" | "aria-roledescription" | "aria-rowcount" | "aria-rowindex" | "aria-rowspan" | "aria-selected" | "aria-setsize" | "aria-sort" | "aria-valuemax" | "aria-valuemin" | "aria-valuenow" | "aria-valuetext" | "dangerouslySetInnerHTML" | "onCopy" | "onCopyCapture" | "onCut" | "onCutCapture" | "onPaste" | "onPasteCapture" | "onCompositionEnd" | "onCompositionEndCapture" | "onCompositionStart" | "onCompositionStartCapture" | "onCompositionUpdate" | "onCompositionUpdateCapture" | "onFocus" | "onFocusCapture" | "onBlur" | "onBlurCapture" | "onChange" | "onChangeCapture" | "onBeforeInput" | "onBeforeInputCapture" | "onInput" | "onInputCapture" | "onReset" | "onResetCapture" | "onSubmit" | "onSubmitCapture" | "onInvalid" | "onInvalidCapture" | "onLoad" | "onLoadCapture" | "onError" | "onErrorCapture" | "onKeyDown" | "onKeyDownCapture" | "onKeyPress" | "onKeyPressCapture" | "onKeyUp" | "onKeyUpCapture" | "onAbort" | "onAbortCapture" | "onCanPlay" | "onCanPlayCapture" | "onCanPlayThrough" | "onCanPlayThroughCapture" | "onDurationChange" | "onDurationChangeCapture" | "onEmptied" | "onEmptiedCapture" | "onEncrypted" | "onEncryptedCapture" | "onEnded" | "onEndedCapture" | "onLoadedData" | "onLoadedDataCapture" | "onLoadedMetadata" | "onLoadedMetadataCapture" | "onLoadStart" | "onLoadStartCapture" | "onPause" | "onPauseCapture" | "onPlay" | "onPlayCapture" | "onPlaying" | "onPlayingCapture" | "onProgress" | "onProgressCapture" | "onRateChange" | "onRateChangeCapture" | "onSeeked" | "onSeekedCapture" | "onSeeking" | "onSeekingCapture" | "onStalled" | "onStalledCapture" | "onSuspend" | "onSuspendCapture" | "onTimeUpdate" | "onTimeUpdateCapture" | "onVolumeChange" | "onVolumeChangeCapture" | "onWaiting" | "onWaitingCapture" | "onAuxClick" | "onAuxClickCapture" | "onClick" | "onClickCapture" | "onContextMenu" | "onContextMenuCapture" | "onDoubleClick" | "onDoubleClickCapture" | "onDragCapture" | "onDragEndCapture" | "onDragEnter" | "onDragEnterCapture" | "onDragExit" | "onDragExitCapture" | "onDragLeave" | "onDragLeaveCapture" | "onDragOver" | "onDragOverCapture" | "onDragStartCapture" | "onDrop" | "onDropCapture" | "onMouseDown" | "onMouseDownCapture" | "onMouseEnter" | "onMouseLeave" | "onMouseMove" | "onMouseMoveCapture" | "onMouseOut" | "onMouseOutCapture" | "onMouseOver" | "onMouseOverCapture" | "onMouseUp" | "onMouseUpCapture" | "onSelect" | "onSelectCapture" | "onTouchCancel" | "onTouchCancelCapture" | "onTouchEnd" | "onTouchEndCapture" | "onTouchMove" | "onTouchMoveCapture" | "onTouchStart" | "onTouchStartCapture" | "onPointerDown" | "onPointerDownCapture" | "onPointerMove" | "onPointerMoveCapture" | "onPointerUp" | "onPointerUpCapture" | "onPointerCancel" | "onPointerCancelCapture" | "onPointerEnter" | "onPointerEnterCapture" | "onPointerLeave" | "onPointerLeaveCapture" | "onPointerOver" | "onPointerOverCapture" | "onPointerOut" | "onPointerOutCapture" | "onGotPointerCapture" | "onGotPointerCaptureCapture" | "onLostPointerCapture" | "onLostPointerCaptureCapture" | "onScroll" | "onScrollCapture" | "onWheel" | "onWheelCapture" | "onAnimationStartCapture" | "onAnimationEndCapture" | "onAnimationIteration" | "onAnimationIterationCapture" | "onTransitionEnd" | "onTransitionEndCapture" | "accept" | "acceptCharset" | "action" | "allowFullScreen" | "allowTransparency" | "alt" | "as" | "autoComplete" | "autoFocus" | "autoPlay" | "capture" | "cellPadding" | "cellSpacing" | "charSet" | "challenge" | "checked" | "classID" | "cols" | "colSpan" | "controls" | "coords" | "dateTime" | "download" | "encType" | "formAction" | "formEncType" | "formMethod" | "formNoValidate" | "formTarget" | "frameBorder" | "headers" | "hrefLang" | "htmlFor" | "httpEquiv" | "integrity" | "keyParams" | "keyType" | "kind" | "loop" | "marginHeight" | "marginWidth" | "maxLength" | "mediaGroup" | "minLength" | "muted" | "noValidate" | "optimum" | "placeholder" | "playsInline" | "poster" | "preload" | "readOnly" | "rel" | "reversed" | "rows" | "rowSpan" | "sandbox" | "scope" | "scoped" | "scrolling" | "seamless" | "selected" | "shape" | "sizes" | "src" | "srcDoc" | "srcLang" | "srcSet" | "useMap" | "value" | "wmode" | "defaultChecked" | "defaultValue" | "suppressContentEditableWarning" | "suppressHydrationWarning" | "accessKey" | "contentEditable" | "contextMenu" | "draggable" | "spellCheck" | "translate" | "radioGroup" | "about" | "datatype" | "inlist" | "property" | "resource" | "typeof" | "vocab" | "autoCapitalize" | "autoCorrect" | "autoSave" | "itemProp" | "itemScope" | "itemType" | "itemID" | "itemRef" | "results" | "security" | "unselectable" | "inputMode" | "is"> & React.RefAttributes<HTMLElement>>;
export default _default;
//# sourceMappingURL=Appear.d.ts.map