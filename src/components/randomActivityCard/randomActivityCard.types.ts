import { Activity } from "../../utils/activities.types"

export interface RandomActivityCardProps {
    activity: Activity
    isLoading: boolean
    [rest: string]: any
}