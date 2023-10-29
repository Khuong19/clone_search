import React from 'react'

const RadioButton = () => {
    return (
        <>
            <div className="flex flex-wrap gap-10">
                <div className="flex items-center mr-4">
                    <input id="red-radio" type="radio" value="" name="colored-radio" className="w-4 h-4 bg-gray-100 border-gray-300 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                        <label for="red-radio" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Red</label>
                </div>
                <div className="flex items-center mr-4">
                    <input id="green-radio" type="radio" value="" name="colored-radio" className="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 focus:ring-green-500 dark:focus:ring-green-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                        <label for="green-radio" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Green</label>
                </div>
            </div>
        </>
    )
}

export default RadioButton