/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React from 'react';

import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
} from 'react-native';


const App = () => {

  const fetchData = () => { console.log("fetching data") }

  const secureFetchData = () => { console.log("fetching secured data") }

  return (
    <View
      contentInsetAdjustmentBehavior="automatic"
      style={styles.container}
    >

      <Text style={styles.header}>
        React Native SSL Pinning Testing
      </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={fetchData}
      >
        <Text style={styles.text}>
          Fetch data
        </Text>

      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={secureFetchData}
      >
        <Text style={styles.text}>
          Fetch secured data
        </Text>

      </TouchableOpacity>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'

  },
  header: {
    fontSize: 36,
    marginVertical: 10,
    marginBottom: 25,
    textAlign: 'center'
  },
  text: {
    fontSize: 24,
  },
  button: {
    alignItems: "center",
    backgroundColor: "blue",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 4,
    marginVertical: 12,
    cursor: 'pointer',
  },
});

export default App;
