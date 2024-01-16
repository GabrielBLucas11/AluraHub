export const ajustaData = (data) => {
    if (data) {
        data = String(data).split('T')[0].split('-')
        return `${data[2]}-${data[1]}-${data[0]}`
    }
    return null
}