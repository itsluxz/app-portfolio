import React from 'react';
import { 
  StyleSheet,
  Text,
  View 
} from 'react-native';

export default function Sobre() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Olá, eu sou Lucca</Text>
      <Text style={styles.texto}>
        Este é meu portfólio pessoal. Abra o menu no canto superior esquerdo para acessar meus contatos e redes.
      </Text>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    flex: 1,
    justifyContent: 'center',
    padding: 24,
  },
  titulo: {
    color: '#111827',
    fontSize: 30,
    fontWeight: '700',
    marginBottom: 12,
  },
  texto: {
    color: '#4B5563',
    fontSize: 17,
    lineHeight: 26,
  },
});
