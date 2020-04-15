import React, { useState, useEffect } from 'react';
import { AsyncStorage, Button, Platform, StyleSheet, Text, View } from 'react-native';
import { Input } from 'react-native-elements';
import _sumBy from 'lodash/sumBy';

import * as WebBrowser from 'expo-web-browser';

import { MonoText } from '../components/StyledText';
import { TextList } from '../components';

export default function HomeScreen() {
  const [expenses, setExpenses] = useState([]);
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');

  const initializeData = async () => {
    const storedExpenses = JSON.parse(await AsyncStorage.getItem('expenses'));
    setExpenses(storedExpenses ? storedExpenses : []);
    console.log('stored Expenses', storedExpenses);
  };

  useEffect(() => {
    initializeData();
  }, []);

  const handleSubmitForm = () => {
    if (name !== '' && amount > 0) {
      const expense = { name, amount };
      const updatedExpenses = [...expenses, expense];
      setExpenses(updatedExpenses);
      AsyncStorage.setItem('expenses', JSON.stringify(updatedExpenses));
      setName('');
      setAmount('');
    } else {
      console.log('Invalid expense name or amount');
    }
  };

  const handleName = (event) => {
    console.log('Name ', event);
    setName(event);
  };

  const handleAmount = (event) => {
    console.log('Amount', event);
    setAmount(parseInt(event, 10));
    // transforming string into integer value;
    // input field gives a string but I need an integer in order to sum in total amount
  };

  return (
    <View style={styles.flexContainer}>
      <View style={styles.welcomeContainer}>
        <Input placeholder='Type of expense' value={name} onChangeText={handleName} />
        <Input placeholder='amount' value={amount} onChangeText={handleAmount} />
        <Button onPress={handleSubmitForm} title='Add'></Button>
      </View>

      <View style={styles.getStartedContainer}>
        <View style={[styles.codeHighlightContainer, styles.homeScreenFilename]}>
          <MonoText>Expenses list:</MonoText>
        </View>
      </View>

      <View style={styles.flexContainer}>
        <TextList style={styles.listContainer} noBottomDivider data={expenses} />
      </View>

      <View style={styles.tabBarInfoContainer}>
        <Text style={styles.tabBarInfoText}>Total Expense is :</Text>

        <View style={[styles.codeHighlightContainer, styles.navigationFilename]}>
          <MonoText style={styles.codeHighlightText}>{_sumBy(expenses, 'amount')}</MonoText>
        </View>
      </View>
    </View>
  );
}

HomeScreen.navigationOptions = {
  header: null
};

const styles = StyleSheet.create({
  listContainer: {
    flex: 2
  },
  flexContainer: {
    flex: 1,
    backgroundColor: '#fff'
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50
  },
  homeScreenFilename: {
    marginVertical: 7
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3
      },
      android: {
        elevation: 20
      }
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center'
  },
  navigationFilename: {
    marginTop: 5
  }
});
