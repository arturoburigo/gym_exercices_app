import { StyleSheet, Text, View, StatusBar } from 'react-native';
import {useFonts, Roboto_400Regular, Roboto_700Bold} from '@expo-google-fonts/roboto'
import {NativeBaseProvider} from 'native-base'
import { THEME } from '@utils/theme';
import { Loading } from '@components/Loading';
import { SignIn } from '@screens/SignIn';
import { SingUp } from '@screens/SignUp';

export default function App() {
  const [fontsLoaded] = useFonts({Roboto_400Regular, Roboto_700Bold}) 

  return (
    <NativeBaseProvider theme={THEME}>
      <StatusBar 
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      {fontsLoaded ? <SingUp/> : <Loading/>}
    </NativeBaseProvider>
  );
}
