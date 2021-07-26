import React from 'react';
import {StyleSheet, Text } from 'react-native';

export default function() {
    return (
        <Text style={estilos.txt1}>CFB 223 Cursos- Curso React-Native</Text>
    );
}

const estilos = StyleSheet.create({
    txt1 : {
        color: '#f00',
        fontSize: 20

    }
}
);