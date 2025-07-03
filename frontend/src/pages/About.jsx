import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsLetter from '../components/NewsLetter'

function About() {
  return (
    <div>

      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'} />
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.hero1} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>At HelmaX, your safety is our mission.
            Founded with a passion for protection and performance, HelmaX is more than just a helmet brand — it’s a commitment to riders of all kinds. Whether you're cruising city streets, touring the countryside, or racing on the track, we deliver helmets that blend premium quality, modern design, and uncompromising safety standards.</p>
          <p>Every helmet is crafted with precision using advanced materials and tested for durability, ventilation, and comfort — because we believe every ride deserves the best protection. Our collections cater to men, women, and kids, with a variety of styles including Full-Face, Modular, Open-Face, and Off-Road helmets.</p>
          <p>
            At HelmaX, we ride with you.
            Explore. Protect. Conquer — with confidence.
          </p>
          <b className='text-gray-800'>Our Mission</b>
          <p>At HelmaX, our mission is to redefine rider safety through innovation, style, and trust.
            We are dedicated to designing helmets that offer the highest standards of protection, without compromising on comfort, performance, or design. Our goal is to make every ride — whether on busy city roads or rugged terrains — safer and more enjoyable for everyone.</p>
        </div>
      </div>

      <div className='text-xl py-4 '>
        <Title text1={"WHY"} text2={"CHOOSE US"} />
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 '>
          <b>Quality Assurance:</b>
          <p className='text-gray-600'>We are dedicated to designing helmets that offer the highest standards of protection, without compromising on comfort, performance, or design. Our goal is to make every ride — whether on busy city roads or rugged terrains — safer and more enjoyable for everyone.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenenice:</b>
          <p className='text-gray-600'>Every helmet is crafted with precision using advanced materials and tested for durability, ventilation, and comfort — because we believe every ride deserves the best protection.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service:</b>
          <p className='text-gray-600'>Our collections cater to men, women, and kids, with a variety of styles including Full-Face, Modular, Open-Face, and Off-Road helmets.Our collections cater to men, women, and kids, with a variety of styles including Full-Face, Modular, Open-Face, and Off-Road helmets.</p>
        </div>
      </div>

      <NewsLetter />

    </div>


  )
}

export default About