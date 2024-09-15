import React from 'react';
import {SafeAreaView} from 'react-native';
import Routes from './src/routes';
import ErrorBoundary from './src/components/ErrorBoundary';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {store} from './src/store/store';
import {Provider} from 'react-redux';
const App = () => {
  return (
    <Provider store={store}>
      <GestureHandlerRootView>
        <ErrorBoundary>
          <SafeAreaView style={{flex: 1}}>
            <Routes />
          </SafeAreaView>
        </ErrorBoundary>
      </GestureHandlerRootView>
    </Provider>
  );
};
export default App;
