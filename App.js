import React, { useCallback, useEffect, useState } from 'react';
import {SafeAreaView, StatusBar, View } from 'react-native';
import { Montserrat_400Regular, Montserrat_700Bold } from '@expo-google-fonts/montserrat';
import * as SplashScreen from 'expo-splash-screen'
import * as Font from 'expo-font';

import Cesta from './src/telas/Cesta';
import mock from './src/mocks/cestaMock';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        await Font.loadAsync({
          "MontserratRegular": Montserrat_400Regular,
          "MontserratBold": Montserrat_700Bold,
        });
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }
    prepare();
  }, []);

  const onLayout = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

 return (
    <SafeAreaView>
      <View  onLayout={onLayout}>
        <StatusBar />
        <Cesta {...mock}  />
      </View>
    </SafeAreaView>
  );
}