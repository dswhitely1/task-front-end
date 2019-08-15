import {createReducer} from '../../helpers/createReducer';
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

const initialState = {
  tasks: [],
  isLoading: false,
  errors: null,
};

const tasksStart = (state, payload) => ({
  ...state,
  isLoading: true,
  errors: null,
});
const tasksSuccess = (state, payload) => ({
  ...state,
  isLoading: false,
  tasks: payload,
});
const tasksFail = (state, payload) => ({
  ...state,
  isLoading: false,
  tasks: [],
  errors: payload,
});

export const taskReducer =  createReducer(initialState, {
  [GET_ALL_TASKS_START]: tasksStart,
  [GET_ALL_TASKS_SUCCESS]: tasksSuccess,
  [GET_ALL_TASKS_FAIL]: tasksFail,
  [GET_SINGLE_TASK_START]: tasksStart,
  [GET_SINGLE_TASK_SUCCESS]: tasksSuccess,
  [GET_SINGLE_TASK_FAIL]: tasksFail,
  [ADD_TASK_START]: tasksStart,
  [ADD_TASK_SUCCESS]: tasksSuccess,
  [ADD_TASK_FAILURE]: tasksFail,
  [UPDATE_TASK_START]: tasksStart,
  [UPDATE_TASK_SUCCESS]: tasksSuccess,
  [UPDATE_TASK_FAIL]: tasksFail,
  [DELETE_TASK_START]: tasksStart,
  [DELETE_TASK_SUCCESS]: tasksSuccess,
  [DELETE_TASK_FAIL]: tasksFail,
});