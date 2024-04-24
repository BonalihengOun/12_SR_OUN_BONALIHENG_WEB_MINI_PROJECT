import { baseUrl } from "@/utils/constants";
import { headerToken } from "@/app/api/headerToken";


export const getAllWorkspace = async () => {
  const header = await headerToken();
  const res = await fetch(`${baseUrl}/api/todo/v1/workspaces`, {
    cache: "no-store",
    headers: header,
  });
  const data =  res.json();
  return data;
};

export const insertWorkSpaceService = async (workSpaceData) => {
  const header = await headerToken();
  const res = await fetch(`${baseUrl}/api/todo/v1/workspaces`, {
    method: "POST",
    body: JSON.stringify(workSpaceData),
    headers: header,
  });
  const data = res.json();
  return data;
};
