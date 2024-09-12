import React from 'react';
import {SafeAreaView} from 'react-native';
import Routes from './src/routes';
import ErrorBoundary from './src/components/ErrorBoundary';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
const App = () => {
  return (
    <GestureHandlerRootView>
      <ErrorBoundary>
        <SafeAreaView style={{flex: 1}}>
          <Routes />
        </SafeAreaView>
      </ErrorBoundary>
    </GestureHandlerRootView>
  );
};
export default App;
