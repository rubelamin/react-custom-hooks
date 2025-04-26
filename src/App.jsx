import { Suspense, useState } from "react";
import "./App.css";
import TabButton from "./components/TabButton";
import WindowHook from "./components/WindowHook";
import DebounceHook from "./components/DebounceHook";

function App() {
  const [tab, setTab] = useState("windowtab");

  return (
    <div className="flex flex-col py-5 min-h-screen bg-blue-200 justify-center items-center">
      <Suspense fallback={<h1>Loading....</h1>}>
        <div className="flex gap-2 border-b-2 border-b-amber-600">
          <TabButton
            isActive={tab === "windowtab"}
            action={() => setTab("windowtab")}
          >
            useWindow
          </TabButton>

          <TabButton
            isActive={tab === "debounce"}
            action={() => setTab("debounce")}
          >
            useDebounce
          </TabButton>
        </div>

        {tab === "windowtab" && <WindowHook />}
        {tab === "debounce" && <DebounceHook />}
      </Suspense>
    </div>
  );
}

export default App;
