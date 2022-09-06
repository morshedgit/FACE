import * as React from "react";
import CounterInput from "./CounterInput";
import "./styles.css";

export default function App() {
  const handleFormSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    console.log(Object.fromEntries(formData));
  };
  return (
    <div>
      <form className="m-4 p-4 shadow-md" onSubmit={handleFormSubmit}>
        <h2 className="text-xl">Enrollment Form</h2>
        <fieldset className="py-4">
          <label htmlFor="fName">First Name: </label>
          <input className="border" name="fName" type="text" />
        </fieldset>
        <fieldset className="py-4">
          <label htmlFor="lName">Last Name: </label>
          <input className="border" name="lName" type="text" />
        </fieldset>

        <fieldset>
          <CounterInput>{(value) => <p>{value}</p>}</CounterInput>
        </fieldset>

        <button type="submit" className="bg-blue-500 p-2 text-white">
          Submit
        </button>
      </form>
    </div>
  );
}
