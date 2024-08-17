import React, { useRef } from "react";
import Input from "./Input";
import Modal from "./Modal";

function NewProject({ handleAddProject, onCancle }) {
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();
  const modal = useRef();

  function handleSave() {
    let enteredTitle = title.current.value;
    let enteredDescription = description.current.value;
    let enteredDueDate = dueDate.current.value;

    if (
      enteredTitle.trim() === "" ||
      enteredDescription.trim() === "" ||
      enteredDueDate.trim() === ""
    ) {
      modal.current.open();
      return;
    }

    handleAddProject({
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDueDate,
    });
  }

  return (
    <>
      <Modal ref={modal}>
        <h2 className="text-2xl font-bold my-4 text-stone-700">
          Invalid Input
        </h2>
        <p className="text-stone-600 mb-4">
          Please make sure you provide a valid value for every input field.
        </p>
      </Modal>
      <div className="w-[35rem] mt-16">
        <div>
          <Input ref={title} type="text" title="Title" />
          <Input ref={description} title="Description" textarea />
          <Input ref={dueDate} type="date" title="Due Date" />
        </div>
        <menu className="flex items-center justify-end my-4 gap-4">
          <li>
            <button
              className="text-stone-700 hover:text-stone-950"
              onClick={onCancle}
            >
              Cancle
            </button>
          </li>
          <li>
            <button
              onClick={handleSave}
              className="bg-stone-800 text-stone-50 hover:bg-stone-900 px-6 py-2 rounded-md"
            >
              Save
            </button>
          </li>
        </menu>
      </div>
    </>
  );
}

export default NewProject;
