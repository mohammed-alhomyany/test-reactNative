import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Image, View } from 'react-native';

import { AppStackParamList } from './src/navigations/AppStackParamList';
import HomeView from './src/views/HomeView';
import RegisterView from './src/views/RegisterView';
import VerificationView from './src/views/VerificationView';

const Stack = createNativeStackNavigator<AppStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeView}
          options={{
            header: () => (
              <View
                style={{
                  backgroundColor: 'black',
                  height: 150,
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderBottomLeftRadius: 30,
                  borderBottomRightRadius: 30
                }}>
                <Image source={require('./assets/logo1.webp')} style={{ marginTop: 30 }} />
              </View>
            )
          }}
        />
        <Stack.Screen name="Register" component={RegisterView} />
        <Stack.Screen name="Verification" component={VerificationView} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
