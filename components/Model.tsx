"use client";
import React, { ReactNode, useState } from "react";

interface ModalProps {
  open: boolean;
  onClose: () => void;
  children?: ReactNode;
}

export default function Modal() {
    const [open, setOpen] = useState<boolean>(true);

  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
      <div className="bg-white rounded-lg p-6 w-full max-w-md relative">
        <button
          onClick={() => setOpen(false)}
          className="absolute top-3 right-3 text-gray-600"
        >
          ✕
        </button>
        {/* {children} */}
      </div>
    </div>
  );
}