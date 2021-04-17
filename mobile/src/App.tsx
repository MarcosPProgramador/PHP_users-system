import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View } from 'react-native';
import 'react-native-gesture-handler';
import TabsRoutes from './routes/tabs.routes';

/* eslint-disable-next-line prettier/prettier */
/* eslint-disable-line */ console.log('test...');

const App: React.FC = () => {
  return (
    <>
      <View style={{ flex: 1, backgroundColor: '#312e38' }}>
        <StatusBar backgroundColor="#312e38" style="light" />
        <TabsRoutes />
      </View>
    </>
  );
};

export default App;
