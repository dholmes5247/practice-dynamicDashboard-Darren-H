import React from "react";
import Greeting from "./components/Greeting";
import PremiumMessage from "./components/PremiumMember";
import TaskList from "./components/taskList";

const App = () => {
  const userName = "Darren";
  const isPremiumUser = true;

 const tasks = [
    { taskName: "Complete React module", completed: true },
    { taskName: "Build Unit 1 project", completed: false },
    { taskName: "Watch YouTube React Videos", completed: true },
  ]; 

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <Greeting userName={userName} />
      <PremiumMessage isPremiumUser={isPremiumUser} />
      <TaskList tasks={tasks} />
    </div>
  );
};

export default App;
