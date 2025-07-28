import { useEffect, useState } from "react";

function Front() {
    // this section is for hooks
    
    const [format, setFormat] = useState('Select Format');
    const [imageurl , setImageurl] = useState("");

// this function is for select format
    function handleFormat(value) {
        setFormat(value);
    }


    // GET Data
    // fetch('https://api.cricapi.com/v1/players_info?apikey=74d96dad-e1ba-4a9b-9617-65c93e5b4651&id=b160a781-ee69-42df-9814-a72af153be5b')
    // .then(response => response.json())
    // .then(data => console.log(data))
    // .catch(error => console.error('Error:',error));

    // for player serach api
    const url1 = 'https://cricbuzz-cricket.p.rapidapi.com/stats/v1/player/search?plrN=Tucker';
    const options1 = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': 'c5bc475584msh67dfed05e113164p1ff89bjsn09c5c4d106e3',
            'x-rapidapi-host': 'cricbuzz-cricket.p.rapidapi.com'
        }
    };

    async function Player() {

        try {
            const response = await fetch(url1, options1);
            const result = await response.json();
            console.log(result);
        } catch (error) {
            console.error(error);
        }
    }

    // this is for bowling stats

    const url = 'https://cricbuzz-cricket.p.rapidapi.com/stats/v1/player/8733/bowling';
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': 'c5bc475584msh67dfed05e113164p1ff89bjsn09c5c4d106e3',
            'x-rapidapi-host': 'cricbuzz-cricket.p.rapidapi.com'
        }
    };
    async function bowling() {
        try {
            const response = await fetch(url, options);
            const result = await response.json();
            console.log(result);
        } catch (error) {
            console.error(error);
        }
    }
    // bowling

    // this is for batting stats
    const url2 = 'https://cricbuzz-cricket.p.rapidapi.com/stats/v1/player/8733/batting';
    const options2 = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': 'c5bc475584msh67dfed05e113164p1ff89bjsn09c5c4d106e3',
            'x-rapidapi-host': 'cricbuzz-cricket.p.rapidapi.com'
        }
    };

    async function batting() {

        try {
            const response = await fetch(url2, options2);
            const result = await response.json();
            console.log(result);
        } catch (error) {
            console.error(error);
        }
    }
    // batting();

    // this api endpoint for image of player 
   useEffect(()=>{
    const fetchimage = async() =>{
    const url3 = 'https://cricbuzz-cricket.p.rapidapi.com/stats/v1/player/6635';
    const options3 = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': 'c5bc475584msh67dfed05e113164p1ff89bjsn09c5c4d106e3',
            'x-rapidapi-host': 'cricbuzz-cricket.p.rapidapi.com'
        }
    };
   
        try {
            const response = await fetch(url3, options3);
            const result = await response.json();
            console.log(result.image);
            setImageurl(result.image);

        } catch (error) {
            console.error(error);
        }
    }
    // IMG();
    // fetchimage();
   },[])

    // IMG();

    return (
        <div className="flex flex-col px-4">
            {/* Search Players */}
            <div className="flex flex-col md:flex-row justify-around items-center bg-lime-900 opacity-75 rounded-lg shadow-md w-full max-w-[1366px] mx-auto h-auto md:h-20 p-4 mt-6 gap-4">
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
                        src={imageurl}
                        alt="player image"
                    />
                    <div className="p-4">
                        <h2 className="text-xl font-semibold mb-2">Player1</h2>
                        {/* Format changer */}
                        <div className="relative group">
                            <button className="bg-green-600 text-white px-6 py-2 rounded-xl cursor-pointer shadow-md" >{format}</button>
                            <div className="absolute hidden group-hover:flex flex-row  bg-white border border-gray-300 rounded-lg shadow-lg w-48 z-20">
                                <button className="px-4 py-2 text-left hover:bg-gray-100" onClick={() => handleFormat('ODI')}>ODI</button>
                                <button className="px-4 py-2 text-left hover:bg-gray-100" onClick={() => handleFormat('T20')}>T20</button>
                                <button className="px-4 py-2 text-left hover:bg-gray-100" onClick={() => handleFormat('TEST')}>TEST</button>
                            </div>
                        </div>
                        <p className="text-gray-700">
                            <h2>Batting</h2>
                            <h2>Bowling</h2>
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
                        {/* Format changer */}
                        <div className="relative group">
                            <button className="bg-green-600 text-white px-6 py-2 rounded-xl cursor-pointer shadow-md" >{format}</button>
                            <div className="absolute hidden group-hover:flex flex-row  bg-white border border-gray-300 rounded-lg shadow-lg w-48 z-20">
                                <button className="px-4 py-2 text-left hover:bg-gray-100" onClick={() => handleFormat('ODI')}>ODI</button>
                                <button className="px-4 py-2 text-left hover:bg-gray-100" onClick={() => handleFormat('T20')}>T20</button>
                                <button className="px-4 py-2 text-left hover:bg-gray-100" onClick={() => handleFormat('TEST')}>TEST</button>
                            </div>
                        </div>
                        <p className="text-gray-700">
                            <h2>Batting</h2>
                            <h2>Bowling</h2>
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