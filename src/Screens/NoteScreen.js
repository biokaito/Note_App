import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { FlatList, TextInput, TouchableHighlight, TouchableOpacity } from 'react-native-gesture-handler';
import EStyleSheet from 'react-native-extended-stylesheet';
import DatePicker from 'react-native-datepicker';
import Textarea from 'react-native-textarea';



export default function NoteScreen() {
  const [date, setDate] = useState('09-10-2020');
  const [category,setcategory] = useState([
    {
        title : 'WORK',
        id : '1'
    },
    {
        title : 'RELAX',
        id : '2'
    },
    {
        title : 'LOVE',
        id : '3'
    },
    {
        title : 'SKIN CARE',
        id : '4'
    },
    {
        title : 'FAMILY',
        id : '5'
    },

])
  return (
    <View style={styles.container}>      
      <StatusBar style="auto" />
      <View style={styles.wrapper1}>
        <View>
          <Text style={styles.header}>Create new Task</Text>
        </View>
        <View>
          <Text style={styles.titleTag}>
            Title
          </Text>
          <TextInput 
            placeholder="Make task for your life"
            placerholderStyle={{fontFamily: 'Courier-Bold', fontSize: 50}}
            style={styles.textInput}
          />
        </View>
        <View>
          <Text style={styles.titleTag}>
            Date
          </Text>
          <DatePicker
            style={styles.datePickerStyle}
            date={date} // Initial date from state
            mode="date" // The enum of date, datetime and time
            placeholder="select date"
            format="DD-MM-YYYY"
            minDate="01-01-2016"
            maxDate="01-01-2100"
            confirmBtnText="Confirm"
            cancelBtnText="Cancel"
            customStyles={{
              dateIcon: {
                //display: 'none',
                position: 'absolute',
                left: 0,
                top: 4,
                marginLeft: 0,
              },
              dateInput: {
                marginLeft: 36,
              },
            }}
            onDateChange={(date) => {
              setDate(date);
            }}
          />
        </View>
      </View>
      <View style={styles.wrapper2}>
            <View style={styles.desWrapper}>
              <View>
                <Text style={styles.titleTag}>Description</Text>
                <Textarea
                  containerStyle={styles.textareaContainer}
                  style={styles.textarea}
                  maxLength={200}
                  placeholder={'Những cái loại ngủ quá giờ trưa ý, tao đố thằng nào giàu được. Những cái loại óc bã đậu, óc chó, óc lợn ngủ quá giờ trưa, đêm thì thức xong ...'}
                  placeholderTextColor={'#c7c7c7'}
                  underlineColorAndroid={'transparent'}
                />
              </View>
            </View>
            <View style={styles.categoryWrapper}>
              <View>
                <Text style={styles.titleTag}>
                  Category
                </Text>
                <FlatList
                  horizontal={true}
                  data={category}
                  renderItem={({item})=>{
                    return(
                      <View>
                        <TouchableOpacity 
                          style={styles.categoryButton}

                        >
                          <Text>{item.title}</Text>
                        </TouchableOpacity>
                      </View>
                    )
                  }}
                />
              </View>
              <View style={styles.createButtonWrapper}>
                <TouchableOpacity style={styles.buttonCreate}>
                  <Text style={styles.buttonName}>Create Task</Text>
                </TouchableOpacity>
              </View>
            </View>            
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
  createButtonWrapper:{
    position: 'absolute',
    width: '100%',
    bottom: '-10rem'
  },
  categoryButton:{
    backgroundColor:'#EEE',
    padding:'1rem',
    borderRadius: '5rem',
    marginLeft: '0.5rem'
  },
  buttonName:{
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: 'white'
  },
  buttonCreate:{
    backgroundColor: '#28abb9',
    borderRadius: '5rem',
    padding: '1rem',
    alignItems: 'center',
  },
  textareaContainer: {
    height: '10rem',
    width: '22.2rem',
    padding: '0.5rem',
    backgroundColor: '#FFF',
    borderBottomWidth: '0.1rem',
    borderBottomColor: '#EEE',
    marginBottom: '0.5rem'
  },
  textarea: {
    textAlignVertical: 'top',  
    height: '9.5rem',
    width:'20rem',
    fontSize: '1rem',
    color: '#333',
  },
  titleTag:{
    color:'gray',
    fontFamily: 'Courier-Bold',
    marginBottom: '0.2rem',
    fontSize: '1.2rem',
  },
  header:{
    fontSize: '2rem',
    fontWeight: 'bold',
    marginBottom: '1rem',
    marginTop: '3rem'
  },
  datePickerStyle: {
    width: '20rem',
    marginBottom: 0,
  },
  wrapper1:{
    flex: 3,
    justifyContent: 'center',
    backgroundColor: '#ffba93',
    borderBottomLeftRadius: '5rem',
    borderBottomRightRadius: '5rem',
    width: '100%',
    padding: '0.5rem',
    shadowColor: 'black',
    shadowOpacity: 0.5,
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

  textInput:{
    color: 'gray',
    backgroundColor: '#ffba93',
    paddingHorizontal: '1rem',
    paddingVertical: '1.5rem',
    borderRadius: '0.5rem',
    marginBottom: '1rem',
    borderBottomWidth: '0.05rem',
    borderBottomColor: 'gray'
    
},
});
EStyleSheet.build();
