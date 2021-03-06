import React from "react";

function Todo() {
	return (
		<div className="container">
			<div className="todo-box">
				<h1>To Do</h1>
				<div className="input-group mb-3">
					<input
						type="text"
						className="form-control"
						placeholder="add new task"
					/>
					<div className="input-group-append">
						<button
							className="btn btn-outline-secondary"
							type="button">
							confirm
						</button>
					</div>
				</div>
				<ul className="list-group">
					<li className="list-group-item">task 1</li>
				</ul>
				<small className="text-muted">Mucho por hacer</small>
			</div>
		</div>
	);
}

export default Todo;
