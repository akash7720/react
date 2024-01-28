
import { useMemo, useState } from "react";
import toast from "react-hot-toast";

const UseMemo = () => {
    const [count, setCount] = useState(0);
    const [todos, setTodos] = useState(["New Todo"]);

    // const Calculation = expensiveCalculation(count); // 1
    // if any state changes, page will re-render, 
    // and we not added any condition for function so it'll get executed
    // const calculation = useMemo(() => expensiveCalculation(count), [count]);

    const calculation = useMemo(() => expensiveCalculation(count), [count])

    const increment = () => {
        setCount((c) => c + 1);
        toast.success("Hi from todos..")
    };

    const addTodo = () => {
        setTodos((t) => [...t, "New Todo"]);
       
    };
    return (
        <div>
            <div>
                <h1>My Todos :</h1>
                {todos.map((todo, index) => {
                    return <p key={index}>{todo}</p>;
                })}
                <button style={{ border: '2px solid black' }} onClick={addTodo}>Add Todo</button>
            </div>
            <hr/>
            <div>
                Count: {count}
                <button onClick={increment}>+</button>
                <h1>Expensive Calculation</h1>
                {calculation}
            </div>
        </div>
    );
};

const expensiveCalculation = (num) => {
    console.log("Lengthy Calculating...");
    for (let i = 0; i < 1000000000; i++) {
        num += 1;
    }
    return num; // 1000000001
};

export default UseMemo