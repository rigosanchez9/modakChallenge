import React from 'react';
import type {PropsWithChildren} from 'react';
import {StyleSheet, Text, View} from 'react-native';

const DetailScreenComponent: React.FC<PropsWithChildren> = () => {
  return (
    <View style={styles.screen}>
      <Text>Detail Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default DetailScreenComponent;
