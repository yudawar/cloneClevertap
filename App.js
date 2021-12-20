import React, {useEffect, useState} from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import CleverTap from 'clevertap-react-native';

export default function App() {
  CleverTap.setDebugLevel(3);
  CleverTap.registerForPush();
  CleverTap.initializeInbox();

  const [inboxs, setInboxs] = useState([]);
  const [inboxCount, setinboxCount] = useState(0);

  useEffect(() => {
    CleverTap.profileSet({
      Name: 'clev1',
      Identity: 'PFYCL-123',
      Email: 'pfycl@pfy.com',
      Birthdate: new Date('2020-03-03T06:35:31'),
    });

    CleverTap.getInboxMessageCount((err, res) => {
      console.log('Total Messages: ', res, err);
      setinboxCount(res);
    });

    CleverTap.getAllInboxMessages((err, res) => {
      console.log('All Inbox Messages: ', res, err);
      setInboxs(res);
    });

    CleverTap.recordEvent('testEvent-PFYCL-123');
  }, []);

  return (
    <View>
      <SafeAreaView />
      <Text>Clevertap Reproduce</Text>
      <Text>InboxCount: {inboxCount}</Text>
      <Text>Inbox Data : </Text>
      <ScrollView>
        {inboxs.map(ib => {
          return (
            <View
              key={Math.random()}
              style={{
                marginVertical: 16,
                paddingHorizontal: 8,
              }}>
              {/* <Text>{JSON.stringify(ib)}</Text> */}
              <Text>
                {JSON.stringify(
                  ib.msg?.content[0]?.action?.links[0]?.kv?.images,
                )}
              </Text>
              <Text>{ib.msg.content[0].title.text}</Text>
              <Text>{ib.msg.content[0].message.text}</Text>
              <Image
                style={{
                  height: 150,
                  width: '100%',
                }}
                source={{
                  uri: ib.msg?.content[0]?.action?.links[0]?.kv?.images,
                }}
              />
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({});
