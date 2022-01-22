import {
  Button,
  KeyboardAvoidingScrollView,
  Spacer,
  Text,
  ThemeToggler,
} from '@src/components';
import { useTheme } from '@src/hooks';
import { fp, hp } from '@src/utils';
import React from 'react';
import { Image, Pressable, View } from 'react-native';
import LottieView from 'lottie-react-native';
import { StatusBar } from 'expo-status-bar';
import { makeStyles } from '@src/theme/theme.utils';
import { Feather } from '@expo/vector-icons';

const Size = hp(5);

const useStyles = makeStyles((theme) => ({
  container: { backgroundColor: theme.colors.primary, flex: 1 },
  topContainer: {
    height: hp(30),
    backgroundColor: theme.colors.primary,
    padding: theme.spacing.m,
    paddingTop: theme.spacing.m + hp(4),
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomContainer: {
    flex: 1,
    backgroundColor: theme.colors.background,
    borderTopLeftRadius: hp(7),
    borderTopRightRadius: hp(7),
    overflow: 'hidden',
  },
  forgetPassContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginHorizontal: theme.spacing.s,
  },
  title: {
    fontSize: fp(3.5),
    textAlign: 'center',
    paddingVertical: theme.spacing.m,
  },
  secondaryContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  lottieView: {
    flex: 1,
    height: hp(10),
    width: hp(10),
  },
  darkToggler: {
    position: 'absolute',
    top: hp(6),
    right: hp(3),
    zIndex: 9999,
  },
  backContainer: {
    position: 'absolute',
    top: hp(6),
    left: hp(3),
    height: Size,
    width: Size,
    zIndex: 9999,
    backgroundColor: theme.colors.background,
    borderRadius: Size / 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
}));

export interface AuthlayoutProps {
  title: string;
  forgetPassPress?: () => void;
  mainButtonTitle: string;
  mainButtonPress: () => void;
  busy?: boolean;
  secondaryButtonTitle?: string;
  secondaryButtonPress?: () => void;
  accountText?: string;
  backPress?: () => void;
  children?: React.ReactNode | React.ReactNode[];
  animation: typeof LottieView.prototype['props']['source'];
}

const Authlayout: React.FC<AuthlayoutProps> = (props) => {
  const styles = useStyles();
  const theme = useTheme();
  return (
    <View style={styles.container}>
      <StatusBar style='dark' />
      <KeyboardAvoidingScrollView bounces={false}>
        <View style={styles.topContainer}>
          <View style={styles.darkToggler}>
            <ThemeToggler />
          </View>
          {props.backPress ? (
            <Pressable style={styles.backContainer} onPress={props.backPress}>
              <Feather
                color={theme.colors.text}
                size={Size * 0.5}
                name='arrow-left'
              />
            </Pressable>
          ) : null}
          <LottieView
            style={styles.lottieView}
            autoPlay={true}
            loop={true}
            source={props.animation}
          />
        </View>
        <View style={styles.bottomContainer}>
          <Text style={styles.title}>{props.title}</Text>
          <View style={{ flex: 1, padding: theme.spacing.m }}>
            {props.children}
            {props.forgetPassPress ? (
              <Pressable
                style={styles.forgetPassContainer}
                onPress={props.forgetPassPress}
              >
                <Text style={{ fontSize: fp(1.7), fontWeight: 'bold' }}>
                  Forgot Password?
                </Text>
              </Pressable>
            ) : null}
            <Spacer space='large' />
            <Button
              onPress={props.mainButtonPress}
              title={props.mainButtonTitle}
              variant='primary'
              loading={props.busy}
            />
            <Spacer space='large' />
            <Pressable
              style={styles.secondaryContainer}
              onPress={props.secondaryButtonPress}
            >
              <Text>{props.accountText}</Text>
              <Text style={{ color: theme.colors.secondary }}>
                {' '}
                {props.secondaryButtonTitle}
              </Text>
            </Pressable>
          </View>
        </View>
      </KeyboardAvoidingScrollView>
    </View>
  );
};

export default Authlayout;
