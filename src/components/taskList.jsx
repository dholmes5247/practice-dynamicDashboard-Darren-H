import React from "react";

const TaskList= ({ tasks }) => {

return (
    <div>
    <ul style={{ listStyleType: "none", padding: 5 }}>
      {tasks.map((task, index) => (
        <li key={index} 
            style={{ 
                margin: "10px 0", 
                color: task.completed ? "green" : "red"
                }}>
          {task.taskName} {task.completed ? "✅" : "❌"}
        </li>
      ))}
    </ul>
   
    </div>
  );
}

export default TaskList;
