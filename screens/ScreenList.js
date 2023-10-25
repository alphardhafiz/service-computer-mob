import React from 'react'

import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Appbar, List } from "react-native-paper";

export default function ScreenList({ navigation, route }) {
    const [expanded, setExpanded] = useState(true);

    const handlePress = () => setExpanded(!expanded);
  
    const [daftarTerima, setDaftarTerima] = useState([]);
  
    useEffect(() => {
      if (route.params.hp) {
        fetch(`http://localhost:19006/api/barang/${route.params.hp}/list`)
          .then((response) => response.json())
          .then((json) => {
            setDaftarTerima(json);
          })
          .catch((err) => console.log(err));
      }
    }, []);


  return (
    <View style={styles.container}>
      <Appbar.Header>
        <Appbar.BackAction
          onPress={() => {
            navigation.navigate("List");
          }}
        />
        <Appbar.Content title="List" />
      </Appbar.Header>

      <List.Section title={`${daftarTerima.length}`}>
        {daftarTerima.map((terima) => (
          <List.Accordion
            key={terima._id}
            title={terima.barang.hp}
            expanded={expanded}
            onPress={handlePress}
            left={(props) => <List.Icon {...props} icon="folder" />}
            right={(props) => <Text>{terima.status}</Text>}>
            {terima.details.map((item, index) => (
              <>
                <List.Item key={index} title={item.hp} />
              </>
            ))}
          </List.Accordion>
        ))}
      </List.Section>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});
