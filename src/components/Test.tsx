import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

type TODO = {
    id: string | number;
    label: string;
    content?: string;
    type: "view" | "edit";
    status: "pending" | "complete";
};

const Test = () => {
    const [todos, setTodos] = useState<TODO[]>([]);
    const [newInput, setNewInput] = useState({ label: "", content: "" });

    const handleAddTodo = () => setTodos((prev) => [...prev, { label: "", content: "", id: uuidv4(), type: "edit", status: "pending" }]);

    const onChangInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    return (
        <div>
            <h1 className="p-4 text-white">Test component</h1>
            <button onClick={handleAddTodo}>Add new todo</button>
            {todos.map((todo) => (
                <div key={todo.id} className="mb-2">
                    <div className="flex items-center gap-2 justify-center">
                        <input
                            className="outline-none border-[2px] rounded-md border-sky-500"
                            type="text"
                            name="label"
                            value={newInput.label}
                            onChange={onChangInput}
                        />
                        <input
                            className="outline-none border-[2px] rounded-md border-sky-500"
                            type="text"
                            name="content"
                            value={newInput.label}
                            onChange={onChangInput}
                        />
                    </div>
                    <div>{todo.content}</div>
                </div>
            ))}
        </div>
    );
};

export default Test;
