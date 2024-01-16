import api from "../api";

export async function pegarRepositoriosDoUsuario(name) {
    try {
        const resultado = await api.get(`/users/${name}/repos`)
        return resultado.data
    } catch (error) {
        console.error(error)
        return []
    }
}