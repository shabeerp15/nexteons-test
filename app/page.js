// import HomePage from "@/components/Homepage";
import { Separator } from "../components/ui/separator";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg mx-auto">
      <div className="flex justify-between items-center mb-6">
        <div className="absolute top-[100px] hidden">
          <Image src="/headphone.svg" alt="Headphones" width={150} height={150} className="ml-16"/>
          <Image src="/phone.svg" alt="Headphones" width={250} height={100} />
          <Image src="/powerbank.svg" alt="Headphones" width={100} height={100} className="ml-52 -mt-36" />
          <Image src="/usb.png" alt="usb" width={100} height={100} className="-mt-80 ml-72" />
        </div>
        <div className="absolute top-[100px] right-[10px] hidden">
          <Image src="/tab.png" alt="tab" width={150} height={50} className="ml-20"/>
          <Image src="/mouse.png" alt="mouse" width={80} height={100} />
          <Image src="/laptop.png" alt="laptop" width={300} height={100} className="ml-20 -mt-10" />
        </div>
        <h1 className="text-[70px] font-bold text-center w-full text-background z-10 lg:mt-20 md:mt-10">
          Making a Difference
          <br />
          Together !
        </h1>
        {/* <img src="https://cdn-icons-png.flaticon.com/512/545/545245.png" alt="Smartphone" className="w-12 h-12" /> */}
      </div>

      <p className="text-center text-md text-gray-600 mb-8">We are not just a business, we are a movement to protect our planet.</p>

      <div className="flex md:flex-row flex-col mb-8 md:w-[800px] mx-auto ">
        <div className="text-center">
          <p className="text-[50px] font-bold text-background">66,253,209</p>
          <p className="text-gray-600 text-[25px] font-bold">Liters water saved</p>
        </div>
        <Separator orientation="vertical" className="h-22" />
        <div className="text-center">
          <p className="text-[50px] font-bold text-background">36,770,526</p>
          <p className="text-gray-600 text-[25px] font-bold">KG's of CO₂ saved</p>
        </div>
      </div>

      <div className="flex justify-center mb-8">
        <Image src="/bg1.jpg" alt="background" width={1000} height={100} />
      </div>
      <div className="flex justify-center mb-8">
        <Image src="/bg2.png" alt="background" width={200} height={50} />
      </div>
    </div>
  );
}
