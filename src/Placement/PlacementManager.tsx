import * as React from 'react';
import { Manager } from 'react-popper';

export type TypePlacementTrigger = 'click' | 'hover';

export const PlacementManagerContext = React.createContext<{
  onClose?: () => void;
  onPointerEnter?: (event: React.PointerEvent) => void;
  onPointerLeave?: (event: React.PointerEvent) => void;
  onPointerUp?: (event: React.PointerEvent) => void;
  visible?: boolean;
}>({
  onPointerEnter: undefined,
  onPointerLeave: undefined,
  onPointerUp: undefined,
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
  const [visible, setVisible] = React.useState<boolean | undefined>(trigger && false);
  const onClose = trigger === undefined ? undefined : () => setVisible(false);
  const onPointerEnter = trigger === 'hover' ? () => setVisible(true) : undefined;
  const onPointerLeave = trigger === 'hover' ? () => setVisible(false) : undefined;
  const onPointerUp = trigger === 'click' ? () => setVisible(true) : undefined;

  React.useEffect(() => {
    if (trigger === undefined) {
      setVisible(undefined);
    }
  }, [trigger]);

  return (
    <PlacementManagerContext.Provider value={ {
      onClose,
      onPointerEnter,
      onPointerLeave,
      onPointerUp,
      visible,
    } }>
      <Manager { ...rest } />
    </PlacementManagerContext.Provider>
  );
};

export default PlacementManager;
