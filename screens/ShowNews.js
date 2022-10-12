import { Button, Image, Linking, StyleSheet, Text, View } from "react-native";

export default function ShowNews({ route, navigation }) {
    const openLink = (url) => {
        Linking.canOpenURL(url).then((supported) => {
            if (supported) {
                Linking.openURL(url);
            } else {
                Alert.alert("Link not supported");
            }
        });
    };

    const item = route.params;

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

                <Button style={styles.articleButton} title="Abrir notícia" onPress={() => openLink(item.url)}/>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    article: {
        flexDirection: "row",
        paddingVertical: 15,
    },
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
        color: "#000",
        marginBottom: 10,
    },
    articleDescription: {
        fontSize: 16,
        color: "#000",
        marginBottom: 10,
    },
    articleAuthor: {
        fontSize: 14,
        color: "#666",
        marginBottom: 10,
    },
    articleSource: {
        fontSize: 14,
        color: "#666",
        marginBottom: 5,
    },
    articleButton: {
        paddingTop: 10,
        fontSize: 14,
        color: "lightblue",
        marginBottom: 10,
    },
});
