import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View } from 'react-native';
import 'react-native-gesture-handler';
import useFonts from './hooks/useFonts';
import TabsRoutes from './routes/tabs.routes';

/* eslint-disable-next-line prettier/prettier */
/* eslint-disable-line */

const App: React.FC = () => {
  const { loaded, loading: Loading } = useFonts();

  if (!loaded) return <Loading />;

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
