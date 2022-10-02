
export const getRandomActivity = async () => {
    const url = 'http://localhost:3000/api/activities/random'
    const response = await fetch(url)
    return await response.json()
}