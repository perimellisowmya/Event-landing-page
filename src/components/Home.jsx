import React,{useState} from 'react';
import image from '../assests/IMG_20240103_124859.jpg';
import YouTubeIcon from '../assests/youtube.svg';
import RegistrationForm from './RegistrationForm';


function Home() {
    const [showDialog, setShowDialog] = useState(false);

  const openDialog = () => {
    setShowDialog(true);
  };

  const closeDialog = () => {
    setShowDialog(false);
  };

    return (
        <div>
        <div className="flex flex-col md:flex-row justify-center md:justify-between items-center gap-2">
            <div className="md:px-4 p-2 max-w-screen-md mx-auto mt-20 lg:ml-14 flex justify-center">
                <div
                    className="rounded-md md:p-6 p-3 h-96"
                    style={{
                        backgroundImage:
                            'linear-gradient(120deg, #f6d365 0%, #fda085 100%)',
                    }}
                >
                    <div className="flex flex-col md:flex-row justify-between items-center gap-2">
                        <div className="md:w-3/5 flex flex-col justify-center">
                            <h1 className=" md:text-3xl font-bold mb-2">
                                Microsoft SDE Secrets: Tips by Anshima Choudhary for Landing Top Placements
                            </h1>
                            <div className="flex items-center mb-4">
                                <div className="w-16 h-16 flex-none rounded-lg text-center shadow-lg">
                                    <div className="block rounded-t overflow-hidden bg-blue-500 text-white py-1">
                                        March
                                    </div>
                                    <div className="pt-1 border-l border-r border-white bg-white">
                                        <span className="text-3xl font-bold leading-tight">17</span>
                                    </div>
                                </div>
                                <div className="ml-4 flex flex-col">
                                    <h3 className="text-xl leading-tight">Sunday, March-17, 2023</h3>
                                    <span className="text-l p-2">12:00 PM to 1:00 PM GMT+5:30</span>
                                    <div className="flex items-center">
                                        <img src={YouTubeIcon} alt="YouTube" className="w-6 h-6" />
                                        <h4 className="ml-2">YouTube</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-center items-center">
                            <img src={image} alt="" className="h-48 md:h-64 w-auto" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="md:w-2/5 md:ml-6 p-1 rounded-md shadow-md bg-white">
                <h2 className="text-2xl font-bold mb-4">Registration</h2>
                <div className="flex items-center ">
                    <span className="mr-2" role="img" aria-label="Calendar">
                        📅
                    </span>
                    <h5>Past Event</h5>
                </div>
                <p>This event ended 23 days ago</p>
                <p>Welcome! To join the event, please register below.</p>
                <button
                    onClick={openDialog}
                    className="w-full bg-blue-400 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded"
                >
                    Register
                </button>
                {showDialog && < RegistrationForm onClose={closeDialog} />}

            </div>
            
            
          </div>
          
        </div>
       
        
    );
}

export default Home;
