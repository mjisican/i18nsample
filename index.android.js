/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';

var I18n = require('react-native-i18n');

class i18nsample extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          {I18n.t('greeting')} Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          This sample react native app has i18n implementation. sample quote will be trasnlated based on the current language settings of the phone
        </Text>
        <Text style={styles.instructions}>
          To change the language in an android device go to App Menu>Settings>Language & input and set your language to francais or chinese
        </Text>
        <Text style={styles.instructions}>
          sample quote:To win without risk is a triumph without glory
        </Text>
        <Text style={styles.instructions}>
          translation:
          {I18n.t('extra')}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

I18n.fallbacks = true;

I18n.translations = {
  en: {
    greeting: 'Hi!',
    extra: 'english: To win without risk is a triumph without glory'
  },
  fr: {
    greeting: 'Bonjour!',
    extra: 'french: A vaincre sans péril, on triomphe sans gloire'
  },
  'zh-CN': {
    greeting: '你好',
    extra: 'chinese: 为了赢得没有风险是不光荣的胜利'
  }
}

AppRegistry.registerComponent('i18nsample', () => i18nsample);
