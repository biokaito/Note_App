import { StackActions } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { Image, StyleSheet, Text, View,TextInput } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { FlatList, ScrollView, TouchableOpacity } from 'react-native-gesture-handler';

export default function StatusScreen() {
  const [status,setstatus] = useState([
    {
        title : 'Không cần vội',
        id : '1',
        amountOfTask : 5,
    },
    {
        title : 'Sương Sương',
        id : '2',
        amountOfTask : 5,
    },
    {
        title : 'Lẹ',
        id : '3',
        amountOfTask : 18,
    },
    {
      title : 'Lẹ cl lên',
      id : '4',
      amountOfTask : 18,
  },

])
  return (
    <View style={styles.container}>
      <View style={styles.wrapper1}>
        <View style={styles.infoWrapper}>
          <Image 
            source={require('../images/avt.jpg')} 
            style={styles.avt}
          />
          <View style={styles.nameWrapper}>
            <Text style={styles.textID}>ID đăng nhập</Text>
            <Text style={styles.textName}>Tên người dùng</Text>
          </View>
        </View>
      </View>
      <View style={styles.wrapper2}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Priority</Text>
        </View>
        <TextInput
          placeholder="Search.."
          style={styles.searchBar}
          //value={this.state.search}
          //onChangeText={(text)=>this._search(text)}
        />
        <ScrollView>
          <FlatList
            data={status}
            renderItem={({item})=>{
              return(
                <View style={styles.listWrapper}>
                  <Image
                    source={require('../images/icon.gif')}
                    style={styles.icon}
                  />
                  <View>
                    <Text style={styles.textTitle}>{item.title}</Text>
                    <Text style={styles.textAmont}>{item.amountOfTask} task now</Text>
                  </View>
                </View>
              )
            }}
          />
        </ScrollView>
      </View>
      <View style={styles.addButton}>
        <TouchableOpacity>
          <Image 
            source={require('../images/Add-icon.png')}
            style={styles.addButtonImage}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  addButtonImage:{
    width: '5rem',
    height: '5rem'
  },
  addButton:{
    position: 'absolute',
    bottom : '2rem',
    right: '2rem'
  },
  searchBar:{
    marginLeft: '0.5rem',
    backgroundColor: '#EEE',
    padding: '1rem',
    borderRadius: '5rem'
  },
  textTitle:{
    fontSize: '1.5rem',
    fontWeight: 'bold'
  },
  textAmont:{
    fontSize: '1rem',
    color: 'gray'
  },
  header:{
    padding: '0.5rem',
  },
  headerText:{
    fontSize: '2.5rem',
    fontWeight: 'bold',
  },
  listWrapper:{
    flexDirection: 'row',
    padding: '0.5rem'
  },
  icon:{
    width: '3rem',
    height: '3rem',
    marginRight: '1rem'
  },
  nameWrapper:{
    padding: '0.5rem'
  },
  textID:{
    fontSize: '2rem',
    fontWeight: 'bold'
  },
  textName:{
    fontSize: '1.5rem',
    color : 'gray'
  },
  infoWrapper:{
    marginTop: '3rem',
    width: '100%',
    padding: '0.5rem',
    flexDirection : 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  avt:{
    width: '8rem',
    height: '8rem',
    borderRadius: '5rem'
  },
  wrapper1:{
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ffba93',
    borderBottomLeftRadius: 60,
    borderBottomRightRadius: 60,
    width: '100%',
    
  },
  wrapper2:{
    flex: 2,
    width: '100%',
    padding: '0.5rem',
  }
});
EStyleSheet.build();