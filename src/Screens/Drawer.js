import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, View,Image } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { TouchableHighlight } from 'react-native-gesture-handler';
import { Feather, AntDesign } from '@expo/vector-icons';
import EStyleSheet from 'react-native-extended-stylesheet';

import HomeScreen from './HomeScreen';
import CategoryScreen from './CategoryScreen';
import NoteScreen from './NoteScreen';
import PriorityScreen from './PriorityScreen';
import StatusScreen from './StatusScreen';
import AccountScreen from './AccountScreen';
import ListNoteScreen from './ListNote'

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const Screens = ({navigation}) => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerTransparent: true,
                headerTitle: null,
                headerLeft: ()=>(
                    <TouchableHighlight
                        onPress={()=>{navigation.openDrawer()}}
                        style={styles.headerLeft}
                    >
                        <AntDesign name="bars" size={30} color="black" ></AntDesign>
                    </TouchableHighlight>
                ),
                headerRight: ()=>(
                    <TouchableHighlight
                        onPress={()=>{alert('Chưa nghĩ ra để làm gì')}}
                        style={styles.headerRight}
                    >
                        <AntDesign name="questioncircleo" size={30} color="black" ></AntDesign>
                    </TouchableHighlight>
                ),
                headerStyle: {
                    backgroundColor: '#f4511e',
                },
                headerTintColor: 'black',
                headerTitleStyle: {
                    fontWeight: 'bold',
                },                
            }}
        >
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Category" component={CategoryScreen} />
            <Stack.Screen name="Priority" component={PriorityScreen} />
            <Stack.Screen name="Status" component={StatusScreen} />
            <Stack.Screen name="Note" component={NoteScreen} /> 
            <Stack.Screen name="Account" component={AccountScreen} /> 
            <Stack.Screen name="ListNote" component={ListNoteScreen} />              
        </Stack.Navigator>
    )
};

const DrawerContent = props => {
    return(
        <DrawerContentScrollView {...props} >
            <View style={styles.drawerHeader}>
                <Image style={styles.avtImage} source={require('../images/wear_mask.png')}>

                </Image>
                <Text style={styles.drawerHeaderTitle}>NOTE APP</Text>
            </View>
            <DrawerItem 
                label="Home"
                labelStyle={{fontSize: 20}}
                onPress={()=>{props.navigation.navigate('Home')}}
                icon={()=><AntDesign name="piechart" size={18} color="red" ></AntDesign>}
            />
            <DrawerItem 
                label="Category"
                labelStyle={{fontSize: 20}}
                onPress={()=>{props.navigation.navigate('Category')}}
                icon={()=><AntDesign name="database" size={18} color="red" ></AntDesign>}
            />
            <DrawerItem 
                label="Priority"
                labelStyle={{fontSize: 20}}
                onPress={()=>{props.navigation.navigate('Priority')}}
                icon={()=><AntDesign name="copy1" size={18} color="red" ></AntDesign>}
            />
            <DrawerItem 
                label="Status"
                labelStyle={{fontSize: 20}}
                onPress={()=>{props.navigation.navigate('Status')}}
                icon={()=><AntDesign name="bells" size={18} color="red" ></AntDesign>}
            />
            <DrawerItem 
                label="Add Note"
                labelStyle={{fontSize: 20}}
                onPress={()=>{props.navigation.navigate('Note')}}
                icon={()=><AntDesign name="plussquareo" size={18} color="red" ></AntDesign>}
            />
            <DrawerItem 
                label="List Note"
                labelStyle={{fontSize: 20}}
                onPress={()=>{props.navigation.navigate('ListNote')}}
                icon={()=><AntDesign name="form" size={18} color="red" ></AntDesign>}
            />
            <DrawerItem 
                label="Your Account"
                labelStyle={{fontSize: 20}}
                onPress={()=>{props.navigation.navigate('Account')}}
                icon={()=><AntDesign name="woman" size={18} color="red" ></AntDesign>}
            />
        </DrawerContentScrollView>
    )
}

export default () => {
    return(
        <Drawer.Navigator 
            initialRouteName="Home"
            drawerContent={props => <DrawerContent {...props} />}
        >
            <Drawer.Screen name="Screens" component={Screens} />
        </Drawer.Navigator>
    );
}

const styles = EStyleSheet.create({
    avtImage:{
        height:'10rem', 
        width: '10rem',
        marginBottom: '2rem'
    },
    drawerHeader:{
        alignItems: 'center', 
        padding:'1rem'
    },
    drawerHeaderTitle:{
        fontSize:'3rem',
        fontWeight: 'bold'
    },
    headerLeft:{
        marginLeft: '1rem',
    },
    headerRight:{
        marginRight: '1rem',
    }
})
EStyleSheet.build();