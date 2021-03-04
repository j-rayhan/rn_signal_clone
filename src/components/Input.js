import React from 'react';
import { StyleSheet, TextInput, Dimensions } from 'react-native';
import { verticalScale } from '../utils';

const { width } = Dimensions.get('window');

const InputX = ({ placeholder, onChange }) => (
  <TextInput
    style={styles.input}
    onChangeText={onChange}
    placeholder={placeholder}
    defaultValue={''}
  />
);
export default InputX;
const styles = StyleSheet.create({
  input: {
    height: 60,
    width: width - 40,
    maxWidth: 400,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#DEDEDE',
    fontSize: 17,
  },
});