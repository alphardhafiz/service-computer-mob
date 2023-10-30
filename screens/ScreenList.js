// import React from 'react'

import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Appbar, List } from "react-native-paper";

export default function ScreenList({ navigation, route }) {
    const [expanded, setExpanded] = useState(true);

    const handlePress = () => setExpanded(!expanded);
  
    const [daftarTerima, setDaftarTerima] = useState([]);
  
    useEffect(() => {
      if (route.params.hp) {
        fetch(`http://192.168.228.206:4000/barang/customerList/${route.params.hp}`)
          .then((response) => response.json())
          .then((json) => {
            console.log(json[0]);
            setDaftarTerima(json);
          })
          .catch((err) => console.log(err));
      }
    }, []);

    console.log(daftarTerima);


  return (
    <View style={styles.container}>
      <Appbar.Header>
        <Appbar.BackAction
          onPress={() => {
            navigation.navigate("Home");
          }}
        />
        <Appbar.Content title="List" />
      </Appbar.Header>

      <List.Section title={`${daftarTerima.length} barang ...`}>
        {daftarTerima && daftarTerima.map((terima) => (
          
          <List.Accordion
            key={terima._id}
            title={terima.namaBarang}
            expanded={expanded}
            onPress={handlePress}
            left={(props) => <List.Icon {...props} icon="folder" />}
            right={(props) => <Text>{terima.status}</Text>}>

          </List.Accordion>
        ))}
      </List.Section>
    </View>
  );
}



const styles = StyleSheet.create({
  container: {},
});
