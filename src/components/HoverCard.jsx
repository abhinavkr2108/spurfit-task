import { motion } from "framer-motion";
import { useState } from "react";

const HoverCard = ({ vac, index }) => {
  const [isButtonVisible, setButtonVisible] = useState(false);
  return (
    <>
      <motion.div
        initial={{ height: 170 }}
        whileHover={{ height: 250 }}
        key={index}
        onHoverStart={() => setButtonVisible(true)}
        onHoverEnd={() => setButtonVisible(false)}
        transition={{ ease: "easeInOut", duration: 0.3 }}
        className="bg-[#fefbec] rounded-lg hover:bg-[#ece7d1] hover:cursor-pointer"
      >
        <div className="rounded-2xl  p-6 px-12">
          <h2 className="text-xl font-bold">{vac.jobTitle}</h2>

          <ul className="mt-4 text-sm font-semibold list-disc pl-4">
            <li className="">{vac.position}</li>
            <li className="">{vac.location}</li>
            <li className="">{vac.pay}</li>
          </ul>
        </div>
        {isButtonVisible && (
          <motion.button
            initial="hidden"
            whileInView="visible"
            transition={{ ease: "easeInOut", duration: 0.5, delay: 0.1 }}
            variants={{
              visible: { opacity: 1, scale: 1 },
              hidden: { opacity: 0, scale: 0.7 },
            }}
            className="mx-10 cursor-pointer text-white bg-black rounded-full px-3 py-2 mt-4"
          >
            Click Me
          </motion.button>
        )}
      </motion.div>
    </>
  );
};

export default HoverCard;
