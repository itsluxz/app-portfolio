import React, { useRef } from 'react';
import {
  Alert, 
  Animated,
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const WHATSAPP_NUMERO = '5514998903456';
const LINKEDIN_USUARIO = 'seu-usuario';
const GITHUB_USUARIO = 'eoluxz';
const INSTAGRAM_USUARIO = 'lucca.wasd';
const EMAIL = 'luxzdev@gmail.com';

const INTEGRACOES = [
  {
    nome: 'WhatsApp',
    icone: 'logo-whatsapp',
    cor: '#25D366',
    linkNativo: `whatsapp://send?phone=${WHATSAPP_NUMERO}`,
    linkWeb: `https://wa.me/${WHATSAPP_NUMERO}`,
  },
  {
    nome: 'LinkedIn',
    icone: 'logo-linkedin',
    cor: '#0A66C2',
    linkNativo: `linkedin://in/${LINKEDIN_USUARIO}`,
    linkWeb: `https://www.linkedin.com/in/${LINKEDIN_USUARIO}`,
  },
  {
    nome: 'GitHub',
    icone: 'logo-github',
    cor: '#24292F',
    linkNativo: `github://user?username=${GITHUB_USUARIO}`,
    linkWeb: `https://github.com/${GITHUB_USUARIO}`,
  },
  {
    nome: 'Instagram',
    icone: 'logo-instagram',
    cor: '#E1306C',
    linkNativo: `instagram://user?username=${INSTAGRAM_USUARIO}`,
    linkWeb: `https://www.instagram.com/${INSTAGRAM_USUARIO}`,
  },
  {
    nome: 'E-mail',
    icone: 'mail-outline',
    cor: '#EA4335',
    linkNativo: `mailto:${EMAIL}`,
    linkWeb: `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(EMAIL)}`,
  },
];

async function abrirIntegracao(integracao) {
  try {
    const aplicativoDisponivel = await Linking.canOpenURL(integracao.linkNativo);

    if (aplicativoDisponivel) {
      await Linking.openURL(integracao.linkNativo);
      return;
    }

    await Linking.openURL(integracao.linkWeb);
  } catch (erro) {

    try {
      await Linking.openURL(integracao.linkWeb);
    } catch (erroWeb) {
      Alert.alert('Não foi possível abrir o link', 'Confira os dados da integração no topo do App.js.');
    }
  }
}


function CardContato({ integracao }) {
  const progressoCor = useRef(new Animated.Value(0)).current;

  const corDeFundo = progressoCor.interpolate({
    inputRange: [0, 1],
    outputRange: ['#F1F3F5', integracao.cor],
  });

  function animarCor(paraMarca) {
    Animated.timing(progressoCor, {
      toValue: paraMarca ? 1 : 0,
      duration: 180,
      useNativeDriver: false, 
    }).start();
  }

  return (
    <Animated.View style={[styles.card, { backgroundColor: corDeFundo }]}>
      <View style={styles.informacoesCard}>
        <Ionicons name={integracao.icone} size={30} color="#1F2937" />
        <Text style={styles.nomeIntegracao}>{integracao.nome}</Text>
      </View>

      <TouchableOpacity
        accessibilityLabel={`Abrir ${integracao.nome}`}
        activeOpacity={0.8}
        style={styles.botaoAbrir}
        onPressIn={() => animarCor(true)}
        onPressOut={() => animarCor(false)}
        onPress={() => abrirIntegracao(integracao)}
      >
        <Text style={styles.textoBotao}>Abrir</Text>
      </TouchableOpacity>
    </Animated.View>
  );
}

function Integracao() {
  return (
    <View style={styles.areaSegura}>
      <View style={styles.conteudo}>
          <Text style={styles.titulo}>Meu Portfólio</Text>
          <Text style={styles.subtitulo}>Encontre-me nas minhas redes</Text>

          <View style={styles.listaCards}>
            {INTEGRACOES.map((integracao) => (
              <CardContato key={integracao.nome} integracao={integracao} />
            ))}
          </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  areaSegura: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },

  conteudo: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 32,
  },

  titulo: {
    color: '#111827',
    fontSize: 30,
    fontWeight: '700',
  },

  subtitulo: {
    color: '#6B7280',
    fontSize: 16,
    marginTop: 6,
  },

  listaCards: {
    gap: 14,
    marginTop: 30,
  },

  card: {
    alignItems: 'center',
    borderRadius: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    minHeight: 82,
    paddingHorizontal: 18,
  },

  informacoesCard: {
    alignItems: 'center',
    flexDirection: 'row',
    flexShrink: 1,
  },

  nomeIntegracao: {
    color: '#1F2937',
    fontSize: 17,
    fontWeight: '600',
    marginLeft: 12,
  },

  botaoAbrir: {
    backgroundColor: '#111827',
    borderRadius: 10,
    paddingHorizontal: 16,
    paddingVertical: 10,
  },

  textoBotao: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '700',
  },
});

export default Integracao;
