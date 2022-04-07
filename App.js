/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState, useEffect} from 'react';
import {fetch} from 'react-native-ssl-pinning';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';


const App = () => {

  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/posts/1", {
      method: "GET" ,
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
  }, [])

  return (
    <SafeAreaView>
      <StatusBar />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
       >
        <View>
          
            <Text>
              Hello World!
            </Text>
         
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
