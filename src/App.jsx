import { Suspense, useLayoutEffect, useState } from "react";
import "./App.css";
import TabButton from "./components/TabButton";
import WindowHook from "./components/WindowHook";
import DebounceHook from "./components/DebounceHook";
import PreviousHook from "./components/PreviousHook";
import LocalStorage from "./components/LocalStorage";

function App() {
  const [tab, setTab] = useState("windowtab");

  useLayoutEffect(() => {
    const nome = document.querySelector("#reactme");
    nome.classList.add("red");
  });

  return (
    <div className="flex flex-col py-5 min-h-screen bg-blue-200 justify-center items-center">
      <Suspense fallback={<h1>Loading....</h1>}>
        <div id="reactme">Hello, React!</div>
        <div className="flex gap-2 border-b-2 border-b-amber-600">
          <TabButton
            isActive={tab === "windowtab"}
            action={() => setTab("windowtab")}
          >
            useWindow Hook
          </TabButton>

          <TabButton
            isActive={tab === "debounce"}
            action={() => setTab("debounce")}
          >
            useDebounce Hook
          </TabButton>

          <TabButton
            isActive={tab === "useprevious"}
            action={() => setTab("useprevious")}
          >
            usePrevious Hook
          </TabButton>

          <TabButton
            isActive={tab === "localstorage"}
            action={() => setTab("localstorage")}
          >
            useLocalStorage Hook
          </TabButton>
        </div>

        {tab === "windowtab" && <WindowHook />}
        {tab === "debounce" && <DebounceHook />}
        {tab === "useprevious" && <PreviousHook />}
        {tab === "localstorage" && <LocalStorage />}
      </Suspense>
    </div>
  );
}

export default App;
