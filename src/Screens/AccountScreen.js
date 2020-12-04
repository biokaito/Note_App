import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,Image, Button } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';

export default function AccountScreen() {
  return (
    <View style={styles.container}>      
      <StatusBar style="auto" />
      <View style={styles.wrapper1}>
        <Image 
          source={require('../images/avt.jpg')}
          style={styles.avt}
        />
        <Text style={styles.userName}>YUNO BIG C</Text>
        <Text style={styles.userName1}>__________</Text>
      </View>
      <View style={styles.wrapper2}>
        <View style={styles.header}>
          <Text style={styles.headerText}>EDIT PROFILE</Text>
        </View>
        <View>
          <View style={styles.textInputWrapper}>
            <Text style={styles.idTag}>ID</Text>
            <TextInput
              editable={false}
              placeholder="yunobigc"
              style={styles.textInput}
            />
          </View>
        </View>
        <View>
          <View style={styles.textInputWrapper}>
            <Text style={styles.nameTag}>Name</Text>
            <TextInput
              placeholder="Chau Vu"
              style={styles.textInput}
            />
          </View>
        </View>
        <View>
          <View style={styles.textInputWrapper}>
            <Text style={styles.passwordTag}>Password</Text>
            <TextInput
              placeholder="1234567"
              style={styles.textInput}
            />
          </View>
        </View>
        <View>
          <View style={styles.textInputWrapper}>
            <Text style={styles.emailTag}>Email</Text>
            <TextInput
              placeholder="baymax255@gmail.com"
              style={styles.textInput}
            />
          </View>
        </View>
        <View >
          <TouchableOpacity>
            <View style={styles.saveButton}>
              <Text style={styles.saveText}>Save</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEEEEE',
    alignItems: 'center',
  },
  saveText:{
    fontSize: '2rem',
    color: 'white'
  },
  saveButton:{
    backgroundColor: '#007AFF', //Android sẽ là #2196F3
    borderRadius: '5rem',
    position: 'absolute',
    bottom: '-10rem',
    width: '100%',
    padding: '0.4rem',
    alignItems: 'center'
  },
  header:{
    padding: '1.5rem'
  },
  textInput:{
    fontSize: '1.5rem',
    borderBottomWidth: '0.1rem',
    borderBottomColor: 'gray',
    width: '16rem'
  },
  textInputWrapper:{
    flexDirection: 'row',
    padding: '0.5rem',
    alignItems: 'center'
    //borderBottomWidth: '0.1rem',
    //borderBottomColor: 'gray',
    //width: '89%'    
  },
  nameTag:{
    fontSize: '1rem',
    fontFamily: 'Courier-Bold',
    marginRight: '3.5rem'
  },
  idTag:{
    fontSize: '1rem',
    fontFamily: 'Courier-Bold',
    marginRight: '4.8rem'
  },
  passwordTag:{
    fontSize: '1rem',
    fontFamily: 'Courier-Bold',
    marginRight: '1.2rem'
  },
  emailTag:{
    fontSize: '1rem',
    fontFamily: 'Courier-Bold',
    marginRight: '3rem'
  },
  headerText:{
    fontSize: '2rem',
    fontWeight: 'bold'
  },
  userName:{
    fontSize: '2rem',
    fontWeight: 'bold',
    fontFamily: 'Courier-Bold'
  },
  avt:{
    width: '10rem',
    height: '10rem',
    borderRadius: '5rem',
    marginBottom: '1rem'
  },
  wrapper1:{
    flex: 1.5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#03506f',
    borderBottomLeftRadius: '5rem',
    borderBottomRightRadius: '5rem',
    width: '100%',
    shadowColor: 'black',
    shadowOpacity: 1,
    shadowRadius: 12,
    shadowOffset: {
      width: 4,
      height: -4
    },
  },
  wrapper2:{
    flex: 2,
    width: '100%'
  }
});
EStyleSheet.build();
