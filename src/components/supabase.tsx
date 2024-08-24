
import { useState, useEffect } from 'react'
import supabase from '../utils/supabase'

interface Todo {
    name: String

}

function Page() {
  const [todos, setTodos] = useState<Todo>([])

  const Todo = async () => {
    useEffect(() => {
        async function getTodos() {
          const { data: todos } = await supabase.from('todos').select()
    
          if (todos.length > 1) {
            setTodos(todos)
          }
        }
    
        getTodos()
      }, [])
  };
  Todo();

  return (
    <div>
      {todos.map((todo) => (
        <li key={todo}>{todo}</li>
      ))}
    </div>
  )
}
export default Page
