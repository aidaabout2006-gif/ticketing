//برای هر ماژول  یک فایل Api جداگانه ساخته شده 
//تمام درخواست های Http از اینن قسمت ارسال میشود 
import api from "./axios";

export const getTickets = async () => {
  const res = await api.get("/tickets");
  return res.data;
};

export const getTicket = async (id: number) => {
  const res = await api.get(`/tickets/${id}`);
  return res.data;
};

export const createTicket = async (data: any) => {
  const res = await api.post("/tickets", data);
  return res.data;
};

export const updateTicket = async (
  id: number,
  data: any
) => {
  const res = await api.patch(`/tickets/${id}`, data);
  return res.data;
};

export const deleteTicket = async (id: number) => {
  const res = await api.delete(`/tickets/${id}`);
  return res.data;
};