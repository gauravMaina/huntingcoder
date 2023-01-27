import React from 'react'

function Dummy() {
  return (
    <>
    <style jsx global>
        {`.dummy{
            background-color:green;
        }`
        }
    </style>
    <div className='dummy'>Hello I am Dummy</div>
    </>
  )
}

export default Dummy