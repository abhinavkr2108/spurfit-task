import { motion } from "framer-motion";

const SoundSimilar = () => {
  return (
    <section className="overflow-x-hidden mt-12 mb-32 p-4 px-20">
      <div className="flex flex-row items-center justify-between">
        <motion.div
          className="inline-block"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 1.9, type: "spring", bounce: "0.1" }}
          variants={{
            visible: { opacity: 1, scale: 1, y: 0, x: 0 },
            hidden: { opacity: 0, scale: 0, x: "-50%" },
          }}
        >
          <h1 className="text-5xl font-bold px-4 mb-5">
            Does this sound familiar...
          </h1>
        </motion.div>
        <motion.div
          viewport={{ once: true }}
          transition={{
            duration: 2.1,
            ease: "easeInOut",
            type: "spring",
            delay: 0.3,
          }}
          intial="hidden"
          whileInView="visible"
          variants={{
            visible: {
              opacity: 1,
              scale: 1,
              x: [0, -100, -300, -450, -390],
              y: [35, 20, 10, 0, -10],
              rotate: [-20, -45, -35, -35, -35, -35, -5],
            },
            hidden: { opacity: 0, scale: 0 },
          }}
        >
          <img width={70} height={70} alt="" src="/ahead-logo.png" />
        </motion.div>
      </div>
      <div className=" p-10 flex space-x-8 gap-7 items-center overflow-x-auto h-250">
        <div className="rounded-xl bg-purple-200 min-w-[350px]  p-6 flex flex-col gap-4 hover:scale-110 hover:-rotate-12 hover:duration-300 ease-in-out">
          <span className="text-3xl">😠</span>
          <h3 className="font-bold text-lg">You argue with a colleague</h3>
          <p className="text-gray-700">
            You get angry and defensive,instead of staying open and working
            towards common ground
          </p>
        </div>

        <div className="rounded-xl bg-blue-300 min-w-[350px]  p-6 flex flex-col gap-4 hover:scale-110 hover:-rotate-12 hover:duration-300  ease-in-out">
          <span className="text-3xl">😳</span>
          <h3 className="font-bold text-lg text-white">
            You get a prmotion at work
          </h3>
          <p className="text-gray-600">
            You question yourself and wonder unqualified imposter instead of
            trusting yourself & your abilites
          </p>
        </div>

        <div className="rounded-xl bg-yellow-200 min-w-[350px]  p-6 flex flex-col gap-4 hover:scale-110 hover:-rotate-12 hover:duration-300  ease-in-out">
          <span className="text-3xl">🤨</span>
          <h3 className="font-bold text-lg ">You attend a class reunion</h3>
          <p className="text-gray-700">
            You compare yourelf with your peers your self judgement more
            indeoendent of others.
          </p>
        </div>

        <div className=" rounded-xl bg-violet-600 min-w-[350px]  p-6 flex flex-col gap-4 hover:scale-110 hover:-rotate-12 hover:duration-300 ease-in-out">
          <span className="text-3xl">😒</span>
          <h3 className="font-bold text-lg ">
            You are at a lively dinner party
          </h3>
          <p className="text-gray-700">
            You play on your phone instead of confidentaly approaching
            starangersand striking up a chat
          </p>
        </div>

        <div className="rounded-xl bg-blue-100 min-w-[350px]  p-6 flex flex-col gap-4 hover:scale-110 hover:-rotate-12 hover:duration-300 ease-in-out">
          <span className="text-3xl">😬</span>
          <h3 className="font-bold text-lg ">
            You hit dead end in a negotiation
          </h3>
          <p className="text-gray-700">
            You get fruzzeled, nervous and frustated instead of staying
            optmisitic and solution-oriented.
          </p>
        </div>

        <div className="rounded-xl bg-purple-200 min-w-[350px]  p-6 flex flex-col gap-4 hover:scale-110 hover:-rotate-12 hover:duration-300 ease-in-out">
          <span className="text-3xl">😠</span>
          <h3 className="font-bold text-lg">You argue with a colleague</h3>
          <p className="text-gray-700">
            You get angry and defensive,instead of staying open and working
            towards common ground
          </p>
        </div>
        <div className="rounded-xl bg-violet-600 min-w-[350px]  p-6 flex flex-col gap-4 hover:scale-110 hover:-rotate-12 hover:duration-300 ease-in-out">
          <span className="text-3xl">😠</span>
          <h3 className="font-bold text-lg ">
            You are at a lively dinner party
          </h3>
          <p className="text-gray-700">
            You play on your phone instead of confidentaly approaching
            starangersand striking up a chat
          </p>
        </div>

        <div className="rounded-xl bg-blue-100 min-w-[350px]  p-6 flex flex-col gap-4 hover:scale-110 hover:-rotate-12 hover:duration-300 ease-in-out">
          <span className="text-3xl">😠</span>
          <h3 className="font-bold text-lg ">
            You hit dead end in a negotiation
          </h3>
          <p className="text-gray-700">
            You get fruzzeled, nervous and frustated instead of staying
            optmisitic and solution-oriented.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SoundSimilar;
