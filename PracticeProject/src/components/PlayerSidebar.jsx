import React from "react";
import Button from "./Button";

function PlayerSidebar({ onAddProject, projects, onSelect, selectedProjectId }) {
  return (
    <aside className="w-1/4 px-8 py-16 bg-stone-900 text-stone-50 rounded-r-xl md:w-72">
      <h2 className="mb-8 uppercase text-stone-200 font-bold md:text-xl">
        Your Projects
      </h2>
      <div>
        <Button onClick={onAddProject}>+ Add Project</Button>
      </div>
      <ul className="mt-8">
        {projects.map((project) => {
          let cssName="w-full text-left px-2 py-1 hover:bg-stone-800 hover:text-stone-200"
          if(selectedProjectId === project.id){
            cssName += " bg-stone-800 text-stone-200"
          }else{
            cssName += " text-stone-400"
          }

          return (
            <li key={project.id}>
              <button
                className={cssName}
                onClick={() => {
                  onSelect(project.id);
                }}
              >
                {project.title}
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}

export default PlayerSidebar;
