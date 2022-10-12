import { Image, StyleSheet, Text, View } from "react-native";

export default function ShowNews({ route, navigation }) {
    const item = route.params;
    console.log(item.urlToImage);
    return (
        <View style={styles.article}>
            <View style={styles.articleView}>
                <Image source={{ uri: item.urlToImage }} style={styles.articleImage} />

                <Text style={styles.articleTitle} numberOfLines={3}>
                    {item.title}
                </Text>

                <Text style={styles.articleSource}>{item.source.name}</Text><Text style={styles.articleAuthor}>{item.author}</Text>

                <Text style={styles.articleDescription}>
                    {item.description}
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    articleView: {
        flex: 1,
        marginLeft: 40,
        marginRight: 40,
    },
    articleImage: {
        width: 300,
        height: 300,
        resizeMode: "contain",
    },
    articleTitle: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 10,
    },
    articleDescription: {
        fontSize: 16,
        marginBottom: 10,
    },
    articleAuthor: {
        fontSize: 14,
        color: "black",
        marginBottom: 10,
    },
    articleSource: {
        fontSize: 14,
        color: "#666",
        marginBottom: 5,
    },
});
