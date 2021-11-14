import * as React from 'react';
import { Manager } from 'react-popper';

export type TypePlacementTrigger = 'click' | 'hover';

export const PlacementManagerContext = React.createContext<{
  onClose?: () => void;
  onPointerEnter?: (event: React.PointerEvent) => void;
  onPointerLeave?: (event: React.PointerEvent) => void;
  onClick?: (event: React.PointerEvent) => void;
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
  children: React.ReactNode;
  /**
   * The control trigger that activates visibility control by
   * passing the matching event handlers onto the reference
   * element.
   */
  trigger?: TypePlacementTrigger;
}

const PlacementManager: React.FC<PlacementManagerProps> = (props) => {
  const { trigger, ...rest } = props;
  const [referenceNode, setReferenceNode] = React.useState<null | HTMLElement>(
    null
  );
  const [visible, setVisible] = React.useState<boolean | undefined>(
    trigger && false
  );
  const onClose = trigger === undefined ? undefined : () => setVisible(false);
  const onPointerEnter =
    trigger === 'hover' ? () => setVisible(true) : undefined;
  const onPointerLeave =
    trigger === 'hover' ? () => setVisible(false) : undefined;
  const onClick = trigger === 'click' ? () => setVisible(true) : undefined;

  React.useEffect(() => {
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
