import React, { useEffect, Fragment, useContext } from 'react';
import { Container } from 'semantic-ui-react';
import LoadingComponent from './LoadingComponent';
import {observer} from 'mobx-react-lite';
import ActivityStore from '../stores/activityStore';
import ActivityDashboard from '../../features/activites/dashboard/ActivityDashboard';
import NavBar from '../../features/nav/NavBar';

const App = () => {
  const activityStore = useContext(ActivityStore)

  useEffect(() => {
    activityStore.loadActivities();
  }, [activityStore]);

  if (activityStore.loadingInitial) return <LoadingComponent content='Loading activities' />

  return (
    <Fragment>
      <NavBar />
      <Container style={{ marginTop: '7em' }}>
        <ActivityDashboard />
      </Container>
    </Fragment>
  );
};

export default observer(App);
