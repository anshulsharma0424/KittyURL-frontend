import React from 'react'
import { MutatingDots } from 'react-loader-spinner'

function Loader() {
  return (
    <div className="flex justify-center items-center w-full h-[450px]">
        <div className="flex flex-col items-center gap-1">
        <MutatingDots
            visible={true}
            height="100"
            width="100"
            color="#f36a3e"
            secondaryColor="#f36a3e"
            radius="12.5"
            animationDuration="0.75"
            ariaLabel="mutating-dots-loading"
            wrapperStyle={{}}
            wrapperClass=""
            />
        </div>
    </div>
  )
}

export default Loader