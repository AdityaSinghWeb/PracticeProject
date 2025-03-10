import React from "react";
import Task from "./Task/Task";

function SelectedProject({
  showProject,
  onDelete,
  onAddTask,
  tasks,
  onDelTask,
}) {
  const formattedDate = new Date(showProject.dueDate).toLocaleDateString(
    "en-US",
    {
      year: "numeric",
      month: "short",
      day: "numeric",
    }
  );

  return (
    <div className="w-[35rem] mt-16">
      <header className="pb-4 mb-4 border-stone-400 border-b-2">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-stone-600 mb-4">
            {showProject.title}
          </h1>
          <button
            className="text-stone-600 hover:text-stone-950"
            onClick={onDelete}
          >
            Delete
          </button>
        </div>
        <p className="mb-4 text-stone-400">{formattedDate}</p>
        <p className="text-stone-600 whitespace-pre-wrap">
          {showProject.description}
        </p>
      </header>
      <Task onAdd={onAddTask} tasks={tasks} clearTask={onDelTask} />
    </div>
  );
}

export default SelectedProject;
