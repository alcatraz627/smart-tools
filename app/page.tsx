export default function Home() {
  return (
    <main className="my-4 mx-8">
      <h3 className="text-3xl py-4">Chat with your document</h3>
      <fieldset className="mx-2 my-4 flex gap-2">
        <input
          type="text"
          placeholder="Enter Question"
          className="w-full py-2 px-4"
        ></input>
        <button type="submit" className="py-1 px-4 bg-green-100">
          Ask
        </button>
      </fieldset>
      <fieldset className="mx-2 my-4">
        <textarea
          rows={6}
          placeholder="Enter Context"
          className="w-full py-2 px-4"
        ></textarea>
      </fieldset>
    </main>
  );
}
