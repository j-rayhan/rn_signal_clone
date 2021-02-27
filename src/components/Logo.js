import React from 'react';
import { StyleSheet, View } from 'react-native';
import {Image} from 'react-native-elements';
import { moderateScale, verticalScale } from '../utils';

const LogoX = ({ url }) => (
  <View style={styles.logoContainer}>
    <Image style={{
      width: moderateScale(37, 0.1),
      height: moderateScale(44, 0.1),
    }}
      source={{uri: url}}
    />
  </View>)

export default LogoX;

const styles = StyleSheet.create({
  logoContainer: {
    marginTop: verticalScale(59),
    justifyContent: 'center',
  },
});