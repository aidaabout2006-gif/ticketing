//تمام فیلدها فرم داخل یک component جدا قرار گرفته اند 
import {
  Grid,
  TextField,
  MenuItem,
} from "@mui/material";

export interface TicketFormData {
  title: string;
  description: string;
  categoryId: number | "";
  priorityId: number | "";
  statusId: number | "";
  source: string;
}

interface Props {
  form: TicketFormData;
  setForm: React.Dispatch<
    React.SetStateAction<TicketFormData>
  >;

  categories: any[];
  priorities: any[];
  statuses: any[];
}

export default function TicketForm({
  form,
  setForm,
  categories,
  priorities,
  statuses,
}: Props) {
  return (
    <Grid container spacing={2} sx={{ mt: 1 }}>

      <Grid size={{ xs: 12 }}>
        <TextField
          fullWidth
          label="عنوان"
          value={form.title}
          onChange={(e) =>
            setForm({
              ...form,
              title: e.target.value,
            })
          }
        />
      </Grid>

      <Grid size={{ xs: 12 }}>
        <TextField
          fullWidth
          multiline
          minRows={4}
          label="توضیحات"
          value={form.description}
          onChange={(e) =>
            setForm({
              ...form,
              description: e.target.value,
            })
          }
        />
      </Grid>

      <Grid size={{ xs: 6 }}>
        <TextField
          fullWidth
          select
          label="دسته بندی"
          value={form.categoryId}
          onChange={(e) => {
            console.log("CATEGORY:", e.target.value);

            setForm({
              ...form,
              categoryId: Number(e.target.value),
            });
          }}
        >
          <MenuItem value="">
            انتخاب کنید
          </MenuItem>

          {categories.map((c) => (
            <MenuItem
              key={c.id}
              value={c.id}
            >
              {c.name}
            </MenuItem>
          ))}
        </TextField>
      </Grid>

      <Grid size={{ xs: 6 }}>
        <TextField
          fullWidth
          select
          label="اولویت"
          value={form.priorityId}
          onChange={(e) => {
            console.log("PRIORITY:", e.target.value);

            setForm({
              ...form,
              priorityId: Number(e.target.value),
            });
          }}
        >
          <MenuItem value="">
            انتخاب کنید
          </MenuItem>

          {priorities.map((p) => (
            <MenuItem
              key={p.id}
              value={p.id}
            >
              {p.name}
            </MenuItem>
          ))}
        </TextField>
      </Grid>

      <Grid size={{ xs: 6 }}>
        <TextField
          fullWidth
          select
          label="وضعیت"
          value={form.statusId}
          onChange={(e) => {
            console.log("STATUS:", e.target.value);

            setForm({
              ...form,
              statusId: Number(e.target.value),
            });
          }}
        >
          <MenuItem value="">
            انتخاب کنید
          </MenuItem>

          {statuses.map((s) => (
            <MenuItem
              key={s.id}
              value={s.id}
            >
              {s.name}
            </MenuItem>
          ))}
        </TextField>
      </Grid>

      <Grid size={{ xs: 6 }}>
        <TextField
          fullWidth
          select
          label="منبع ثبت"
          value={form.source}
          onChange={(e) =>
            setForm({
              ...form,
              source: e.target.value,
            })
          }
        >
          <MenuItem value="USER_PORTAL">
            پرتال کاربر
          </MenuItem>

          <MenuItem value="OPERATOR">
            اپراتور
          </MenuItem>

          <MenuItem value="EMAIL">
            ایمیل
          </MenuItem>

          <MenuItem value="PHONE">
            تلفن
          </MenuItem>

          <MenuItem value="API">
            API
          </MenuItem>
        </TextField>
      </Grid>

    </Grid>
  );
}