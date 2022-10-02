import { Activity } from "./activities.types"

export const getFavoriteActivitiesObject = (): Record<string, Activity> | undefined => {
    // Get json of favorite activities "{key:{...info}, key2:{...info2}}"
    const favoritesObjectString: string | undefined = localStorage?.activities_favorites

    if (!favoritesObjectString) return undefined

    const favoritesObject: Record<string, Activity> = JSON.parse(favoritesObjectString)

    return favoritesObject

}

export const getFavoriteActivities = (): Activity[] => {
    // Validate client side
    if (typeof window === 'undefined') {
        throw new Error('Not able to get localStorage')
    }
    // Get object of favorite activities "{key:{...info}, key2:{...info2}}"
    const favoritesObject: Record<string, Activity> | undefined = getFavoriteActivitiesObject()

    if (!favoritesObject) return []
    // Transform into an array of activities
    const favorites: Activity[] = Object.values(favoritesObject)

    return favorites
}

export const getFavoriteByKey = (key: string | number): Activity | undefined => {
    // Validate client side
    if (typeof window === 'undefined') throw new Error('Not able to get localStorage')

    // Get object of favorite activities "{key:{...info}, key2:{...info2}}"
    const allFavoritesObject: Record<string, Activity> | undefined = getFavoriteActivitiesObject()

    if (!allFavoritesObject) return undefined

    // Get activity by key
    const favorite: Activity | undefined = allFavoritesObject[key] ?? undefined

    if (!favorite) return undefined

    return favorite
}

export const saveFavorite = (activity: Activity): Activity | undefined => {
    // Validate client side
    if (typeof window === 'undefined') throw new Error('Not able to get localStorage')

    try {
        // Get object of favorite activities "{key:{...info}, key2:{...info2}}"
        const allFavoritesObject: Record<string, Activity> = getFavoriteActivitiesObject() || {}

        const newAllFavorites = {
            ...allFavoritesObject,
            [activity.key]: activity // Add the new one
        }
        // Store new values
        localStorage.setItem('activities_favorites', JSON.stringify(newAllFavorites))

        return activity

    } catch (error) {
        console.log(error);
        return undefined
    }
}

export const clearFavorites = () => {
    // Validate client side
    if (typeof window === 'undefined') throw new Error('Not able to get localStorage')

    localStorage.removeItem('activities_favorites')
}