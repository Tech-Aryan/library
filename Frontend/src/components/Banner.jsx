import React from 'react';
//import Banner from '../../public/Banner.jpg'

function Banner() {
  return (
    <>
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10">
        <div className="order-2  md:order-1 w-full md:w-1/2 mt-12 md:mt-32 ">
        <div className="space-y-12">
        <h1 className="text-4xl font-bold">Hello,welcomes here to learn something <span className="text-pink-500">new everyday!!!</span></h1>
        <p className="text-xl">Your next adventure starts here. Dive into a world of endless stories and boundless imagination, where every book is a gateway to new realms and unforgettable experiences</p>
        </div>
        </div>
        <div className=" order-1 w-full md:w-1/2">
        <img className="w-90 h-90" src=" Banner.jpg"  alt=""></img>
        </div>
    </div>
    </>
  )
}

export default Banner;
