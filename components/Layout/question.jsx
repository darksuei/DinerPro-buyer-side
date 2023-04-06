import Link from "next/link"

function Question() {
  return (
    <div className="bg-[#FFA902] text-zinc-600 font-IBM font-[400] flex items-center text-center justify-center">
        <div className="m-[4rem] max-w-[32rem]">
            <h4 className="font-[600] mb-4 text-black text-[2.5rem]">Have a Question ?</h4>
            <p className="font-[400] text-[1.2rem] mb-8">We are here to make your experience easy.</p>
            <Link className="bg-white px-12 py-6 text-[1.2rem] hover:bg-zinc-200 hover:text-black/100 capitalize transition duration-100 font-[500] rounded-lg" href={'#'}>talk to us</Link>
        </div>
    </div>
  )
}

export default Question
