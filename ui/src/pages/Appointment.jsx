/* eslint-disable no-unused-vars */
import { useContext, useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { assets } from "../assets/assets";
import RelatedDoctors from "../components/RelatedDoctors";

const DAYS = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

// --------- HELPER FUNCTIONS (clean & reusable) ---------

function BookingModal() {}

const roundToNext30Minutes = (date) => {
  const minutes = date.getMinutes();

  if (minutes === 0 || minutes === 30) return date;

  const rounded = new Date(date);
  rounded.setMinutes(minutes < 30 ? 30 : 60, 0, 0);
  return rounded;
};

const formatTime = (date) =>
  date.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

const generateDaySlots = (baseDate) => {
  const start = new Date(baseDate);
  const end = new Date(baseDate);

  start.setHours(10, 0, 0, 0);
  end.setHours(21, 0, 0, 0);

  const now = new Date();

  // If today, start from "now rounded to next 30 mins"
  if (baseDate.toDateString() === now.toDateString()) {
    const nextSlot = roundToNext30Minutes(now);
    if (nextSlot.getHours() >= 21) return [];
    start.setTime(Math.max(start.getTime(), nextSlot.getTime()));
  }

  let slots = [];
  let current = new Date(start);

  while (current < end) {
    slots.push({
      datetime: new Date(current),
      time: formatTime(current),
    });

    current.setMinutes(current.getMinutes() + 30);
  }

  return slots;
};

const generateWeekSlots = () => {
  const today = new Date();
  let weekSlots = [];

  for (let i = 0; i < 7; i++) {
    const day = new Date(today);
    day.setDate(today.getDate() + i);

    const slots = generateDaySlots(day);
    if (slots.length) weekSlots.push(slots);
  }

  return weekSlots;
};

// --------- COMPONENT ---------

const Appointment = () => {
  const { docId } = useParams();
  const { doctors } = useContext(AppContext);

  const [docInfo, setDocInfo] = useState(null);
  const [docSlots, setDocSlots] = useState([]);
  const [slotIndex, setSlotIndex] = useState(0);
  const [slotTime, setSlotTime] = useState("");

  // ---- FIND DOCTOR ----
  useEffect(() => {
    if (!doctors || !docId) return;

    const found = doctors.find((doc) => doc._id === docId);
    setDocInfo(found || null);
  }, [doctors, docId]);

  const bookAppointment = () => {
    console.log(slotIndex, slotTime);
  };

  // ---- GENERATE SLOTS ONCE DOCTOR LOADS ----
  useEffect(() => {
    if (docInfo) {
      setDocSlots(generateWeekSlots());
      setSlotIndex(0);
      setSlotTime("");
    }
  }, [docInfo]);

  if (!docInfo) return null;

  return (
    <div>
      {/* -------- DOCTOR DETAILS -------- */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div>
          <img
            className="bg-primary w-full sm:max-w-72 rounded-lg"
            src={docInfo.image}
            alt={`Dr. ${docInfo.name}`}
          />
        </div>

        <div className="flex-1 border border-gray-400 rounded-lg p-8 py-7 bg-white mx-2 sm:mx-0 mt-[-80px] sm:mt-0">
          <p className="flex items-center gap-2 text-2xl font-medium text-gray-900">
            {docInfo.name}
            <img src={assets.verified_icon} alt="verified" />
          </p>

          <div className="flex items-center gap-2 text-sm mt-1 text-gray-600">
            <p>
              {docInfo.degree} - {docInfo.speciality}
            </p>
            <button className="py-0.5 px-2 border text-xs rounded-full">
              {docInfo.experience}
            </button>
          </div>

          <div>
            <p className="flex items-center gap-1 text-sm font-medium text-gray-900 mt-3">
              About <img src={assets.info_icon} alt="info" />
            </p>
            <p className="text-sm text-gray-500 max-w-[700px] mt-1">
              {docInfo.about}
            </p>
          </div>

          <p className="text-gray-500 font-medium mt-4">
            Appointment fee:{" "}
            <span className="text-gray-600">₹{docInfo.fees}</span>
          </p>
        </div>
      </div>

      {/* -------- BOOKING SLOTS -------- */}
      <div className="sm:ml-72 sm:pl-4 mt-4 font-medium text-gray-700">
        <p>Booking slots</p>

        {/* DAYS */}
        <div className="flex gap-3 items-center w-full overflow-x-scroll mt-4">
          {docSlots.length > 0 &&
            docSlots.map((daySlots, i) => {
              const first = daySlots[0];

              return (
                <div
                  key={first.datetime}
                  onClick={() => {
                    setSlotIndex(i);
                    setSlotTime("");
                  }}
                  className={`text-center py-6 min-w-16 rounded-full cursor-pointer ${
                    slotIndex === i
                      ? "bg-primary text-white"
                      : "border border-gray-200"
                  }`}
                >
                  <p>{DAYS[first.datetime.getDay()]}</p>
                  <p>{first.datetime.getDate()}</p>
                </div>
              );
            })}
        </div>

        {/* TIMES */}
        <div className="flex items-center gap-3 w-full overflow-x-scroll mt-4">
          {docSlots.length > 0 &&
            docSlots[slotIndex].map((slot) => (
              <p
                key={slot.datetime}
                onClick={() => setSlotTime(slot.time)}
                className={`text-sm font-light flex-shrink-0 px-5 py-2 rounded-full cursor-pointer ${
                  slot.time === slotTime
                    ? "bg-primary text-white"
                    : "text-gray-500 hover:text-gray-700 border border-gray-300"
                }`}
              >
                {slot.time.toLowerCase()}
              </p>
            ))}
        </div>

        <button
          className="bg-primary text-white text-sm font-light px-14 py-3 rounded-full my-6"
          onClick={bookAppointment}
        >
          Book an appointment
        </button>
      </div>

      <RelatedDoctors docId={docId} dept_id={docInfo.dept_id} />
    </div>
  );
};

export default Appointment;
