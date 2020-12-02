import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, View,Image } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';

import HomeScreen from './HomeScreen';
import CategoryScreen from './CategoryScreen';
import NoteScreen from './NoteScreen';
import PriorityScreen from './PriorityScreen';
import StatusScreen from './StatusScreen';
import { TouchableHighlight } from 'react-native-gesture-handler';
import { Feather, AntDesign } from '@expo/vector-icons';
 
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
                        style={{backgroundColor: 'green',width: 100, height: 30, alignItems: 'center', justifyContent:'center'}}
                    >
                        <Text>
                            MENU
                        </Text>
                    </TouchableHighlight>
                )
            }}
        >
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Category" component={CategoryScreen} />
            <Stack.Screen name="Priority" component={PriorityScreen} />
            <Stack.Screen name="Status" component={StatusScreen} />
            <Stack.Screen name="Note" component={NoteScreen} />        
        </Stack.Navigator>
    )
};

const DrawerContent = props => {
    return(
        <DrawerContentScrollView {...props} >
            <View style={{alignItems: 'center', padding:10}}>
                <Image style={{height:100, width: 100,marginBottom: 20 }} source={require('../images/wear_mask.png')}>

                </Image>
                <Text>ĐÂY LÀ ỨNG DỤNG NOTE CỰC MẠNH</Text>
            </View>
            <DrawerItem 
                label="Home"
                onPress={()=>{props.navigation.navigate('Home')}}
                icon={()=><AntDesign name="piechart" size={18} color="red" ></AntDesign>}
            />
            <DrawerItem 
                label="Category"
                onPress={()=>{props.navigation.navigate('Category')}}
                icon={()=><AntDesign name="database" size={18} color="red" ></AntDesign>}
            />
            <DrawerItem 
                label="Priority"
                onPress={()=>{props.navigation.navigate('Priority')}}
                icon={()=><AntDesign name="copy1" size={18} color="red" ></AntDesign>}
            />
            <DrawerItem 
                label="Status"
                onPress={()=>{props.navigation.navigate('Status')}}
                icon={()=><AntDesign name="bells" size={18} color="red" ></AntDesign>}
            />
            <DrawerItem 
                label="Note"
                onPress={()=>{props.navigation.navigate('Note')}}
                icon={()=><AntDesign name="form" size={18} color="red" ></AntDesign>}
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