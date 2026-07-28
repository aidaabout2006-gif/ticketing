import { useEffect, useState } from "react";

import {
  Button,
  Stack,
  Typography,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TextField,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  MenuItem,
} from "@mui/material";


import {
  getCategories,
  createCategory,
  deleteCategory,
  updateCategory
} from "../../api/category.api";


interface CategoryForm {

  name:string;
  description:string;
  code:string;
  type:string;
  isActive:boolean;

}


const initialForm:CategoryForm = {

  name:"",
  description:"",
  code:"",
  type:"SUBJECT",
  isActive:true,

};



export default function Categories(){


const [categories,setCategories]=useState<any[]>([]);

const [open,setOpen]=useState(false);

const [editId,setEditId]=useState<number|null>(null);


const [form,setForm]=useState<CategoryForm>({
  ...initialForm
});



useEffect(()=>{

  load();

},[]);



async function load(){

 try{

   const res = await getCategories();

   console.log("CATEGORY RESPONSE:",res);


   // چون API آبجکت برمیگردونه
   setCategories(
     res.data ?? res
   );


 }catch(error){

   console.log(
    "LOAD ERROR",
    error
   );

 }

}





async function save(){


try{


 console.log(
   "SEND DATA:",
   form
 );


 if(editId !== null){


   await updateCategory(
     editId,
     form
   );


 }
 else{


   await createCategory(
     form
   );


 }



 // دوباره گرفتن اطلاعات از دیتابیس
 await load();



 setOpen(false);

 setEditId(null);

 setForm({
   ...initialForm
 });



}
catch(error:any){


 console.log(
  "SAVE ERROR:",
  error.response?.data || error
 );


}


}




function edit(item:any){


 setEditId(item.id);


 setForm({

  name:item.name ?? "",

  description:item.description ?? "",

  code:item.code ?? "",

  type:item.type ?? "SUBJECT",

  isActive:item.isActive ?? true

 });


 setOpen(true);


}




async function remove(id:number){


try{


 await deleteCategory(id);

 await load();


}catch(error){

 console.log(error);

}


}




return (

<>


<Stack
direction="row"
sx={{
 justifyContent:"space-between",
 mb:3
}}
>


<Typography variant="h4">
دسته بندی‌ها
</Typography>



<Button
variant="contained"
onClick={()=>{

 setEditId(null);

 setForm({
  ...initialForm
 });

 setOpen(true);

}}
>

افزودن دسته بندی

</Button>


</Stack>





<Paper>


<Table>


<TableHead>

<TableRow>

<TableCell>نام</TableCell>

<TableCell>کد</TableCell>

<TableCell>نوع</TableCell>

<TableCell>وضعیت</TableCell>

<TableCell>توضیحات</TableCell>

<TableCell>عملیات</TableCell>


</TableRow>

</TableHead>



<TableBody>


{
categories.map(c=>(


<TableRow key={c.id}>


<TableCell>
{c.name}
</TableCell>


<TableCell>
{c.code}
</TableCell>


<TableCell>
{c.type}
</TableCell>


<TableCell>
{
c.isActive
?
"فعال"
:
"غیرفعال"
}
</TableCell>


<TableCell>
{c.description}
</TableCell>



<TableCell>


<Button
onClick={()=>edit(c)}
>
ویرایش
</Button>



<Button
color="error"
onClick={()=>remove(c.id)}
>
حذف
</Button>


</TableCell>



</TableRow>


))
}



</TableBody>


</Table>


</Paper>





<Dialog
open={open}
onClose={()=>setOpen(false)}
fullWidth
>


<DialogTitle>
دسته بندی
</DialogTitle>


<DialogContent>



<TextField
fullWidth
margin="normal"
label="نام"
value={form.name}
onChange={(e)=>
setForm({
 ...form,
 name:e.target.value
})
}
/>



<TextField
fullWidth
margin="normal"
label="توضیحات"
value={form.description}
onChange={(e)=>
setForm({
 ...form,
 description:e.target.value
})
}
/>



<TextField
fullWidth
margin="normal"
label="کد"
value={form.code}
onChange={(e)=>
setForm({
 ...form,
 code:e.target.value
})
}
/>



<TextField
fullWidth
select
margin="normal"
label="نوع"
value={form.type}
onChange={(e)=>
setForm({
 ...form,
 type:e.target.value
})
}
>


<MenuItem value="SUBJECT">
موضوع
</MenuItem>

<MenuItem value="DEPARTMENT">
دپارتمان
</MenuItem>

<MenuItem value="PRODUCT">
محصول
</MenuItem>

<MenuItem value="SERVICE">
سرویس
</MenuItem>

<MenuItem value="PROJECT">
پروژه
</MenuItem>

<MenuItem value="CUSTOMER">
مشتری
</MenuItem>


</TextField>




<TextField
fullWidth
select
margin="normal"
label="وضعیت"
value={String(form.isActive)}
onChange={(e)=>
setForm({
 ...form,
 isActive:e.target.value==="true"
})
}
>


<MenuItem value="true">
فعال
</MenuItem>

<MenuItem value="false">
غیرفعال
</MenuItem>


</TextField>



</DialogContent>




<DialogActions>


<Button
onClick={()=>setOpen(false)}
>
لغو
</Button>



<Button
variant="contained"
onClick={save}
>
ذخیره
</Button>


</DialogActions>


</Dialog>



</>

);

}