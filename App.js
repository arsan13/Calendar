import React, {useState} from 'react';
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ScrollView,
} from 'react-native';
import {Calendar} from 'react-native-calendars';
import WebViews from './WebViews.js';

const App = () => {
  const [reminder, setReminder] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [selectedDate, setSelectedDate] = useState('');
  const [note, setNote] = useState('');
  const [uri, setUri] = useState(false);

  const handlePress = val => {
    setSelectedDate(val.dateString);
    setShowForm(true);
  };

  const handleSave = () => {
    if (note.length > 0) {
      setReminder(prev => [
        ...prev,
        {
          date: selectedDate,
          note: note,
        },
      ]);
    }

    setSelectedDate('');
    setNote('');
    setShowForm(false);
  };

  const handleCancel = () => {
    setSelectedDate('');
    setNote('');
    setShowForm(false);
  };

  function clicked() {
    console.log(uri);
    setUri(!uri);
  }

  return (
    <>
      <View>
        <TouchableOpacity style={{margin: 10}} onPress={clicked}>
          <Text style={{color: 'blue'}}>Open gmail.com</Text>
        </TouchableOpacity>
      </View>
      {uri ? (
        <WebViews />
      ) : (
        <View>
          <View>
            <Calendar
              hideExtraDays
              enableSwipeMonths
              onDayPress={val => handlePress(val)}
              // markedDates={{
              //   '2021-09-16': {selected: true, marked: true, selectedColor: 'blue'},
              // }}
            />
          </View>

          <View style={{paddingVertical: 10}}>
            {!showForm ? (
              <ScrollView>
                <Text style={styles.reminderHeading}>Reminders</Text>
                {reminder.length > 0 ? (
                  reminder.map((item, index) => (
                    <Text key={index} style={styles.reminders}>
                      {item.date} {'  '} {item.note}
                    </Text>
                  ))
                ) : (
                  <Text style={styles.reminders}>No reminders added</Text>
                )}
              </ScrollView>
            ) : (
              <View>
                <Text style={styles.reminderHeading}>Add A Reminder</Text>
                <Text style={{padding: 10, fontSize: 20}}>{selectedDate}</Text>
                <TextInput
                  style={styles.input}
                  onChangeText={text => setNote(text)}
                  value={note}
                  placeholder="Remind me to..."
                />
                <View style={styles.btnContainer}>
                  <Button title="Save" onPress={handleSave} />
                  <Button title="Cancel" onPress={handleCancel} color="red" />
                </View>
              </View>
            )}
          </View>
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  reminderHeading: {
    borderBottomColor: 'green',
    borderBottomWidth: 5,
    paddingBottom: 5,
    fontSize: 40,
  },
  reminders: {
    fontSize: 20,
    paddingVertical: 15,
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  },
  input: {
    fontSize: 20,
    height: 50,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  btnContainer: {
    paddingTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});

export default App;
