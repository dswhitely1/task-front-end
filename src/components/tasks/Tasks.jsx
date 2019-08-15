import React, {useContext, useEffect} from 'react';
import TaskList from './TaskList';
import TaskForm from './TaskForm';
import {TasksContext} from '../../contexts/TasksContext';
import {Container, Grid} from 'semantic-ui-react';

const Tasks = () => {
  const { findAll, formShow } = useContext(TasksContext);

  useEffect(() => findAll(), []);

  return (
      <Container>
        <Grid>
          <Grid.Column width={formShow ? 10 : 16}>
            <TaskList/>
          </Grid.Column>
          <Grid.Column width={6}>{formShow && <TaskForm/>}</Grid.Column>
        </Grid>
      </Container>
  );
};

export default Tasks;