import React, {useEffect, useRef, useState} from 'react'

function TodoList() {

    const [todo, setTodo] = useState<string>("")
    const [todos, setTodos] = useState<string[]>([])
    const inputRef = useRef<HTMLInputElement>(null)

    const handlSubmit = (e: { preventDefault: () => void }) => {
        e.preventDefault();
        if (todo !== "") {
            setTodos([...todos, todo])
        }
        setTodo('')
        inputRef?.current?.focus()
    }
    const [checkForm,setCheckForm] = useState<boolean>(true)
    const [edit,setEdit] = useState<string>('')
    const [idItem,setIdIteam] = useState<number>()

    const handleEdit = (index:number) => {
        inputRef?.current?.focus()
        setCheckForm(false)
        setIdIteam(index)
    }

    const handleUpdateForm = (edit: string, idItem: number | undefined) => {
        const updateTodo = todos.map((todo,index)=>{
            return index === idItem ? edit : todo
        })
        setTodos(updateTodo)
    }

    const handleSubmitUpdateForm = (e: { preventDefault: () => void }) => {
        e.preventDefault();
        handleUpdateForm(edit,idItem);
        setCheckForm(true)
        setEdit('')
    }

    const handleDel = (index:number,todo:string) => {
        const delTodo = todos.filter((td,id)=>{
            if(index !== id) return todo
            return null
        })
        setTodos(delTodo)
    }

    return (
        <>
            {checkForm ? (
                <form action="">
                    <input
                        type="text"
                        ref={inputRef}
                        value={todo}
                        placeholder="enter..."
                        onChange={(e) => setTodo(e.target.value)}
                    />
                    <button
                        onClick={handlSubmit}
                    >Add</button>
                </form>
            ) : (
                <form action="">
                    <input
                        type="text"
                        ref={inputRef}
                        value={edit}
                        placeholder="enter update value..."
                        onChange={(e) => setEdit(e.target.value)}
                    />
                    <button
                        onClick={handleSubmitUpdateForm}
                    >Update</button>
                    <button
                        onClick={()=>setCheckForm(true)}
                    >Cancel</button>
                </form>
            )}

            <ul>
                {todos.map((todo, index) => (
                    <li key={index}>{todo}
                        <button
                            onClick={()=>handleEdit(index)}
                        >Edit</button>
                        <button
                            onClick={()=>handleDel(index,todo)}
                        >Del</button>
                    </li>
                ))}
            </ul>
        </>

    )
}

export default TodoList