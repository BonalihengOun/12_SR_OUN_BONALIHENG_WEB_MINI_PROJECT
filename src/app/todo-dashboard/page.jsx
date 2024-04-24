import ListBoardComponentHeader from "@/components/ListBoardComponentHeader";
import NavbarComponent from "@/components/NavbarComponent";
import SidebarComponent from "@/components/SidebarComponent";
import TodoCardComponent from "@/components/TodoCardComponent";
import React from "react";

const toDoBoardPage = () => {
  return (
    <di>
      <main>
        <div>
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-2">
              <SidebarComponent/>
            </div>
            <div className="col-span-8">
              <NavbarComponent/>
              <ListBoardComponentHeader/>
              <TodoCardComponent/>
            </div>
          </div>
        </div>
      </main>
    </di>
  );
};

export default toDoBoardPage;
