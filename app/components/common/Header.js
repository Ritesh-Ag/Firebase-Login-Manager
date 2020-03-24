// Import the libs to make the component


import React from 'react';
import { Text, View, } from 'react-native';

// Make the component
const Header = (props) => (
        <View style={Styles.viewStyle}>
            <Text style={Styles.textStyle}>{props.headerText}</Text>
        </View>
);


// Styles
const Styles = {
    viewStyle: {
        backgroundColor: '#f8f8f8',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        paddingTop: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 200 },
        shadowOpacity: 0.0,
        elevation: 4
    },


    textStyle: {
        fontSize: 20
    }
};

// Export the component
export {Header};