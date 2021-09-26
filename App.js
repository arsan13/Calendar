import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Calendar} from 'react-native-calendars';

const App = () => {
  return (
    <Calendar
      hideExtraDays
      enableSwipeMonths
      markedDates={{
        '2021-09-16': {selected: true, marked: true, selectedColor: 'blue'},
        '2021-09-17': {marked: true},
        '2021-09-18': {marked: true, dotColor: 'red', activeOpacity: 0},
        '2021-09-19': {disabled: true, disableTouchEvent: true},
      }}
      onDayPress={e => {
        console.log('selected day', e.dateString);
      }}
    />
  );
};

const styles = StyleSheet.create({});

export default App;
