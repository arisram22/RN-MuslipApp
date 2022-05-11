import React, {useState, useEffect} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
  Dimensions,
  ImageBackground,
} from 'react-native';
import CompassHeading from 'react-native-compass-heading';
import Geolocation from '@react-native-community/geolocation';

// import Geolocation from 'react-native-geolocation-service';

const Compass = () => {
  const [compassHeading, setCompassHeading] = useState(0);
  const [qiblaa, setQiblaa] = useState(0);

  calculate = (latitude, longitude) => {
    const PI = Math.PI;
    let latk = (21.4225 * PI) / 180.0;
    let longk = (39.8264 * PI) / 180.0;
    let phi = (latitude * PI) / 180.0;
    let lambda = (longitude * PI) / 180.0;
    let qiblad =
      (180.0 / PI) *
      Math.atan2(
        Math.sin(longk - lambda),
        Math.cos(phi) * Math.tan(latk) -
          Math.sin(phi) * Math.cos(longk - lambda),
      );
    console.log(qiblad);
    setQiblaa(qiblad);
  };

  getLocation = () => {
    Geolocation.getCurrentPosition(
      position => {
        const {latitude, longitude} = position.coords;
        // console.log(latitude, longitude);
        calculate(latitude, longitude);
      },
      error => {
        // See error code charts below.
        console.log(error.code, error.message);
      },
      {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
    );
  };

  useEffect(() => {
    getLocation();
    const degree_update_rate = 3;

    // fungsi mengambil angka arah derajat kita
    CompassHeading.start(degree_update_rate, ({heading, accuracy}) => {
      console.log(accuracy);
      console.log(heading);
      setCompassHeading(heading);
    });

    return () => {
      CompassHeading.stop();
    };
  }, []);

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('./kompas.png')}
        style={[
          styles.image,
          {transform: [{rotate: `${360 - compassHeading}deg`}]},
        ]}>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            transform: [{rotate: `${qiblaa}deg`}],
          }}>
          <Image
            source={require('./kakbah.png')}
            style={{marginBottom: '45%', resizeMode: 'contain', flex: 0.7}}
          />
        </View>
      </ImageBackground>
    </View>
  );
};

export default Compass;

const styles = StyleSheet.create({
  image: {width: '90%', flex: 0.5, resizeMode: 'contain', alignSelf: 'center'},
  container: {backgroundColor: '#fff', flex: 1},
});
