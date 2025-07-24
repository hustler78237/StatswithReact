

function Front() {
    return(
        <div  className="flex flex-col">
            {/* this is search players */}
            <div className="flex flex-row justify-around items-center bg-lime-900 opacity-75 rounded-full shadow-md w-[1366] mr-6 ml-6 h-20 p-2 mt-6">
            <input type="search" className="my-3 rounded-full text-center h-10 opacity-100" placeholder="Search Player 1"/>
            <input type="search" className="my-3 rounded-full text-center h-10 opacity-100" placeholder="Search Player 2"/>
            </div>
            {/* this is player images and stats */}
            <div className="flex flex-row justify-around items-center bg-lime-900 opacity-75 rounded-lg shadow-md w-[1366] mr-6 ml-6 h-[700px] p-2 mt-6">
            <input type="search" className="my-3 rounded-full text-center h-10 opacity-100" placeholder="Search Player 1"/>
            <input type="search" className="my-3 rounded-full text-center h-10 opacity-100" placeholder="Search Player 2"/>
            </div>
            {/* this is conclusion of the whole stats */}
            <div className="flex flex-row justify-around items-center bg-lime-900 opacity-75 rounded-full shadow-md w-[1366] mr-6 ml-6 h-20 p-2 mt-6">
            <input type="search" className="my-3 rounded-full text-center h-10 opacity-100" placeholder="Search Player 1"/>
            <input type="search" className="my-3 rounded-full text-center h-10 opacity-100" placeholder="Search Player 2"/>
            </div>
        </div>
    )
}

export default Front;