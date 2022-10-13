import TodoItem from "../TodoItem/TodoItem";
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import './TodoList.css'

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
	return (
		// <div className={'animation'}>
		<TransitionGroup component="ul">
			{todoLists.map((todo: Todo) => (
				<CSSTransition key={todo.id} timeout={700} classNames="item">
					<TodoItem
						switchDone={switchDone}
						removeTodo={removeTodo}
						key={todo.id}
						todo={todo}
					/>
				</CSSTransition>
			))}
		</TransitionGroup>
		// </div>
	)
}

export default TodoList;