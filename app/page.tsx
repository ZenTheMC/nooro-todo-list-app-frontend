"use client";
import { useEffect, useState } from "react";
import TaskCard from "@/components/TaskCard";
import Image from "next/image";
// If you don't need Link or Image here, remove their imports.

type Task = {
  id: number;
  title: string;
  color: string;
  completed: boolean;
};

export default function HomePage() {
  const [tasks, setTasks] = useState<Task[]>([]);

  // Define fetchTasks at the top level so toggleCompleted & deleteTask can call it
  const fetchTasks = async () => {
    const res = await fetch("http://localhost:4000/tasks");
    const data = await res.json();
    setTasks(data);
  };

  // Run fetchTasks once on mount
  useEffect(() => {
    fetchTasks();
  }, []);

  const toggleCompleted = async (task: Task) => {
    await fetch(`http://localhost:4000/tasks/${task.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...task, completed: !task.completed }),
    });
    // Refresh tasks
    fetchTasks();
  };

  const deleteTask = async (id: number) => {
    if (!confirm("Delete this task?")) return;
    await fetch(`http://localhost:4000/tasks/${id}`, { method: "DELETE" });
    // Refresh tasks
    fetchTasks();
  };

  const completedCount = tasks.filter((t) => t.completed).length;

  return (
    <section className="bg-[#1E1E1E] p-6 rounded-md">
      {/* Top row: "Tasks (X)" and "Completed (Y)" */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-brandBlue font-semibold text-xl">
          Tasks ({tasks.length})
        </h2>
        <h2 className="text-brandPurple font-semibold text-xl">
          Completed ({completedCount})
        </h2>
      </div>

      {/* If no tasks, show placeholder; otherwise show the task list */}
      {tasks.length === 0 ? (
        <div className="text-center text-gray-300 mt-20">
          <Image
            src="/note.svg"
            alt="Rocket icon"
            width={40}
            height={40}
            className="mx-auto mb-4"
          />
          <p className="text-xl">You don’t have any tasks registered yet.</p>
          <p>Create tasks and organize your to-do items.</p>
        </div>
      ) : (
        <div className="space-y-4">
          {tasks.map((task) => (
            <TaskCard
              key={task.id}
              task={task}
              toggleCompleted={toggleCompleted}
              deleteTask={deleteTask}
            />
          ))}
        </div>
      )}
    </section>
  );
}
