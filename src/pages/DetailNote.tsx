/* eslint-disable react-refresh/only-export-components */
import {
  Link,
  redirect,
  useLoaderData,
//   useParams,
  type LoaderFunctionArgs,
} from "react-router";
import { getNote } from "../utils/storage";
import type { Note } from "../types";
import { useEffect } from "react";

export const noteDetailLoader = ({ params }: LoaderFunctionArgs) => {
  if (!params.id) throw redirect("/");

  const note = getNote(params.id);
  if (!note) throw redirect("/");
  return note;
};

function DetailNote() {
  //   const { id } = useParams<{ id: string }>();

  //   if (!id) {
  //     return <div>Note not found</div>;
  //   }

  //   const noteById = getNote(id);

//   const date = new Date(note.createdAt).toLocaleDateString("en-US");
  
  const note = useLoaderData() as Note;

  useEffect(() => {
    document.title = `Card Note | ${note?.title}`;
    return () => {
      document.title = "Notes";
    };
  }, [note?.title]);

  return (
    <div>
      <Link to={"/"}>Back</Link>
      {note ? (
        <div className="p-5 border border-zinc-200 dark:border-zinc-800 rounded-xl mt-4">
          <div className="flex justify-between items-center">
            <h2 className="capitalize text-2xl font-semibold">
              {note.title}
            </h2>
            <p className="text-gray-500">Created: {new Date(note.createdAt).toLocaleDateString()}</p>
          </div>
          <p>{note.content}</p>
        </div>
      ) : (
        <p className="capitalize">note not found.</p>
      )}
    </div>
  );
}

export default DetailNote;
