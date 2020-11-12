
import React, { Component } from "react";
import {
    View,
    StyleSheet,
} from "react-native";
import FlatListComponent from "./FlatListComponent";
import Header from './Header';

class FeedPage extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Header data={this.props.data} />
                <FlatListComponent data={this.props.data}/>
            </View>
        );
    }
}
export default FeedPage;

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