"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import TaskForm from "@/components/TaskForm";

export default function CreateTaskPage() {
  const router = useRouter();

  const [title, setTitle] = useState("");
  const [color, setColor] = useState("blue");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await fetch("http://localhost:4000/tasks", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, color }),
    });
    router.push("/");
  };

  return (
    <TaskForm
      isEdit={false}
      title={title}
      setTitle={setTitle}
      color={color}
      setColor={setColor}
      onSubmit={handleSubmit}
      onCancel={() => router.push("/")}
    />
  );
}
