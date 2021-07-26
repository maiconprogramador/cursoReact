
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import C1 from './componentes/comp1';

export default function cursoReact () {
  return (
    <View style={estilos.container}>
      <C1/>
      <C1/>
      <C1/>
      <Text style={estilos.txt0}>O melhor Curso do Youtube</Text>
    </View>
  );
};

const estilos = StyleSheet.create({
  txt0: {
    color:'blue',
    fontSize: 15
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems:'center',
    backgroundColor: '#ccc'
  }
});

// export default class cursoReact extends Component {
//   render(){
//       return (
//         <View>
//           <Text>CFB Cursos</Text>
//         </View>
//     );
//   }
// }


