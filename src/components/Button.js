import React from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import {Text, Button} from 'react-native-elements'
import { verticalScale } from '../utils';

const { width } = Dimensions.get('window');

const ButtonX = ({ title, onSubmit }) => (
  <View style={styles.btnContainer}>
    <Button onPress={onSubmit} buttonStyle={styles.btn} titleStyle={styles.text} title={title} />
  </View>
);
export default ButtonX;
const styles = StyleSheet.create({
  btn: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: verticalScale(17),
    width: width - 40,
    maxWidth: 400,
    height: verticalScale(56),
    minHeight: verticalScale(40),
    borderRadius: verticalScale(14),
    backgroundColor: '#007AFF',
  },
  text: {
    height: 22,
    color: '#fff',
    fontSize: 17,
    lineHeight: 20,
    textAlign: 'center',
    fontWeight: '600'
  }
});