import ListBoardComponentHeader from "@/components/ListBoardComponentHeader";
import MonthlyStatisticsComponent from "@/components/MonthlyStatisticsComponent";
import NavbarComponent from "@/components/NavbarComponent";
import SidebarComponent from "@/components/SidebarComponent";
import React from "react";

const toDoListWorkspacePage = () => {
  return (
    <main>
      <div>
        <div className="grid grid-cols-10 gap-4 px-2">
          <div className="col-span-2">
            <SidebarComponent />
          </div>
          <div className="col-span-10">
            <NavbarComponent />
            <div className="grid grid-cols-12 gap-4">
              <div className="col-span-8">
                <ListBoardComponentHeader />
                <div className="p-2">
                  <div className="h-[114px] w-full bg-yellow-200 rounded-xl p-4 flex">
                    <div className="bg-white rounded-xl w-[83px] h-[83px] text-center py-3">
                      <h1 className="text-red-600 text-xl">Wed</h1>
                      <h1 className="text-2xl font-bold">17</h1>
                    </div>
                    <div className="ml-5 mt-4">
                      <h1 className="font-bold">Working on Task</h1>
                      <h1>JAVA</h1>
                    </div>
                    <div className="ml-[470px] mt-12">
                      <button className="bg-white w-[100px] h-[30px] rounded">
                        Todo
                      </button>
                    </div>
                  </div>
                </div>
                <div className="p-2">
                  <div className="h-[114px] w-full bg-yellow-200 rounded-xl p-4 flex">
                    <div className="bg-white rounded-xl w-[83px] h-[83px] text-center py-3">
                      <h1 className="text-red-600 text-xl">Wed</h1>
                      <h1 className="text-2xl font-bold">17</h1>
                    </div>
                    <div className="ml-5 mt-4">
                      <h1 className="font-bold">Checking Task</h1>
                      <h1>Flutter</h1>
                    </div>
                    <div className="ml-[490px] mt-12">
                      <button className="bg-white w-[100px] h-[30px] rounded">
                        Todo
                      </button>
                    </div>
                  </div>
                </div>
                <div className="p-2">
                  <div className="h-[114px] w-full bg-blue-500 rounded-xl p-4 flex">
                    <div className="bg-white rounded-xl w-[83px] h-[83px] text-center py-3">
                      <h1 className="text-red-600 text-xl">Wed</h1>
                      <h1 className="text-2xl font-bold">17</h1>
                    </div>
                    <div className="ml-5 mt-4">
                      <h1 className="font-bold text-white">String</h1>
                      <h1 className="text-white">String</h1>
                    </div>
                    <div className="ml-[550px] mt-12">
                      <button className="bg-white w-[100px] h-[30px] rounded">
                        Todo
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-span-4">
                <MonthlyStatisticsComponent />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default toDoListWorkspacePage;
