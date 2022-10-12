import React, {SyntheticEvent, useRef} from 'react';
import {MdCheckBox, MdCheckBoxOutlineBlank, MdDelete} from 'react-icons/md';
import {TodoItemBox, TodoItemContainer} from "./TodoItemStyled";

interface Todo {
	id: number,
	text: string,
	done: boolean
}

type TodoFunction = {
	switchDone: Function;
	removeTodo: Function;
	todo: Todo;
}

const TodoItem = ({switchDone, removeTodo, todo}: TodoFunction) => {
	const id = todo.id;
	const text = todo.text;
	const done = todo.done;
	
	function wheelEvent(event: SyntheticEvent): void {
		if(event.nativeEvent instanceof WheelEvent) {
			event.currentTarget.scrollLeft += (event.nativeEvent.deltaY);
		}
	}
	
	return <TodoItemBox className={'fade-in todobox'} onWheel={wheelEvent}>
		<TodoItemContainer>
			{done ? <MdCheckBox onClick={() => {
				switchDone(id);
			}}/> : <MdCheckBoxOutlineBlank onClick={() => {
				switchDone(id);
			}}/>}
		</TodoItemContainer>
		<TodoItemContainer>
			<MdDelete onClick={() => {
				removeTodo(id);
			}}/>
		</TodoItemContainer>
		{done ? <span className='line'>&nbsp;{text}</span> : <span>&nbsp;{text}</span>}
	</TodoItemBox>
}

export default TodoItem;