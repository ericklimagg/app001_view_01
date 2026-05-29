import React, { useState, useEffect, useRef } from 'react';

import {
  View,
  Text,
  Button,
  StyleSheet,
  Switch,
  Image,
  Animated,
  ScrollView
} from 'react-native';

import { useNavigation } from '@react-navigation/native';

export default function Tela02() {

  const nav = useNavigation();

  const [ativo, setAtivo] = useState(false);

  const mercury = useRef(new Animated.Value(0)).current;
  const venus = useRef(new Animated.Value(0)).current;
  const earth = useRef(new Animated.Value(0)).current;
  const mars = useRef(new Animated.Value(0)).current;
  const jupiter = useRef(new Animated.Value(0)).current;
  const saturn = useRef(new Animated.Value(0)).current;
  const uranus = useRef(new Animated.Value(0)).current;
  const neptune = useRef(new Animated.Value(0)).current;
  const pluto = useRef(new Animated.Value(0)).current;

  useEffect(() => {

    if (ativo) {
      iniciarAnimacao();
    }

  }, [ativo]);

  function iniciarAnimacao() {

    mercury.setValue(0);
    venus.setValue(0);
    earth.setValue(0);
    mars.setValue(0);
    jupiter.setValue(0);
    saturn.setValue(0);
    uranus.setValue(0);
    neptune.setValue(0);
    pluto.setValue(0);

    const animar = (valor, tempo) => {

      Animated.loop(

        Animated.timing(valor, {
          toValue: 1,
          duration: tempo,
          useNativeDriver: true
        })

      ).start();

    };

    animar(mercury, 3000);
    animar(venus, 5000);
    animar(earth, 7000);
    animar(mars, 9000);
    animar(jupiter, 12000);
    animar(saturn, 15000);
    animar(uranus, 18000);
    animar(neptune, 21000);
    animar(pluto, 25000);

  }

  function rotacao(animacao) {

    return animacao.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg']
    });

  }

  function proximaTela() {
    nav.navigate('Tela03');
  }

  function voltarTela() {
    nav.goBack();
  }

  return (

    <ScrollView
      contentContainerStyle={styles.container}
    >

      <Text style={styles.titulo}>
        SISTEMA SOLAR
      </Text>

      <Image
        source={require('../../assets/images/venus.png')}
        style={styles.imagemPrincipal}
      />

      <Text style={styles.texto}>
        Ativar modo espacial:
      </Text>

      <Switch
        value={ativo}
        onValueChange={setAtivo}
      />

      {

        ativo && (

          <View style={styles.sistemaSolar}>

            {/* SOL */}

            <View style={styles.sol} />

            {/* MERCÚRIO */}

            <Animated.View
              style={[
                styles.orbita1,
                {
                  transform: [
                    { rotate: rotacao(mercury) }
                  ]
                }
              ]}
            >
              <Image
                source={require('../../assets/images/mercurio.png')}
                style={styles.planeta1}
              />
            </Animated.View>

            {/* VÊNUS */}

            <Animated.View
              style={[
                styles.orbita2,
                {
                  transform: [
                    { rotate: rotacao(venus) }
                  ]
                }
              ]}
            >
              <Image
                source={require('../../assets/images/venus.png')}
                style={styles.planeta2}
              />
            </Animated.View>

            {/* TERRA */}

            <Animated.View
              style={[
                styles.orbita3,
                {
                  transform: [
                    { rotate: rotacao(earth) }
                  ]
                }
              ]}
            >
              <Image
                source={require('../../assets/images/terra.png')}
                style={styles.planeta3}
              />
            </Animated.View>

            {/* MARTE */}

            <Animated.View
              style={[
                styles.orbita4,
                {
                  transform: [
                    { rotate: rotacao(mars) }
                  ]
                }
              ]}
            >
              <Image
                source={require('../../assets/images/marte.png')}
                style={styles.planeta4}
              />
            </Animated.View>

            {/* JÚPITER */}

            <Animated.View
              style={[
                styles.orbita5,
                {
                  transform: [
                    { rotate: rotacao(jupiter) }
                  ]
                }
              ]}
            >
              <Image
                source={require('../../assets/images/jupiter.png')}
                style={styles.planeta5}
              />
            </Animated.View>

            {/* SATURNO */}

            <Animated.View
              style={[
                styles.orbita6,
                {
                  transform: [
                    { rotate: rotacao(saturn) }
                  ]
                }
              ]}
            >
              <Image
                source={require('../../assets/images/saturno.png')}
                style={styles.planeta6}
              />
            </Animated.View>

            {/* URANO */}

            <Animated.View
              style={[
                styles.orbita7,
                {
                  transform: [
                    { rotate: rotacao(uranus) }
                  ]
                }
              ]}
            >
              <Image
                source={require('../../assets/images/urano.png')}
                style={styles.planeta7}
              />
            </Animated.View>

            {/* NETUNO */}

            <Animated.View
              style={[
                styles.orbita8,
                {
                  transform: [
                    { rotate: rotacao(neptune) }
                  ]
                }
              ]}
            >
              <Image
                source={require('../../assets/images/netuno.png')}
                style={styles.planeta8}
              />
            </Animated.View>

            {/* PLUTÃO */}

            <Animated.View
              style={[
                styles.orbita9,
                {
                  transform: [
                    { rotate: rotacao(pluto) }
                  ]
                }
              ]}
            >
              <Image
                source={require('../../assets/images/plutao.png')}
                style={styles.planeta9}
              />
            </Animated.View>

          </View>

        )

      }

      <View style={styles.botoes}>

        <Button
          title="Reiniciar Sistema Solar"
          onPress={iniciarAnimacao}
          color="#00C2FF"
        />

        <Button
          title="Próximo"
          onPress={proximaTela}
          color="#6C63FF"
        />

        <Button
          title="Voltar"
          onPress={voltarTela}
          color="#FF5757"
        />

      </View>

    </ScrollView>

  );
}

