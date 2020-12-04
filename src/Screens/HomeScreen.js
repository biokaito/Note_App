import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, Dimensions,Image } from 'react-native';
import {PieChart} from 'react-native-chart-kit';
import EStyleSheet from 'react-native-extended-stylesheet';

export default function HomeScreen() {
  const data = [
    { name: 'Processing', Total: 5, color: '#0f4c75', legendFontColor: '#FFF', legendFontSize: 15 },
    { name: 'Pending', Total: 10, color: '#3282b8', legendFontColor: '#FFF', legendFontSize: 15 },
    { name: 'Done', Total: 34, color: '#bbe1fa', legendFontColor: '#FFF', legendFontSize: 15 },
  ]
  const screenWidth = Dimensions.get('window').width - 5
  const screenHeight = Dimensions.get('window').height - 5
  const chartConfig = {
      backgroundGradientFrom: '#1E2923',
      backgroundGradientTo: '#08130D',
      color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`
    }
    const [currentDate, setCurrentDate] = useState('');
    useEffect(() => {
      var date = new Date().getDate(); 
      var month = new Date().getMonth() + 1; 
      var year = new Date().getFullYear(); 
      setCurrentDate(
        date + '/' + month + '/' + year 
      );
    }, []);
  return (
    <View style={styles.container}>
      <StatusBar
          style="auto"
          hidden={true}
        />
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
        <View style={styles.dateWrapper}>   
          <Image
            source={require('../images/calendar.png')}
            style={styles.calenderIcon}
          />
          <Text style={styles.dateText}>{currentDate}</Text>
        </View>
        <View style={styles.currentDay}>

        </View>
      </View>
      <View style={styles.wrapper2}>
        <View style={styles.box}>        
          <View style={styles.titleWrapper}>
            <Text style={styles.title}>Overall </Text>
          </View>
          <View style={styles.crossbar}/>
          <View style={styles.pieChartWrapper}>
            <PieChart
              data={data}
              width={screenWidth-15}
              height={220}
              chartConfig={chartConfig}
              accessor="Total"
              backgroundColor="transparent"
              paddingLeft="15"
            />
          </View>
        </View>
      </View>
  </View>
  );
}

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eeeeee',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dateWrapper:{
    flexDirection: 'row-reverse',
    alignItems: 'center',
    marginLeft: '1rem'
  },
  dateText:{
    fontSize: '1.2rem',
    fontFamily: 'Courier-Bold',
    fontStyle: 'italic'
  },
  calenderIcon:{
    width: '2rem',
    height: '2rem',
    marginLeft: '0.2rem'
  },
  crossbar:{    
    borderBottomWidth: '0.1rem',
    borderBottomColor: 'grey',
    width: '8rem',
    marginBottom: '1.5rem'
  },
  nameWrapper:{
    padding: '0.5rem'
  },
  textID:{
    fontSize: '2.2rem',
    fontWeight: 'bold',
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowOffset: {
      width: 0, 
      height: 4
    },
    textShadowRadius: '1rem'
  },
  textName:{
    fontSize: '1.5rem',
    color : 'gray',
    fontStyle: 'italic'
  },
  avt:{
    width: '8rem',
    height: '8rem',
    borderRadius: '5rem'
  },
  infoWrapper:{
    marginTop: '3rem',
    width: '100%',
    padding: '0.5rem',
    flexDirection : 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  pieChartWrapper:{
    backgroundColor: '#070d59',
    borderRadius: '2rem',
  },
  titleWrapper:{
    marginTop: '0.5rem',
    marginLeft: '0.5rem'
  },
  title:{
    marginBottom : '1rem',
    fontWeight: 'bold',
    fontSize: '2rem'
  },
  box:{
    justifyContent: 'center'
  },
  wrapper1:{
    flex: 2.3,
    justifyContent: 'center',
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
    flex: 4,
    width: '100%',
    padding: '0.5rem',
  }
});
EStyleSheet.build()