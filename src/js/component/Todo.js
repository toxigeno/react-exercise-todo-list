import React, { useState } from "react";
import { Button } from "reactstrap";

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
			<div className="todo-box row p-3">
				<div className="col">
					<h1 className="text-center">To Do</h1>
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
							{/* botón para meter task */}
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
								<li
									key={index}
									className="d-flex list-group-item list-group-item-action">
									{item}
									<div id="close-icon" className="ml-auto">
										<i
											onClick={() => {
												deleteTask(index);
											}}
											className="far fa-times-circle"></i>
									</div>
								</li>
							);
						})}
					</ul>
					<small className="text-muted ml-2">
						{listTask.length} tareas por hacer
					</small>
				</div>
			</div>
		</div>
	);
}

export default Todo;
