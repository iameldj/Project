import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import COLORS from '../../Constants/Colors';

const RegisterScreen = ({navigation}) => {
  return (
    <View>
      <View>
        <View style={styles.container}>
          <Text>Login Page</Text>
          <View style={styles.btn}>
            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
              <Text>Sign up</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.btn}>
            <TouchableOpacity>
              <Text>Sign in</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  btn: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.primary,
    width: 180,
    height: 40,
    borderRadius: 20,
    marginBottom: 20,
  },
});
