import { Button, Spacer, Text, ThemeToggler } from '@src/components';
import { makeStyles } from '@src/theme/theme.utils';
import { fp, hp } from '@src/utils';
import React from 'react';
import { View } from 'react-native';

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
        Welcome! Guest
      </Text>
      <Spacer space='large' />
      <Button onPress={() => {}} variant='secondary' title='Logout' />
    </View>
  );
};

export default HomeFeatures;
