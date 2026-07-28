//برای هر ماژول  یک فایل Api جداگانه ساخته شده 
//تمام درخواست های Http از اینن قسمت ارسال میشود 
import api from "./axios";


export const getStatuses = async()=>{

  const res = await api.get("/statuses");

  return res.data.data ?? res.data;

};



export const createStatus = async(data:any)=>{

  const res = await api.post(
    "/statuses",
    data
  );

  return res.data;

};



export const updateStatus = async(
  id:number,
  data:any
)=>{

  const res = await api.patch(
    `/statuses/${id}`,
    data
  );

  return res.data;

};



export const deleteStatus = async(
  id:number
)=>{

  const res = await api.delete(
    `/statuses/${id}`
  );

  return res.data;

};