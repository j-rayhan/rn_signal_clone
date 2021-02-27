import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { verticalScale } from '../utils';
const TitleX = ({title}) => (
<View style={ styles.titleContainer}>
  <Text style={ styles.title}>{title}</Text>
  </View>);
export default TitleX;
const styles = StyleSheet.create({
    titleContainer:{
      height:verticalScale(41),
      marginTop:verticalScale(35),
    },
    title:{
      fontSize: verticalScale(34),
      fontStyle:'normal',
      fontWeight: 'bold',
      textAlign:'center',
      letterSpacing:0.374,
      lineHeight:verticalScale(41)
    },
  });