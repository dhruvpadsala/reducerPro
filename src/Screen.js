import React, {useEffect,useState} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import {stateAction} from './Actions/RegisterActions';
import {API_STATE} from './Service/utils/Consatns/Url';
import {useSelector, useDispatch} from 'react-redux';

const Screen = () => {
  // var stateList = [];
  const [data, setData] = useState([]);
  const dispatch = useDispatch();

  const getData = useSelector(state => state);

  const {stateData} = getData.registerReducer;
    console.log('stateData',stateData);
  useEffect(() => {
    console.log('call');
    return dispatch(stateAction(API_STATE));
  }, []);
  useEffect(() => {
    console.log('enter here', JSON.stringify(stateData));
    if(stateData !=''){
    let a = [];
    stateData.map((item) => a.push({lable: item.name}));
    console.log('a========', a);
    setData(a);
    }
  }, [stateData]);
  return (
    <View style={{backgroundColor: 'red'}}>
      <Text>City List</Text>
      {console.log("setdata================",data )}

      <FlatList
        data={data}
        renderItem={({item}) => {
          return <Text style={styles.city}>{item.lable}</Text>;
        }}
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
export default Screen;
