function ModelBox() {
  return (
    <>
      <div className="fixed top-0 left-0 w-full h-full bg-black/50 z-50 flex justify-center items-center">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2>Are You Sure?</h2>
          <div className="flex justify-center space-x-4 mt-4">
            <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded cursor-pointer">NO</button>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer">Yes</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default ModelBox
