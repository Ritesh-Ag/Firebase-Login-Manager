import React from 'react';
import { View, TextInput, Text } from 'react-native';

const Input = ({ label, value, onChangeText, placeHolder, secureTextEntry }) => {

    const {containerStyle, labelStyle, inputStyle} = styles

    return(
        <View style={containerStyle}>
            <Text style={labelStyle}>{label}</Text>
            <TextInput
                secureTextEntry={secureTextEntry}
                placeholder={placeHolder}
                autoCorrect={false}
                value={value}
                onChangeText={onChangeText}
                style={inputStyle} />
        </View>
    );
};


const styles = {
    inputStyle: { 
        flex: 2,
        paddingLeft: 5,
        paddingRight: 5,
        color: '#000',
        width: "100%",
        fontSize: 18,
        lineHeight: 23
    },
    labelStyle: {
        fontSize: 18,
        paddingLeft: 20,
        flex: 1,
    },
    containerStyle: {
        height: 40,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    }
}


export { Input };