import {NavigationProp, NavigationState} from '@react-navigation/native';
import {PropsWithChildren} from 'react';

export interface ReactProps {
  children: PropsWithChildren;
  navigation: NavigationProp<NavigationState, any>;
}
