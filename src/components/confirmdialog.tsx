import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface ConfirmDialogProps {
  open: boolean;
  title: string;
  description: string;
  onCancel: () => void;
  onConfirm: () => void;
}

/**
 * Renders a controlled confirmation dialog with a title, description, and Cancel/Confirm actions.
 *
 * The dialog is controlled via the `open` prop. User-initiated closes (backdrop click or ESC)
 * will invoke `onCancel`. The Cancel and Confirm buttons call `onCancel` and `onConfirm`, respectively.
 *
 * @param open - Whether the dialog is visible
 * @param title - Dialog title text
 * @param description - Dialog descriptive text
 * @param onCancel - Callback invoked when the dialog is cancelled or closed by user interaction
 * @param onConfirm - Callback invoked when the Confirm action is triggered
 * @returns The rendered confirmation dialog element
 */
export default function ConfirmDialog({
  open,
  title,
  description,
  onCancel,
  onConfirm,
}: ConfirmDialogProps) {
  const handleOpenChange = (isOpen: boolean) => {
    // In Radix controlled mode, onOpenChange fires when user interacts with the dialog
    // (backdrop click, ESC key, or prop change). Buttons call their handlers directly via onClick,
    // so they don't trigger onOpenChange. This handler is called for non-button-driven closes.
    if (!isOpen) {
      onCancel();
    }
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent className="sm:max-w-[400px]">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>

        <DialogFooter className="flex justify-end gap-2">
          <Button variant="outline" onClick={() => onCancel()}>
            Cancel
          </Button>
          <Button variant="destructive" onClick={() => onConfirm()}>
            Confirm
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
