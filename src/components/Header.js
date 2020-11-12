import React from 'react';
import {
    View,
    Text
} from "react-native";

const Header = (props) => {
    return (
        <View>
            <Text style={{ fontSize: 25 }}>
                {props.data[0].feedName} My Favorite Feed ({props.data.length})
            </Text>
        </View>
    );
};

export default Header;
