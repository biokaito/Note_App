import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import {PieChart} from 'react-native-chart-kit';

export default function HomeScreen() {
  const data = [
    { name: 'Processing', Total: 5, color: '#0f4c75', legendFontColor: '#FFF', legendFontSize: 15 },
    { name: 'Pending', Total: 10, color: '#3282b8', legendFontColor: '#FFF', legendFontSize: 15 },
    { name: 'Done', Total: 34, color: '#bbe1fa', legendFontColor: '#FFF', legendFontSize: 15 },
  ]
  const screenWidth = Dimensions.get('window').width - 5
  const chartConfig = {
      backgroundGradientFrom: '#1E2923',
      backgroundGradientTo: '#08130D',
      color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`
    }
  return (
    <View style={styles.container}>
      <StatusBar
        style="auto"
        hidden={true}
      />
      <Text style={styles.title}>Overall </Text>
      <View style={styles.pieChartWrapper}>
        <PieChart
          data={data}
          width={screenWidth}
          height={220}
          chartConfig={chartConfig}
          accessor="Total"
          backgroundColor="transparent"
          paddingLeft="15"
        />
      </View>
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
  pieChartWrapper:{
    backgroundColor: '#070d59',
    borderRadius: 20,
  }
});
