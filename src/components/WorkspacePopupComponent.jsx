import { handleWorkspace } from "@/app/actions/workspaceActions";
import Image from "next/image";
import React from "react";

export default function WorkspacePopupComponent() {
  return (
    <div>

      <label htmlFor="my_modal_6" className="cursor-pointer">
        <Image src={"/src/assets/plus.png"} width={22} height={22} />
      </label>


      <form action={handleWorkspace}>
       
      </form>
    </div>
  );
}
