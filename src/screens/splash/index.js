import React, {Component} from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';
import Logo from '../../assets/img/mosque.svg';

export class Splash extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // isLogin: false,
    };

    setTimeout(() => {
      // this.setState({isLogin: true});
      this.props.navigation.navigate('Test');
    }, 2500);
  }

  render() {
    return (
      <View style={styles.container}>
        <Image source={Logo} style={styles.logo} />
        <Text style={{fontSize: 18}}> MuslimAPP</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    backgroundColor: 'white',
  },
  logo: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
});

export default Splash;
