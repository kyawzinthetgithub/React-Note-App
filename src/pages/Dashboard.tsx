import { Link, useLoaderData } from "react-router";
import { getNotes } from "../utils/storage";
import type { Note } from "../types";

export const dashboardLoader = () => {
    return getNotes();
};

function Dashboard() {
    const notes = useLoaderData() as Note[];

    return (
        <div>
            <div>
                {notes ? (
                    notes.map((note) => (
                        <Link key={note.id} to={"/"}>
                            <h2>{note.title}</h2>
                            <p>{note.content}</p>
                        </Link>
                    ))
                ) : (
                    <p>No notes available.</p>
                )}
            </div>
        </div>
    );
}

export default Dashboard;
