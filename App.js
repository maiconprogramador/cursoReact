
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import C1 from './componentes/comp1';
import Estilos from './estilos/estilos'

export default function cursoReact () {
  return (
    <View style={Estilos.container}>
      <C1 curso="C++"/>
      <C1 curso="React-Native"/>
      <C1 curso="C#"/>
      <C1 curso="JavaScript"/>
      <Text style={Estilos.textoTitulo}>O melhor Curso do Youtube</Text>
    </View>
  );
};


// export default class cursoReact extends Component {
//   render(){
//       return (
//         <View>
//           <Text>CFB Cursos</Text>
//         </View>
//     );
//   }
// }


