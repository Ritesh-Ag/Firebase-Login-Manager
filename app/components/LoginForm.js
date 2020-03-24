import { View, Text } from 'react-native';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, loginUser } from '../actions';
import { Card, CardSection, Input, MyButton, Spinner } from './common';

class LoginForm extends Component {
    onEmailChange(sEmail) {
        this.props.emailChanged(sEmail);
    }

    onPasswordChange(sPassword) {
        this.props.passwordChanged(sPassword);
    }

    onPressLogin() {
        const { sEmail, sPassword } = this.props;

        this.props.loginUser({ sEmail, sPassword });
    }

    renderError() {
        if (this.props.sError) {
            return (
                <View style={{ backgroundColor: 'white' }}>
                    <Text style={styles.errorTextStyle}>
                        {this.props.sError}
                    </Text>
                </View>

            );
        }
    }

    renderButton() {
        if (this.props.bLoading) {
            return (
                <Spinner size='large' />
            );
        }

        return (
            <MyButton onPress={this.onPressLogin.bind(this)}>
                Login
            </MyButton>
        );
    }

    render() {
        return (
            <Card>
                <CardSection>
                    <Input
                        label="Email"
                        placeHolder="email@email.com"
                        onChangeText={this.onEmailChange.bind(this)}
                        value={this.props.email}
                    />
                </CardSection>

                <CardSection>
                    <Input
                        secureTextEntry
                        label="Password"
                        placeHolder="password"
                        onChangeText={this.onPasswordChange.bind(this)}
                        value={this.props.password}
                    />
                </CardSection>

                {this.renderError()}

                <CardSection>
                    {this.renderButton()}
                </CardSection>

            </Card>
        );
    }
}

const styles = {
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    }
};

const mapStateToProps = ({ auth }) => {
    const { sEmail, sPassword, sError, bLoading } = auth;

    return {
        sEmail,
        sPassword,
        sError,
        bLoading
    };
};

export default connect(mapStateToProps, { emailChanged, passwordChanged, loginUser })(LoginForm);
