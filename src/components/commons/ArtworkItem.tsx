import {ParamListBase, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React from 'react';
import {Image, Pressable, StyleSheet, Text} from 'react-native';

type ArtworkProps = {
  data: {
    id: number;
    title: string;
    image_id: string;
    artist_display: string;
    thumbnail: {
      lqip: string;
      width: number;
      height: number;
    };
  };
};

const ArtworkItem: React.FC<ArtworkProps> = data => {
  const {
    data: {
      title,
      image_id,
      artist_display,
      thumbnail: {width, height},
      id,
    },
  } = data;
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  return (
    <Pressable
      onPress={() => navigation.navigate('Detail', {artworkId: id})}
      style={styles.artworkItem}>
      <Text style={styles.itemText}>{title}</Text>
      <Image
        style={{...styles.image, width, height}}
        source={{
          uri: `https://www.artic.edu/iiif/2/${image_id}/full/200,/0/default.jpg`,
        }}
      />
      <Text style={styles.itemText}>{artist_display}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  artworkItem: {
    flex: 1,
    width: 300,
    height: 350,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderColor: 'black',
    borderWidth: 1,
    marginBottom: 10,
  },
  itemText: {
    fontSize: 15,
  },
  image: {
    flex: 1,
    resizeMode: 'contain',
    marginHorizontal: 5,
  },
});

export default ArtworkItem;
