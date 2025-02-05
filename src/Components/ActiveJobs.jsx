import React from 'react';

const ActiveJobs = ({ data }) => {

    return (
        <>
            <div className="flex flex-col items-center w-full mt-10">
                <h1 className="text-4xl font-bold text-center mb-8">Active Jobs</h1>

                <div className="w-full py-10 flex flex-col items-center">
                    {data.length === 0 ? (
                        <p className="text-xl text-gray-400">No active jobs available at the moment.</p>
                    ) : (
                        data.map((item) => (
                            <div className="w-full flex flex-col items-center mb-6" key={item.id}>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 border-2 border-white bg-gray-800 rounded-2xl p-8 shadow-lg transition-transform transform hover:scale-105">
                                    <div className="flex flex-col items-start space-y-4">
                                        <p className="text-3xl font-semibold text-white tracking-wide">{item.JobRole}</p>
                                        <p className="text-xl text-gray-300">{item.Company}</p>
                                        <p className="text-lg text-gray-200">Salary: <span className="font-semibold">{item.Salary}</span></p>
                                        <p className="text-lg text-gray-200">Exp: {item.Exp}</p>
                                        <p className="text-lg text-gray-200">Vacancies: <span className="font-semibold">{item.Vacancies}</span></p>
                                    </div>

                                    <div className="flex items-center justify-center md:justify-end">
                                        <button className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400 transition cursor-pointer">
                                            Apply Now
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </>
    );
};

export default ActiveJobs;