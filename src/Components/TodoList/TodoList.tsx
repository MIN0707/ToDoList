import TodoItem from "../TodoItem/TodoItem";

interface Todo {
	id: number,
	text: string,
	done: boolean
}

type TodoFunction = {
	switchDone: Function;
	removeTodo: Function;
	todoLists: Todo[];
}

function TodoList({switchDone, removeTodo, todoLists}: TodoFunction): JSX.Element {
	/*todoLists.map((todo: Todo) => (
		console.log(todo.id)
	))*/
	return <div className={'animation'}>
		{todoLists.map((todo: Todo) => (
			<TodoItem
				switchDone={switchDone}
				removeTodo={removeTodo}
				key={todo.id}
				todo={todo}></TodoItem>
		))}
	</div>
}

export default TodoList;