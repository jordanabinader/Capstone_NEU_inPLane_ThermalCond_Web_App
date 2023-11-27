'use client';
import React from 'react'

const StartTest = () => {
  return (
    <div>
        <button className="rounded-md bg-red-600 px-3.5 py-2.5 text-md font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600" aria-current="page" type="button" onClick={console.log('click')}>Start Test</button>
    </div>
  )
}

export default StartTest
