import React from 'react'

const RadioButton = () => {
    return (
        <>

            <div className="flex">
                <div className="flex items-center mr-4">
                    <input id="inline-radio" type="radio" value="" name="inline-radio-group" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                        <label htmlFor="inline-radio" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Inline 1</label>
                </div>
                <div className="flex items-center mr-4">
                    <input id="inline-2-radio" type="radio" value="" name="inline-radio-group" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                    <label htmlFor="inline-2-radio" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Inline 2</label>
                </div>
                <div className="flex items-center mr-4">
                    <input checked id="inline-checked-radio" type="radio" value="" name="inline-radio-group" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500  focus:border-input-blue focus:border-2 "/>
                    <label htmlFor="inline-checked-radio" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Inline checked</label>
                </div>
                
            </div>

        </>
    )
}

export default RadioButton