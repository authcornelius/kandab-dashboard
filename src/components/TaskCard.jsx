import { GoCheckCircleFill } from "react-icons/go";
import { PiChatTeardropDotsFill } from "react-icons/pi";
import Avatar1 from '/342859196_239392802007511_7687622644463172425_n1.jpg'
import Avatar2 from '/342859196_239392802007511_7687622644463172425_n1.jpg'
import Avatar3 from '/342859196_239392802007511_7687622644463172425_n1.jpg'
import Avatar4 from '/342859196_239392802007511_7687622644463172425_n1.jpg'


export default function TaskCard({ data }) {
  
  return (
    <div className="mb-5">
        <div className="bg-white shadow-lg border border-[#E2E8F0] p-3 rounded-3xl flex flex-col gap-3">
            <h1 className="bg-[#EEF2FF] text-[#4F46E5] p-2 rounded-full w-fit semi-bold-custom-font">{data?.task[0]?.priority}</h1>

            <h1 className="text-[#1E293B] bold-custom-font">{data?.task[0]?.title}</h1>

            <p className="text-[#475569] regular-custom-font">{data?.task[0]?.description}</p>

            <div className="flex flex-row justify-between">
              <div className="flex">
                <img src={Avatar1} alt="Users in project" className="w-8 h-8 rounded-full" />
                <img src={Avatar2} alt="Users in project" className="w-8 h-8 rounded-full -ml-2 bg-white pl-1" />
                <img src={Avatar3} alt="Users in project" className="w-8 h-8 rounded-full -ml-2 bg-white pl-1" />
                <img src={Avatar4} alt="Users in project" className="w-8 h-8 rounded-full -ml-2 bg-white pl-1" />
              </div>

              <div className="my-auto">
                <div className="flex space-x-4">
                  <div className="flex gap-1">
                    <PiChatTeardropDotsFill size={16} className="text-[#94A3B8] my-auto" />
                    <p className="semi-bold-custom-font">{data?.task[0]?.comments || 0}</p>
                  </div>

                  <div className="flex gap-1">
                    <GoCheckCircleFill size={16} className="text-[#94A3B8] my-auto" />
                    <p className="semi-bold-custom-font">{data?.task[0]?.tasks || 0}</p>
                  </div>
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}
