/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState, useEffect} from 'react';
import {SafeAreaView, Text, StatusBar, Button} from 'react-native';
import Memos from './src/components/Memos';

const App: () => React$Node = () => {
  const [count, setcount] = useState(0);
  const [data, setdata] = useState(0);

  useEffect(() => {
    console.log('call Use Effect for update count');
  }, [count]);
  useEffect(() => {
    console.log('call Use Effect for update data');
  }, [data]);
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <Memos />
        {/* <Text>HOOKS EXAMPLE </Text>
        <Text>Count {count} </Text>

        <Text>Data {data} </Text>
        <Button
          title="Click count"
          onPress={() => {
            setcount(count + 1);
          }}
        />
        <Button
          title="Click data"
          onPress={() => {
            setdata(data + 1);
          }}
        /> */}
      </SafeAreaView>
    </>
  );
};

export default App;
