import { getAllTaskService } from "@/service/task.service";
import React from "react";

const TaskPage = async () => {
  const taskData = await getAllTaskService();
  return (
    <main>
      <h1>Task Page</h1>
      {taskData?.payload?.map((task) => (
        <div>{task.taskName}</div>
      ))}
    </main>
  );
};

export default TaskPage;
