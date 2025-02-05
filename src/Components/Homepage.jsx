import React, { useState }  from 'react'

const Homepage = ({ setData, data}) => {

    const initalValue = {
        JobRole: '',
        Company: '',
        Salary:'',
        Exp: '',
        Vacancies: '',
    }

    const [ userData, setUserData ] = useState(initalValue);
    const [ Emsg, setEMessage ] = useState("");
    const [ Smsg, setSMsg ] = useState("");
  
    const handleUpload = (e) => {
  
      e.preventDefault();
  
      if(userData.JobRole === "" || userData.Company === "" || userData.Salary === "" || userData.Exp === "" || userData.Vacancies === ""){
        setEMessage("Fill all the Deatils 🤨!...");
        setSMsg("");
      }
      else{
        setData([ ...data, userData ]);
        setUserData(initalValue);
        setSMsg("Uploaded Successfully 👍");
        setEMessage("");
      }
    }
  
        
    return (
        <div> 
            <div className='flex flex-col items-center pt-10'>
            <h1 className='text-xl font-semibold tracking-wider'>Job Uploads</h1>
            <div className='border-2 border-white rounded-xl mt-10 w-1/2 flex flex-col items-center'>
                <div className='mt-10 mb-10 grid grid-cols-2 gap-4 w-full'>
                <label className='px-10 py-4'>
                    <input 
                    className='w-full border-b-2 border-b-white outline-none p-2 focus:border-b-green-500' 
                    value={userData.JobRole} 
                    onChange={(e) => setUserData({ ...userData, JobRole:e.target.value})} 
                    type='text' 
                    placeholder='Job Role' 
                    required
                    />
                </label>
                <label className='px-10  py-4'>
                    <input 
                    className='w-full border-b-2 border-b-white outline-none p-2 focus:border-b-green-500' 
                    value={userData.Company} 
                    onChange={(e) => setUserData({ ...userData, Company:e.target.value})} 
                    type='text' 
                    placeholder='Company' 
                    required 
                />
                </label>
                <label className='px-10  py-4'>
                    <input 
                    className='w-full border-b-2 border-b-white outline-none p-2 focus:border-b-green-500' 
                    value={userData.Salary} 
                    onChange={(e) => setUserData({ ...userData, Salary:e.target.value})} 
                    type='text' 
                    placeholder='Salary' 
                    required 
                    />
                </label>
                <label className='px-10  py-4'>
                    <input 
                    className='w-full border-b-2 border-b-white outline-none p-2 focus:border-b-green-500' 
                    value={userData.Exp} 
                    onChange={(e) => setUserData({ ...userData, Exp:e.target.value})} 
                    type='text' 
                    placeholder='Experience' 
                    required 
                    />
                </label>
                <label className='px-10  py-4'>
                    <input 
                    className='w-full border-b-2 border-b-white outline-none p-2 focus:border-b-green-500' 
                    value={userData.Vacancies} 
                    onChange={(e) => setUserData({ ...userData, Vacancies:e.target.value})} 
                    type='text' 
                    placeholder='Vacancies' 
                    required 
                    />
                </label>
                </div>
                <button 
                className='bg-green-600 rounded-full w-1/4 h-10 mb-10 cursor-pointer hover:bg-green-900 transition-all duration-200 ease-linear font-semibold'
                onClick={handleUpload}
                >
                Upload
                </button>
                </div>
                <p className='relative mt-10 text-2xl font-semibold text-red-600 tracking-wide'>{Emsg}</p>
                <p className='relative mt-10 bottom-8 text-2xl font-semibold text-green-500 tracking-wide'>{Smsg}</p>
            </div>
        </div>
    )
}

export default Homepage;