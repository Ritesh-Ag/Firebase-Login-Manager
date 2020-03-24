import React from 'react';
import { View, Text } from 'react-native';

const CardSection = (props) => {

    return (
        <View style={[styles.containerStyle, props.style]}>
            {props.children}
        </View>
    );
};

const styles = {
    containerStyle: {
        borderBottomWidth: 1,
        padding: 5,
        backgroundColor: '#fff',
        // height: 50,
        // flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        borderColor: '#ddd',
        position: 'relative'
    }
};


export { CardSection };
