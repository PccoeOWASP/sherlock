import React from 'react'
import Image from 'next/legacy/image'
import Sher from '../public/SherLogo.png'
import { SiTryhackme } from "react-icons/si"
import { TbPuzzleFilled } from "react-icons/tb"
import { AiFillEye } from "react-icons/ai"

export default function Steps() {
    return (
        
        <section id="steps" className=" text-white body-font bg-black mx-auto">
            <h2 className='py-20 text-5xl text-white text-center underline underline-offset-8 decoration-blue-400'>Flow Of Event</h2>
            
            <div className='lg:grid md:grid-cols-2'>
                <div className="container py-20 lg:px-34 px-8 mx-auto flex flex-wrap">
                    <div className="flex relative pt-10 pb-20 sm:items-center md:w-2/3 mx-auto">
                        <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
                            <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                        </div>
                        <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 title-font font-medium text-sm">1</div>
                        <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                            <div className="flex-shrink-0 w-24 h-24 bg-indigo-100 text-indigo-800 rounded-full inline-flex items-center justify-center">
                                <TbPuzzleFilled className='fill-blue-800 w-16 h-16 mx-auto' />
                            </div>
                            <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                                <h2 className="title-font text-blue-400 mb-1 text-lg">Round 1</h2>
                                <h3 className='text-xl font-medium text-yellow-500'>Death or Glory </h3>
                                <p className="leading-relaxed italic">
                                    <ul>
                                        <li>This is a round to test your speed and accuracy.</li>
                                        <li>here the teams will have to answer a 20 question quiz.</li>
                                        <li>top 30 teams will get closer to hunt the hacker down.</li>
                                    </ul>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="flex relative pb-20 sm:items-center md:w-2/3 mx-auto">
                        <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
                            <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                        </div>
                        <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 title-font font-medium text-sm">2</div>
                        <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                            <div className="flex-shrink-0 w-24 h-24 bg-indigo-100 text-indigo-500 rounded-full inline-flex items-center justify-center">
                                <AiFillEye className='fill-blue-800 w-16 h-16 mx-auto' />
                            </div>
                            <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                                <h2 className="title-font text-blue-400 mb-1 text-lg">Round 2</h2>
                                <h3 className='font-medium text-xl text-yellow-500'>You Can&#39;t catch me! </h3>
                                <p className="leading-relaxed italic">
                                    <ul>
                                        <li>This is the round where you will try to find the hide-out of the hacker by observing the key places in the entire campus.</li>
                                        <li>Top 15 teams will be just 1 step away from finding the hacker&#39;s hideout.</li>

                                    </ul>
                                    

                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="flex relative pb-20 sm:items-center md:w-2/3 mx-auto">
                        <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
                            <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                        </div>
                        <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 title-font font-medium text-sm">3</div>
                        <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                            <div className="flex-shrink-0 w-24 h-24 bg-indigo-100 text-indigo-500 rounded-full inline-flex items-center justify-center">
                                <div className="flex-shrink-0 w-24 h-24 bg-indigo-100 text-indigo-500 rounded-full inline-flex items-center justify-center">
                                    <SiTryhackme className='fill-blue-800 w-16 h-16 mx-auto' />
                                </div>
                            </div>
                            <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                                <h2 className="title-font text-blue-400 mb-1 text-lg">Round 3</h2>
                                <h3 className='text-xl font-medium text-yellow-500'>Let me IN </h3>
                                <p className="leading-relaxed italic">
                                    <ul>
                                        <li>Let&#39;s get moving and hunting the hacker down by playing his final game</li>
                                        <li>Treasure Hunt where we will find the hacker and get our device back to safety.</li>

                                    </ul>

                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='lg:block justify-center lg:py-40 lg:px-72 p-4  md:text-center'>
                    <Image src={Sher} />
                </div>
            </div>
        
        <hr className="mt-10 h-1 w-1/4 mx-auto bg-gradient-to-r from-blue-500 to-teal-100 border-0 dark:bg-gray-700" />
    </section>
    )
}
