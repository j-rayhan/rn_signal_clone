import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native-elements';
import { verticalScale } from '../utils';


const FooterX = ({ text1, text2 }) => (
  <View style={styles.footerContainer}>
    <Text style={styles.text1}>{text1}</Text>
    <Text style={styles.text2}>{text2}</Text>
  </View>)
export default FooterX;

const styles = StyleSheet.create({
  footerContainer: {
    marginTop: verticalScale(32),
    marginBottom: verticalScale(200),
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  text1: {
    color: '#8E8E93',
    fontSize: 16,
    textAlign: 'center'
  },
  text2: {
    color: '#1E90FF',
    fontWeight: '600',
    fontSize: 15,
  }
});