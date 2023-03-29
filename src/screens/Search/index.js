import styles from "./styles";
import { useState } from "react";
import PropTypes from "prop-types";
import { notification } from "@helpers";
import {
  View,
  Text,
  Image,
  TextInput,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";

const Search = ({ navigation }) => {
  const [search, setSearch] = useState("");

  const validate = async () => {
    if (search === "") {
      notification("Please enter a search term", "Search");
      return;
    }

    navigation.navigate("Stack", {
      screen: "SearchResult",
      params: { search: search },
    });
  };

  return (
    <SafeAreaView>
      <ScrollView showsVerticalScrollIndicator={true}>
        <View style={styles.searchScreen}>
          <View style={[styles.adjective, styles.searchPosition]}>
            <View style={[styles.background, styles.searchPosition]} />
            <Text style={[styles.searchHistory, styles.searchFlexBox]}>
              Search History
            </Text>
          </View>
          <View style={[styles.search, styles.searchPosition]}>
            <View style={[styles.searchChild, styles.searchLayout]} />
            <TouchableOpacity onPress={validate}>
              <Text style={[styles.searchText, styles.searchFlexBox]}>
                Search
              </Text>
            </TouchableOpacity>
            <TextInput
              autoCorrect={false}
              style={[styles.searchBar, styles.searchLayout]}
              placeholder="Search"
              onChangeText={(text) => setSearch(text)}
              value={search}
              maxLength={100}
            />
          </View>
          <View style={[styles.banner, styles.bannerLayout]}>
            <Image
              style={[styles.adjexBanner1, styles.bannerLayout]}
              resizeMode="cover"
              source={require("@images/banner.png")}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

Search.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default Search;

// Path: src\screens\Search\index.js
