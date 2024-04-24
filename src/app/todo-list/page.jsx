import NavbarComponent from "@/components/NavbarComponent";
import SidebarComponent from "@/components/SidebarComponent";

import React from "react";

const toDoListPage = () => {
  return (
    <main>
      <div>
         <div className="grid grid-cols-12 gap-4">
          <div className="col-span-2">
            <SidebarComponent/>
          </div>
          <div className="col-span-10">
            <NavbarComponent/>
          </div>
        </div> 
   
      </div>
    </main>
  );
};

export default toDoListPage;
