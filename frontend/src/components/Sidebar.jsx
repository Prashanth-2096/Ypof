import { useState } from "react";
import { MdOutlineMenuOpen } from "react-icons/md";
import { IoHome } from "react-icons/io5";
import { FaCat } from "react-icons/fa";
import { FaDog } from "react-icons/fa";
import { MdToys } from "react-icons/md";
import { FaUniversalAccess } from "react-icons/fa6";
import { IoSettings } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";
import logo from "../assets/ypof_icon.png"

const menuItems =[
  {icons:<IoHome size={30}/>,
    label:'Home'
  },
  {icons:<FaDog size={30}/>,
    label:'Dogs'
  },
  {icons:<FaCat size={30}/>,
    label:'Cats'
  },
  {icons:<MdToys size={30}/>,
    label:'Toys'
  },
  {icons:<FaUniversalAccess size={30}/>,
    label:'Accessories'
  },
  {
    icons:<IoSettings size={30}/>,
    label:'settings'
  }
]


function Sidebar() {

    const [open,setOpen] = useState(true)

    return (
      <nav className={`shadow-md h-screen p-2 z-50 bg-ypof flex flex-col duration-500 ${open ? 'w-60' : 'w-14'}`}>

        {/* Header */}
        <div className=" py-3 px-2 h-14 flex justify-between text-ypof-background">
          <img src={logo} alt="logo" className={`${open ? 'w-8 h-8'  :'w-0'} rounded-md `}/>
          <div>
            <MdOutlineMenuOpen size={30}  onClick={()=>setOpen(!open)} className={`cursor-pointer ${open ? '': 'rotate-180'}`}/>
          </div>
        </div>

        {/* Body */}
        <ul className="flex-1">
          {menuItems.map((item,index)=>{
            return(
              <li key={index} className="px-3 py-2 flex gap-2 items-center text-xl text-ypof-background rounded-md hover:bg-ypof-background  hover:text-ypof hover:cursor-pointer">
                <div>{item.icons}</div>
                <p className={`${!open && 'w-0 translate-x-24'} duration-500 overflow-hidden`}>{item.label}</p>
              </li>
            )
          })}
        </ul>
        
        {/* footer */}
        <div className="flex items-center gap-2 px-3 py-2 text-ypof-background rounded-md hover:text-ypof hover:bg-ypof-background hover:cursor-pointer">
          <div><FaUserCircle size={30}/></div>
          <div className={`${!open && 'w-0 translate-x-24'} duration-500 overflow-hidden`}>
            <p>User</p>
          </div>
        </div>

      </nav>
    );
  }

export default Sidebar