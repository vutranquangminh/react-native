import { Link } from 'expo-router'
import React, {useState} from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native'

export default function LoginScreen() {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  return (
    <View style={styles.container}>
        <View>
            <Text>Login Screen</Text>
        </View>

        <View style={styles.body}>
            <View style={styles.inputGroup}>
                <Text>Email</Text>
                <View style={styles.inputContainer}>
                    <TextInput
                    style={styles.input}
                    value={email}
                    onChangeText={setEmail}
                    keyboardType='email-address'
                    autoCapitalize='none'
                    placeholder='Email'
                    />
                </View>
            </View>
            <View style={styles.inputGroup}>
                <Text>Password</Text>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        value={password}
                        onChangeText={setPassword}
                        secureTextEntry
                        placeholder="Password"
                    />
                </View> 
            </View>
        </View>

        <View>
            <Text>Register Screen</Text>
            <Link href="/(tabs)/profile">
                <Text>Create an account</Text>
            </Link>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 100,
    },
    headerContainer: {
        flex: 10,
    },
    footerContainer: {
        flex: 10,
    },
    body: {
        flex: 80,
        backgroundColor: 'yellow',
        width: '100%',
        alignSelf: 'flex-end',
        paddingHorizontal: 30,
        justifyContent: 'center',
        shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 4,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'red',
        borderRadius: 12,
        paddingHorizontal: 12,
    },
    inputGroup: {
        marginTop: 10,
    },
    label: {
        color: 'black',
        fontSize: 14,
        marginBottom: 6,
    },
    input: {
        paddingVertical: 10,
        paddingHorizontal: 15,
        height: 45,
        flex: 1,
    },
})