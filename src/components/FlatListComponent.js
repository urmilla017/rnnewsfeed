
import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Linking,
    FlatList
} from "react-native";

Item = ({ item, onPress, style }) => (
    <View style={styles.itemStyle}>
        <Text>{item.title}</Text>
        <Text>{item.date}</Text>
        <Text>{item.time}</Text>
        <Text style={{ color: 'blue', fontSize: 10 }} onPress={() => { this.loadInBrowser(item.link) }}>
            {item.link}
        </Text>
    </View>
);
loadInBrowser = (url) => {
    Linking.openURL(url).catch(err => console.error("Couldn't load page", err));
  };

class FlatListComponent extends Component {
    renderItem = ({ item }) => {
        return (
          <Item
            item={item}
            style={styles.itemStyle}
          />
        );
    };

    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={this.props.data}
                    renderItem={this.renderItem}
                    keyExtractor={(item) => item.title}
                />
            </View>
        );
    }
}
export default FlatListComponent;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    itemStyle: {
        borderColor: 'black',
        padding: 5,
        borderWidth: 1
    }
});