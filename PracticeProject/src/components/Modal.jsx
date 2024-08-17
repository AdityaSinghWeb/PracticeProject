import React, { useImperativeHandle } from "react";
import { forwardRef } from "react";
import { useRef } from "react";
import Button from "./Button";
import { createPortal } from "react-dom";

function Modal({ children }, ref) {
  const dialog = useRef();

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });

  return createPortal(
    <dialog
      ref={dialog}
      className="p-4 rounded-md shadow-md backdrop:bg-stone-900/90"
    >
      {children}
      <form method="dialog" className="mt-4 text-right">
        <Button>Close</Button>
      </form>
    </dialog>,
    document.getElementById("modal-root")
  );
}

export default forwardRef(Modal);
