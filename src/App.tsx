import './App.css'
import Header from './components/Header/Header'
import TodoList from './components/TodoList/TodoList'
import { useTodoStore } from './store/todoStore'

function App() {
  const { getScheduledTodos, getCompletedTodos } = useTodoStore()
  return (
    <>
      <Header />
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '1rem',
        }}
      >
        <TodoList title="Scheduled" todos={getScheduledTodos()} editable />
        <TodoList title="Completed" todos={getCompletedTodos()} />
      </div>
    </>
  )
}

export default App
