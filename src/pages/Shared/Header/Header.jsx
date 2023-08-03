import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";

const Header = () => {
    const [hide,setHide]=useState(false);
    const handleCloseAdd=() => {
        setHide(true);
    }
  return (
    <div>
      <div className={`relative h-[35px] flex justify-end items-center ${hide && 'hidden'}`} >
      <button className="absolute text-2xl mr-4" onClick={handleCloseAdd}><AiOutlineClose /></button>
        <img
          className="h-[35px] w-full object-cover"
          src="https://banglamartecommerce.com/public/uploads/all/rD8sXSsY9A88MC4VkZcnlNtSckkDnycHQcWKqGhV.png"
        ></img>
      </div>
    </div>
  );
};

export default Header;
