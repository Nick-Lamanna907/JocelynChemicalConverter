import React from "react";
import { useState } from "react";
import { StyleSheet, Text, SafeAreaView, Pressable, TextInput, View } from 'react-native';

export default function App() {
  console.log('App Executed.')

  // Variables to be used in calculations
  // var OGflow, OGconc, NEWflow, NEWconc; 

  // const _register = () => {
  //   const payload = {
  //     ogConc: 100,
  //     ogFlow: 15,
  //     newConc: 200
  //   }
  //   console.log(payload)
  // }

  const handleHeadingPress = () => console.log('Heading Pressed');
  const handleButtonPress = () => setNEWflow(OGconc*OGflow/NEWconc);

  const [OGconc, setOGconc] = useState(150)
  const [OGflow, setOGflow] = useState(20)
  const [NEWconc, setNEWconc] = useState(200)
  const [NEWflow, setNEWflow] = useState(0)

  return (
    <SafeAreaView style={styles.page}>
      <View style={styles.allContent}>
        <Text 
          style={styles.heading} 
          numberOfLines={1} 
          onPress={handleHeadingPress}>Jocelyn's Chemical Converter!
        </Text>

        <TextInput
          style={styles.input}
          placeholder="OGconc (g/L)"
          onChangeText={ (value) => setOGconc(value) }
          value={OGconc}
          keyboardType="numeric"
        />
        <TextInput
          style={styles.input}
          placeholder="OGflow (L/ha)"
          onChangeText={ (value) => setOGflow(value) }
          value={OGflow}
          keyboardType="numeric"
        />
        <TextInput
          style={styles.input}
          placeholder="NEWconc (g/L)"
          onChangeText={ (value) => setNEWconc(value) }
          value={NEWconc}
          keyboardType="numeric"
        />

        <Pressable style={styles.buttonShape} onPress={handleButtonPress}>
          <Text style={styles.buttonText}>Calculate</Text>
        </Pressable>

        <Text style={styles.output}>
          New Flow Rate:
        </Text>
        <Text style={styles.outputNum}>
          {Math.round(NEWflow)} L/ha
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#708647',
  },
  allContent: {
    alignItems: 'center',
  },
  heading: {
    textAlign: 'center',
    fontSize: 24,
    padding: 20,
    color: '#162738',
    fontFamily: 'American Typewriter'
  },
  buttonShape: {
    padding: 10,
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    paddingHorizontal: 28,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: '#162738',
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 24,
    color: '#FFFFFF',
    fontFamily: 'American Typewriter'
  },
  input: {
    height: 60,
    width: 200,
    margin: 12,
    borderWidth: 2,
    padding: 10,
    backgroundColor: '#DDDDDD',
    borderColor: '#204752',
    fontSize: 20,
  },
  output: {
    padding: 10,
    paddingTop: 30,
    textAlign: 'center',
    fontSize: 24,
    color: '#162738',
  },
  outputNum: {
    padding: 10,
    textAlign: 'center',
    fontSize: 24,
    color: '#162738',
  },
});
