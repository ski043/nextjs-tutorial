"use client";

import { experimental_useFormStatus as useFormStatus } from "react-dom";

export default function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="bg-teal-500 px-4 py-2 rounded-lg text-white"
    >
      {pending ? <>loading...</> : <>Add comment...</>}
    </button>
  );
}
