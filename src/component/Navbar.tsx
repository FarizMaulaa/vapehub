import Marquee from 'react-fast-marquee'

const Navbar = () => {
  return (
    <>
    <div className="drawer z-10">
        <div className="drawer-content flex flex-col">
          <div className="w-full flex justify-between navbar bg-white">
            <div className="flex-1 px-1 mx-1 py-1 text-black">
              <div className="block">
                <p className=" text-3xl xl:text-4xl  font-inter">
                 vapehub.co
                </p>
              </div>
            </div>
            </div> 
        </div>
      </div>
    <Marquee speed={80} gradient={false} className="bg-orange-400 p-1.5 text-black font-inter font-light">
       Khusus untuk usia 🔞+ kalau dibawah usia tidak boleh !!!+++++++++++++++++++++++++   
    </Marquee>
   </>
  )
}

export default Navbar