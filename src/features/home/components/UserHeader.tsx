import { Text, ThemeToggler } from '@src/components';
import { useTheme } from '@src/hooks';
import { selectUser } from '@src/redux/auth/auth.selectors';
import React from 'react';
import { Pressable, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Feather } from '@expo/vector-icons';
import { hp } from '@src/utils';
import { logout } from '@src/redux/auth/auth.slice';

const fontSize = hp(2.5);

const UserHeader: React.FC = () => {
  const theme = useTheme();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <View
      style={{
        flexDirection: 'row',
        padding: theme.spacing.m,
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <Text variant='title' style={{ fontSize }}>
        My Tasks
      </Text>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <ThemeToggler size={3} />
        <Pressable
          style={{
            marginLeft: theme.spacing.l,
          }}
          onPress={handleLogout}
        >
          <Feather size={fontSize} name='log-out' color={theme.colors.text} />
        </Pressable>
      </View>
    </View>
  );
};

export default UserHeader;
