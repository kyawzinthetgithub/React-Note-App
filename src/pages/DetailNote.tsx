import { Link, useParams } from "react-router";
import { getNote } from "../utils/storage";

function DetailNote() {
  const { id } = useParams<{ id: string }>();

  if (!id) {
    return <div>Note not found</div>;
  }

  const noteById = getNote(id);

  const date = new Date(noteById.createdAt).toLocaleDateString("en-US");

  return (
    <div>
        <Link to={'/'}>Back</Link>
      {noteById ? (
        <div className="p-5 border border-zinc-200 dark:border-zinc-800 rounded-xl mt-4">
          <div className="flex justify-between items-center">
            <h2 className="capitalize text-2xl font-semibold">
              {noteById.title}
            </h2>
            <p>{date}</p>
          </div>
          <p>{noteById.content}</p>
        </div>
      ) : (
        <p className="capitalize">note not found.</p>
      )}
    </div>
  );
}

export default DetailNote;
