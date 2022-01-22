import { Button, Spacer, Text, ThemeToggler } from '@src/components';
import { selectUser } from '@src/redux/auth/auth.selectors';
import { logout } from '@src/redux/auth/auth.slice';
import { makeStyles } from '@src/theme/theme.utils';
import { fp, hp } from '@src/utils';
import React from 'react';
import { View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

export interface HomeFeaturesProps {
  // user: User;
}

const useStyles = makeStyles((theme) => ({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: theme.spacing.m,
  },
}));

const HomeFeatures: React.FC<HomeFeaturesProps> = ({}) => {
  const styles = useStyles();
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <View style={styles.container}>
      <View
        style={{
          position: 'absolute',
          top: hp(1),
          right: hp(1),
        }}
      >
        <ThemeToggler />
      </View>
      <Text variant='title' style={{ fontSize: fp(3) }}>
        Welcome! {user?.name}
      </Text>
      <Spacer space='large' />
      <Button
        onPress={() => {
          dispatch(logout());
        }}
        variant='secondary'
        title='Logout'
      />
    </View>
  );
};

export default HomeFeatures;
