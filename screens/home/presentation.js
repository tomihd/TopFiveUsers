import React from 'react';
import {View} from 'react-native';
import {Text, Button} from 'react-native-elements';
import styles from './stylesheet';

const Presentation = props => (
  <View style={styles.container}>
    <Text h3 style={styles.mainTitle}>
      Top 5 GitHub Users
    </Text>
    <Text style={styles.subtitle}>
      Tap the username to see more information
    </Text>
    <View style={styles.buttonView}>
      {props.users.map(user => (
        <Button
          key={user}
          title={user}
          buttonStyle={styles.button}
          onPress={() => props.onPress(user)}
        />
      ))}
    </View>
  </View>
);

export default Presentation;
