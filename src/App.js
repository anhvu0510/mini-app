import { ToDoList } from "./components/ToDoList";
import { ToDoDescription } from "./components/ToDoItem";
import { BaseButton } from "./components/Button";
import { useRef } from "react";

// Sử dụng bình thường
function App() {
  // const [state, dispatch] = useStore(StoreContext)
  return (
    <div className="app">
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
    </div>
  );
}

export default App;
