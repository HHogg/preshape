import * as React from 'react';
import { PopperProps, PopperArrowProps } from 'react-popper';
import { AppearProps } from '../Appear/Appear';
import { Attributes, BoxProps } from '../Box/Box';
import './Placement.css';
declare type PopperOptions = Omit<PopperProps, 'children'>;
export declare const PlacementArrowPropsContext: React.Context<PopperArrowProps>;
export interface PlacementProps extends BoxProps, Pick<AppearProps, 'animation'> {
    /**
     * The minimum width of the Placement element. This can be a standard
     * CSS value or a keyword of 'reference', which will apply the width
     * of the reference element.
     */
    minWidth?: 'reference' | number | string;
    /**
     * When provided this enables an event listener for clicks onto the document,
     * when clicks occur outside the placed element, the callback will be
     * called.
     */
    onClose?: () => void;
    /**
     * Options that are passed onto PopperJS.
     *
     * @Reference false
     */
    options?: PopperOptions;
    /** The desired side of placement, note it may differ depending on the environment. */
    placement?: 'bottom' | 'left' | 'right' | 'top';
    /** Flag that enables the unredering of the content when not visible. */
    unrender?: boolean;
    /** Flag that toggles the visible of the placed content. */
    visible?: boolean;
}
declare const Placement: React.FC<Attributes<HTMLDivElement, PlacementProps>>;
export default Placement;
//# sourceMappingURL=Placement.d.ts.map