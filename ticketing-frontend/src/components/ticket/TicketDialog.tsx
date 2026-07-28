//برای ثبت و ویرایش اسنفاده میشود 
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from "@mui/material";

import TicketForm from "./TicketForm";

interface Props {
  open: boolean;

  onClose: () => void;

  onSave: () => void;

  form: any;

  setForm: any;

  categories: any[];

  priorities: any[];

  statuses: any[];
}

export default function TicketDialog({
  open,
  onClose,
  onSave,
  form,
  setForm,
  categories,
  priorities,
  statuses,
}: Props) {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="md"
      fullWidth
    >
      <DialogTitle>
        ثبت تیکت
      </DialogTitle>

      <DialogContent>

        <TicketForm
          form={form}
          setForm={setForm}
          categories={categories}
          priorities={priorities}
          statuses={statuses}
        />

      </DialogContent>

      <DialogActions>

        <Button
          onClick={onClose}
        >
          انصراف
        </Button>

        <Button
          variant="contained"
          onClick={onSave}
        >
          ذخیره
        </Button>

      </DialogActions>

    </Dialog>
  );
}