import React from 'react';
import type {PropsWithChildren} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import type {RootState} from '../../app/store';
import {useSelector, useDispatch} from 'react-redux';
import {increment} from '../../features/counter/counterSlice';
import artworkData from '../../artworkData';
import ArtworkItem from '../commons/ArtworkItem';

const HomeScreenComponent: React.FC<PropsWithChildren> = () => {
  const {
    counter: {value: count},
  } = useSelector((state: RootState) => state);

  const dispatch = useDispatch();

  const {data} = artworkData;

  return (
    <View style={styles.screen}>
      <ScrollView style={styles.scrollView}>
        {data.map(artwork => (
          <ArtworkItem key={artwork.id} data={artwork} />
        ))}
      </ScrollView>
      {/* <Button
        title={count.toString()}
        onPress={() => {
          dispatch(increment());
        }}
      /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: 'white',
  },
  scrollView: {
    marginHorizontal: 5,
  },
});

export default HomeScreenComponent;
