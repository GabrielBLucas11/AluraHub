import React, { useEffect, useState } from 'react';
import { Text, View, FlatList, TouchableOpacity } from 'react-native';
import estilos from './estilos';
import { useIsFocused } from '@react-navigation/native'

import { pegarRepositoriosDoUsuario } from '../../services/requisicoes/repositorios';
import { ajustaData } from '../../services/funcoes/ajustarData';

export default function Repositorios({ route, navigation }) {
    const [repo, setRepo] = useState([]);
    const estaNaTela = useIsFocused();

    useEffect(() => {
        async function pegaRepo() {
            const resultado = await pegarRepositoriosDoUsuario(route.params.name)
            setRepo(resultado)
        }
        pegaRepo()
    }, [estaNaTela])

    return (
        <View style={estilos.container}>
                <Text style={estilos.repositoriosTexto}>{repo.length} repositórios criados</Text>
                <FlatList 
                    data={repo}
                    style={{ width: '100%' }}
                    keyExtractor={repo => repo.id}
                    renderItem={({ item }) => (
                        <TouchableOpacity
                            style={estilos.repositorio}
                            onPress={() => navigation.navigate('InfoRepositorio', {item})}
                        >
                            <Text style={estilos.repositorioNome}>{item.name}</Text>
                            <Text style={estilos.repositorioData}>Atualizado em {ajustaData(item.updated_at)}</Text>
                        </TouchableOpacity>
                    )}
                />

        </View>
    );
}
