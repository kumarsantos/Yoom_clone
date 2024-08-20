"use client";
import React, { useState } from "react";
import HomeCard from "./HomeCard";
import { useRouter } from "next/navigation";
import MeetingModal from "./MeetingModal";

const MeetingTypeList = () => {
  const [meetingState, setMeetingState] = useState<
    "isScheduleMeeting" | "isJoiningMeeting" | "isInstantMeeting" | undefined
  >();
  const router = useRouter();

  const handleClick = (value: any) => {
    setMeetingState(value);
  };
  const createMeeting = () => {};

  return (
    <section className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
      <HomeCard
        bgColor={"bg-orange-1"}
        src={"/icons/add-meeting.svg"}
        title={"New Meeting"}
        description={"Start an instant meeting"}
        handleClick={(e) => handleClick("isInstantMeeting")}
      />
      <HomeCard
        bgColor={"bg-blue-1"}
        src={"/icons/schedule.svg"}
        title={"Schedule Meeting"}
        description={"Plan your meeting"}
        handleClick={(e) => handleClick("isScheduleMeeting")}
      />

      <HomeCard
        bgColor={"bg-purple-1"}
        src={"/icons/recordings.svg"}
        title={"View Recording"}
        description={"Check out your recordings"}
        handleClick={(e) => router.push("/recordings")}
      />

      <HomeCard
        bgColor={"bg-yellow-1"}
        src={"/icons/join-meeting.svg"}
        title={"Join Meeting"}
        description={"Via invitation link"}
        handleClick={(e) => handleClick("isJoiningMeeting")}
      />
      <MeetingModal
        isOpen={meetingState === "isInstantMeeting"}
        onClose={() => setMeetingState(undefined)}
        title="Start an Instant Meeting"
        className="text-center"
        buttonText="Start Meeting"
        handleClick={createMeeting}
      />
    </section>
  );
};

export default MeetingTypeList;