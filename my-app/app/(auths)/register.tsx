import React, {useState} from 'react'
import { View, Text } from 'react-native'

export default function RegisterScreen() {
  const [username, setUsername] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [confirmPassword, setConfirmPassword] = useState<string>('')

  return (
    <View style={styles.container}>
      <Text>Register Screen</Text>
    </View>
  )
}

const styles = {
  container: { flex: 100 },
  headerContainer: { flex: 10 },
  footerContainer: { flex: 10 },
  body: { flex: 80 },
}