import AddList from './components/AddList';
import ToggleButton from './components/ToggleButton';
import React from "react";
import Header from './containers/Header';
import List from './containers/List';
import ProgressBarUI from './components/ProgressBarUI';
import useManagement from './hooks/useManagement';
import Toggle from './containers/Toggle';

function App() {
  const {
    combineTasks,
    tasksContainerRef,
    percentage,
    handleAddList,
    handleToggleComplete,
    handleDeleteTask,
    setBtnToggle,
  } = useManagement();

  return (
    <div className='h-screen bg-custom-gradient'>
      <Header />
      <hr />

      <ProgressBarUI percentage={percentage} />

      <List
        combineTasks={combineTasks}
        tasksContainerRef={tasksContainerRef}
        handleToggleComplete={handleToggleComplete}
        handleDeleteTask={handleDeleteTask}
      />
      <hr />

      <Toggle setBtnToggle={setBtnToggle} />

      <AddList onAddList={handleAddList} />
    </div>
  );
};

export default App;
