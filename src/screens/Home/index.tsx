import React, { useState } from "react";
import { View, StatusBar } from "react-native";

import { DataResult } from "../../mock/dataResult";

import { FloatingMenu } from "../../components/FloatingMenu";
import { Header } from "../../components/Header";
import { ListPeoples } from "../../components/ListPeoples";

import { styles } from "./styles";
import { ListPeoplesDTO } from "../../dtos/ListPeoplesDTO";

export function Home() {
  const [listRender, setListRender] = useState(DataResult);

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
      <Header />

      <ListPeoples dataFlatList={listRender} />

      <FloatingMenu functionAddList={handleAddList} />
    </View>
  );
}
