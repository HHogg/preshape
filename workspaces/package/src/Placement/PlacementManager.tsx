import React, {
  createContext,
  FC,
  PointerEvent,
  MouseEvent,
  ReactNode,
  useEffect,
  useState,
} from 'react';
import { Manager } from 'react-popper';

export type TypePlacementTrigger = 'click' | 'hover';

export const PlacementManagerContext = createContext<{
  onClose?: () => void;
  onPointerEnter?: (event: PointerEvent) => void;
  onPointerLeave?: (event: PointerEvent) => void;
  onClick?: (event: MouseEvent) => void;
  referenceNode: HTMLElement | null;
  setReferenceNode(referenceNode: HTMLElement | null): void;
  visible?: boolean;
}>({
  onPointerEnter: undefined,
  onPointerLeave: undefined,
  onClick: undefined,
  referenceNode: null,
  setReferenceNode: () => {},
  visible: undefined,
});

export interface PlacementManagerProps {
  /**
   * @Ignore
   */
  children: ReactNode;
  /**
   * The control trigger that activates visibility control by
   * passing the matching event handlers onto the reference
   * element.
   */
  trigger?: TypePlacementTrigger;
}

const PlacementManager: FC<PlacementManagerProps> = (props) => {
  const { trigger, ...rest } = props;
  const [referenceNode, setReferenceNode] = useState<null | HTMLElement>(null);
  const [visible, setVisible] = useState<boolean | undefined>(trigger && false);
  const onClose = trigger === undefined ? undefined : () => setVisible(false);
  const onPointerEnter =
    trigger === 'hover' ? () => setVisible(true) : undefined;
  const onPointerLeave =
    trigger === 'hover' ? () => setVisible(false) : undefined;
  const onClick = trigger === 'click' ? () => setVisible(true) : undefined;

  useEffect(() => {
    if (trigger === undefined) {
      setVisible(undefined);
    }
  }, [trigger]);

  return (
    <PlacementManagerContext.Provider
      value={{
        onClose,
        onPointerEnter,
        onPointerLeave,
        onClick,
        referenceNode,
        setReferenceNode,
        visible,
      }}
    >
      <Manager {...rest} />
    </PlacementManagerContext.Provider>
  );
};

export default PlacementManager;
