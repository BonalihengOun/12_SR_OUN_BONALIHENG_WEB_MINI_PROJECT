"use server";

import { insertWorkSpaceService } from "@/service/workspace.service";
import { revalidateTag } from "next/cache";

export async function handleWorkspace(workSpaceInput) {
  const newWorkspace = {
    workspaceName: workSpaceInput.get("workspaceName"),
  };
  revalidateTag(newWorkspace);
  await insertWorkSpaceService(newWorkspace);
}
