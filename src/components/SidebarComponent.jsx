import Image from "next/image";
import { getAllWorkspace } from "@/service/workspace.service";
import React from "react";
import Link from "next/link";
import EditDeleteDropDownComponent from "./EditDeleteDropDownComponent";
import WorkspacePopupComponent from "./WorkspacePopupComponent";


export default async function SidebarComponent() {
  const workSpaceData = await getAllWorkspace();
  console.log(workSpaceData);
  return (
    <div className="pl-10 mt-6 h-screen">
      <div className="flex justify-between">
        <Image src={"/assets/icons/logo.svg"} width={150} height={100} />
        <Image src={"/assets/icons/arrow.svg"} width={25} height={30} />
      </div>

      {/* workspace */}
      <div className="flex justify-between mt-10">
        <h1 className="uppercase text-gray font-bold">workspace</h1>
        <WorkspacePopupComponent />
      </div>

      {/* each workspace */}
      {workSpaceData.data.map((workspace) => (
        <div
          key={workspace.workspaceId}
          className="flex items-center mt-5 w-full"
        >
          <div className="rounded-full w-4 h-4 bg-todo"></div>
          <div className="flex justify-between w-full pl-3">
            <Link href={"/todo-list-workspace"}>{workspace.workspaceName}</Link>
            <EditDeleteDropDownComponent />
          </div>
        </div>
      ))}

      {/* favorite*/}
      <div className="flex justify-between mt-10">
        <h1 className="uppercase text-gray font-bold">favorite</h1>

        <Image src={"/assets/icons/favorite.svg"} width={22} height={22} />
      </div>

      {/* each favorite workspace */}
      <div className="flex items-center mt-5 w-full">
        <div className="rounded-full w-4 h-4 bg-workingOn"></div>
        <div className="flex justify-between w-full pl-3">
          <p>GKS Scholarship</p>
        </div>
      </div>
    </div>
  );
}