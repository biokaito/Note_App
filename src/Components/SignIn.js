import React from 'react';
import{
    StyleSheet,
    TextInput,
    View,
    Text,
    TouchableHighlight,

} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import EStyleSheet from 'react-native-extended-stylesheet';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class SignIn extends React.Component{
    
    constructor(props){
        super(props);
        this.state={
            data : [],
            userName:"",
            password:"",
            err: ""

        }
    }
    render(){
        return(
            <View style={styles.box}>
                <View style={styles.header}>
                    <Text style={styles.title}>LOGIN</Text>
                </View>
                <View style={styles.action}>
                    <TextInput 
                        placeholder="User Name"
                        style={styles.textInput}
                        onChangeText={(text) => this.setState({
                            userName: text
                            })} value={this.state.userName}
                    />
                </View>
                <View style={styles.action}>
                    <TextInput 
                        secureTextEntry
                        placeholder="Password"
                        style={styles.textInput}
                        value={this.state.password}
                        onChangeText={pass => this.setState({password: pass})}
                        //caretHidden= {true}
                    />
                </View>
                        { this.state.err ? <Text style={styles.errText}>{this.state.err}</Text>  : null}
                <View style={styles.buttonLogin}>
                    <View>
                        <TouchableOpacity
                            onPress={()=>this.props.props.navigation.navigate('Note App')}
                        >
                            <View style={styles.button}>
                                <AntDesign
                                    name="login" 
                                    color="white"
                                    size={25}
                                />                                    
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>   
        );
    }

    }
    
    var styles = EStyleSheet.create({
        textInput:{
            color: 'gray',
            backgroundColor: '#f2f2f2',
            paddingHorizontal: '1rem',
            paddingVertical: '1.5rem',
            borderRadius: '0.5rem',
        },
        header:{
            alignItems: 'center'
        },
        buttonLogin:{
            alignItems:'flex-end'
        },
        errText:{
            fontStyle: 'italic',
            color: 'red'
        },
        title:{
            color: "#929aab",
            fontSize: '3rem',
            fontWeight: 'bold',    
        },
        action:{
            marginTop: '1rem',
        },
        box:{
            flex: 1,
            padding: '1rem',
        },
        button:{
            width: '8rem',
            backgroundColor: "#bbbbbb",
            marginTop: '1rem',
            borderRadius: '5rem',
            justifyContent: 'center',
            alignItems: 'center',
            paddingVertical: '0.7rem'
        },
    })
    EStyleSheet.build()