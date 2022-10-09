import { UserIcon } from "@heroicons/react/20/solid";
import { FC, useEffect, useState } from "react";
import { getFavoriteByKey, saveFavorite } from "../../utils/activities";
import Button from "../button/Button";
import Card from "../card/Card";
import { RandomActivityCardProps } from "./randomActivityCard.types";

const RandomActivityCard: FC<RandomActivityCardProps> = ({ activity, isLoading, favorites = [], getAnotherRandom }) => {

    const [isInFavorites, setIsInFavorites] = useState(false)

    const participantsNumber = activity?.participants || 1
    let participantsArray = []
    // Add a new number for every participant to the empty array
    for (let i = 0; i < participantsNumber; i++) participantsArray.push(i)

    useEffect(() => {
        const actOnFav = getFavoriteByKey(activity?.key)
        setIsInFavorites(Boolean(activity?.key && actOnFav?.key === activity?.key))
    }, [activity, favorites])

    const saveToFavorite = () => {
        saveFavorite(activity)
        setIsInFavorites(true)
    }

    return (
        <Card>
            <div className=" bg-gray-100 dark:bg-inherit  px-4 py-5 sm:px-6">
                <h3 className="text-xl font-medium leading-6 text-gray-900 dark:text-white mb-2">Get a Random Activity 🔀</h3>
                <p className="mt-1 max-w-2xl text-sm text-gray-500 dark:text-gray-400">Don&apos;t know what to do? What about this?</p>
            </div>
            <div className="border-t border-gray-200 dark:border-slate-600 bg-neutral-100 dark:bg-slate-700 h-full">
                <dl>
                    <div className="bg-slate-200 dark:bg-slate-600 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-md font-semibold text-gray-500 dark:text-gray-50">Activity 📝</dt>
                        <dd className="mt-1 text-md font-medium text-gray-700 dark:text-white sm:col-span-2 sm:mt-0">{activity?.activity}</dd>
                    </div>

                    <div className="bg-white dark:bg-slate-500 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-gray-500 dark:text-gray-50">Type</dt>
                        <dd className="mt-1 text-sm text-gray-900 dark:text-white sm:col-span-2 sm:mt-0 capitalize">{activity?.type}</dd>
                    </div>

                    <div className="bg-white dark:bg-slate-500 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-gray-500 dark:text-gray-50">How many people is needed?</dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                            <div>
                                {
                                    participantsArray.map((i, index) => (
                                        <div key={i}
                                            className={`inline-block mr-1 h-5 w-5 flex-shrink-0 text-${index === 0 ? 'blue-500' : 'indigo-600'} dark:text-${index === 0 ? 'white' : 'indigo-50'}`}

                                        ><UserIcon /></div>
                                    ))
                                }
                            </div>
                            <div className='font-normal text-sm text-gray-700 dark:text-white'>
                                {
                                    participantsNumber > 1 ?
                                        (
                                            <>You need {participantsNumber - 1} more person{participantsNumber - 1 > 1 && 's'}</>
                                        ) :
                                        (
                                            <>You are fine by yourself</>
                                        )
                                }
                            </div>
                        </dd>
                    </div>
                    {
                        activity?.link && (
                            <>
                                <div className={`bg-gray-50 dark:bg-slate-400 px-4 py-5 transition-opacity ease-in-out sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6`}>
                                    <dt className="text-sm font-medium text-gray-500 dark:text-gray-50">Maybe this could be helpful 👀👉</dt>
                                    <dd className="mt-1 text-sm font-semibold text-indigo-500 dark:text-indigo-700 sm:col-span-2 sm:mt-0 overflow-auto">
                                        <a href={activity?.link} target="_blank" rel="noreferrer" className='hover:text-indigo-400 dark:hover:text-indigo-500'>
                                            {activity?.link}
                                        </a>
                                    </dd>
                                </div>
                            </>
                        )
                    }
                    {/* Buttons */}
                    <div className="bg-inherited px-10 pt-5 grid grid-cols-1 md:grid-cols-2 gap-5 pb-8">
                        <div className='mt-1 text-sm text-gray-900 text-center md:text-left'>
                            <Button
                                type={isInFavorites ? 'outline' : 'primary'}
                                className='w-full h-full'
                                onClick={saveToFavorite}
                                disabled={isInFavorites}
                            >
                                {isInFavorites ? <>Saved ✔</> : <span className="">Save 💜</span>}
                            </Button>
                        </div>
                        <div className='mt-1 text-sm text-gray-900 text-center md:text-right '>
                            <Button
                                type={isInFavorites ? 'primary' : 'outline'}
                                className='w-full  h-full'
                                onClick={getAnotherRandom}
                                loading={isLoading}
                            >
                                Get Another ✖
                            </Button>
                        </div>

                    </div>
                </dl>
            </div>
        </Card>
    );
}

export default RandomActivityCard;