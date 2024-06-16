import { Bottons } from "../interfaces/interfaces"

export const Botton = ({text}: Bottons) => {
    return(
        <button type="button" className="text-black hover:text-purple-500 border border-gray-200 hover:bg-purple-200 focus:outline-none focus:ring-purple-300 focus:bg-purple-200 focus:text-purple-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-purple-400 dark:text-purple-400 dark:hover:text-white dark:hover:bg-purple-500 w-[100px] h-[40px]">{text}</button>
    )
}