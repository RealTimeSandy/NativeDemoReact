import React, { useState, useEffect } from 'react';
import { 
  View, 
  Text, 
  TouchableOpacity, 
  Alert, 
  ActivityIndicator, 
  NativeEventEmitter, 
  NativeModules, 
  Image, 
  StyleSheet, 
  SafeAreaView, 
  Platform,
  PermissionsAndroid
} from 'react-native';
import DeviceInfo from 'react-native-device-info';
import Geolocation from 'react-native-geolocation-service';
import axios from 'axios';
import Icon from 'react-native-vector-icons/FontAwesome';

const { ScreenshotModule } = NativeModules;

if (!ScreenshotModule) {
  console.error('❌ ScreenshotModule is undefined! Make sure the native module is linked properly.');
} else {
  console.warn('✅ ScreenshotModule loaded successfully');
}

const screenshotEmitter = ScreenshotModule && typeof ScreenshotModule.addListener === 'function' 
  ? new NativeEventEmitter(ScreenshotModule) 
  : null;

const App = () => {
  const [isActivated, setIsActivated] = useState(false);
  const [loading, setLoading] = useState(false);
  
  useEffect(() => {
    if (!screenshotEmitter) return;

    const subscription = screenshotEmitter.addListener('onScreenshotTaken', () => {
      Alert.alert('Screenshot Detected', 'You took a screenshot.');
    });

    return () => subscription.remove();
  }, []);

  useEffect(() => {
    requestLocationPermission();
  }, []);
const requestLocationPermission = async () => {
  if (Platform.OS === 'android') {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: "Location Permission",
          message: "This app requires access to your location.",
          buttonNeutral: "Ask Me Later",
          buttonNegative: "Cancel",
          buttonPositive: "OK"
        }
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log("✅ Location permission granted");
      } else {
        console.log("❌ Location permission denied");
      }
    } catch (err) {
      console.warn(err);
    }
  }
};

  const toggleScreenshotProtection = async () => {
    if (!ScreenshotModule) {
      Alert.alert("Error", "Screenshot prevention module is not available.");
      return;
    }

    setLoading(true);

    try {
      if (isActivated) {
        await ScreenshotModule.enableScreenshot();
      } else {
        if (Platform.OS === 'ios') {
          Alert.alert("Info", "Screenshot prevention is limited on iOS.");
        }
        await ScreenshotModule.disableScreenshot();
      }

      const deviceDetails = {
        os: DeviceInfo.getSystemName(),
        deviceName: await DeviceInfo.getDeviceName(),
        macAddress: await DeviceInfo.getMacAddress(),
        imei: await DeviceInfo.getUniqueId(),
        location: await getLocation(),
        publicIP: await getPublicIP(),
        screenshotEnabled: !isActivated,
      };
      console.error("API deviceDetails:", deviceDetails);

      const response = await axios.post('https://mockapi.io/endpoint', deviceDetails);
      console.log("API Response:", response.data);

      setIsActivated(!isActivated);
    } catch (error) {
      console.error("API Error:", error);
      Alert.alert('Error', 'Something went wrong!');
    }
    
    setLoading(false);
  };

  const getLocation = async () => {
    return new Promise((resolve) => {
      Geolocation.getCurrentPosition(
        (position) => {
          resolve({ latitude: position.coords.latitude, longitude: position.coords.longitude });
        },
        (error) => resolve({ error: error.message }),
        { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
      );
    });
  };

  const getPublicIP = async () => {
    try {
      const response = await axios.get('https://api64.ipify.org?format=json');
      return response.data.ip;
    } catch (error) {
      console.error('Error fetching IP:', error);
      return 'N/A';
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.aligncenter}>
        <Image source={require('./src/assets/logo.png')} style={styles.logo} />  
        <View style={[styles.toggleContainer, { backgroundColor: isActivated ? '#4a21ed' : '#808080', width: isActivated ? 100 : 80 }]}>
          <TouchableOpacity style={styles.toggleButton} onPress={toggleScreenshotProtection}>
            <Icon name={isActivated ? 'arrow-circle-up' : 'arrow-circle-down'} size={20} color={'#ffffff'} />
            <Text style={styles.toggleText}>{isActivated ? 'Deactivate' : 'Activate'}</Text>
          </TouchableOpacity>
        </View>
        {loading && <ActivityIndicator size="large" color="blue" />}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
  },
  aligncenter: {
    justifyContent: 'center', 
    alignItems: 'center', 
    flex: 1
  },
  logo: {
    marginBottom: 60,
    width: 100, 
    height: 100, 
    resizeMode: 'contain'
  },
  toggleContainer: {
    flexDirection: 'row',
    borderRadius: 100,
    paddingVertical: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20
  },
  toggleButton: {
    flexDirection: 'row', 
    alignItems: 'center',
  },
  toggleText: {
    fontSize: 12, 
    marginLeft: 6, 
    color: 'white'
  }
});

export default App;