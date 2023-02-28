import React, { useState } from "react";
import { View, StatusBar } from "react-native";

import { FloatingMenu } from "../../components/FloatingMenu";
import { Header } from "../../components/Header";
import { ListPeoples } from "../../components/ListPeoples";

import { ListPeoplesDTO } from "../../dtos/ListPeoplesDTO";

import { DataResult } from "../../mock/dataResult";
import { styles } from "./styles";

export function Home() {
  const [listRender, setListRender] = useState(DataResult);
  const [search, setSearch] = useState("");

  const filteredList =
    search.length > 0
      ? listRender.filter((currentData) =>
          currentData.name.toLowerCase().includes(search)
        )
      : listRender;

  const handleAddList = (chosenToAddInList: ListPeoplesDTO) => {
    setListRender((prev) => [...prev, chosenToAddInList]);
  };

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Header value={search} onChangeText={setSearch} />

      <ListPeoples dataFlatList={filteredList} />

      <FloatingMenu functionAddList={handleAddList} />
    </View>
  );
}
