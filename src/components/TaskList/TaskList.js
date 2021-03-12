import React from "react";
import "./tasklist.css";
import PropTypes from "prop-types";

import TaskList from "../TaskList/TaskList";
import TaskItem from "../TaskItem/TaskItem";

export default function TaskList({ title, onAddTask, tasks }) {
  const addTask = () => {
    onAddTask("Nova Tarefa", "Pendente");
    return (
      <div className="tasklist">
        <div className="title">{title}</div>
        <div className="content">
          {tasks.map((task) => {
            return (
              <TaskItem
                key={task.id}
                id={task.id}
                title={task.title}
                taskState={task.State}
              />
            );
          })}
        </div>
        <button onClick={addTask}>Adicionar Tarefa</button>
      </div>
    );
  };

  TaskList.protoType = {
    title: PropTypes.string.isRequired,
    onAddTask: PropTypes.func.isRequired,
    tasks: PropTypes.array.isRequired
  };
}
