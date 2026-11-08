/* eslint-disable react-refresh/only-export-components */
import { useEffect, useRef } from "react";
import { Form, redirect, type ActionFunctionArgs } from "react-router";
import { saveNote } from "../utils/storage";

export const createNoteAction = async ({ request }: ActionFunctionArgs) => {
    const formData = await request.formData();
    const title = formData.get("title") as string;
    const content = formData.get("content") as string;

    saveNote({ title, content });
    return redirect("/");
  };

function CreateNote() {
  const titleInputRef = useRef<HTMLLabelElement>(null);

  useEffect(() => {
    titleInputRef.current?.focus();
  }, []);

  return (
    <div>
      <h1 className="capitalize mb-6 text-xl font-bold text-center">
        create new note
      </h1>

      <Form method="post">
        <div>
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-2">
              <label
                htmlFor="title"
                ref={titleInputRef}
                className="block text-sm mb-1"
              >
                Title
              </label>
            </div>
            <div className="col-span-6">
              <input
                type="text"
                name="title"
                id="title"
                className="w-full p-2 border rounded-md dark:bg-zinc-900 dark:border-zinc-800"
                required
              />
            </div>
          </div>
          <div className="grid grid-cols-12 gap-4 mt-4">
            <div className="col-span-2">
              <label htmlFor="content" className="block text-sm mb-1">
                Content
              </label>
            </div>
            <div className="col-span-6">
              <textarea
                name="content"
                id="content"
                className="w-full p-2 border rounded-md dark:bg-zinc-900 dark:border-zinc-800"
                rows={3}
              ></textarea>
            </div>
          </div>
          <div className="grid grid-cols-12 self-end">
            <div className="col-span-8 flex justify-end">
              <button
                type="submit"
                className="capitalize rounded-md bg-zinc-800 text-white dark:bg-zinc-200 dark:text-zinc-600 p-2 cursor-pointer hover:dark:bg-zinc-300"
              >
                save note
              </button>
            </div>
          </div>
        </div>
      </Form>
    </div>
  );
}

export default CreateNote;
