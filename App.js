import 'react-native-gesture-handler';
import React from 'react';
import {
  StatusBar, 
  StyleSheet,
  View
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Integracao from './components/Integracao';
import Sobre from './components/Sobre';

const Drawer = createDrawerNavigator();


        function Card({ titulo, descricao }) {
  return (
    <View style={styles.card}>
      <Text style={styles.titulo}>{titulo}</Text>
      <Text style={styles.descricao}>{descricao}</Text>
    </View>
  );
}

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
        <StatusBar barStyle="light-content" backgroundColor="#111827" />
        <NavigationContainer>
          <Drawer.Navigator
            initialRouteName="Introdução"
            screenOptions={{
              headerStyle: { backgroundColor: '#111827' },
              headerTintColor: '#FFFFFF',
              drawerActiveTintColor: '#2563EB',
              drawerLabelStyle: { fontSize: 16 },
            }}
          >
            <Drawer.Screen name="Introdução" component={Sobre} />
            <Drawer.Screen name="Portfólio e contatos" component={Integracao} />
          </Drawer.Navigator>
          
        </NavigationContainer>

      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}
const styles = StyleSheet.create({
    card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    margin: 8,
    // sombra iOS
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    // sombra Android
    elevation: 3,
  },
  titulo: { fontSize: 18, fontWeight: '600', marginBottom: 4 },
  descricao: { fontSize: 14, color: '#666' },
});