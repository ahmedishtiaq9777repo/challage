import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import MainStack from './src/navigator';
import { createStore } from 'redux'
import MainReducer from './src/store/reducer';
import { Provider } from 'react-redux';
import { NativeBaseProvider } from "native-base";
const  store = createStore(MainReducer)
export default function App() {
  
  return (
    <Provider  store={store}>
      <NativeBaseProvider>
    <NavigationContainer>
     
      <MainStack />
     
    </NavigationContainer>
    </NativeBaseProvider>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
