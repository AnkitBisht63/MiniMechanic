import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { MechanicDetailsScreen } from './src/screens/MechanicDetailsScreen';
import { HomeScreen } from './src/screens/HomeScreen';
import { RequestServiceScreen } from './src/screens/RequestServiceScreen';
import { RootStackParamList } from './src/types/navigation';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="dark" />
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: '#f8fafc' },
          headerTitleStyle: { color: '#0f172a', fontWeight: '700' },
          headerShadowVisible: false,
          contentStyle: { backgroundColor: '#f8fafc' },
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Instant Mechanic' }} />
        <Stack.Screen name="MechanicDetails" component={MechanicDetailsScreen} options={{ title: 'Garage Details' }} />
        <Stack.Screen name="RequestService" component={RequestServiceScreen} options={{ title: 'Request Service' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
