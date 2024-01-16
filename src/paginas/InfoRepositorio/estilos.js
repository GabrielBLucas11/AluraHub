import { StyleSheet } from 'react-native';


const estilos = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fafafa',
        width: '100%',
    },
    nome: {
        fontSize: 21,
        fontWeight: '600',
        color: '#45565F',
        padding: 15,
        textAlign: 'center',
        marginTop: '10%'
    },
    descricao: {
        fontSize: 17,
        color: '#717E84',
        marginTop: 5,
        textAlign: 'center',
        paddingBottom: 10,
        borderBottomWidth: 0.2,
        borderBottomColor: '#717E84',
    },
    icons: {
        flexDirection: 'row',
        marginTop: 8,
        marginBottom: 5,
        alignItems: 'center',
        marginLeft: '25%',
        width: '50%',
    },
    iconsText: {
        paddingLeft: 5,
        fontSize: 14      
    },
    data: {
        textAlign: 'center',
        fontSize: 14,
        color: '#444',
        marginTop: 20,
        borderRadius: 8,
        height: 44,
    },
});

export default estilos;