import React, { useState } from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Button, Input } from 'react-native-elements';
import _sumBy from 'lodash/sumBy';
import { ScrollView } from 'react-native-gesture-handler';
import * as WebBrowser from 'expo-web-browser';

import { MonoText } from '../components/StyledText';
import { TextList } from '../components';

export default function HomeScreen() {
  const [expenses, setExpenses] = useState(ALL_EXPENSES);

  const ALL_EXPENSES = [
    { id: 1, name: 'Buy a book', amount: 20 },
    { id: 2, name: 'Buy dog food', amount: 5 },
    { id: 3, name: 'Book a flight ticket', amount: 225 },
    { id: 4, name: 'Buy speakers', amount: 300 },
    { id: 5, name: 'Book a concert ticket', amount: 50 },
    { id: 6, name: 'Buy birthday present', amount: 100 },
    { id: 7, name: 'Buy boots', amount: 400 }
  ];

  let totalExpense = _sumBy(ALL_EXPENSES, 'amount');

  return (
    <View style={styles.container}>
      <View style={styles.welcomeContainer}>
        <Input placeholder='Type of expense' />
        <Input placeholder='amount' />

        <Button onPress={() => setExpenses(expenses + 1)} title='Add' type='outline'></Button>
      </View>

      <View style={styles.getStartedContainer}>
        <View style={[styles.codeHighlightContainer, styles.homeScreenFilename]}>
          <MonoText>Expenses list:</MonoText>
        </View>
      </View>

      <View style={styles.listContainer}>
        <TextList noBottomDivider data={ALL_EXPENSES} />
      </View>

      <View style={styles.tabBarInfoContainer}>
        <Text style={styles.tabBarInfoText}>Total Expense is :</Text>

        <View style={[styles.codeHighlightContainer, styles.navigationFilename]}>
          <MonoText style={styles.codeHighlightText}>{totalExpense}</MonoText>
        </View>
      </View>
    </View>
  );
}

HomeScreen.navigationOptions = {
  header: null
};

function DevelopmentModeNotice() {
  if (__DEV__) {
    const learnMoreButton = (
      <Text onPress={handleLearnMorePress} style={styles.helpLinkText}>
        Learn more
      </Text>
    );

    return (
      <Text style={styles.developmentModeText}>
        Development mode is enabled: your app will be slower but you can use useful development
        tools. {learnMoreButton}
      </Text>
    );
  } else {
    return (
      <Text style={styles.developmentModeText}>
        You are not in development mode: your app will run at full speed.
      </Text>
    );
  }
}

function handleLearnMorePress() {
  WebBrowser.openBrowserAsync('https://docs.expo.io/versions/latest/workflow/development-mode/');
}

function handleHelpPress() {
  WebBrowser.openBrowserAsync(
    'https://docs.expo.io/versions/latest/get-started/create-a-new-app/#making-your-first-change'
  );
}

const styles = StyleSheet.create({
  listContainer: {
    flex: 2
  },
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center'
  },
  contentContainer: {
    paddingTop: 30
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50
  },
  homeScreenFilename: {
    marginVertical: 7
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)'
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center'
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
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center'
  },
  helpLink: {
    paddingVertical: 15
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7'
  }
});
