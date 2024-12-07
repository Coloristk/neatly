import React, { useState, useEffect } from "react";
import Link from "next/link";
import Navbar from "@/component/navbar";
import RoomsSuits from "@/component/roomssuits";
import Footer from "@/component/footer";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function RoomDetail() {
  const [roomData, setRoomData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch room data from API
  async function fetchRoomData() {
    try {
      const response = await fetch("/api/getRoomdetail");
      if (!response.ok) {
        throw new Error("Failed to fetch room details");
      }
      const data = await response.json();
      setRoomData(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchRoomData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const images = [
    "/asset/premier.jpeg",
    "/asset/superior.jpeg",
    "/asset/supreme.jpeg",
    "/asset/loginduochair.jpeg",
    "/asset/premier.jpeg",
    "/asset/superior.jpeg",
  ];

  return (
    <div className="w-full">
      {/* Navbar Section */}
      <div className="w-full">
        <Navbar />
      </div>

      {/* Carousel Section */}
      <div className="w-full">
        <Carousel
          opts={{
            align: "start",
          }}
          className="mt-6 flex h-96 w-full overflow-hidden"
        >
          <CarouselContent className="flex h-full">
            {Array.from({ length: 6 }).map((_, index) => (
              <CarouselItem
                key={index}
                className="flex h-full w-full shrink-0 items-center justify-center md:basis-2/5"
              >
                <img
                  src={images[index]}
                  alt={`Image ${index + 1}`}
                  className="h-full w-full rounded object-cover"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute left-8 z-10 text-zinc-200" />
          <CarouselNext className="absolute right-8 z-10 text-zinc-200" />
        </Carousel>
      </div>

      {/* Content Section */}
      <div className="flex w-full items-start justify-center">
        <div className="px-10 py-10 md:w-[870px]">
          <div className="mt-4 space-y-10">
            <h1 className="mb-4 font-notoSerif text-5xl font-medium text-green-800 md:text-6xl">
              {roomData[0]?.room_type || "Room Details"}
            </h1>
            <div className="md:flex md:justify-between">
              <div className="md:mt-4 md:w-1/2">
                <p className="font-inter text-base text-gray-700">
                  {`Rooms (${roomData[0]?.size || "N/A"} sqm) with full garden views, ${roomData[0]?.bed_type || "N/A"} bed, bathroom with bathtub & shower.`}
                </p>
                <p className="mb-4 mt-10 font-inter text-base text-gray-700">
                  {`${roomData[0]?.guests || "N/A"} Person | ${roomData[0]?.bed_type || "N/A"} | ${roomData[0]?.size || "N/A"} sqm`}
                </p>
              </div>

              <div className="flex flex-row  justify-between font-inter md:flex md:flex-col md:items-end">
                <div className="text-center md:text-right">
                  <p className="m-1 font-inter text-base text-gray-700 line-through">
                    THB 3,100.00
                  </p>
                  <p className="font-inter text-xl font-semibold text-gray-900">
                    THB{" "}
                    {roomData[0]?.price
                      ? Intl.NumberFormat("en-US", {
                          minimumFractionDigits: 2,
                        }).format(roomData[0].price)
                      : "N/A"}
                  </p>
                </div>
                {/* ปุ่ม Book Now */}
                <Link href="#" legacyBehavior>
                  <a className="mt-4 flex h-[48px] items-center justify-center rounded-sm bg-orange-600 px-12 py-0 text-center font-openSans text-base font-medium text-white transition-transform hover:scale-105 md:mt-0">
                    Book Now
                  </a>
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-16 h-full w-full md:mt-20">
            <h3 className="font-inter text-xl font-semibold">
              Room Amenities
            </h3>
            <div className="mt-6 px-4">
              <ul className="grid list-inside list-disc grid-cols-1 gap-x-10 font-inter text-base text-gray-700 md:grid-cols-2">
                <li className="m-0">Safe in Room</li>
                <li className="m-0">Air Conditioning</li>
                <li className="m-0">High speed internet connection</li>
                <li className="m-0">Hairdryer</li>
                <li className="m-0">Shower</li>
                <li className="m-0">Bathroom amenities</li>
                <li className="m-0">Lamp</li>
                <li className="m-0">Minibar</li>
                <li className="m-0">Telephone</li>
                <li className="m-0">Ironing board</li>
                <li className="m-0">
                  A floor only accessible via a guest room key
                </li>
                <li className="m-0">Alarm clock</li>
                <li className="m-0">Bathrobe</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* RoomsSuits and Footer */}
      <div className="w-full">
     
      </div>
      <div className="w-full">
        <Footer />
      </div>
    </div>
  );
}
