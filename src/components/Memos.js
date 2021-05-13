import React, {useState, useMemo, useCallback} from 'react';
import {View, Text, Button} from 'react-native';
const Memos = (props) => {
  const [count, setCount] = useState(0);
  const [item, setItem] = useState(10);

  const multiCountMemo = useMemo(
    function multiCount() {
      console.log('MultiCount Call');
      return count * 10;
    },
    [count],
  );
  // function multiCount() {
  //   console.log('MultiCount Call');
  //   return count * 10;
  // }
  const multiCountCallBackMemo = useCallback(
    function multiCount() {
      console.log('MultiCount Call');
      return count * 10;
    },
    [count],
  );
  // const multiCountCALLBACK2 = multiCount2;
  // const multiCountCALLBACK3 = multiCount2;
  console.log('USE MEMO call back ', multiCountCallBackMemo);
  console.log('USE MEMO ', multiCountMemo);
  // let index = multiCountCALLBACK2 === multiCountCALLBACK3;
  // console.log('USE CALLBACK', multiCountCallBackMemo);
  return (
    <View>
      <Text>This is a Memo Classdddd</Text>
      <Text>Count: {count}</Text>
      <Text>Item: {item}</Text>
      <Text>Count Multi {multiCountMemo}</Text>
      <Button
        title="Update Count"
        onPress={() => {
          setCount(count + 1);
        }}
      />

      <Button
        title="Update Item"
        onPress={() => {
          setItem(item + 1);
        }}
      />
    </View>
  );
};
export default Memos;
