import React from 'react';
import {Segment} from 'semantic-ui-react';
import TaskItem from './TaskItem';

const TaskSection = ({ sectionTitle, tasks }) => {
  return (
      <>
        <Segment>{sectionTitle}</Segment>
        <Segment.Group>{tasks.map(task => <TaskItem
            key={task.taskid} content={task} id={task.taskid}
        />)}</Segment.Group>
      </>
  );
};

export default TaskSection;