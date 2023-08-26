import ProgressBarUI from './components/ProgressBarUI';
import ToggleButton from './components/ToggleButton';
import React, { useState, useEffect } from "react";

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  //計算已完成的數量
  const [completedTasks, setCompletedTasks] = useState(0);
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    calculateProgressBar(tasks.length, completedTasks);
  }, [tasks]);

  const handleAddTask = () => {
    if (newTask.trim() !== "") {
      const newTaskItem = {
        text: newTask + "  ",
        completed: false,
        id: Date.now(),
      };

      setTasks([newTaskItem, ...tasks]);
      setNewTask("");
    }
  };

  const handleToggleComplete = (id) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );

    setTasks(updatedTasks);

    const completedCount = updatedTasks.filter(task => task.completed).length;
    setCompletedTasks(completedCount);
  };

  const handleDeleteTask = (id, completed) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);

    setTasks(updatedTasks);

    if (completed) setCompletedTasks(completedTasks - 1);
  };

  const calculateProgressBar = (taskCount, completedTasks) => {
    const precentage = taskCount > 0 ? (Math.round(completedTasks * 100 / taskCount)) : 0;

    setPercentage(precentage);
  }

  return (
    <div className='h-screen bg-custom-gradient'>
      <div className='max-w-[90%] mx-auto'>

        <h1 className='head-text'>Todo List</h1>
        <p className='text-small-semibold text-gray-400'>Add things to do</p>
        <hr />

        <ProgressBarUI percentage={percentage} />

        <div className="max-h-[48vh] overflow-y-auto">
          {tasks.slice().reverse().map((task) => (
            <div key={task.id} className={`flex my-4 py-4 bg-white rounded-md ${task.completed ? "completed" : ""}`}>
              <input
                className='mx-4 w-8 h-8 '
                type="checkbox"
                checked={task.completed}
                onChange={() => handleToggleComplete(task.id)}
              />
              {/* checkbox勾選後對已完成的選項新增文字刪除線 & 接兩個空白延長 */}
              <span className={`ml-2 w-full text-blue-4 text-body-large ${task.completed ? "line-through" : ""}`}>
                {task.text}{task.completed && <span>&nbsp;&nbsp;</span>}
              </span>
              <button className='text-right pr-8 text-body-large text-purple-1' onClick={() => handleDeleteTask(task.id, task.completed)}>
                x
              </button>
            </div>
          ))}
        </div>


        <hr />

        <div className='flex text-right'>
          <p className='w-full text-blue-4 text-base-semibold'>Move done things to end?</p>
          <ToggleButton tasks={tasks} />
        </div>


        <div className='bottomComponents'>
          <h4 className='pb-2 text-blue-4 text-body-large'>Add to list</h4>
          <div className='flex'>
            <input
              className='w-full text-body-large text-gray-500 pl-2'
              type="text"
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
            />
            <button
              className='button-add'
              onClick={handleAddTask}
            >+</button>
          </div>
        </div>


      </div>
    </div>
  );
};

export default App;
