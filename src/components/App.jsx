import React, {useState, useEffect} from 'react';
import Navigation from './navigation/Navigation';
import Tasks from './tasks/Tasks';
import {TasksProvider} from '../contexts/TasksContext';
import {useTaskActions} from '../store/tasks/useTaskActions';

const App = () => {
  const taskActions = useTaskActions();
  const [formShow, setFormShow] = useState(false);
  const toggleForm = () => setFormShow(!formShow);
  const providerConstants = {...taskActions, formShow, toggleForm};
  return (
      <TasksProvider value={providerConstants}>
        <Navigation/>
        <Tasks />
      </TasksProvider>
  );
};

export default App;