import React, {useContext} from 'react';
import {useSelector} from 'react-redux';
import {TasksContext} from '../../contexts/TasksContext';
import {Button, Segment} from 'semantic-ui-react';
import TaskSection from './TaskSection';

const TaskList = () => {
  const { deleteTask } = useContext(TasksContext);
  const taskList = useSelector(state => state.tasks.tasks);
  const activeList = taskList.filter(task => !task.completed);
  const completedList = taskList.filter(task => task.completed);

  async function deleteAllCompletedTasks() {
    completedList.forEach(list => deleteTask(list.taskid));
  }

  return (
      <>
        <Segment.Group>
          <TaskSection sectionTitle='Active Tasks' tasks={activeList}/>
        </Segment.Group>
        <Segment.Group>
          <TaskSection sectionTitle='Completed Tasks' tasks={completedList}/>
        </Segment.Group>
        <Button
            positive content='Clear Completed' onClick={deleteAllCompletedTasks}
        />
      </>
  );

};

export default TaskList;