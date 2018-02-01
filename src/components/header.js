// Import libraries for making a component
import React from 'react';
import { Text, View } from 'react-native';

// Make a component
const Header = () => {
    const { textStyle, viewStyle } = styles;

    return (
        <View style = { viewStyle }>
            <Text style = { textStyle }>Albums!</Text>
        </View>
    );
};

const styles = {
    viewStyle:{
        backgroundColor: '#ffff00',
        justifyContent: 'center',
        alignItems: 'center',
    },
    textStyle:{
        fontSize:20
    }
};

//  Make the component available to the other part of the app
export default Header;