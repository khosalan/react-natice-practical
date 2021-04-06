import React, { useState } from "react";
import { View, StyleSheet, Text, Alert } from "react-native";
import { TextInput, Button, Checkbox } from "react-native-paper";
import { useDispatch } from "react-redux";
import { signIn } from "../actions/authActions";

const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const LoginScreen = () => {
  const [checked, setChecked] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isEmailValid, setEmailValid] = useState(false);
  const [isPasswordValid, setPasswordValid] = useState(false);

  const dispatch = useDispatch();

  const changeEmailHandler = (email) => {
    if (!reg.test(email)) {
      setEmailValid(false);
    } else {
      setEmailValid(true);
    }
    setEmail(email);
  };

  const changePasswordHandler = (password) => {
    if (password.trim().length > 0) {
      setPasswordValid(true);
    } else {
      setPasswordValid(false);
    }
    setPassword(password);
  };

  const submitFormHandler = () => {
    if (!isEmailValid || !isPasswordValid) {
      Alert.alert("Invalid", "Please enter valid email and passsord", [
        { text: "Ok" },
      ]);
    }

    try {
      dispatch(signIn(email, password));
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <View style={styles.screen}>
      <View>
        <TextInput
          style={styles.textInput}
          label='Email Address'
          onChangeText={changeEmailHandler}
          keyboardType='email-address'
          autoCapitalize='none'
          autoCorrect={false}
          value={email}
        />
        {!isEmailValid && <Text>Error</Text>}
        <TextInput
          style={styles.textInput}
          label='Password'
          secureTextEntry
          onChangeText={changePasswordHandler}
          value={password}
        />
        <View style={styles.terms}>
          <Checkbox
            status={checked ? "checked" : "unchecked"}
            onPress={() => {
              setChecked(!checked);
            }}
          />
          <Text>Terms and conditions aggree</Text>
        </View>
        <Button
          mode='outlined'
          style={styles.button}
          disabled={!checked}
          onPress={submitFormHandler}
        >
          Login
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    marginBottom: 50,
    marginHorizontal: 20,
  },

  textInput: {
    marginTop: 15,
  },

  button: {
    borderWidth: 1,
    marginTop: 20,
  },

  terms: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 5,
  },
});

export default LoginScreen;
