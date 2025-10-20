import React from "react";

type Member = {
  name: string;
  position: string;
  image: string;
  bio: string;
};

const members: Member[] = [
  {
    name: "Raheem Misherghi",
    position: "Treasurer",
    image: "/Raheem.JPG",
    bio: "Leads the NSBE UC Denver Chapter, coordinating events and partnerships to empower Black engineers on campus.",
  },
  {
    name: "Elyas Larfi",
    position: "Programs Chair",
    image: "/Elyas.JPG",
    bio: `Hi, my name is Elyas Larfi. I'm a senior in Computer Science at CU Denver and currently serving as the programs chair of NSBE's CU Denver chapter. My background spans AI research in computational motor control, robotics projects such as autonomous rovers and robotic arms, and a software engineering internship at a biotech startup.
    
    Beyond academics, I enjoy gaming, traveling, mixed-martial arts, and photography. I'm especially interested in how AI and robotics can bridge the gap between simulation and reality, with long-term aspirations of pursuing a PhD and contributing to innovations in autonomous systems and healthcare robotics.`
         
    
  },
];

export default function Board() {
  return (
    <main className="min-h-screen bg-gray-900 text-white py-12 px-6">
      <h1 className="text-4xl font-bold text-center mb-4">2025-26 NSBE Executive Board</h1>
      <p className="text-center max-w-2xl mx-auto mb-10 text-gray-300">
        Meet the crew driving UC Denver's chapter forward. Each member plays a
        vital role in promoting academic excellence, professional development,
        and community engagement.
      </p>

      {/* President Section */}
      <section className="text-center mb-16">
        <img
          src="/raheem.jpg"
          alt="Kameryn Kelly"
          className="w-64 h-64 mx-auto rounded-xl object-contain mb-6 shadow-lg"
        />
        <h2 className="text-3xl font-bold text-white">Kameryn Kelly</h2>
        <p className="text-yellow-500 mb-3">🏛️President</p>
        <p className="text-gray-300 max-w-xl mx-auto mb-4">
          Leads the NSBE UC Denver Chapter, coordinating events and partnerships to empower Black engineers on campus.
        </p>
        <p className="text-gray-400">📧 kameryn.kelly@ucdenver.edu</p>
      </section>

      {/* Other Members */}
      <div className="flex flex-wrap justify-center gap-8">
        {members.map((member) => (
          <div
            key={member.name}
            className="bg-gray-800 rounded-xl p-6 w-72 shadow-md text-center hover:scale-105 transition-transform"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-[350px] h-[350px] object-cover object-top rounded-xl mb-4 mx-auto"


            />
            <h2 className="text-2xl font-semibold">{member.name}</h2>
            <p className="text-blue-300 mb-2">{member.position}</p>
            <p className="text-white text-sm whitespace-pre-line">{member.bio}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
