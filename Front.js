

function Front() {
    return (
        <div className="flex flex-col px-4">
            {/* Search Players */}
            <div className="flex flex-col md:flex-row justify-around items-center bg-lime-900 opacity-75 rounded-full shadow-md w-full max-w-[1366px] mx-auto h-auto md:h-20 p-4 mt-6 gap-4">
                <input
                    type="search"
                    className="rounded-full text-center h-10 w-full md:w-1/3"
                    placeholder="Search Player 1"
                />
                <input
                    type="search"
                    className="rounded-full text-center h-10 w-full md:w-1/3"
                    placeholder="Search Player 2"
                />
            </div>

            {/* Player Images and Stats */}
            <div className="flex flex-col md:flex-row justify-around items-center bg-lime-900 opacity-75 rounded-lg shadow-md w-full max-w-[1366px] mx-auto h-auto md:h-[700px] p-4 mt-6 gap-6">
                {/* Player 1 */}
                <div className="max-w-xs w-full bg-white rounded-lg shadow-lg overflow-hidden">
                    <img
                        className="w-full h-48 object-cover"
                        src="https://via.placeholder.com/300x200"
                        alt="Card Image"
                    />
                    <div className="p-4">
                        <h2 className="text-xl font-semibold mb-2">Card Title</h2>
                        <p className="text-gray-700">
                            This is some description text inside the card. You can put anything here.
                        </p>
                    </div>
                </div>

                {/* Player 2 */}
                <div className="max-w-xs w-full bg-white rounded-lg shadow-lg overflow-hidden">
                    <img
                        className="w-full h-48 object-cover"
                        src="https://via.placeholder.com/300x200"
                        alt="Card Image"
                    />
                    <div className="p-4">
                        <h2 className="text-xl font-semibold mb-2">Player2</h2>
                        <p className="text-gray-700">
                            This is some description text inside the card. You can put anything here.
                        </p>
                    </div>
                </div>
            </div>

            {/* Conclusion */}
            <div className="flex flex-col md:flex-row justify-around items-center bg-lime-900 opacity-75 rounded-full shadow-md w-full max-w-[1366px] mx-auto h-auto md:h-20 p-4 mt-6">
                <div className="w-full flex justify-center">
                    <div className="bg-white rounded-full shadow-md h-auto md:h-16 flex items-center justify-center px-8 py-3">
                        <span className="text-lime-900 text-lg font-semibold text-center">
                            This is the conclusion of the whole stats.
                        </span>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Front;