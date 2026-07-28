import {
  useEffect,
  useState
} from "react";


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
 Dialog,
 DialogTitle,
 DialogContent,
 DialogActions,
 TextField,
 MenuItem
} from "@mui/material";


import {
 getPriorities,
 createPriority,
 updatePriority,
 deletePriority
} from "../../api/priority.api";



const colorMap:any = {

  Red:"#f44336",

  Orange:"#ff9800",

  Yellow:"#ffeb3b",

  Green:"#4caf50",

  Gray:"#9e9e9e"

};



const initialForm={

 name:"",
 level:1,
 color:"Red",
 isActive:true

};




export default function Priorities(){


const [items,setItems]=useState<any[]>([]);

const [open,setOpen]=useState(false);

const [editId,setEditId]=useState<number|null>(null);

const [form,setForm]=useState(initialForm);




useEffect(()=>{

 load();

},[]);




async function load(){

 try{

 const data=await getPriorities();

 console.log("PRIORITY DATA:",data);

 setItems(data);


 }catch(error){

 console.log(
  "LOAD PRIORITY ERROR:",
  error
 );

 }

}







async function save(){

 try{


 if(editId !== null){


 await updatePriority(
  editId,
  form
 );


 }else{


 await createPriority(form);


 }



 await load();


 setOpen(false);

 setEditId(null);

 setForm({
  ...initialForm
 });


 }catch(error){

 console.log(
  "SAVE PRIORITY ERROR:",
  error
 );

 }

}






function edit(item:any){


 setEditId(item.id);


 setForm({

 name:item.name ?? "",

 level:item.level ?? 1,

 color:item.color ?? "Red",

 isActive:item.isActive ?? true

 });


 setOpen(true);


}







async function remove(id:number){


 try{

 await deletePriority(id);

 await load();


 }catch(error){

 console.log(
  "DELETE ERROR:",
  error
 );

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

اولویت‌ها

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

افزودن اولویت

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
سطح
</TableCell>


<TableCell>
رنگ
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

items.map(item=>(


<TableRow key={item.id}>


<TableCell>

{item.name}

</TableCell>




<TableCell>

{item.level}

</TableCell>






<TableCell>


<div

style={{

display:"flex",

alignItems:"center",

gap:"8px"

}}

>


<div

style={{

width:20,

height:20,

borderRadius:"50%",

backgroundColor:
colorMap[item.color],

border:"1px solid #ccc"

}}

/>


{item.color}


</div>


</TableCell>






<TableCell>

{

item.isActive

?

"فعال"

:

"غیرفعال"

}

</TableCell>








<TableCell>


<Button

onClick={()=>edit(item)}

>

ویرایش

</Button>




<Button

color="error"

onClick={()=>remove(item.id)}

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

اولویت

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

type="number"

label="سطح"

value={form.level}

onChange={(e)=>

setForm({

...form,

level:Number(e.target.value)

})

}

/>









<TextField

select

fullWidth

margin="normal"

label="رنگ"

value={form.color}

onChange={(e)=>

setForm({

...form,

color:e.target.value

})

}

>


<MenuItem value="Red">

قرمز

</MenuItem>


<MenuItem value="Orange">

نارنجی

</MenuItem>


<MenuItem value="Yellow">

زرد

</MenuItem>


<MenuItem value="Green">

سبز

</MenuItem>


<MenuItem value="Gray">

خاکستری

</MenuItem>



</TextField>




<TextField

select

fullWidth

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