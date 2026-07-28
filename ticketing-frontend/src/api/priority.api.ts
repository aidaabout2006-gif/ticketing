//برای هر ماژول  یک فایل Api جداگانه ساخته شده 
//تمام درخواست های Http از اینن قسمت ارسال میشود 
import api from "./axios";


export const getPriorities = async () => {

  const res = await api.get("/priorities");

  return res.data;

};



export const createPriority = async (data:any) => {

  const res = await api.post(
    "/priorities",
    data
  );

  return res.data;

};



export const updatePriority = async (
  id:number,
  data:any
) => {

  const res = await api.patch(
    `/priorities/${id}`,
    data
  );

  return res.data;

};



export const deletePriority = async (
  id:number
) => {

  const res = await api.delete(
    `/priorities/${id}`
  );

  return res.data;

};