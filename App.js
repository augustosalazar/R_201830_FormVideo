import React, {Component} from 'react';
import {StyleSheet, Text, View,TextInput,Button,Alert} from 'react-native';

import Form from './componentes/Form'

export default class App extends Component {

 constructor(props){
   super(props);
   this.state = {nombre: '', correo: '',cod: ''};
 }

  _onPressClear = () => {
    this.setState({nombre: '', correo: ''})
  }


  _onPressSend = (elnombre,elcorreo) => {
    this.setState({nombre: elnombre, correo: elcorreo})
    Alert.alert('_onPressSend '+elnombre);
  }

  render() {
    return (
      <View style={styles.container}>
        <Form _onPressSend={this._onPressSend} _onPressClear={this._onPressClear}></Form>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop:25,
  },
});
