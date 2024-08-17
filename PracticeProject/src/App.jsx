import { useState } from "react";
import "./App.css";
import NewProject from "./components/NewProject";
import NoProject from "./components/NoProject";
import PlayerSidebar from "./components/PlayerSidebar";
import SelectedProject from "./components/SelectedProject";

function App() {
  const [projectState, setProjectState] = useState({
    selectedProject: undefined,
    projects: [],
    tasks: [],
  });

  function handleProject() {
    setProjectState((prevProjectState) => {
      return {
        ...prevProjectState,
        selectedProject: null,
      };
    });
  }

  function handleCancle() {
    setProjectState((prevProjectState) => {
      return {
        ...prevProjectState,
        selectedProject: undefined,
      };
    });
  }

  function handleSelectedProject(id) {
    setProjectState((prevProjectState) => {
      return {
        ...prevProjectState,
        selectedProject: id,
      };
    });
  }

  function handleSelectedDelete() {
    setProjectState((prevProjectState) => {
      return {
        ...prevProjectState,
        selectedProject: undefined,
        projects: projectState.projects.filter(
          (project) => project.id !== projectState.selectedProject
        ),
      };
    });
  }

  function handleAddProject(projectData) {
    setProjectState((prevProjectState) => {
      const projectId = Math.random();
      const addedProject = {
        ...projectData,
        id: projectId,
      };

      return {
        ...prevProjectState,
        selectedProject: undefined,
        projects: [...prevProjectState.projects, addedProject],
      };
    });
  }

  function handleAddTask(text) {
    setProjectState((prevProjectState) => {
      const taskId = Math.random();
      const addedTask = {
        text: text,
        id: taskId,
        projectId: projectState.selectedProject,
      };

      return {
        ...prevProjectState,
        tasks: [addedTask, ...prevProjectState.tasks],
      };
    });
  }

  function handleDeleteTask(id) {
    setProjectState((prevProjectState) => {
      return {
        ...prevProjectState,
        tasks: prevProjectState.tasks.filter((task) => task.id !== id),
      };
    });
  }

  //  console.log(projectState.projects)
  let selected = projectState.projects.find(
    (project) => project.id === projectState.selectedProject
  );
  let content = (
    <SelectedProject
      showProject={selected}
      onDelete={handleSelectedDelete}
      onAddTask={handleAddTask}
      tasks={projectState.tasks}
      onDelTask={handleDeleteTask}
    />
  );

  if (projectState.selectedProject === undefined) {
    content = <NoProject onAddProject={handleProject} />;
  } else if (projectState.selectedProject === null) {
    content = (
      <NewProject handleAddProject={handleAddProject} onCancle={handleCancle} />
    );
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <PlayerSidebar
        onAddProject={handleProject}
        projects={projectState.projects}
        onSelect={handleSelectedProject}
        selectedProjectId={projectState.selectedProject}
      />
      {content}
    </main>
  );
}

export default App;
