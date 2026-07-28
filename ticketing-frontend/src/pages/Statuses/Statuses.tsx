import {useEffect,useState} from "react";

import {
 Button,
 Stack,
 Typography,
 Paper,
 Table,
 TableHead,
 TableRow,
 TableCell,
 TableBody,
 TextField,
 Dialog,
 DialogTitle,
 DialogContent,
 DialogActions,
 MenuItem
} from "@mui/material";


import {
 getStatuses,
 createStatus,
 updateStatus,
 deleteStatus
}
from "../../api/status.api";



const initialForm={

 name:"",

 code:"",

 isActive:true

};



export default function Statuses(){


const [statuses,setStatuses]=useState<any[]>([]);

const [open,setOpen]=useState(false);

const [editId,setEditId]=useState<number|null>(null);

const [form,setForm]=useState(initialForm);



useEffect(()=>{

 load();

},[]);



async function load(){

 try{

  const data=await getStatuses();

  console.log(
   "STATUS DATA:",
   data
  );

  setStatuses(data);


 }catch(error){

  console.log(error);

 }

}




async function save(){


try{


 if(editId !== null){


  await updateStatus(
   editId,
   form
  );


 }else{


  await createStatus(
   form
  );


 }


 await load();


 setOpen(false);

 setEditId(null);

 setForm(initialForm);



}catch(error:any){


 console.log(
  "STATUS SAVE ERROR:",
  error.response?.data || error
 );


}


}





function edit(item:any){


 setEditId(item.id);


 setForm({

  name:item.name ?? "",

  code:item.code ?? "",

  isActive:item.isActive ?? true

 });


 setOpen(true);


}




async function remove(id:number){


 await deleteStatus(id);

 await load();


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

وضعیت‌ها

</Typography>



<Button

variant="contained"

onClick={()=>{

 setEditId(null);

 setForm(initialForm);

 setOpen(true);

}}

>

افزودن وضعیت

</Button>


</Stack>





<Paper>


<Table>


<TableHead>


<TableRow>


<TableCell>
نام
</TableCell>


<TableCell>
کد
</TableCell>


<TableCell>
وضعیت
</TableCell>


<TableCell>
عملیات
</TableCell>


</TableRow>


</TableHead>




<TableBody>


{

statuses.map(s=>(


<TableRow key={s.id}>


<TableCell>

{s.name}

</TableCell>



<TableCell>

{s.code}

</TableCell>



<TableCell>

{

s.isActive
?
"فعال"
:
"غیرفعال"

}

</TableCell>



<TableCell>


<Button
onClick={()=>edit(s)}
>

ویرایش

</Button>



<Button

color="error"

onClick={()=>remove(s.id)}

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

وضعیت

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