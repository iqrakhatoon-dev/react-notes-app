import { useState } from "react";
import "./assets/Note.png";

const App = () => {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [note, setNote] = useState([]);

  const formsubmit = (e) => {
    e.preventDefault();

    const newNote = [...note];
    newNote.push({ title, details });
    setNote(newNote);

    setTitle("");
    setDetails("");
  };

  const deleteNote = (idx)=>{
    const copyNote = [...note]
    copyNote.splice(idx,1)
    setNote(copyNote)
  }

  return (
    /* Div for All content */
    <div className="h-screen bg-fuchsia-100 text-fuchsia-950 lg:flex overflow-auto">
      {/* Writing Form for user */}
      <form
        onSubmit={(e) => {
          formsubmit(e);
        }}
        className="p-10 flex flex-col gap-5 items-start lg:w-1/2"
      >
        {/* First Heading */}
        <h1 className="text-3xl font-bold mb-5">Create Your Notes</h1>

        {/* Notes Heading Input */}
        <input
          className="px-5 py-3 text-xl font-medium border-2 rounded w-full outline-fuchsia-950"
          type="text"
          placeholder="Enter Note Heading"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />

        {/* Textarea for Details of notes */}
        <textarea
          className="px-5 py-3 h-40 text-lg border-2 rounded outline-fuchsia-950 w-full"
          type="text"
          placeholder="Write Your Note Here..."
          value={details}
          onChange={(e) => {
            setDetails(e.target.value);
          }}
        ></textarea>

        {/* Add Note Button */}
        <button className="bg-fuchsia-950 text-fuchsia-50 text-xl p-3 w-full rounded border-none hover:bg-fuchsia-800 active:scale-90 cursor-pointer">
          Add Note
        </button>
      </form>

      {/* Divs for all notes output result */}
      <div className="py-1 px-10 lg:w-1/2 lg:border-l-2">
        <h2 className=" text-3xl font-bold m-5 flex justify-center">
          Recent Notes
        </h2>
        <div className="flex flex-wrap gap-3 p-5 ">
          {note.map((el, idx) => {
            return (
              <div
                key={idx}
                className="h-60 w-45 rounded bg-[url('./assets/Note.png')] bg-cover border-fuchsia-950 text-center pt-8 pb-10 px-2 flex justify-between flex-col"
              >
                <h2 className="text-fuchsia-950 font-bold text-2xl leading-tight">
                  {el.title}
                </h2>
                <p className=" text-fuchsia-800 font-semibold text-md pb-3">
                  {el.details}
                </p>

                <button onClick={()=>{
                  deleteNote(idx)
                }} className="bg-fuchsia-950 text-fuchsia-100 py-1 mx-9 rounded border-none hover:bg-fuchsia-800 active:scale-90 cursor-pointer">
                  Delete
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
