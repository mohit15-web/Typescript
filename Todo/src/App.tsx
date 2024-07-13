import { useState } from "react";
import "./App.css";

interface todoTypes {
  title: string;
  completed: boolean;
  id: number;
}
const App: React.FC = () => {
  const [todos, setTodos] = useState<todoTypes[]>([]);
  const [text, setText] = useState<string>("");

  const addTodo = () => {
    setTodos([...todos, { title: text, id: Date.now(), completed: false }]);
    setText("");
  };

  const removeTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  const handleChecked = (id: number) => {
    const filteredArr = todos.filter((todo) => {
      if(todo.id === id){
        todo.completed = !todo.completed
      } 
      return todo
    })
    setTodos(filteredArr)
  }
  return (
    <>
      <div className="p-10 shadow-xl rounded-lg">
        <div>
          <input
            type="text"
            value={text}
            placeholder="enter todo"
            onChange={(e) => setText(e.target.value)}
            className="p-2 border m-2 rounded-md"
          />
          <button onClick={addTodo}>Add</button>
        </div>
        <div>
          <ul className="">
            {todos.map((todo) => (
              <li key={todo.id}
              className=" flex justify-around items-center border my-3"
              >
                <input type="checkbox" checked={todo.completed} onChange={() => handleChecked(todo.id)} /> {todo.title}{" "}
                <span className="cursor-pointer p-2" onClick={() => removeTodo(todo.id)}>❌</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default App;
