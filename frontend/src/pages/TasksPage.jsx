import React from "react";
import { useEffect, useState } from "react";
import PageStructure from "../components/PageStructure";
import Task from "../components/Task";
import Add from "../components/Add";

export default function App() {
  const [tasks, setTasks] = useState([]);
  const user = JSON.parse(localStorage.getItem("user"));

  function renderTasks() {
    if (localStorage.getItem("user")) {
      return (
        <div className="flex h-full max-w-[64%] flex-wrap items-center justify-center">
          {tasks.map((value) => (
            <Task
              key={value.id}
              taskId={value.id}
              done={value.done}
              editTextTask={editTextTask}
              editDoneTask={editDoneTask}
              deleteTask={deleteTask}
            >
              {value.text}
            </Task>
          ))}
          <Add userId={user.id} createTask={createTask} />
        </div>
      );
    } else {
      return <></>;
    }
  }

  useEffect(() => {
    if (localStorage.getItem("user")) {
      fetchTasks();
    }
  }, []);

  async function fetchTasks() {
    try {
      const response = await fetch(
        `http://localhost:8080/api/tasks/${user.id}`,
      );

      if (response.ok) {
        const data = await response.json();
        setTasks(data);
      }
    } catch (error) {
      alert(error);
      console.error(error);
    }
  }

  async function createTask(userId) {
    try {
      const response = await fetch(
        `http://localhost:8080/api/tasks/${userId}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            text: "",
          }),
        },
      );

      if (response.ok) {
        fetchTasks();
      }
    } catch (error) {
      alert(error);
      console.error(error);
    }
  }

  async function editTextTask(element, taskId) {
    const textarea =
      element.target.parentElement.parentElement.parentElement.querySelector(
        "textarea",
      );

    if (textarea.hasAttribute("disabled")) {
      textarea.removeAttribute("disabled");
    } else {
      try {
        await fetch(`http://localhost:8080/api/tasks/text/${taskId}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            text: textarea.value,
          }),
        });
      } catch (error) {
        alert(error);
        console.error(error);
      }

      textarea.setAttribute("disabled", "true");
    }

    textarea.focus();
  }

  async function editDoneTask(done, taskId) {
    try {
      await fetch(`http://localhost:8080/api/tasks/done/${taskId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          done: done,
        }),
      });
    } catch (error) {
      alert(error);
      console.error(error);
    }
  }

  async function deleteTask(taskId) {
    try {
      const response = await fetch(
        `http://localhost:8080/api/tasks/${taskId}`,
        {
          method: "DELETE",
        },
      );

      if (response.ok) {
        fetchTasks();
      }
    } catch (error) {
      alert(error);
      console.error(error);
    }
  }

  return (
    <PageStructure>
      <main className="flex min-h-[calc(100vh-64px)] items-center justify-center">
        {renderTasks()}
      </main>
    </PageStructure>
  );
}
