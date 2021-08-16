import React from 'react';
import {View} from 'react-native';
import {Avatar, Text} from 'react-native-elements';
import styles from './stylesheet';

const Presentation = props => (
  <View style={styles.container}>
    <Avatar
      rounded
      source={{
        uri: props.user.avatar_url,
      }}
    />
    <View style={styles.userInfo}>
      <Text style={styles.username}>{props.user.name}</Text>
      <Text>{props.user.location}</Text>
    </View>
  </View>
);

export default Presentation;
