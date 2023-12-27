import React from 'react';
import {Image, Pressable, StyleSheet, Text} from 'react-native';

type ArtworkProps = {
  data: {
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
  //   const {
  //     counter: {value: count},
  //   } = useSelector((state: RootState) => state);

  const {
    data: {
      title,
      image_id,
      artist_display,
      thumbnail: {width, height},
    },
  } = data;
  console.log(data);

  //   const dispatch = useDispatch();

  return (
    <Pressable onPress={() => console.log('aaa')} style={styles.artworkItem}>
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
  },
});

export default ArtworkItem;
