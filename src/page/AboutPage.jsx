import React from "react";
import profileImage from "../assets/profile.jpeg";

export default function AboutPage() {
  return (
    <div className="mt-20 p-5 lg:flex items-center gap-5">
      <div className="">
        <h1 className="mb-5 text-2xl font-medium">About Me</h1>
        <div className="relative overflow-hidden border-4 border-gray-300 rounded-lg">
          <img
            src={profileImage}
            alt="profile picture of samuel justus"
            className="block w-full rounded-lg max-w-[900px]"
          />
        </div>
      </div>
      <div>
        <h1 className="text-3xl font-bold my-5">Hi, i'm Samuel</h1>
        <p className="text-sm/6 mb-5 text-[#374151]">
          My name is samuel justus and I’m a software Developer who loves
          turning ideas into polished, user-focused products
        </p>
        <p className="text-sm/6 mb-5 text-[#374151]">
          In August 2023, I graduated from the University Of Nigeria, with a
          B.Sc in Geology & petroleum studies. Shortly after, I transitioned
          into tech driven by a deep curiosity and a passion for technology
        </p>
        <p className="text-sm/6 mb-5 text-[#374151]">
          I’ve always been drawn to building things that people actually use.
          Whether it’s a side project or a full product, I thrive on taking
          ideas from zero to launch
        </p>
        <p className="text-sm/6 mb-5 text-[#374151]">
          Right now, I’m focused on improving my skills, building public
          projects, and connecting with teams that value creativity, speed, and
          ownership."
        </p>
        <p className="text-sm/6 mb-5 text-[#374151]">
          I'm always open to new opportunities. whether it's freelance work, a
          full-time role, or a chance to collaborate on something meaningful.
        </p>

        <p className="text-sm/6 mb-5 text-[#374151]">
          If you’re looking for a developer who thinks like a builder and
          executes with speed, reach out here {" "}
          <a href="https://www.linkedin.com/in/justus-samuel/" target="_blank" class="text-purple-600 underline">
            let’s talk
          </a>
          .
        </p>
      </div>
    </div>
  );
}
