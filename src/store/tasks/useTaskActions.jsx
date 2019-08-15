import {useCallback} from 'react';
import {useDispatch} from 'react-redux';
import axios from 'axios';
import {
  ADD_TASK_FAILURE,
  ADD_TASK_START,
  ADD_TASK_SUCCESS,
  DELETE_TASK_FAIL,
  DELETE_TASK_START,
  DELETE_TASK_SUCCESS,
  GET_ALL_TASKS_FAIL,
  GET_ALL_TASKS_START,
  GET_ALL_TASKS_SUCCESS,
  GET_SINGLE_TASK_FAIL,
  GET_SINGLE_TASK_START,
  GET_SINGLE_TASK_SUCCESS,
  UPDATE_TASK_FAIL,
  UPDATE_TASK_START,
  UPDATE_TASK_SUCCESS,
} from './taskTypes';

export const useTaskActions = () => {
  const dispatch = useDispatch();

  const findAll = useCallback(() => {
    dispatch({ type: GET_ALL_TASKS_START });
    axios.get('http://localhost:5000/api/tasks')
         .then(res => dispatch(
             { type: GET_ALL_TASKS_SUCCESS, payload: res.data }))
         .catch(err => dispatch(
             { type: GET_ALL_TASKS_FAIL, payload: err.response }));
  }, [dispatch]);

  const findById = useCallback(id => {
    dispatch({ type: GET_SINGLE_TASK_START });
    axios.get(`http://localhost:5000/api/task/${id}`)
         .then(res => dispatch(
             { type: GET_SINGLE_TASK_SUCCESS, payload: res.data }))
         .catch(err => dispatch(
             { type: GET_SINGLE_TASK_FAIL, payload: err.response }));
  }, [dispatch]);

  const addTask = useCallback(newTask => {
    dispatch({ type: ADD_TASK_START });
    axios.post('http://localhost:5000/api/task', newTask)
         .then(res => dispatch({ type: ADD_TASK_SUCCESS, payload: res.data }))
         .catch(
             err => dispatch(
                 { type: ADD_TASK_FAILURE, payload: err.response }));
  }, [dispatch]);

  const updateTask = useCallback((updatedTask, id) => {
    dispatch({ type: UPDATE_TASK_START });
    axios.put(`http://localhost:5000/api/task/${id}`, updatedTask)
         .then(
             res => dispatch({ type: UPDATE_TASK_SUCCESS, payload: res.data }))
         .catch(
             err => dispatch(
                 { type: UPDATE_TASK_FAIL, payload: err.response }));
  }, [dispatch]);

  const deleteTask = useCallback(id => {
    dispatch({ type: DELETE_TASK_START });

    axios.delete(`http://localhost:5000/api/task/${id}`)
         .then(
             res => dispatch({ type: DELETE_TASK_SUCCESS, payload: res.data }))
         .catch(
             err => dispatch(
                 { type: DELETE_TASK_FAIL, payload: err.response }));
  }, [dispatch]);

  return { addTask, updateTask, deleteTask, findAll, findById };
};