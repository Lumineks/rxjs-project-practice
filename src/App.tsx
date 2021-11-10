import React, { useEffect, useRef } from "react";
import logo from "./logo.svg";
import "./App.css";
import { filter, fromEvent, fromEventPattern, map } from "rxjs";

function App() {
  const btnRef = useRef<HTMLButtonElement>(null);
  console.log("here");

  useEffect(() => {
    const observable = fromEvent(btnRef.current!, "click");
    console.log(observable);

    const subscribtion = observable.subscribe({next: (event) => {
      console.log("clicked", event);
    }});

    return () => subscribtion.unsubscribe();
  }, []);

  return (
    <div className="App">
      <button className="btn" type="button" ref={btnRef}>
        Button
      </button>
    </div>
  );
}

export default App;
