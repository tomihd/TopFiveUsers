import React from 'react';
import Presentation from './presentation';

const PersonScreen = ({route}) => {
  const {user} = route.params;
  return <Presentation user={user} />;
};

export default PersonScreen;
