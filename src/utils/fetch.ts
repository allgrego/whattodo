export const getRandomActivity = async () => {
    const url = '/api/activities/random'
    const response = await fetch(url)
    return await response.json()
}