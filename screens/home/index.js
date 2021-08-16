import React from 'react';
import Presentation from './presentation';

const usernames = ['GrahamCampbell', 'fabpot', 'weierophinney', 'rkh', 'josh'];

const HomeScreen = ({navigation}) => {
  console.log(navigation);
  const getUserInformation = username => {
    fetch(`https://api.github.com/users/${username}`)
      .then(response => {
        return response.json();
      })
      .then(user => {
        navigation.navigate('Person', {user: user});
      });
  };
  return <Presentation users={usernames} onPress={getUserInformation} />;
};

export default HomeScreen;
