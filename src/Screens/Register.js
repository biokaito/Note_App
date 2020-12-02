import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function Register({navigation}) {
  return (
    <View style={styles.container}>
      <Text>Đây là màn hình Register</Text>
      <StatusBar style="auto" />
      <Button
        title="Nhảy sang Drawer"
        onPress={()=>{navigation.navigate('Note App')}}
      >
        
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
