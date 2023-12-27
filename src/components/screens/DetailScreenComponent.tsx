import React from 'react';
import type {PropsWithChildren} from 'react';
import {ScrollView, Text, Image, StyleSheet, View, Button} from 'react-native';
// import type {RootState} from '../../app/store';
// import {useSelector, useDispatch} from 'react-redux';
import {useGetArtworksByIdQuery} from '../../api/artworkApi';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

const DetailScreenComponent: React.FC<PropsWithChildren> = ({route}) => {
  const {artworkId} = route.params;
  const {data: {data} = {}, isFetching} = useGetArtworksByIdQuery(artworkId);

  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.mainView}>
      {isFetching ? (
        <Text>Loading Data</Text>
      ) : (
        <>
          <ScrollView style={styles.scrollView}>
            <Text style={styles.titleText}>{data.title}</Text>
            <View style={styles.screen}>
              <Image
                style={{
                  ...styles.image,
                  width: data.thumbnail.width,
                  height: data.thumbnail.height,
                }}
                source={{
                  uri: `https://www.artic.edu/iiif/2/${data.image_id}/full/843,/0/default.jpg`,
                }}
              />
            </View>
            <Text style={styles.itemText}>{data.artist_display}</Text>
            <Text style={styles.itemText}>{data.medium_display}</Text>
            <Text style={styles.descriptionText}>{data.description}</Text>
            <Button onPress={() => navigation.goBack()} title="Go back" />
          </ScrollView>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
  },
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: 370,
    height: 250,
    // backgroundColor: 'white',
  },
  scrollView: {
    marginHorizontal: 5,
  },
  itemText: {
    fontSize: 13,
    color: 'gray',
  },
  titleText: {
    fontSize: 20,
    marginVertical: 15,
  },
  descriptionText: {
    fontSize: 15,
  },
  image: {
    flex: 1,
    resizeMode: 'contain',
  },
});

export default DetailScreenComponent;
