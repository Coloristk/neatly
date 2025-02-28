"use client";
import Image from "next/image";
import { useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function RoomModal({ room, isOpen, onClose }) {
  const [showAmenities, setShowAmenities] = useState(false);
  const images = [
    room.room_image_url, // เพิ่ม room_image_url เป็นรูปแรก
    ...(room.image_gallery || []), // ตามด้วยรูปจาก image_gallery
  ];
  if (!isOpen || !room) return null; // หากไม่มีข้อมูลห้อง ให้ return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
      <div className="max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-lg bg-white shadow-xl sm:max-w-md md:max-w-lg">
        <div className="flex items-center justify-between border-b p-4">
          <h2 className="text-base font-semibold md:text-xl">
            {room.room_type}
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 transition-colors hover:text-gray-600"
            aria-label="Close modal"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 md:h-6 md:w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <div className="relative aspect-video w-full">
          <div className="h-auto w-full">
            <Carousel
              opts={{
                align: "start",
              }}
              className="mt-6 flex h-auto w-full overflow-hidden"
            >
              <CarouselContent className="flex h-full">
                {images.map((imageUrl, index) => (
                  <CarouselItem
                    key={`${room.id}-${index}`}
                    className="flex h-full w-full shrink-0 items-center justify-center md:basis-2/5"
                  >
                    <img
                      src={imageUrl}
                      alt={`Room Image ${index + 1}`}
                      className="h-full w-full rounded object-cover"
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="absolute left-8 z-10 text-zinc-200" />
              <CarouselNext className="absolute right-8 z-10 text-zinc-200" />
            </Carousel>
          </div>
        </div>

        <div className="space-y-4 p-4">
          <div className="flex flex-wrap items-center gap-2 text-xs text-gray-500 md:text-sm">
            <span>{room.guests} Guests</span>
            <span className="h-4 w-px bg-gray-300 sm:inline-block"></span>
            <span>{room.bed_type}</span>
            <span className="h-4 w-px bg-gray-300 sm:inline-block"></span>
            <span>{room.room_size} sqm</span>
          </div>

          <p className="text-sm text-gray-600">{room.room_description}</p>

          <div className="space-y-2">
            <button
              className="flex w-full items-center justify-between py-2 text-left font-semibold"
              onClick={() => setShowAmenities(!showAmenities)}
              aria-expanded={showAmenities}
              aria-controls="amenities-list"
            >
              Room Amenities
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-5 w-5 transition-transform ${
                  showAmenities ? "rotate-180" : ""
                }`}
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>

            {showAmenities && (
              <ul
                id="amenities-list"
                className="grid grid-cols-1 gap-2 text-xs text-gray-600 sm:grid-cols-2 md:text-sm"
              >
                {room.amenities?.map((amenity, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-gray-400"></span>
                    {amenity}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
