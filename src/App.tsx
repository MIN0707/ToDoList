import React, {useEffect, useState} from 'react';
import {BackGround, Flex2Div, FlexDiv} from './Components/BackGround/BackGroundStyled'
import Clock from "./Components/Clock/Clock";
import {InputBox, InputContainer, InputTitle} from "./Components/Input/InputStyled";
import './App.css'
import TodoList from "./Components/TodoList/TodoList";

interface Todo {
	id: number,
	text: string,
	done: boolean
}

function App(): JSX.Element {
	
	const [todo, setTodo] = useState('');
	
	const [id, setId] = useState(Number(localStorage.getItem('id')) ?? 0);
	
	const [todoList, setTodoList] = useState<Todo[]>(JSON.parse(localStorage.getItem('todoList') ?? '[]'));
	
	useEffect(() => {
		localStorage.setItem('todoList', JSON.stringify(todoList));
	}, [todoList]);
	
	useEffect(() => {
		localStorage.setItem('id', id.toString());
	}, [id]);
	
	function onKeyboardEvent(event: React.KeyboardEvent<HTMLInputElement>): void {
		if (event.key === 'Enter') {
			if (todo.trim() !== '') {
				addTodo()
			}
		}
	}
	
	function nextTodoId(): void {
		setId(id + 1);
	}
	
	function onChangeEvent(event: React.ChangeEvent<HTMLInputElement>): void {
		setTodo(event.currentTarget.value);
	}
	
	function addTodo(): void {
		nextTodoId();
		setTodoList(
			todoList.concat([{
				id: id,
				text: todo,
				done: false
			}])
		)
		setTodo('')
	}
	
	function removeTodo(id: number): void {
		const todos = todoList.filter(todo => todo.id !== id)
		todos.sort();
		setTodoList(todos);
	}
	
	function switchDone(id: number): void {
		setTodoList(
			todoList.map(function (todo: Todo): Todo {
				return todo.id === id ? {...todo, done: !todo.done} : todo
			})
		);
	}
	
	return (
		<BackGround>
			<div className={'tip'}>
				<span>
					팁: 쉬프트 + 휠 사용시 가로 스크롤 이 가능합니다
				</span>
				<br/>
				<span>
					TIP: Horizontal scrolling is possible when using shift + wheel
				</span>
			</div>
			<FlexDiv className={todoList.length !== 0 ? 'open' : ''}>
				<Clock/>
				<InputContainer>
					<InputTitle>What are you doing today?</InputTitle>
					<InputBox
						type='text'
						autoComplete='off'
						onKeyUp={onKeyboardEvent}
						onChange={onChangeEvent}
						value={todo}
						placeholder={'Enter your todo'}
					/>
				</InputContainer>
			</FlexDiv>
			{
				todoList.length === 0
					?
					""
					:
					<Flex2Div>
						<TodoList
							switchDone={switchDone}
							removeTodo={removeTodo}
							todoLists={todoList}
						/>
					</Flex2Div>
				
			}
		</BackGround>
	)
}

export default App;
