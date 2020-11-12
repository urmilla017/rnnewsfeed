
import React, { Component } from "react";
import {
    View,
    StyleSheet,
    Button,
} from "react-native";
import { Actions } from 'react-native-router-flux';

class Home extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Button title='Google News Feed' onPress={() => Actions.FeedPage(this.props.feedData.Google)}></Button>
                <Button title='Guardian News Feed' onPress={() => Actions.FeedPage(this.props.feedData.Guardian)}></Button>
                <Button title='CNN News Feed' onPress={() => Actions.FeedPage(this.props.feedData.CNN)}></Button>
            </View>
        );
    }
}
export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 40,
        marginTop: 200
    }
});