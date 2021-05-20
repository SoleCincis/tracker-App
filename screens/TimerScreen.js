import React, { useState } from 'react';
import { Image, StyleSheet, ScrollView, TouchableOpacity, View } from 'react-native';
import { Input } from 'react-native-elements';
import { Keyboard } from 'react-native';

import TabBarIcon from '../components/TabBarIcon';
import { MonoText } from '../components/StyledText';

const timerIcon = require('../assets/images/hourglass.png');

export default function TimerScreen() {
  const [newTaskName, setNewTaskName] = useState('');
  const [tasks, setTasks] = useState([]);
  const [timerAmount, setTimerAmount] = useState(FIVE);

  const TWENTY_FIVE = 25 * 60;
  const FIFTEEN = 15 * 60;
  const FIVE = 5 * 60;

  const timeHitSlop = { top: 10, bottom: 10, left: 10, right: 10 };

  const handleTaskName = (inputValue) => {
    console.warn('Name ', inputValue);
    setNewTaskName(inputValue);
  };

  const onAddTask = () => {
    //Why I don't have to import Keyboard from react native ?
    Keyboard.dismiss();

    if (newTaskName !== '') {
      const updateTasks = [newTaskName, ...tasks];
      setTasks(updateTasks);
      setNewTaskName('');
    } else {
      console.warn('Invalid task name, it must not be empty');
    }
  };

  //onSubmitEditing = if "enter" is pressed on the keyboard, onAddTask is fired
  return (
    <View>
      <View style={styles.titleContainer}>
        <MonoText style={styles.title}> Timer </MonoText>
        <Image style={styles.timerIcon} source={timerIcon}></Image>
      </View>

      <View style={styles.inputContainer}>
        <Input
          placeholder="Type of task"
          value={newTaskName}
          onChangeText={handleTaskName}
          onSubmitEditing={onAddTask}
        />
        <TouchableOpacity onPress={onAddTask}>
          <TabBarIcon name="md-add" />
        </TouchableOpacity>
      </View>

      <View style={styles.minutesContainer}>
        {[FIVE, FIFTEEN, TWENTY_FIVE].map((time) => (
          <TouchableOpacity
            key={time}
            hitSlop={timeHitSlop}
            onPress={(time) => setTimerAmount({ timerAmount: time })}
          >
            <MonoText
              style={[styles.minutes, { color: time == undefined ? '#4ba9bc' : '#dcdf4a' }]}
            >
              {time / 60}
            </MonoText>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.tasksContainer}>
        <ScrollView>
          {tasks.map((task, index) => (
            <TouchableOpacity key={`${index}-${task}`} onPress={() => setNewTaskName(task)}>
              <MonoText style={[styles.tasks, { color: index === 0 ? '#4ba9bc' : '#a0a0a0' }]}>
                {task}
              </MonoText>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {/* <MonoText>{JSON.stringify(tasks)}</MonoText> */}
    </View>
  );
}

const styles = StyleSheet.create({
  listContainer: {
    flex: 2
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 15
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 15,
    marginHorizontal: 30
  },
  title: {
    textAlign: 'center',
    color: '#4ba9bc',
    fontSize: 30
  },
  timerIcon: {
    alignSelf: 'center',
    width: 20,
    height: 20
  },
  minutes: {
    textAlign: 'center',
    color: '#4ba9bc',
    fontSize: 25
  },
  minutesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginHorizontal: 0
  },
  tasksContainer: {
    alignItems: 'center',
    flexDirection: 'column',
    marginVertical: 25
  },
  tasks: {
    color: '#FFFF'
  }
});
