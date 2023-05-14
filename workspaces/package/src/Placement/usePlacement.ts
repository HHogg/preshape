import {
  arrow,
  autoUpdate,
  flip,
  offset,
  useClick,
  useDismiss,
  useFloating,
  useFocus,
  useHover,
  useInteractions,
  useRole,
  shift,
  size,
  Placement,
  UseRoleProps,
} from '@floating-ui/react';
import { useState } from 'react';
import { sizeX1Px } from '../variables';

export type UsePlacementTrigger = 'hover' | 'click';

export const ARROW_HEIGHT = 8;
export const ARROW_WIDTH = 16;

export interface UsePlacementOptions {
  /**
   * The initial open state of the content
   */
  initialOpen?: boolean;
  /**
   * The directional placement of the content
   */
  placement?: Placement;
  /**
   * The controlled open state of the content
   */
  open?: boolean;
  /**
   * Set the controlled open state of the content
   */
  onOpenChange?: (isOpen: boolean) => void;
  /**
   * The role of the content
   */
  role?: UseRoleProps['role'];
  /**
   * Whether to set the content width as the reference width
   */
  setContentWidthAsReferenceWidth?: boolean;
  /**
   * The trigger on the reference
   */
  trigger?: UsePlacementTrigger;
}

export interface UsePlacementResult
  extends ReturnType<typeof useFloating>,
    ReturnType<typeof useInteractions> {
  /**
   *
   */
  arrowRef: (ref: SVGSVGElement | null) => void;
  /**
   * Whether the tooltip is open.
   * @default false
   */
  open: boolean;
  /**
   * Set whether the tooltip is open.
   */
  setOpen: (open: boolean) => void;
}

export default function usePlacement({
  initialOpen = false,
  placement = 'top',
  open: controlledOpen,
  onOpenChange: setControlledOpen,
  role: roleString = 'tooltip',
  setContentWidthAsReferenceWidth,
  trigger = 'hover',
}: UsePlacementOptions): UsePlacementResult {
  const [arrowElement, arrowRef] = useState<SVGSVGElement | null>(null);
  const [uncontrolledOpen, setUncontrolledOpen] = useState(initialOpen);
  const open = controlledOpen ?? uncontrolledOpen;
  const setOpen = setControlledOpen ?? setUncontrolledOpen;

  const data = useFloating({
    placement,
    open,
    onOpenChange: setOpen,
    whileElementsMounted: autoUpdate,
    middleware: [
      arrow({
        element: arrowElement,
      }),
      offset(arrowElement ? ARROW_HEIGHT + sizeX1Px : sizeX1Px),
      shift({ padding: 5 }),
      size({
        apply({ rects, elements }) {
          if (setContentWidthAsReferenceWidth) {
            elements.floating.style.width = `${rects.reference.width}px`;
          }
        },
      }),
      flip({
        fallbackAxisSideDirection: 'start',
        padding: 5,
      }),
    ],
  });

  const context = data.context;
  const dismiss = useDismiss(context);
  const role = useRole(context, { role: roleString });

  const focus = useFocus(context, {
    enabled: controlledOpen == null,
  });

  const click = useClick(context, {
    enabled: trigger === 'click' && controlledOpen === undefined,
  });

  const hover = useHover(context, {
    move: false,
    enabled: trigger === 'hover' && controlledOpen === undefined,
  });

  const interactions = useInteractions([hover, click, focus, dismiss, role]);

  return {
    arrowRef,
    open,
    setOpen,
    ...interactions,
    ...data,
  };
}
