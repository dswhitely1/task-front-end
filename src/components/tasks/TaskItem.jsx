import React, {useContext} from 'react';
import {Segment} from 'semantic-ui-react';
import {TasksContext} from '../../contexts/TasksContext';

const TaskItem = ({ content: { task, completed }, id }) => {
  const { updateTask } = useContext(TasksContext);
  return (
      <Segment onClick={() => updateTask({ completed: !completed }, id)}>
        {task}
      </Segment>
  );
};

export default TaskItem;