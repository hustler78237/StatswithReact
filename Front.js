

function Front() {
    return(
        <div  className="flex">
            <div className="flex flex-row justify-around items-center bg-lime-900 opacity-75 p-8 rounded-full shadow-md w-full mr-6 ml-6 h-20 p-2 mt-6">
            <input type="search" className="my-3 rounded-md text-center h-10 opacity-100" placeholder="Search Player 1"/>
            <input type="search" className="my-3 rounded-md text-center h-10 opacity-100" placeholder="Search Player 2"/>
            </div>
        </div>
    )
}

export default Front;