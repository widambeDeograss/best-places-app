import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import PlacesNavigator from './navigation/placesNavigation';
import { AppContextProvider } from './context/context';

export default function App() {
  return (
    <AppContextProvider>
      <NavigationContainer>
      <StatusBar style="auto" />
        <PlacesNavigator />
      </NavigationContainer>
      </AppContextProvider>
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
