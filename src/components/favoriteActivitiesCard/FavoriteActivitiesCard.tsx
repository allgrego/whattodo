import { FC } from "react";
import { clearFavorites, getFavoriteActivities } from "../../utils/activities";
import Button from "../button/Button";
import Card from "../card/Card";
import { FavoriteActivitiesCardProps } from "./favoriteActivitiesCard.types";

const FavoriteActivitiesCard: FC<FavoriteActivitiesCardProps> = ({ allFavorites = [] }) => {
    const firstThree = allFavorites.slice(0, 3)
    const rest: number = allFavorites.length > 3 ? allFavorites.length - 3 : 0

    const clearAllFavorites = () => {
        if (!confirm('Are you sure? this cannot be undone')) return
        clearFavorites()
    }

    return (
        <Card>
            <div className="px-4 py-5 sm:px-6">
                <h3 className="text-xl font-medium leading-6 text-gray-900 dark:text-white mb-2">Favorites 💜</h3>
                <p className="mt-1 max-w-2xl text-sm text-gray-500">You like these ones, don&apos;t you?</p>
            </div>
            <div className="border-t border-gray-200 dark:border-slate-700 bg-neutral-100 dark:bg-slate-700 h-full">
                {
                    firstThree.map((activity, index) => (
                        <div className={`bg-slate-200 dark:bg-slate-${(index + 1) % 2 === 0 ? '500' : '600'} px-4 py-5 sm:px-6 grid grid-cols-5 gap-4`} key={activity.key}>
                            <div className="text-sm">💜</div>
                            <div className="mt-1 text-md font-normal text-gray-700 dark:text-white sm:col-span-3 sm:mt-0">{activity?.activity}</div>
                            <div></div>
                        </div>
                    ))
                }

                {/* Empty favorites */}
                {
                    !allFavorites.length ? (
                        <div className={`bg-slate-200 dark:bg-slate-600 px-4 py-5 sm:px-6 grid grid-cols-5 gap-4`}>
                            <div className="text-2xl">🤔</div>
                            <div className="mt-1 text-md font-semibold text-gray-700 dark:text-white col-span-3 sm:mt-0 text-center"> Ups! Nothing here</div>
                            <div className="mt-1 text-xs font-normal text-gray-700 dark:text-white col-span-5 text-center"> Any activity from `&quot;Get a Random Activity`&quot; will be added here</div>
                            <div></div>
                        </div>
                    ) :
                        (
                            <>
                                {/* Buttons */}
                                < div className="px-10 pt-5 h-full">
                                    <div className='text-sm text-gray-900 text-center grid grid-cols-1 md:grid-cols-2 gap-4'>
                                        <Button
                                            type='outline'
                                            className='w-full'
                                            onClick={clearAllFavorites}
                                        >
                                            <>
                                                Remove All
                                            </>
                                        </Button>
                                        {
                                            rest > 0 && (
                                                <Button
                                                    className='w-full'
                                                    onClick={() => { alert('Ups! not yet... under construction') }}
                                                >
                                                    <>
                                                        View All {`(${allFavorites.length})`}
                                                    </>
                                                </Button>

                                            )
                                        }

                                    </div>
                                </div>
                            </>
                        )
                }
            </div>
        </Card >
    );
}

export default FavoriteActivitiesCard;