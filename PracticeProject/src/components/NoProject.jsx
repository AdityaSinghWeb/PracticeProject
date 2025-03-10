import React from "react";
import renderImage from "../assets/logo-and-noproject.png";
import Button from "./Button";

function NoProject({onAddProject}) {
  return (
    <div className="mt-24 text-center w-2/3">
      <img
        src={renderImage}
        alt="An empty task list"
        className="w-16 h-16 object-contain mx-auto"
      />
      <h2 className="text-xl font-bold my-4 text-stone-500">
        No Project Started
      </h2>
      <p className="text-stone-400 mb-4">
        Select a project or get started with a new one
      </p>
      <p className="mt-8">
        <Button onClick={onAddProject}>Create new project</Button>
      </p>
    </div>
  );
}

export default NoProject;
