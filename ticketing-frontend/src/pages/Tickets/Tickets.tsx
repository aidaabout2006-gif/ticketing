import { useEffect, useState } from "react";

import {
  Button,
  Stack,
  Typography,
} from "@mui/material";

import TicketTable from "../../components/ticket/TicketTable";
import TicketDialog from "../../components/ticket/TicketDialog";

import {
  getTickets,
  deleteTicket,
  createTicket,
  updateTicket,
} from "../../api/ticket.api";

import { getCategories } from "../../api/category.api";
import { getPriorities } from "../../api/priority.api";
import { getStatuses } from "../../api/status.api";

const initialForm = {
  title: "",
  description: "",
  categoryId: 0,
  priorityId: 0,
  statusId: 0,
  source: "USER_PORTAL",
};

export default function Tickets() {
  const [tickets, setTickets] = useState<any[]>([]);
  const [categories, setCategories] = useState<any[]>([]);
  const [priorities, setPriorities] = useState<any[]>([]);
  const [statuses, setStatuses] = useState<any[]>([]);

  const [open, setOpen] = useState(false);

  const [editingId, setEditingId] =
    useState<number | null>(null);

  const [form, setForm] = useState(initialForm);

  useEffect(() => {
    load();
  }, []);

  async function load() {
    try {
      const [
        ticketsData,
        categoriesData,
        prioritiesData,
        statusesData,
      ] = await Promise.all([
        getTickets(),
        getCategories(),
        getPriorities(),
        getStatuses(),
      ]);

      setTickets(ticketsData.data ?? ticketsData ?? []);
      setCategories(categoriesData.data ?? categoriesData ?? []);
      setPriorities(prioritiesData.data ?? prioritiesData ?? []);
      setStatuses(statusesData.data ?? statusesData ?? []);
    } catch (error) {
      console.log("LOAD ERROR:", error);
    }
  }

  async function handleDelete(id: number) {
    try {
      await deleteTicket(id);
      await load();
    } catch (error: any) {
      console.log(
        "DELETE ERROR:",
        error.response?.data || error
      );
    }
  }

  async function handleSave() {
    try {

      if (editingId !== null) {

        await updateTicket(
          editingId,
          { ...form }
        );

      } else {

        await createTicket({
          ...form,
        });

      }

      setOpen(false);

      setEditingId(null);

      setForm(initialForm);

      await load();

    } catch (error: any) {

      console.log(
        "SAVE ERROR:",
        error.response?.data || error
      );

    }
  }

  return (
    <>
      <Stack
        direction="row"
        sx={{
          justifyContent: "space-between",
          alignItems: "center",
          mb: 3,
        }}
      >
        <Typography
          variant="h4"
          sx={{ fontWeight: "bold" }}
        >
          مدیریت تیکت‌ها
        </Typography>

        <Button
          variant="contained"
          onClick={() => {
            setEditingId(null);
            setForm(initialForm);
            setOpen(true);
          }}
        >
          ثبت تیکت
        </Button>
      </Stack>

      <TicketTable
        rows={tickets}
        categories={categories}
        priorities={priorities}
        statuses={statuses}
        onDelete={handleDelete}
        onEdit={(ticket) => {
          setEditingId(ticket.id);

          setForm({
            title: ticket.title,
            description: ticket.description,
            categoryId: ticket.categoryId,
            priorityId: ticket.priorityId,
            statusId: ticket.statusId,
            source: ticket.source,
          });

          setOpen(true);
        }}
      />

      <TicketDialog
        open={open}
        onClose={() => {
          setOpen(false);
          setEditingId(null);
          setForm(initialForm);
        }}
        onSave={handleSave}
        form={form}
        setForm={setForm}
        categories={categories}
        priorities={priorities}
        statuses={statuses}
      />
    </>
  );
}