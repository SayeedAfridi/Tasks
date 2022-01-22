import { Button, Spacer, Text, ThemeToggler } from '@src/components';
import { AppNavigationProps } from '@src/navigator/navigator.types';
import { selectUser } from '@src/redux/auth/auth.selectors';
import { logout } from '@src/redux/auth/auth.slice';
import { makeStyles } from '@src/theme/theme.utils';
import { fp, hp } from '@src/utils';
import React from 'react';
import { View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import UserHeader from './components/UserHeader';

export interface HomeFeaturesProps extends AppNavigationProps<'Home'> {}

const useStyles = makeStyles((theme) => ({
  container: {
    flex: 1,
  },
}));

const HomeFeatures: React.FC<HomeFeaturesProps> = ({}) => {
  const styles = useStyles();
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <View style={styles.container}>
      <UserHeader />
    </View>
  );
};

export default HomeFeatures;
