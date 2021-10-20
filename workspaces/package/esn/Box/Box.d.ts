import * as React from 'react';
import './Box.css';
export declare type Attributes<E, P = {}> = P & Omit<E extends SVGElement ? React.SVGAttributes<E> : React.AllHTMLAttributes<E>, keyof P>;
export declare type TypeColor = 'black' | 'white' | 'highlight' | 'accent-shade-1' | 'accent-shade-2' | 'accent-shade-3' | 'background-shade-1' | 'background-shade-2' | 'background-shade-3' | 'dark-shade-1' | 'dark-shade-2' | 'dark-shade-3' | 'light-shade-1' | 'light-shade-2' | 'light-shade-3' | 'negative-shade-1' | 'negative-shade-2' | 'negative-shade-3' | 'positive-shade-1' | 'positive-shade-2' | 'positive-shade-3' | 'text-shade-1' | 'text-shade-2' | 'text-shade-3';
export declare type TypeSize = 'x0' | 'x1' | 'x2' | 'x3' | 'x4' | 'x6' | 'x8' | 'x10' | 'x12' | 'x16';
export declare type TypeHTMLTags = keyof HTMLElementTagNameMap;
export declare type TypeSVGTags = keyof Omit<SVGElementTagNameMap, TypeHTMLTags>;
export declare type TypeAllElementTags = TypeHTMLTags | TypeSVGTags;
export declare type TypeTheme = 'day' | 'night';
/**
 * The core component that is the end of the chain for all other components.
 * It provides general utility behaviour and styling.
 */
