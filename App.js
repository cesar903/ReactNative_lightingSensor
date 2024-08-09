import React, { useState, useEffect } from "react"
import { ScrollView, StatusBar, View, Text, Image } from "react-native"
import { LightSensor } from "expo-sensors"

export default function App() {

  const [{ illuminance }, definirIluminacao] = useState({ illuminance: 0 })
  useEffect(function () {
    LightSensor.addListener(definirIluminacao)
  }, [])

  function VerificarLuz(escuro, claro) {
    return illuminance > 20 ? escuro : claro
  }

  return <ScrollView style={{ backgroundColor: VerificarLuz("#FFFBEB", "#20262E") }}>
    <StatusBar
      barStyle={VerificarLuz("dark-content", "light-content")}
      backgroundColor={VerificarLuz("#FFFBEB", "#20262E")} />

    <View>
      <Text
        style={{
          color: VerificarLuz("#222", "#fff"),
          fontSize: 32,
          textAlign: "center"
        }}> Sensores do Smartphone! </Text>

      <Text
        style={{
          color: VerificarLuz("#222", "#fff"),
          fontSize: 16,
          textAlign: "center"
        }}>
        {illuminance}
      </Text>

      <Image
        source={{
          uri: VerificarLuz(
            "https://www.portalriomaina.com/wp-content/uploads/2022/05/dia-do-sol.jpg",
            "https://static.vecteezy.com/ti/fotos-gratis/t2/8440112-paisagem-noite-em-fprest-com-lua-cheia-e-nuvens-foto.jpg")
        }}
        style={{ height: 200 }} />

    </View>
  </ScrollView >
}

