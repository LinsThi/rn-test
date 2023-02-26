import React, { useCallback } from "react";
import { FlatList, Image, Text, View } from "react-native";
import { ListPeoplesDTO } from "../../dtos/ListPeoplesDTO";
import { styles } from "./styles";

type Props = {
  dataFlatList: ListPeoplesDTO[];
};

export function ListPeoples({ dataFlatList }: Props) {
  const renderItem = useCallback(({ item }: any) => {
    return (
      <View style={styles.containerItem}>
        <Image
          source={{ uri: item.avatar }}
          style={styles.image}
          resizeMode="cover"
        />

        <View style={styles.containerInfo}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.email}>{item.email}</Text>
        </View>
      </View>
    );
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={dataFlatList}
        extraData={dataFlatList}
        keyExtractor={({ id }) => id.toString()}
        renderItem={renderItem}
        style={{ marginTop: 15 }}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 35 }}
        testID="id-list-peoples"
        ListEmptyComponent={() => (
          <View style={styles.contentEmpty} testID="id-empty-array">
            <Text style={styles.emptyText}>Empty Data</Text>
          </View>
        )}
      />
    </View>
  );
}
