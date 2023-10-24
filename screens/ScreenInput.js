import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Appbar, Button, TextInput } from "react-native-paper";

export default function ScreenInput({navigation}) {
  const [hp, setHp] = useState('');

  const toScreenHasil = () => {
    
  }
  
  return (
    <>
      <Appbar.Header>
        <Appbar.Content title="Cek Laptop/Computer" />
      </Appbar.Header>
      <View style={styles.container}>
        <Text>Nomor HP</Text>
        <TextInput
          placeholder="Masukkan nomor hp"
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
});
