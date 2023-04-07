function Main() {
  // About page main content
  
  return (
    <section className=" lg:pt-[6rem]">
      <div
        className="flex py-[2rem] sm:py-[4rem] sm:px-[3rem] md:py-[6rem] font-[400] lg:gap-[6rem]
         max-w-[1250px] m-auto items-center">
        <div className="w-[60%] flex items-end">
          <span>
            <h3 className="text-[2rem] font-[600] text-left capitalize">
              Overview of who we are
            </h3>
            <p className="text-justify pt-8 text-[1.2em]">
              DinerPro is a kitchen management software that digitalizes the
              food service process and business infrastructure.
            </p>
            <p className="text-justify pt-8 text-[1.2em]">
              DinnerPro software intends to digitalize theses functions for both
              food service outlets and their clients by providing an end-to-end
              solution where food service people can have a software that
              co-ordinates their business from inventory management to
              end-to-end supply chain while their clients have a dedicated
              interface to interact with offline or online.
            </p>
          </span>
        </div>
        <div className="bg-[url('/images/aboutus/about.jpeg')] w-full bg-cover bg-center aspect-square"></div>
      </div>
      <div className="bg-[url('/images/aboutus/chairs.jpeg')] p-[4rem] lg:min-h-[f] bg-cover bg-center ">
        <div className="max-w-[1250px] justify-end px-[4rem] flex m-auto">
          <div className="font-[400] text-[1.5rem] rounded-lg w-[70%] min-w-[400px] max-w-[600px] p-[3rem] bg-white">
            <h1 className="text-[2rem] capitalize pb-4 my-[2rem] font-[600]">
              Capabilities
            </h1>
            <ul className="list-disc flex flex-col text-[1.2rem] gap-10">
              <li>
                We provide and integrate a virtual wallet API that has already
                been developed by a partner financial institution to enable
                smooth payments.
              </li>
              <li>
                Web application created to ease calculations and sales analytics
                to ensure correct curation of data.
              </li>
              <li>
                Provide a digital interface between food service people their
                internal operations and records which includes vendor
                management, budgeting, financial management, schedules, tasks
                and employee management.
              </li>
            </ul>
            <p className="font-[600] pt-6">Run a grounded restaurant</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Main;

