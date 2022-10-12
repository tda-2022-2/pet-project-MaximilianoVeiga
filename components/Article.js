import { useNavigation } from '@react-navigation/native';
import moment from "moment";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Article({ item }) {
  const navigation = useNavigation();

  return (
    <View style={styles.article}>
      <Image source={{ uri: item.urlToImage }} style={styles.articleImage} />

      <View style={{ flex: 1 }}>
        <TouchableOpacity onPress={() => navigation.navigate('Notícia', item)}>
          <Text style={styles.articleTitle} numberOfLines={3}>
            {item.title}
          </Text>
          <Text style={styles.articleSource}>{item.source.name}</Text>
        </TouchableOpacity>

        <Text style={styles.articlePublishedAt}>
          {moment(item.publishedAt).fromNow()}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  article: {
    flexDirection: "row",
    paddingVertical: 15,
  },
  articleImage: {
    width: 150,
    height: 85,
    resizeMode: "contain",
    marginRight: 15,
  },
  articleTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  articleSource: {
    fontSize: 14,
    color: "#666",
    marginBottom: 10,
  },
  articleDescription: {
    fontSize: 16,
    marginBottom: 10,
  },
  articlePublishedAt: {
    fontSize: 14,
  },
});
