"use client";
import { useFormState, useFormStatus } from "react-dom";
import { askQuestion } from "./actions";

export enum CtxLoadingSources {
  File_Text = "File_Text",
  File_Pdf = "File_Pdf",
  Web = "Web",
  Input_Text = "Input_Text",
}

// const selectedCtxSource: CtxLoadingSources = CtxLoadingSources.Input_Text;

const PromptResponse = ({ message }: { message: string }) => {
  const { pending } = useFormStatus();
  return (
    <>
      {!pending && message && (
        <fieldset className="mx-2 my-4 flex gap-2">
          <div>AI: {message}</div>
        </fieldset>
      )}
      {pending && <div>Loading...</div>}
    </>
  );
};

export default function Home() {
  // const [selectedCtxSource, setSelectedCtxSource] = useState<CtxLoadingSources>(
  //   CtxLoadingSources.Input_Text
  // );

  // const [response, setResponse] = useState("");

  const [state, action] = useFormState(askQuestion, {
    message: "",
  });

  console.log({ state });

  return (
    <main className="my-4 mx-8">
      <h3 className="text-3xl py-4">Chat with your document</h3>
      <form action={action}>
        <fieldset className="mx-2 my-4 flex gap-2">
          <input
            name="question"
            type="text"
            placeholder="Enter Question"
            className="w-full py-2 px-4"
            defaultValue="Tell me a joke"
          />
          <button type="submit" className="py-1 px-4 bg-green-100">
            Ask
          </button>
        </fieldset>

        <PromptResponse message={state.message} />
        <hr className="py-4" />

        {/* <fieldset className="mx-2 my-4 flex">
          Loading Options:{" "}
          {Object.values(CtxLoadingSources).map((ctxSrc) => (
            <div key={ctxSrc} className="px-2 gap-1 flex">
              <input
                type="radio"
                id={ctxSrc}
                name="ctxSrc"
                value={ctxSrc}
                defaultChecked={ctxSrc === selectedCtxSource}
                // onChange={(e) => {
                //   setSelectedCtxSource(
                //     e.currentTarget.value as CtxLoadingSources
                //   );
                // }}
              />
              <label htmlFor={ctxSrc}>{ctxSrc}</label>
            </div>
          ))}
        </fieldset>
        {selectedCtxSource === CtxLoadingSources.File_Text && (
          <fieldset className="mx-2 my-4">
            TODO:
            <input
              type="file"
              placeholder="Upload text"
              className="w-full py-2 px-4"
              disabled
            />
          </fieldset>
        )}
        {selectedCtxSource === CtxLoadingSources.File_Pdf && (
          <fieldset className="mx-2 my-4">
            TODO:
            <input
              disabled
              type="file"
              placeholder="Upload pdf"
              className="w-full py-2 px-4"
            />
          </fieldset>
        )}
        {selectedCtxSource === CtxLoadingSources.Web && (
          <fieldset className="mx-2 my-4">
            <textarea
              rows={6}
              placeholder="Enter Comma Separated Urls"
              className="w-full py-2 px-4"
            ></textarea>
          </fieldset>
        )}
        {selectedCtxSource === CtxLoadingSources.Input_Text && (
          <fieldset className="mx-2 my-4">
            <textarea
              rows={6}
              placeholder="Enter Context"
              className="w-full py-2 px-4"
            ></textarea>
          </fieldset>
        )} */}
      </form>
    </main>
  );
}
