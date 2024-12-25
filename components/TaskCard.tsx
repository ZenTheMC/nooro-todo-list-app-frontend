"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { FaTrash } from "react-icons/fa";

interface Task {
  id: number;
  title: string;
  color: string;
  completed: boolean;
}

interface TaskCardProps {
  task: Task;
  toggleCompleted: (task: Task) => void;
  deleteTask: (id: number) => void;
}

const TaskCard: React.FC<TaskCardProps> = ({
  task,
  toggleCompleted,
  deleteTask,
}) => {
  const router = useRouter();

  const handleCardClick = () => {
    router.push(`/edit/${task.id}`);
  };

  const handleDeleteClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    deleteTask(task.id);
  };

  return (
    <div
      onClick={handleCardClick}
      className={`relative p-4 rounded-md flex items-center justify-between border-2 border-transparent
        bg-[#1E1E1E] hover:bg-[#2A2A2A] hover:border-${task.color}-500
        transition-colors cursor-pointer`}
    >
      <label
        onClick={(e) => e.stopPropagation()}
        className="flex items-center space-x-2"
      >
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => toggleCompleted(task)}
          onClick={(e) => e.stopPropagation()}
          className={`
            custom-circle
            border-${task.completed ? "brandPurple" : "brandBlue"}
            checked:bg-${task.completed ? "brandPurple" : "brandBlue"}
            checked:border-${task.completed ? "brandPurple" : "brandBlue"}
          `}
        />
        <span
          className={
            task.completed ? "line-through text-gray-500" : "text-gray-200"
          }
        >
          {task.title}
        </span>
      </label>
      <button
        onClick={handleDeleteClick}
        className="text-gray-400 hover:text-gray-200 transition-colors"
      >
        <FaTrash />
      </button>
    </div>
  );
};

export default TaskCard;
