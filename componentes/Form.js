import React, {Component} from 'react';
import {StyleSheet, Text, View,TextInput,Button,Alert} from 'react-native';

import Field from './Field'

export default class Form extends Component {

 constructor(props){
   super(props);
   this.state = {nombre: '', correo: '',cod: ''};
 }

  _onPress = () => {
    this.props._onPressSend(this.state.nombre,this.state.correo);
  }

  _onPressClear = () => {
    this.setState({nombre: '', correo: ''})
    this.props._onPressClear();
  }

  _onChangeNombre = (value) => {
    this.setState({nombre: value})
  }

  _onChangeCorreo = (value) => {
    this.setState({correo: value})
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.titulo}>Formulario</Text>

        <Field texto='Nombre' value={this.state.nombre} onChangeText={this._onChangeNombre} >
        </Field>

        <Field texto='Correo' value={this.state.correo} onChangeText={this._onChangeCorreo} >
        </Field>

        <View style={styles.cajaBoton}>
            <Button
              title="Send"
              onPress={this._onPress}
            />
            <Button
              title="Clear"
              onPress={this._onPressClear}
            />
      </View>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop:25,
  },
  caja:{
    flexDirection:'row'
  },
  cajaBoton:{
    flexDirection:'row',
    justifyContent:'space-around'
  },
  titulo: {
    fontSize: 16,
    fontWeight:'bold',
    textAlign:'center',
    marginBottom:10,
  },
  subtitulo: {
    flex:1,
    fontSize: 14,
    marginLeft:10,
    marginBottom:10,
  },
  entradaTexto: {
    flex:3,
    marginLeft:10,
    marginRight:10,
    marginBottom:10,
    borderWidth:0.5,
    borderRadius:5,
    padding:4
  },
  entradaTextoCorreo: {
    flex:3,
    marginLeft:10,
    marginRight:10,
    marginBottom:10,
    borderWidth:0.5,
    borderRadius:5,
    padding:4,
  },
});