const styles = StyleSheet.create({

  container: {
    flexGrow: 1,
    backgroundColor: '#020617',
    alignItems: 'center',
    padding: 20
  },

  titulo: {
    fontSize: 32,
    color: '#FFFFFF',
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop: 20
  },

  texto: {
    color: '#FFFFFF',
    fontSize: 18,
    marginTop: 20
  },

  imagemPrincipal: {
    width: 180,
    height: 180
  },

  sistemaSolar: {
    width: 320,
    height: 320,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30
  },

  sol: {
    width: 50,
    height: 50,
    borderRadius: 50,
    backgroundColor: '#FDB813',
    position: 'absolute'
  },

  orbita1: {
    width: 60,
    height: 60,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: '#333',
    position: 'absolute',
    alignItems: 'center'
  },

  orbita2: {
    width: 90,
    height: 90,
    borderRadius: 120,
    borderWidth: 1,
    borderColor: '#333',
    position: 'absolute',
    alignItems: 'center'
  },

  orbita3: {
    width: 120,
    height: 120,
    borderRadius: 150,
    borderWidth: 1,
    borderColor: '#333',
    position: 'absolute',
    alignItems: 'center'
  },

  orbita4: {
    width: 150,
    height: 150,
    borderRadius: 200,
    borderWidth: 1,
    borderColor: '#333',
    position: 'absolute',
    alignItems: 'center'
  },

  orbita5: {
    width: 190,
    height: 190,
    borderRadius: 250,
    borderWidth: 1,
    borderColor: '#333',
    position: 'absolute',
    alignItems: 'center'
  },

  orbita6: {
    width: 230,
    height: 230,
    borderRadius: 300,
    borderWidth: 1,
    borderColor: '#333',
    position: 'absolute',
    alignItems: 'center'
  },

  orbita7: {
    width: 260,
    height: 260,
    borderRadius: 350,
    borderWidth: 1,
    borderColor: '#333',
    position: 'absolute',
    alignItems: 'center'
  },

  orbita8: {
    width: 290,
    height: 290,
    borderRadius: 400,
    borderWidth: 1,
    borderColor: '#333',
    position: 'absolute',
    alignItems: 'center'
  },

  orbita9: {
    width: 315,
    height: 315,
    borderRadius: 450,
    borderWidth: 1,
    borderColor: '#333',
    position: 'absolute',
    alignItems: 'center'
  },

  planeta1: {
    width: 14,
    height: 14,
    position: 'absolute',
    top: -7
  },

  planeta2: {
    width: 26,
    height: 26,
    position: 'absolute',
    top: -13
  },

  planeta3: {
    width: 30,
    height: 30,
    position: 'absolute',
    top: -15
  },

  planeta4: {
    width: 20,
    height: 20,
    position: 'absolute',
    top: -10
  },

  planeta5: {
    width: 45,
    height: 45,
    position: 'absolute',
    top: -22
  },

  planeta6: {
    width: 60,
    height: 40,
    resizeMode: 'contain',
    position: 'absolute',
    top: -20
  },

  planeta7: {
    width: 28,
    height: 28,
    position: 'absolute',
    top: -14
  },

  planeta8: {
    width: 26,
    height: 26,
    position: 'absolute',
    top: -13
  },

  planeta9: {
    width: 10,
    height: 10,
    position: 'absolute',
    top: -5
  },

  botoes: {
    width: 250,
    gap: 15,
    marginTop: 30,
    marginBottom: 40
  }

});