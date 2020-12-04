import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, View, Image, Dimensions, Platform, ImageBackground } from 'react-native';
import Carousel, {ParallaxImage} from 'react-native-snap-carousel';
import * as Animatable from 'react-native-animatable';
import EStyleSheet from 'react-native-extended-stylesheet';

import SignIn from '../Components/SignIn'
import SignUp from '../Components/SignUp'


export default class LoginScreen extends React.Component {
  constructor(props){
    super(props);
    this.state={
        entries:[
            {
                thumbnail: ''
            },
            {
                thumbnail: ''
            }
        ],
    }
  }
  _renderItem = ({item, index}, parallaxProps) => {
      return (
          <View style={styles.item}>
              <ParallaxImage
                  source={{uri : item.thumbnail  }}
                  containerStyle={styles.imageContainer}
                  style={styles.image}
                  parallaxFactor={1}
                  {...parallaxProps}
              />
              {index==0 ?
                  <View style={styles.absolute}>             
                      <SignIn props={this.props} />                        
                  </View>
              :
              <View style={styles.absolute}>     
                      <SignUp props={this.props} />
                  </View>
              }
          </View>
      )
  }
  render()  {
    return (
    <View style={styles.container}>
        <ImageBackground
            style={styles.imageBackground}
            source={require('../images/wallpaperr.jpg')}
        >                
            <StatusBar hidden={true} />                    
            <View style={styles.header}>
                <Image 
                    source={require('../images/logoxxx.webp')} 
                    style={styles.image}
                    resizeMode="stretch"
                />
                <Text style={[styles.text,{
                    fontSize: 60,
                    marginTop:5,
                }]}>Note App</Text>
                <Text style={[styles.text,{
                    fontSize: 15,
                    fontStyle: 'italic'
                }]} >The second brain for your life.</Text>
            </View>
            <Animatable.View 
            animation="bounceInUp"
            style={styles.footer}
            >
                <Carousel                        
                    data={this.state.entries}
                    renderItem={this._renderItem}
                    sliderWidth={screenWidth}
                    sliderHeight={screenWidth}
                    itemWidth={screenWidth - 60}
                    hasParallaxImages={true}
                />
            </Animatable.View>
        </ImageBackground>                 
    </View>
  );
}
}
const screenWidth = Dimensions.get("screen").width;
const styles = EStyleSheet.create({
  container:{
      flex: 1,
      //backgroundColor: '#929aab'
  },
  imageBackground:{
      flex: 1,
      resizeMode: 'cover',
  },
  absolute:{
      position: 'absolute',
      width: '100%',
      height: ' 100%'
  },
  text:{
      fontWeight: 'bold',
      color:'white',
  },
  image:{
      width: screenWidth/2,
      height: screenWidth/2,
      borderRadius: '10rem'
  },
  header:{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
  },
  footer:{
      flex: 1.2,
      justifyContent: 'center',
      alignItems: 'center',
  },
  item:{
      width: screenWidth - 60,
      height: screenWidth- 100,
  },
  imageContainer:{
      flex: 1,
      marginBottom: Platform.select({android: '0.1rem'}),
      backgroundColor: 'white',
      borderRadius: '0.8rem',
      borderWidth: '0.1rem',
      borderColor: "#EEEEEE",
  },
});
EStyleSheet.build()