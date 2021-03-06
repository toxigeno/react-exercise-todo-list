import React, { useState } from "react";

function Todo() {
	const [task, setTask] = useState("");
	const [listTask, setListTask] = useState([]);

	const putTask = () => {
		if (task != "") {
			setListTask([...listTask, task]);
		}
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
							</li>
						);
					})}
				</ul>
				<small className="text-muted">Mucho por hacer</small>
			</div>
		</div>
	);
}

export default Todo;
