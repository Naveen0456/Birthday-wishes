import "./RosePage.css";
import { motion } from "framer-motion";

import rose from "./assets/rose.webp";

function RosePage({ onNext }) {

    return (

        <div className="rose-container">

            <motion.h2

                initial={{ opacity: 0, y: -40 }}

                animate={{ opacity: 1, y: 0 }}

                transition={{ duration: 0.8 }}

            >

                Your Rose Bouquet

            </motion.h2>

            <motion.img

                src={rose}

                alt="Rose Bouquet"

                className="rose-img"

                initial={{ scale: 0 }}

                animate={{ scale: 1 }}

                transition={{
                    duration: 1,
                    type: "spring",
                    stiffness: 100
                }}

            />

            <motion.button
                className="next-btn"
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                    console.log("Next Clicked");
                    onNext();
                }}
            >
                Next ➜
            </motion.button>

        </div>

    );

}

export default RosePage;