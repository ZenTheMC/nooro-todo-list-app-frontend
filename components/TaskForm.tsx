"use client";
import React from "react";

interface TaskFormProps {
  isEdit?: boolean;
  title: string;
  setTitle: (val: string) => void;
  color: string;
  setColor: (val: string) => void;
  completed?: boolean;
  setCompleted?: (val: boolean) => void;
  onSubmit: (e: React.FormEvent) => void;
  onCancel: () => void;
}

const TaskForm: React.FC<TaskFormProps> = ({
  isEdit = false,
  title,
  setTitle,
  color,
  setColor,
  completed,
  setCompleted,
  onSubmit,
  onCancel,
}) => {
  const colorOptions = [
    "red",
    "blue",
    "green",
    "purple",
    "yellow",
    "pink",
    "gray",
  ];

  return (
    <form
      onSubmit={onSubmit}
      className="bg-gray-800 p-6 rounded-md space-y-4 max-w-lg mx-auto"
    >
      <h2 className="text-xl font-bold">
        {isEdit ? "Edit Task" : "Create Task"}
      </h2>

      <label className="block">
        <span className="block mb-1">Title</span>
        <input
          className="w-full px-3 py-2 rounded-md border border-gray-600 bg-gray-700 text-white focus:outline-none"
          placeholder="Task Title"
          value={title}
          required
          onChange={(e) => setTitle(e.target.value)}
        />
      </label>

      <label className="block">
        <span className="block mb-1">Color</span>
        <div className="flex items-center space-x-2">
          {colorOptions.map((c) => (
            <div
              key={c}
              onClick={() => setColor(c)}
              className={`w-6 h-6 rounded-full cursor-pointer 
              ${color === c ? "ring-2 ring-white" : ""}
              bg-${c}-500`}
            />
          ))}
        </div>
      </label>

      {isEdit && setCompleted && completed !== undefined && (
        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            checked={completed}
            onChange={(e) => setCompleted(e.target.checked)}
            className="form-checkbox h-5 w-5 text-blue-600"
          />
          <span>Completed</span>
        </label>
      )}

      <div className="flex space-x-2">
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md"
        >
          {isEdit ? "Update" : "Create"}
        </button>
        <button
          type="button"
          className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-md"
          onClick={onCancel}
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default TaskForm;
