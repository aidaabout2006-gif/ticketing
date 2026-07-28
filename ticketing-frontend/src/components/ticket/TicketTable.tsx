//مسیول نمایش اطلاعات است  فقط نمایش داده ها 
import {
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Button,
  Stack,
} from "@mui/material";

import type { Ticket } from "../../types/ticket";

interface Props {
  rows: Ticket[];

  categories: any[];

  priorities: any[];

  statuses: any[];

  onEdit: (ticket: Ticket) => void;

  onDelete: (id: number) => void;
}

export default function TicketTable({
  rows,
  categories,
  priorities,
  statuses,
  onEdit,
  onDelete,
}: Props) {

  return (
    <Paper sx={{ p: 2 }}>
      <Table>

        <TableHead>

          <TableRow>

            <TableCell>عنوان</TableCell>

            <TableCell>دسته بندی</TableCell>

            <TableCell>اولویت</TableCell>

            <TableCell>وضعیت</TableCell>

            <TableCell align="center">
              عملیات
            </TableCell>

          </TableRow>

        </TableHead>

        <TableBody>

          {rows.length > 0 ? (

            rows.map((ticket) => {

              const category = categories.find(
                (c) => c.id === ticket.categoryId
              );

              const priority = priorities.find(
                (p) => p.id === ticket.priorityId
              );

              const status = statuses.find(
                (s) => s.id === ticket.statusId
              );

              return (

                <TableRow
                  key={ticket.id}
                  hover
                >

                  <TableCell>
                    {ticket.title}
                  </TableCell>

                  <TableCell>
                    {category?.name ?? "-"}
                  </TableCell>

                  <TableCell>
                    {priority?.name ?? "-"}
                  </TableCell>

                  <TableCell>
                    {status?.name ?? "-"}
                  </TableCell>

                  <TableCell>

                    <Stack
                      direction="row"
                      spacing={1}
                      sx={{
                        justifyContent: "center",
                      }}
                    >

                      {/* <Button
                        variant="contained"
                        size="small"
                        onClick={() => onEdit(ticket)}
                      >
                        ویرایش
                      </Button> */}
                      <Button
  variant="contained"
  size="small"
  onClick={() => {
    console.log("EDIT TICKET:", ticket);
    console.log("EDIT ID:", ticket.id);

    onEdit(ticket);
  }}
>
  ویرایش
</Button>

                      {/* <Button
                        variant="outlined"
                        color="error"
                        size="small"
                        onClick={() => onDelete(ticket.id)}
                      >
                        حذف
                      </Button> */}
                      <Button
  variant="outlined"
  color="error"
  size="small"
  onClick={() => {
    console.log("DELETE TICKET:", ticket);
    console.log("DELETE ID:", ticket.id);

    onDelete(ticket.id);
  }}
>
  حذف
</Button>

                    </Stack>

                  </TableCell>

                </TableRow>

              );

            })

          ) : (

            <TableRow>

              <TableCell
                colSpan={5}
                align="center"
              >
                دیتایی وجود ندارد
              </TableCell>

            </TableRow>

          )}

        </TableBody>

      </Table>
    </Paper>
  );
  
}