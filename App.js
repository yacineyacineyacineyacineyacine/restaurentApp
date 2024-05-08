import React from 'react';
import {
  View, Text, SafeAreaView, StatusBar,
} from 'react-native';

function App({}) {
  return (
    <>
      <SafeAreaView
        style={{
          flex: 1,
          flexDirection: 'column',
          // marginTop: StatusBar.currentHeight,
        }}
      >
        <View
          style={{
            padding: 16,
            backgroundColor: 'green',
          }}
        >
          <Text>Search</Text>
        </View>
        <View style={{ flex: 1, padding: 16, backgroundColor: 'blue' }}>
          <Text>List</Text>
        </View>
      </SafeAreaView>
      <StatusBar style="auto" />
    </>
  );
}

export default App;
