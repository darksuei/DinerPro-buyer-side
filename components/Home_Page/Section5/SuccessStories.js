import Image from "next/image";
import { HiVideoCamera } from "react-icons/hi";

export default function SuccessStory() {
  return (
    <div className="w-screen flex flex-col items-center gap-8 py-[12vh]">
      <h1 className="headers">Success Stories</h1>
      <p>
        DinnerPro helps businesses thrive- See how our software helps our
        clients manage and row their business:
      </p>
      <div className="w-screen px-[2rem] flex items-center justify-center">
        <div className="bg-red-600 flex items-center rounded-lg justify-center w-[50%] h-[50vh]">
          <div className="relative w-[100%] h-[100%]">
            <Image
              src="/images/homepage/succesStory.png"
              fill
              style={{ objectFit: "contain" }}
              alt="An Image"
            />
          </div>
        </div>
        <div className="bg-white flex flex-col ml-[-10vw] space-x-7 rounded-lg justify-start  items-start w-[50%] h-[40vh] px-4 py-8">
          <h1 className="font-bold">LyndaEats</h1>
          <p>
            See how our friends at LyndaEats used our software to optimize
            business success in one year.
          </p>
          <p>An interview with Lynda Peters CEO of Lyndaeats</p>
          <div className="flex items-center gap-2">
            <div className="flex items-center border border-gray-400 px-2 py-2 rounded-lg">
              <div className="flex gap-3">
                <HiVideoCamera />
              </div>
              <p>Watch Demo</p>
            </div>
            <p className="text-[.9rem] font-bold text-gray-800">
              See all Success Stories
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
