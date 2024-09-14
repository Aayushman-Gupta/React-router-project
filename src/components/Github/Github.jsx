import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
function Github() {
  const data= useLoaderData()
  // const [data, setData] = useState([])
    // useEffect(()=>{
    //   fetch('https://api.github.com/users/Aayushman-Gupta')
    //   .then(response =>response.json)
    //   .then(data=>{
    //     console.log(data)
    //     setData(data )

    //   })
    // } ,[])
  return (
    <div className='text-center m-4 p-8 bg-gray-400 text-black-600 text-3xl'>Github Followers:{data.followers}
    <img src={data.avatar_url} alt='Github profile picture' width={200}
    /></div>
  )
}

export default Github

export const githubInfoLoader = async ()=>{
     const response =await fetch('https://api.github.com/users/Aayushman-Gupta')

    const data=await response.json
    return data 
}