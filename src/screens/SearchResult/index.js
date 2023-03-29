import { api } from "@services";
import styles from "./styles";
import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import { View, Text, FlatList, SafeAreaView } from "react-native";

const SearchResult = ({ route, navigation }) => {
  const { search } = route.params;
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await api.get(`/adjective/${search}`);

        if (result.data.status === "success") {
          setData(result.data.data);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{item.name}</Text>
      <Text style={styles.description}>{item.description}</Text>
    </View>
  );

  return (
    <SafeAreaView>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};

SearchResult.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default SearchResult;

// Path: src\screens\SearchResult\index.js
