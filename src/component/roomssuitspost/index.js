import React from "react";
import { useRouter } from "next/router";

export default function RoomsSuitsPost({
  label = "",
  src = "",
  roomId,
  labelStyle,
}) {
  const router = useRouter();

  const handleExploreRoom = () => {
    router.push(`/roomdetail/${roomId}`);
  };

  return (
    <div className="relative h-[250px] w-full md:h-full">
      {/* รูปภาพ */}
      <div className="relative h-full w-full">
        <img
          src={src}
          alt="Rooms type"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-30"></div>
      </div>

      {/* ข้อความและปุ่มที่อยู่ในรูป */}
      <div className="absolute top-[138px] flex w-full flex-col justify-between gap-3 pl-4 pr-4 sm:bottom-10 sm:top-auto">
        {/* เพิ่ม labelStyle ในนี้ */}
        <div
          className={`w-full whitespace-normal break-words font-notoSerif text-3xl font-medium ${labelStyle || "text-white"}`}
        >
          <h1> {label}</h1>
        </div>

        <button className="flex w-[148px] flex-row items-center justify-between pl-2">
          <h1
            className="font-openSans text-[16px] font-semibold leading-[16px] text-white"
            onClick={handleExploreRoom}
          >
            Explore Room
          </h1>
          <img src="/asset/icon/Vector.png" alt="Explore Room" />
        </button>
      </div>
    </div>
  );
}
