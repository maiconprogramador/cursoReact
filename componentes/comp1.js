import React from 'react';
import {StyleSheet, Text } from 'react-native';
import Estilos from '../estilos/estilos';

export default function(props) {
    return (
        <Text style={Estilos.textoCursos}>CFB Cursos- Curso de {props.curso}</Text>
    );
}
