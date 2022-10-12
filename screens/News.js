import Constants from "expo-constants";
import React, { useEffect, useState } from "react";
import {
  ActivityIndicator, FlatList, SafeAreaView, StyleSheet, Text, View
} from "react-native";
import Article from "../components/Article";
import { getNews } from "../helper/api";

const PAGE_SIZE = 20;

export default function News() {
  const [isLoading, setLoading] = useState(true);
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMoreData, setMoreData] = useState(true);

  const fetchData = async () => {
    if (!hasMoreData) return;

    const newArticles = await getNews(page, PAGE_SIZE);

    setArticles((previousNews) => previousNews.concat(newArticles));
    setPage(page + 1);
    setLoading(false);

    if (newArticles.length < PAGE_SIZE) {
      setMoreData(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const renderArticle = ({ item }) => <Article item={item} />;
  const renderDivider = () => <View style={styles.articleSeparator}></View>;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.headlines}>Notícias da Guerra na Ucrânia</Text>

        {isLoading ? (
          <View style={styles.center}>
            <ActivityIndicator size="large" color="#301934" />
          </View>
        ) : (
          <FlatList
            data={articles}
            renderItem={renderArticle}
            keyExtractor={(item) => item.url}
            showsVerticalScrollIndicator={false}
            ItemSeparatorComponent={renderDivider}
            ListFooterComponent={() => (
              <View style={styles.center}>
                {hasMoreData && <ActivityIndicator color="#301934" />}
              </View>
            )}
            initialNumToRender={6}
            onEndReached={fetchData}
            onEndReachedThreshold={1}
          />
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
  },
  content: {
    flex: 1,
    padding: 15,
  },
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  headlines: {
    fontSize: 25,
    fontWeight: "bold",
    lineHeight: 50,
    color: "#e63e2c",
  },
  articleSeparator: {
    borderBottomWidth: 1,
    borderBottomColor: "#fe6959",
  },
});
