

function Front() {
    return(
        <div  className="flex">
            <div className="flex flex-row justify-around items-center bg-black p-8 rounded-lg shadow-md w-full h-20 p-2 mt-6">
            <input type="search" className="mt-10 rounded-md text-center h-10" placeholder="serach player1"/>
            <input type="search" className="mt-10 rounded-md text-center h-10"/>
            </div>
        </div>
    )
}

export default Front;