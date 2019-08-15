import React, {useContext, useState} from 'react';
import {TasksContext} from '../../contexts/TasksContext';
import {Button, Form} from 'semantic-ui-react';

const TaskForm = () => {
  const { addTask, toggleForm } = useContext(TasksContext);
  const [values, setValues] = useState({
    task: '',
  });

  const handleChange = e => setValues(
      { ...values, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    addTask(values);
    toggleForm();
  };

  return (
      <Form onSubmit={handleSubmit}>
        <Form.Field>
          <label>Task</label>
          <input name='task' value={values.task} onChange={handleChange} placeholder='Enter Task'/>
        </Form.Field>
        <Button positive type='submit'>Submit</Button>
      </Form>
  )
};

export default TaskForm;