import React from 'react';

function About() {
    return (
        <div className='w-full flex justify-center'>
            <div className='max-w-7xl w-full flex flex-col items-center'>
                <div className='bg-gray-100 shadow-xl p-5 transition-all duration-300 mx-auto w-11/12 md:w-9/12'>
                    <div className='text-center'>
                        <h2 className='text-2xl font-bold text-primary mb-3'>About Event</h2>
                        <p className='text-l mb-4'>
                            🚀 Microsoft SDE Secrets: Tips by Anshima Choudhary for Landing Top Placements
                        </p>
                        <p className='text-l mb-4'>
                            Join us for an exclusive session with Anshima Choudhary, a seasoned Senior Software Development Engineer at Microsoft. Are you a student aspiring to excel in placement interviews and secure top positions? This is an opportunity you can't afford to miss!
                        </p>
                        <p className='text-l mb-4'>
                            👩‍💼 <span className="font-semibold">About Anshima Choudhary:</span> Anshima is a highly accomplished Senior Software Development Engineer at Microsoft. She is a 2018 Harvard Model United Nations Winner and has also contributed her expertise at MakeMyTrip. An alumni of NSIT, she graduated with a degree in Computer Science and Engineering in 2020.
                        </p>
                        <h2 className='text-xl  text-primary '>Who Should Attend​📚</h2>
                        <p className='text-xs mb-1'>
                            Students aspiring for a career in software development
                        </p>
                        <p className='text-xs mb-1'>
                            Tech enthusiasts seeking insider tips from a Microsoft expert
                        </p>
                        <p className='text-xs mb-1'>
                            Anyone looking to enhance their interview and career-building skills
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default About;
