import React from "react";
import DoctorCard from "@/components/ui/DoctorCard";
import TestIMG from "public/assets/images/dokter.png";

export default function AllDoctor({ doctor_list }) {
   return (
      <>
         <div
            className="border-solid border-[rgba(0,0,0,0.20)] w-[861px] h-0 relative"
            style={{
               borderWidth: "2px 0 0 0",
               transformOrigin: "0 0",
               transform: "rotate(0.067deg) scale(1, 1)",
            }}
         ></div>
         <div className="h-[635px] flex flex-col gap-4 items-start justify-start shrink-0 relative overflow-y-auto">
            <div className="flex flex-row flex-wrap gap-[45px] items-center justify-start shrink-0 relative">
               {doctor_list &&
                  doctor_list.map((doctor_list) => (
                     <React.Fragment key={doctor_list.ID}>
                        <DoctorCard
                           image={doctor_list.photos}
                           name={doctor_list.full_name}
                           title={doctor_list.title}
                           work_time={doctor_list.work_time}
                           href={`/detail-dokter/${doctor_list.ID}`}
                        />
                     </React.Fragment>
                  ))}
            </div>
         </div>
      </>
   );
}
