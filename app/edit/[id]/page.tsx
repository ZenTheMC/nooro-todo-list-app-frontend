"use client";
import { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import TaskForm from "@/components/TaskForm";

interface Task {
  id: number;
  title: string;
  color: string;
  completed: boolean;
}

export default function EditTaskPage() {
  const router = useRouter();
  const { id } = useParams();

  const [title, setTitle] = useState("");
  const [color, setColor] = useState("blue");
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    const fetchTask = async () => {
      const res = await fetch("http://localhost:4000/tasks");
      const data: Task[] = await res.json();
      const task = data.find((t) => t.id === Number(id));
      if (task) {
        setTitle(task.title);
        setColor(task.color);
        setCompleted(task.completed);
      }
    };
    fetchTask();
  }, [id]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await fetch(`http://localhost:4000/tasks/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, color, completed }),
    });
    router.push("/");
  };

  return (
    <TaskForm
      isEdit={true}
      title={title}
      setTitle={setTitle}
      color={color}
      setColor={setColor}
      completed={completed}
      setCompleted={setCompleted}
      onSubmit={handleSubmit}
      onCancel={() => router.push("/")}
    />
  );
}
