import React, { useState } from "react";

function Todo() {
	const [task, setTask] = useState("");
	const [listTask, setListTask] = useState([]);

	const putTask = () => {
		if (task != "") {
			setListTask([...listTask, task]);
			setTask("");
		} else {
			alert("Por favor ingrese tarea antes de confirmar");
		}
	};

	const deleteTask = indexDelete => {
		let resultado = listTask.filter((task, index) => index != indexDelete);
		setListTask(resultado);
	};

	return (
		<div className="container">
			<div className="todo-box">
				<h1>To Do</h1>
				<div className="input-group">
					<input
						type="text"
						className="form-control"
						placeholder="add new task"
						onChange={e => {
							setTask(e.target.value);
						}}
						value={task}
					/>
					<div className="input-group-append">
						<button
							onClick={putTask}
							className="btn btn-outline-secondary"
							type="button">
							confirm
						</button>
					</div>
				</div>
				<ul className="list-group">
					{listTask.map((item, index) => {
						return (
							<li key={index} className="list-group-item">
								{item}
								<button
									onClick={() => {
										deleteTask(index);
									}}
									type="button"
									className="btn btn-secondary">
									x
								</button>
							</li>
						);
					})}
				</ul>
				<small className="text-muted">
					{listTask.length} tareas por hacer
				</small>
			</div>
		</div>
	);
}

export default Todo;