export interface BoxProps {
    /** Quick way of absolutely position to common places */
    absolute?: 'center' | 'edge-to-edge' | 'top' | 'top-left' | 'top-right' | 'bottom' | 'bottom-left' | 'bottom-right';
    /**
     * Short cut child alignment property for both alignChildrenHorizontal and
     * alignChildrenVertical.
     */
    alignChildren?: 'start' | 'middle' | 'end';
    /** Horizontal alignment of children flex items. */
    alignChildrenHorizontal?: 'start' | 'middle' | 'end' | 'around' | 'between';
    /** Vertical alignment of children flex items. */
    alignChildrenVertical?: 'start' | 'middle' | 'end' | 'around' | 'between';
    /** Flex item alignment property (changes with parent direction). */
    alignSelf?: 'start' | 'middle' | 'end';
    /** Background color, shades are taken from the current theme.*/
    backgroundColor?: TypeColor | 'overlay';
    /** Flex basis */
    basis?: string;
    /** Border color, shades are taken from the current theme. */
    borderColor?: TypeColor;
    /** Applies just the bottom border. To apply all border, just pass borderSize */
    borderBottom?: boolean;
    /** Applies just the left border. To apply all border, just pass borderSize */
    borderLeft?: boolean;
    /** Applies just the right border. To apply all border, just pass borderSize */
    borderRight?: boolean;
    /** Applies just the top border. To apply all border, just pass borderSize */
    borderTop?: boolean;
    /** Adds styling of a border radius to one of the size multiples */
    borderRadius?: 'full' | 'x1' | 'x2' | 'x3';
    /** Thickness of the border to be applied */
    borderSize?: 'x1' | 'x2' | 'x3';
    /** Adds styling to indicate that the element is clickable */
    clickable?: boolean;
    /** Applies relative positioning to contain child elements. */
    container?: boolean;
    /** Applies display styling */
    display?: 'block' | 'inline-block';
    /** Applies a drop shadow filter that gives the appearance of elevation */
    elevate?: boolean;
    /** Quick way of fixed position to common places */
    fixed?: 'center' | 'edge-to-edge' | 'top' | 'top-left' | 'top-right' | 'bottom' | 'bottom-left' | 'bottom-right';
    /** Flex direction */
    flex?: 'horizontal' | 'vertical';
    /** Spacing applied between child flex items, values are global spacing variables. */
    gap?: TypeSize;
    /** Flex item property if it should grow with available space. */
    grow?: boolean | string;
    /** Fixed height applied through inline styling */
    height?: number | string;
    /** Margins applied for the global spacing variables */
    margin?: TypeSize;
    /** Max width applied through inline styling */
    maxHeight?: number | string;
    /** Max width applied through inline styling */
    maxWidth?: number | string;
    /** Max height applied through inline styling */
    minHeight?: number | string;
    /** Min width applied through inline style */
    minWidth?: number | string;
    /** Sets how overflown content is handled */
    overflow?: 'hidden';
    /** Padding applied for the global spacing variables */
    padding?: TypeSize;
    /** Horizontal padding applied for the global spacing variables */
    paddingHorizontal?: TypeSize;
    /** Vertical pa?dding applied for the global spacing variables */
    paddingVertical?: TypeSize;
    /** Reverses the flex direction */
    reverse?: boolean;
    /** Applies overflow styling to enable/disable scrolling.  */
    scrollable?: boolean;
    /** Flex item property if it should shrink. */
    shrink?: boolean | string;
    /**
     * Any valid HTML or SVG element tag.
     *
     * @reference false
     */
    tag?: TypeAllElementTags;
    /** Text color, shades are taken from the current theme. */
    textColor?: TypeColor;
    /**
     * Theme applied to this element and inherited for child elements (until
     * a descendant theme is applied). Note the accent color remains consistent
     * to the theme applied on the HTML element.
     */
    theme?: TypeTheme;
    /** Fixed width applied through inline styling */
    width?: number | string;
    /** Flag to allow flex items to wrap over to new lines */
    wrap?: boolean;
    /** z-index number for layering elements.  */
    zIndex?: number;
}
declare const _default: React.ForwardRefExoticComponent<BoxProps & Pick<React.AllHTMLAttributes<Element> & React.SVGAttributes<Element>, "string" | "max" | "required" | "accumulate" | "low" | "high" | "disabled" | "default" | "origin" | "start" | "end" | "open" | "hanging" | "alphabetic" | "ideographic" | "media" | "hidden" | "cite" | "data" | "dir" | "form" | "label" | "slot" | "span" | "style" | "summary" | "title" | "clipPath" | "filter" | "mask" | "pattern" | "async" | "defer" | "manifest" | "result" | "local" | "color" | "clip" | "content" | "size" | "fill" | "stroke" | "x" | "y" | "multiple" | "mathematical" | "additive" | "children" | "list" | "step" | "display" | "contentScriptType" | "contentStyleType" | "height" | "width" | "transform" | "className" | "id" | "prefix" | "nonce" | "tabIndex" | "requiredExtensions" | "systemLanguage" | "preserveAspectRatio" | "viewBox" | "zoomAndPan" | "lang" | "method" | "min" | "name" | "target" | "type" | "role" | "accentHeight" | "alignmentBaseline" | "allowReorder" | "amplitude" | "arabicForm" | "ascent" | "attributeName" | "attributeType" | "autoReverse" | "azimuth" | "baseFrequency" | "baselineShift" | "baseProfile" | "bbox" | "begin" | "bias" | "by" | "calcMode" | "capHeight" | "clipPathUnits" | "clipRule" | "colorInterpolation" | "colorInterpolationFilters" | "colorProfile" | "colorRendering" | "cursor" | "cx" | "cy" | "d" | "decelerate" | "descent" | "diffuseConstant" | "direction" | "divisor" | "dominantBaseline" | "dur" | "dx" | "dy" | "edgeMode" | "elevation" | "enableBackground" | "exponent" | "externalResourcesRequired" | "fillOpacity" | "fillRule" | "filterRes" | "filterUnits" | "floodColor" | "floodOpacity" | "focusable" | "fontFamily" | "fontSize" | "fontSizeAdjust" | "fontStretch" | "fontStyle" | "fontVariant" | "fontWeight" | "format" | "from" | "fx" | "fy" | "g1" | "g2" | "glyphName" | "glyphOrientationHorizontal" | "glyphOrientationVertical" | "glyphRef" | "gradientTransform" | "gradientUnits" | "horizAdvX" | "horizOriginX" | "href" | "imageRendering" | "in2" | "in" | "intercept" | "k1" | "k2" | "k3" | "k4" | "k" | "kernelMatrix" | "kernelUnitLength" | "kerning" | "keyPoints" | "keySplines" | "keyTimes" | "lengthAdjust" | "letterSpacing" | "lightingColor" | "limitingConeAngle" | "markerEnd" | "markerHeight" | "markerMid" | "markerStart" | "markerUnits" | "markerWidth" | "maskContentUnits" | "maskUnits" | "mode" | "numOctaves" | "offset" | "opacity" | "operator" | "order" | "orient" | "orientation" | "overflow" | "overlinePosition" | "overlineThickness" | "paintOrder" | "panose1" | "pathLength" | "patternContentUnits" | "patternTransform" | "patternUnits" | "pointerEvents" | "points" | "pointsAtX" | "pointsAtY" | "pointsAtZ" | "preserveAlpha" | "primitiveUnits" | "r" | "radius" | "refX" | "refY" | "renderingIntent" | "repeatCount" | "repeatDur" | "requiredFeatures" | "restart" | "rotate" | "rx" | "ry" | "scale" | "seed" | "shapeRendering" | "slope" | "spacing" | "specularConstant" | "specularExponent" | "speed" | "spreadMethod" | "startOffset" | "stdDeviation" | "stemh" | "stemv" | "stitchTiles" | "stopColor" | "stopOpacity" | "strikethroughPosition" | "strikethroughThickness" | "strokeDasharray" | "strokeDashoffset" | "strokeLinecap" | "strokeLinejoin" | "strokeMiterlimit" | "strokeOpacity" | "strokeWidth" | "surfaceScale" | "tableValues" | "targetX" | "targetY" | "textAnchor" | "textDecoration" | "textLength" | "textRendering" | "to" | "u1" | "u2" | "underlinePosition" | "underlineThickness" | "unicode" | "unicodeBidi" | "unicodeRange" | "unitsPerEm" | "vAlphabetic" | "values" | "vectorEffect" | "version" | "vertAdvY" | "vertOriginX" | "vertOriginY" | "vHanging" | "vIdeographic" | "viewTarget" | "visibility" | "vMathematical" | "widths" | "wordSpacing" | "writingMode" | "x1" | "x2" | "xChannelSelector" | "xHeight" | "xlinkActuate" | "xlinkArcrole" | "xlinkHref" | "xlinkRole" | "xlinkShow" | "xlinkTitle" | "xlinkType" | "xmlBase" | "xmlLang" | "xmlns" | "xmlnsXlink" | "xmlSpace" | "y1" | "y2" | "yChannelSelector" | "z" | "aria-activedescendant" | "aria-atomic" | "aria-autocomplete" | "aria-busy" | "aria-checked" | "aria-colcount" | "aria-colindex" | "aria-colspan" | "aria-controls" | "aria-current" | "aria-describedby" | "aria-details" | "aria-disabled" | "aria-dropeffect" | "aria-errormessage" | "aria-expanded" | "aria-flowto" | "aria-grabbed" | "aria-haspopup" | "aria-hidden" | "aria-invalid" | "aria-keyshortcuts" | "aria-label" | "aria-labelledby" | "aria-level" | "aria-live" | "aria-modal" | "aria-multiline" | "aria-multiselectable" | "aria-orientation" | "aria-owns" | "aria-placeholder" | "aria-posinset" | "aria-pressed" | "aria-readonly" | "aria-relevant" | "aria-required" | "aria-roledescription" | "aria-rowcount" | "aria-rowindex" | "aria-rowspan" | "aria-selected" | "aria-setsize" | "aria-sort" | "aria-valuemax" | "aria-valuemin" | "aria-valuenow" | "aria-valuetext" | "dangerouslySetInnerHTML" | "onCopy" | "onCopyCapture" | "onCut" | "onCutCapture" | "onPaste" | "onPasteCapture" | "onCompositionEnd" | "onCompositionEndCapture" | "onCompositionStart" | "onCompositionStartCapture" | "onCompositionUpdate" | "onCompositionUpdateCapture" | "onFocus" | "onFocusCapture" | "onBlur" | "onBlurCapture" | "onChange" | "onChangeCapture" | "onBeforeInput" | "onBeforeInputCapture" | "onInput" | "onInputCapture" | "onReset" | "onResetCapture" | "onSubmit" | "onSubmitCapture" | "onInvalid" | "onInvalidCapture" | "onLoad" | "onLoadCapture" | "onError" | "onErrorCapture" | "onKeyDown" | "onKeyDownCapture" | "onKeyPress" | "onKeyPressCapture" | "onKeyUp" | "onKeyUpCapture" | "onAbort" | "onAbortCapture" | "onCanPlay" | "onCanPlayCapture" | "onCanPlayThrough" | "onCanPlayThroughCapture" | "onDurationChange" | "onDurationChangeCapture" | "onEmptied" | "onEmptiedCapture" | "onEncrypted" | "onEncryptedCapture" | "onEnded" | "onEndedCapture" | "onLoadedData" | "onLoadedDataCapture" | "onLoadedMetadata" | "onLoadedMetadataCapture" | "onLoadStart" | "onLoadStartCapture" | "onPause" | "onPauseCapture" | "onPlay" | "onPlayCapture" | "onPlaying" | "onPlayingCapture" | "onProgress" | "onProgressCapture" | "onRateChange" | "onRateChangeCapture" | "onSeeked" | "onSeekedCapture" | "onSeeking" | "onSeekingCapture" | "onStalled" | "onStalledCapture" | "onSuspend" | "onSuspendCapture" | "onTimeUpdate" | "onTimeUpdateCapture" | "onVolumeChange" | "onVolumeChangeCapture" | "onWaiting" | "onWaitingCapture" | "onAuxClick" | "onAuxClickCapture" | "onClick" | "onClickCapture" | "onContextMenu" | "onContextMenuCapture" | "onDoubleClick" | "onDoubleClickCapture" | "onDrag" | "onDragCapture" | "onDragEnd" | "onDragEndCapture" | "onDragEnter" | "onDragEnterCapture" | "onDragExit" | "onDragExitCapture" | "onDragLeave" | "onDragLeaveCapture" | "onDragOver" | "onDragOverCapture" | "onDragStart" | "onDragStartCapture" | "onDrop" | "onDropCapture" | "onMouseDown" | "onMouseDownCapture" | "onMouseEnter" | "onMouseLeave" | "onMouseMove" | "onMouseMoveCapture" | "onMouseOut" | "onMouseOutCapture" | "onMouseOver" | "onMouseOverCapture" | "onMouseUp" | "onMouseUpCapture" | "onSelect" | "onSelectCapture" | "onTouchCancel" | "onTouchCancelCapture" | "onTouchEnd" | "onTouchEndCapture" | "onTouchMove" | "onTouchMoveCapture" | "onTouchStart" | "onTouchStartCapture" | "onPointerDown" | "onPointerDownCapture" | "onPointerMove" | "onPointerMoveCapture" | "onPointerUp" | "onPointerUpCapture" | "onPointerCancel" | "onPointerCancelCapture" | "onPointerEnter" | "onPointerEnterCapture" | "onPointerLeave" | "onPointerLeaveCapture" | "onPointerOver" | "onPointerOverCapture" | "onPointerOut" | "onPointerOutCapture" | "onGotPointerCapture" | "onGotPointerCaptureCapture" | "onLostPointerCapture" | "onLostPointerCaptureCapture" | "onScroll" | "onScrollCapture" | "onWheel" | "onWheelCapture" | "onAnimationStart" | "onAnimationStartCapture" | "onAnimationEnd" | "onAnimationEndCapture" | "onAnimationIteration" | "onAnimationIterationCapture" | "onTransitionEnd" | "onTransitionEndCapture" | "accept" | "acceptCharset" | "action" | "allowFullScreen" | "allowTransparency" | "alt" | "as" | "autoComplete" | "autoFocus" | "autoPlay" | "capture" | "cellPadding" | "cellSpacing" | "charSet" | "challenge" | "checked" | "classID" | "cols" | "colSpan" | "controls" | "coords" | "dateTime" | "download" | "encType" | "formAction" | "formEncType" | "formMethod" | "formNoValidate" | "formTarget" | "frameBorder" | "headers" | "hrefLang" | "htmlFor" | "httpEquiv" | "integrity" | "keyParams" | "keyType" | "kind" | "loop" | "marginHeight" | "marginWidth" | "maxLength" | "mediaGroup" | "minLength" | "muted" | "noValidate" | "optimum" | "placeholder" | "playsInline" | "poster" | "preload" | "readOnly" | "rel" | "reversed" | "rows" | "rowSpan" | "sandbox" | "scope" | "scoped" | "scrolling" | "seamless" | "selected" | "shape" | "sizes" | "src" | "srcDoc" | "srcLang" | "srcSet" | "useMap" | "value" | "wmode" | "defaultChecked" | "defaultValue" | "suppressContentEditableWarning" | "suppressHydrationWarning" | "accessKey" | "contentEditable" | "contextMenu" | "draggable" | "spellCheck" | "translate" | "radioGroup" | "about" | "datatype" | "inlist" | "property" | "resource" | "typeof" | "vocab" | "autoCapitalize" | "autoCorrect" | "autoSave" | "itemProp" | "itemScope" | "itemType" | "itemID" | "itemRef" | "results" | "security" | "unselectable" | "inputMode" | "is"> & React.RefAttributes<Element>>;
export default _default;
//# sourceMappingURL=Box.d.ts.map