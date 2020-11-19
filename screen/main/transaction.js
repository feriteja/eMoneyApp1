import React from 'react';
import {StyleSheet, Text, View, Dimensions, FlatList} from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';

export default function transaction() {
  return (
    <View style={{marginHorizontal: 21, marginTop: 18, marginBottom: 30}}>
      <Text style={{fontSize: 24, fontWeight: 'bold', marginBottom: 10}}>
        Transaction History
      </Text>
      <FlatList
        data={[...Array(20)]}
        showsVerticalScrollIndicator={false}
        keyExtractor={(a, i) => i + 'a'}
        renderItem={({item, index}) => (
          <View
            style={{
              height: 72,
              backgroundColor: '#fff',
              elevation: 1,
              marginVertical: 8,
              flexDirection: 'row',
              paddingVertical: 10,
              paddingHorizontal: 10,
            }}>
            <FeatherIcon
              name="activity"
              size={34}
              style={{alignSelf: 'center'}}
            />
            <View style={{flex: 1, paddingHorizontal: 6}}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginBottom: 7,
                }}>
                <Text>{index * 1100 + 2000} </Text>
                <Text>20/08/2020</Text>
              </View>
              <View>
                <Text>Transfer ke 082240206861</Text>
              </View>
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
