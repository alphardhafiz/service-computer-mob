import { useState } from "react";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import { Appbar, Button, TextInput } from "react-native-paper";
import img from "../assets/test.jpg";

export default function ScreenInput({navigation}) {
  const [hp, setHp] = useState('');

  const toScreenHasil = () => {
    
  }
  
  return (
    <>
    <ImageBackground source={img} style={styles.background}>
      <Appbar.Header>
        <Appbar.Content title="Cek Laptop/Computer" />
      </Appbar.Header>
      <View style={styles.container}>
        <Text>Nomor HP</Text>
        <TextInput
          placeholder="Masukkan Nomor Hp Anda"
          value={hp}
          onChangeText={(e) => setHp(e.target.value)}
        />
        {/* <TouchableOpacity style={styles.buttonTouch} onPress={toScreenHasil}>
          <Text>Cek Cucian</Text>
        </TouchableOpacity> */}
        <Button icon="selection-search" mode="contained" onPress={toScreenHasil}>
          Cek Service
        </Button>
      </View>
      </ImageBackground>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    flex: 1,
    marginHorizontal: 40,
    gap: 16,
  },
  buttonTouch: {
    backgroundColor: "#ff1133",
    padding: 8,
    borderRadius: 16,
  },
  background: {
    height: "100%",
  },

});
