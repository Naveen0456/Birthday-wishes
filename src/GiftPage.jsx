import "./GiftPage.css";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import gift from "./assets/Giftbox.png";
import birthdayPhoto from "./assets/DSC.jpg";


function GiftPage() {


    const [opened,setOpened] = useState(false);



    return (

        <div className="gift-container">


            <AnimatePresence mode="wait">


            {!opened ? (


                <motion.div

                    className="gift-screen"

                    initial={{
                        opacity:0
                    }}

                    animate={{
                        opacity:1
                    }}

                    exit={{
                        opacity:0,
                        scale:0.5
                    }}

                >



                    <motion.h1

                        initial={{
                            y:-50,
                            opacity:0
                        }}

                        animate={{
                            y:0,
                            opacity:1
                        }}

                        transition={{
                            duration:1
                        }}

                    >

                        🎁 A Small Surprise For You ❤️

                    </motion.h1>



                    <motion.p

                        initial={{
                            opacity:0
                        }}

                        animate={{
                            opacity:1
                        }}

                        transition={{
                            delay:0.8
                        }}

                    >

                        Touch The Gift Box ✨

                    </motion.p>




                    <motion.img


                        src={gift}

                        className="gift-image"



                        animate={{

                            y:[0,-25,0],

                            rotate:[0,5,-5,0]

                        }}


                        transition={{

                            duration:2,

                            repeat:Infinity,

                            ease:"easeInOut"

                        }}



                        whileTap={{

                            scale:1.3

                        }}



                        onClick={()=>setOpened(true)}


                    />



                </motion.div>



            )



            :



            (



                <motion.div


                    className="surprise-page"



                    style={{

                        backgroundImage:`url(${birthdayPhoto})`

                    }}



                    initial={{

                        opacity:0,

                        scale:0.8

                    }}



                    animate={{

                        opacity:1,

                        scale:1

                    }}



                    transition={{

                        duration:1

                    }}



                >



                    <div className="overlay"></div>



                    <motion.div


                        className="message-box"


                        initial={{

                            y:50,

                            opacity:0

                        }}



                        animate={{

                            y:0,

                            opacity:1

                        }}



                        transition={{

                            delay:5,

                            duration:1

                        }}



                    >



                        <h1>

                            🎂 Happy Birthday ❤️

                        </h1>



                        <p>

                            Happy Birthday, my future wife! 🎉
Every day brings us one step closer to the beautiful journey we'll share together. I thank God for bringing you into my life, and I can't wait to call you my wife. May your special day be filled with love, laughter, and all the happiness your heart desires. Wishing you a wonderful birthday and an even more wonderful future with me. ❤️🎂

                        </p>



                        <p>

                            May all your dreams come true 😍😊


                        </p>



                    </motion.div>




                </motion.div>



            )}



            </AnimatePresence>



        </div>

    );

}



export default GiftPage;