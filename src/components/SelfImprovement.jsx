import { Heading, Text } from "@chakra-ui/react";

const SelfImprovement = () => {
  return (
    <>
      <Text fontSize={"large"} fontWeight={"bold"} textAlign={"start"}>
        Wrong with self improvement & how we are fixing it.
      </Text>
      <Heading fontSize={"5xl"} textAlign={"start"}>
        Self-improvement. Ugh.
      </Heading>
      <Timeline />
    </>
  );
};
function Timeline() {
  return (
    <div>
      <ol className="border-s border-neutral-300 dark:border-neutral-500">
        <li>
          <div className="flex-start flex items-start pt-3">
            <div className="-ms-[5px] me-3 h-[9px] w-[9px] rounded-full bg-blue-500"></div>
            <p className="text-sm text-start0">01.07.2021</p>
          </div>
          <div className="mb-6 ms-4 mt-2">
            <h4 className="mb-1.5 text-xl font-semibold text-start">
              Title of section 1
            </h4>
            <p className="mb-3 text-start">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              scelerisque diam non nisi semper, et elementum lorem ornare.
              Maecenas placerat facilisis mollis. Duis sagittis ligula in
              sodales vehicula.
            </p>
          </div>
        </li>

        <li>
          <div className="flex-start flex items-start pt-2">
            <div className="-ms-[5px] me-3 h-[9px] w-[9px] rounded-full bg-blue-500"></div>
            <p className="text-sm text-start">13.09.2021</p>
          </div>
          <div className="mb-6 ms-4 mt-2">
            <h4 className="mb-1.5 text-xl font-semibold text-start">
              Title of section 2
            </h4>
            <p className="mb-3 text-start">
              Libero expedita explicabo eius fugiat quia aspernatur autem
              laudantium error architecto recusandae natus sapiente sit nam
              eaque, consectetur porro molestiae ipsam an deleniti.
            </p>
          </div>
        </li>

        <li>
          <div className="flex-start flex items-start pt-2">
            <div className="-ms-[5px] me-3 h-[9px] w-[9px] rounded-full bg-blue-500"></div>
            <p className="text-sm">25.11.2021</p>
          </div>
          <div className="ms-4 mt-2 pb-5">
            <h4 className="mb-1.5 text-xl font-semibold text-start">
              Title of section 3
            </h4>
            <p className="mb-3 text-start">
              Voluptatibus temporibus esse illum eum aspernatur, fugiat suscipit
              natus! Eum corporis illum nihil officiis tempore. Excepturi illo
              natus libero sit doloremque, laborum molestias rerum pariatur quam
              ipsam necessitatibus incidunt, explicabo.
            </p>
          </div>
        </li>
      </ol>
    </div>
  );
}

export default SelfImprovement;
