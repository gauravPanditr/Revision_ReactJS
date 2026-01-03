import React from 'react'

const Loading = () => {
  return (
   <div className="flex items-center justify-center min-h-screen bg-gray-950">
      <div className="w-16 h-16 border-4 border-t-orange-500 border-b-orange-500 border-gray-300 rounded-full animate-spin"></div>
    </div>
  )
}

export default Loading;
