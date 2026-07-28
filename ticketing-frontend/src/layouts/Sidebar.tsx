import {

Drawer,

Toolbar,

List,

ListItemButton,

ListItemIcon,

ListItemText

} from "@mui/material";

import DashboardIcon from "@mui/icons-material/Dashboard";

import ConfirmationNumberIcon from "@mui/icons-material/ConfirmationNumber";

import CategoryIcon from "@mui/icons-material/Category";

import FlagIcon from "@mui/icons-material/Flag";

import InfoIcon from "@mui/icons-material/Info";

import {

useNavigate,

useLocation

} from "react-router-dom";

const drawerWidth=240;

export default function Sidebar(){

const navigate=useNavigate();

const location=useLocation();

const menu=[

{

text:"داشبورد",

icon:<DashboardIcon/>,

path:"/"

},

{

text:"تیکت ها",

icon:<ConfirmationNumberIcon/>,

path:"/tickets"

},

{

text:"دسته بندی ها",

icon:<CategoryIcon/>,

path:"/categories"

},

{

text:"اولویت ها",

icon:<FlagIcon/>,

path:"/priorities"

},

{

text:"وضعیت ها",

icon:<InfoIcon/>,

path:"/statuses"

}

];

return(

<Drawer

anchor="right"

variant="permanent"

sx={{

width:drawerWidth,

flexShrink:0,

"& .MuiDrawer-paper":{

width:drawerWidth,

boxSizing:"border-box",

background:"#0F172A",

color:"#fff"

}

}}

>

<Toolbar/>

<List>

{

menu.map(item=>(

<ListItemButton

key={item.path}

selected={location.pathname===item.path}

onClick={()=>navigate(item.path)}

>

<ListItemIcon

sx={{

color:"#fff"

}}

>

{item.icon}

</ListItemIcon>

<ListItemText

primary={item.text}

/>

</ListItemButton>

))

}

</List>

</Drawer>

)

}