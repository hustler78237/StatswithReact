

function Front() {
    return (
        <div className="flex flex-col">
            {/* this is search players */}
            <div className="flex flex-row justify-around items-center bg-lime-900 opacity-75 rounded-full shadow-md w-[1366] mr-6 ml-6 h-20 p-2 mt-6">
                <input type="search" className="my-3 rounded-full text-center h-10 opacity-100" placeholder="Search Player 1" />
                <input type="search" className="my-3 rounded-full text-center h-10 opacity-100" placeholder="Search Player 2" />
            </div>
            {/* this is player images and stats */}
            <div className="flex flex-row justify-around items-center bg-lime-900 opacity-75 rounded-lg shadow-md w-[1366] mr-6 ml-6 h-[700px] p-2 mt-6">
                <div className="max-w-xs bg-white rounded-lg shadow-lg overflow-hidden">
                    <img className="w-full h-48 object-cover" src="https://via.placeholder.com/300x200" alt="Card Image" />
                    <div className="p-4">
                        <h2 className="text-xl font-semibold mb-2">Card Title</h2>
                        <p className="text-gray-700">This is some description text inside the card. You can put anything here.</p>
                    </div>
                </div>
                <div className="max-w-xs bg-white rounded-lg shadow-lg overflow-hidden">
                    <img className="w-full h-48 object-cover" src="https://via.placeholder.com/300x200" alt="Card Image" />
                    <div className="p-4">
                        <h2 className="text-xl font-semibold mb-2">Card Title</h2>
                        <p className="text-gray-700">This is some description text inside the card. You can put anything here.</p>
                    </div>
                </div>
            </div>
            {/* this is conclusion of the whole stats */}
            <div className="flex flex-row justify-around items-center bg-lime-900 opacity-75 rounded-full shadow-md w-[1366] mr-6 ml-6 h-20 p-2 mt-6">
                <input type="search" className="my-3 rounded-full text-center h-10 opacity-100" placeholder="Search Player 1" />
                <input type="search" className="my-3 rounded-full text-center h-10 opacity-100" placeholder="Search Player 2" />
            </div>
        </div>
    )
}

export default Front;