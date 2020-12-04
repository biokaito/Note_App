import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,TextInput,TouchableOpacity,Image } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet'
import { Feather, AntDesign } from '@expo/vector-icons';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import Modal from 'react-native-modal';

export default function AccountScreen(props) {
  const listNote = [
    { title: 'Do homework', description: 'có làm thì mới có ăn cái loại không làn mà đòi có ăn thì chỉ có ăn cức ăn đầu buổi, NHÁ', category: 'work', priority: 'Fast', status: 'done', date: '20/10/2020' },
    { title: 'Do housework', description: 'cái loại không làn mà đòi có ăn thì chỉ có ăn cức ăn đầu buổi, NHÁ', category: 'work', priority: 'Fast', status: 'pending', date: '20/10/2020' },
    { title: 'Do love you', description: 'thì chỉ có ăn cức ăn đầu buổi, NHÁ', category: 'work', priority: 'Fast', status: 'Processing', date: '20/10/2020' },
    { title: 'Do love you', description: 'thì chỉ có ăn cức ăn đầu buổi, NHÁ', category: 'work', priority: 'Fast', status: 'Processing', date: '20/10/2020' },
    { title: 'Do love you', description: 'thì chỉ có ăn cức ăn đầu buổi, NHÁ', category: 'work', priority: 'Fast', status: 'Processing', date: '20/10/2020' },
  ]
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.wrapper1}>
        <View style={styles.header}>
          <Text style={styles.headerText}>NOTE LIST</Text>
        </View>
      </View>
      <View style={styles.wrapper2}>
        <View>
          <TextInput
            placeholder="Search.."
            style={styles.searchBar}
            //value={this.state.search}
            //onChangeText={(text)=>this._search(text)}
          />
        </View>
        <ScrollView>
          <FlatList 
            data={listNote}
            renderItem={({item})=>{
              return(
                <View style={styles.wrapper}>
                  <View style={styles.headerComponent}>
                    <View style={styles.titleStyle}>
                      <Text style={styles.titleText}>{item.title}</Text>
                    </View>
                    <View style={styles.categoryStyle}>
                      <Text style={styles.categoryText}>{item.category}</Text>
                    </View>
                  </View>
                  <View style={styles.middleComponent}>
                    <View style={styles.desStyle}>
                      <ScrollView
                        style={styles.desScrollView}
                      >
                        <Text style={styles.desText}>{item.description}</Text>
                      </ScrollView>
                    </View>
                    <View style={styles.dateStyle}>
                      <Text style={styles.dateText}>{item.date}</Text>
                    </View>
                  </View>
                  <View style={styles.crossbar}>

                  </View>
                  <View style={styles.bottomComponent}>
                    <View  style={styles.priStyle}>
                      <Text style={styles.categoryText}>{item.priority}</Text>
                    </View>
                    <View  style={styles.sttStyle}>
                      <Text style={styles.categoryText}>{item.status}</Text>
                    </View>
                  </View>
                </View>
              )
            }}
          />
        </ScrollView>
      </View>
      <View style={styles.addButton}>
        <TouchableOpacity
          onPress={()=>props.navigation.navigate('Note')}
        >
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
    backgroundColor: '#EEEEEE',
    alignItems: 'center',
    justifyContent: 'center',
  },
  addButton:{
    position: 'absolute',
    bottom : '2rem',
    right: '2rem'
  },
  header:{
    marginTop: '5rem'
  },
  headerText:{
    fontSize: '2.5rem',
    fontWeight: 'bold',
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowOffset: {
      width: 0, 
      height: 4
    },
    textShadowRadius: '1rem'
  },
  categoryText:{
    fontSize: '1rem',
    fontFamily: 'Futura',
    fontStyle: 'italic'
  },
  addButtonImage:{
    width: '5rem',
    height: '5rem',
  },
  dateText:{
    fontSize: '1.4rem',
    fontWeight: 'bold'
  },
  headerComponent:{
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  desScrollView:{
    width: '12rem',
    height: '4rem',
    borderLeftWidth: '0.1rem',
    borderLeftColor: 'gray',
  },
  bottomComponent:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: '0.3rem'
  },
  desText:{
    marginLeft: '0.3rem'
  },
  middleComponent:{
    flexDirection: 'row',
    justifyContent: 'space-between',    
    paddingTop: '0.5rem',
    paddingBottom: '0.5rem',
    alignItems: 'center',
    marginBottom: '0.7rem'
  },
  crossbar:{
    borderBottomWidth: '0.1rem',
    borderBottomColor: 'gray',
    width: '12rem',
    marginLeft: '17%'
  },
  titleText:{
    fontSize: '1.2rem',
    fontFamily: 'Arial'
  },
  wrapper:{
    width: '100%',
    backgroundColor: 'white',
    borderRadius: '2rem',
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowRadius: '0.384rem',
    shadowOffset: {
      width: 0,
      height: 2
    },
    padding: '1rem',
    marginBottom: '1rem',
    borderLeftWidth: '0.5rem',
    borderLeftColor: '#03506f'
  },
  wrapper1:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#03506f',
    borderBottomLeftRadius: '5rem',
    borderBottomRightRadius: '5rem',
    width: '100%',
    padding: '0.5rem',
    shadowColor: 'black',
    shadowOpacity: 1,
    shadowRadius: 12,
    shadowOffset: {
      width: 4,
      height: -4
    },
  },
  wrapper2:{
    flex: 4,
    width: '100%',
    padding: '0.5rem',
  },
  searchBar:{
    marginLeft: '0.5rem',
    backgroundColor: '#bbbbbb',
    padding: '1rem',
    borderRadius: '5rem',
    marginTop: '0.5rem',
    marginBottom: '1rem'
  },
});
EStyleSheet.build();