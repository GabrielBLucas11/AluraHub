import React, { useState } from 'react';
import { Text, View } from 'react-native';
import estilos from './estilos';

import { ajustaData } from '../../services/funcoes/ajustarData';
import { Feather } from 'react-native-vector-icons'

export default function InfoRepositorio({ route }) {
    const nome = route.params.item.name;
    const data = ajustaData(route.params.item.updated_at);

    return (
        <View style={estilos.container}>
            <Text style={estilos.nome}>
                {nome}
            </Text>
            <Text style={estilos.descricao}>
                {route.params.item.description == null ? 'Sem descrição' : route.params.item.description}
            </Text>
            <View style={{marginTop: 15}}>
                <View style={estilos.icons}>
                    <Feather name="eye" size={15} color="black"/>
                    <Text style={estilos.iconsText}>
                        {route.params.item.watchers} watching
                    </Text>
                </View>
                <View style={estilos.icons}>
                    <Feather name="star" size={15} color="black"/>
                    <Text style={estilos.iconsText}> 
                        {route.params.item.stargazers_count} stars
                    </Text>                   
                </View>
                <View style={estilos.icons}>
                    <Feather name="github" size={15} color="black"/>
                    <Text style={estilos.iconsText}>
                        {route.params.item.forks} forks
                    </Text>                  
                </View>
            </View>
            <Text style={estilos.data}>
                Atualizado em {data}
            </Text>
        </View>
    );
}

