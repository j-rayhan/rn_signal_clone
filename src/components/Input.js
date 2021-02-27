import React from 'react';
import { StyleSheet, TextInput, Dimensions } from 'react-native';
import { verticalScale } from '../utils';

const { width } = Dimensions.get('window');

const InputX = ({ placeholder }) => (
  <TextInput
    style={styles.input}
    placeholder={placeholder}
    defaultValue={''}
  />
);
export default InputX;
const styles = StyleSheet.create({
  input: {
    height: verticalScale(60),
    width: width - 40,
    maxWidth: 400,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#DEDEDE',
    fontSize: 17,
  },
});