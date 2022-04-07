/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState, useEffect } from 'react';
import { fetch } from 'react-native-ssl-pinning';

import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
} from 'react-native';


const App = () => {

  const fetchData = () => {
    fetch("https://jsonplaceholder.typicode.com/posts/1", {
      method: "GET",
      timeoutInterval: 10000,
      // your certificates array (needed only in android) ios will pick it automatically
      sslPinning: {
        certs: ["mycert1"] // your certificates name (without extension), for example cert1.cer, cert2.cer
      }
    })
      .then(response => {
        console.log(JSON.stringify(response.bodyString, null, "\t"))
      })
      .catch(err => {
        console.log(`error: ${err}`)
      });
  }

  const secureFetchData = () => {
    fetch("https://jsonplaceholder.typicode.com/posts/1", {
      method: "GET",
      timeoutInterval: 10000,
      // your certificates array (needed only in android) ios will pick it automatically
      sslPinning: {
        certs: ["mycert1"] // your certificates name (without extension), for example cert1.cer, cert2.cer
      }
    })
      .then(response => {
        console.log(JSON.stringify(response.bodyString, null, "\t"))
      })
      .catch(err => {
        console.log(`error: ${err}`)
      })
  }

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
        onPress={secureFetchData}
      >
        <Text style={styles.text}>
          Fetch data
        </Text>

      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={fetchData}
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
