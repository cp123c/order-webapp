import { useRef } from "react";
import { Sheet } from "react-modal-sheet";

export default function BottomSheet({
  visible,
  onClose,
  children,
  full = false,
}) {
  const ref = useRef();
  const close = () => onClose();
  return (
    <>
      <Sheet ref={ref} isOpen={visible} onClose={close} detent="full-height">
        <Sheet.Container className={full ? "full-modal" : ""}>
          {/* <Sheet.Header /> */}
          <Sheet.Content>
            <Sheet.Scroller draggableAt="both">{children}</Sheet.Scroller>
          </Sheet.Content>
        </Sheet.Container>
        <Sheet.Backdrop onTap={close} />
      </Sheet>
    </>
  );
}
