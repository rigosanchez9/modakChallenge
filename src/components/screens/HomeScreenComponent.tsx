import React, {PropsWithChildren} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
// import type {RootState} from '../../app/store';
// import {useSelector, useDispatch} from 'react-redux';
import ArtworkItem from '../commons/ArtworkItem';
import {useGetArtworksQuery} from '../../api/artworkApi';

const HomeScreenComponent: React.FC<PropsWithChildren> = () => {
  // const {
  //   counter: {value: count},
  // } = useSelector((state: RootState) => state);

  // const dispatch = useDispatch();

  const {data: {data: artworkData} = {}} = useGetArtworksQuery();

  return (
    <View style={styles.screen}>
      <ScrollView style={styles.scrollView}>
        {artworkData &&
          artworkData.map((artwork: any) => (
            <ArtworkItem key={artwork.id} data={artwork} />
          ))}
      </ScrollView>
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
