import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import {cityAction} from './Actions/RegisterActions';
import {API_CITY} from './Service/utils/Consatns/Url';
import {useSelector, useDispatch} from 'react-redux';

const City = () => {
  // var stateList = [];
  const [data, setData] = useState([]);
  const dispatch = useDispatch();

  const getData = useSelector(state => state);
  const {cityData} = getData.registerReducer;

  console.log('cityData', cityData);
  useEffect(() => {
    console.log('call');
    return dispatch(cityAction(API_CITY));
  }, []);
  
  useEffect(() => {
    console.log('enter here', JSON.stringify(cityData));
    if (cityData != '') {
      let a = [];
      cityData.map(item => a.push({label: item.city_name,id:item.id}));
      console.log('a========', a);

      setData(a);
    }
  }, [cityData]);
  return (
    <View>
      <Text>City List</Text>
      {console.log('setdata================', data)}

      <FlatList
        data={data}
        renderItem={({item}) => {
          return <Text style={styles.city}>{item.label}</Text>;
        }}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  city: {
    borderWidth: 1,
    padding: 15,
    margin: 5,
    borderRadius: 10,
    backgroundColor: 'grey',
  },
});
export default City;
