import { motion } from "framer-motion";
import HoverCard from "./HoverCard";
import { Heading } from "@chakra-ui/react";

const vacancies = [
  {
    jobTitle: "Senior Full-Stack Engineer",
    position: "Full-time position",
    location: "Berlin or Remote",
    pay: "€65-85k, 0.5%-1.5% equity share options",
  },
  {
    jobTitle: "Senior Designer",
    position: "Full-time position",
    location: "Berlin or Remote",
    pay: "€40-55k, 0.25%-0.50% equity share options",
  },
  {
    jobTitle: "Superstar Intern",
    position: "Full-time position",
    location: "Berlin or Remote",
    pay: "€20-24k, 0.5%-1.50% equity share options",
  },
];
const OpenVacancies = () => {
  return (
    <section className="mt-20 py-8 px-24 h-96">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { x: "-30%", y: "50%", opacity: 0 },
          visible: {
            x: 0,
            y: 0,
            opacity: 1,
            transition: { ease: "easeInOut", duration: 1.5 },
          },
        }}
        style={{
          width: "100%", // Adjust the width as needed
          overflow: "hidden", // Hide overflowing text while sliding
        }}
      >
        <Heading>Open vacancies</Heading>
      </motion.div>
      <div className="mt-12 grid grid-cols-3 justify-between gap-8">
        {vacancies.map((vac, index) => {
          return <HoverCard key={index} vac={vac} index={index} />;
        })}
      </div>
    </section>
  );
};

export default OpenVacancies;
