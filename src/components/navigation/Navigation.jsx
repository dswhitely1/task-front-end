import React, {useContext} from 'react';
import {Button, Container, Menu} from 'semantic-ui-react';
import {TasksContext} from '../../contexts/TasksContext';

const Navigation = () => {
  const {formShow, toggleForm} = useContext(TasksContext);
  return (
      <Menu inverted>
        <Container>
          <Menu.Item header>{`Don's Todo Application`}</Menu.Item>
          <Button
              positive inverted content={formShow ? 'Close' : 'New Todo'}
              onClick={toggleForm}
          />
        </Container>
      </Menu>
  );
};

export default Navigation;
