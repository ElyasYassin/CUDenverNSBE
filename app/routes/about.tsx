import type { Route } from "./+types/about";
import NSBE_Logo from "../images/NSBE_Logo.png";
import RaheemsPic from "../images/Board/RaheemNSBE.jpg";
import ElyasPic from "../images/Board/ElyasNSBE.jpg";
import KamsPic from "../images/Board/KamNSBE.jpg";
import RidwanPic from "../images/Board/RidwanNSBE.jpg"
import ATBPic from "../images/Board/ATBNSBE.jpg"
import AbealPic from "../images/Board/AbealNSBE.jpg"
import MoPic from "../images/Board/MoNSBE.jpg"
import AhmedAbdiPic from "../images/Board/AhmedAbdiNSBE.jpg"
import LynnPic from "../images/Board/LynnNSBE.jpg"
import BushraPic from "../images/Board/BushraNSBE.jpg"
export function meta({}: Route.MetaArgs) {
  return [
    { title: "About NSBE - National Society of Black Engineers" }, // Meta function says what page is about
    { name: "description", content: "Learn about the National Society of Black Engineers, our mission, and our commitment to increasing the number of culturally responsible Black engineers." },
  ];
}

export default function About() {
  return (
    <main className="container mx-auto px-6 py-16">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <img 
            src={NSBE_Logo} 
            alt="NSBE Logo" 
            className="h-20 w-auto max-w-[180px] mx-auto mb-8"
          />
          <h1 className="text-5xl font-display font-light text-gray-900 dark:text-white">
            About NSBE
          </h1>
        </div>
        
        <div className="space-y-24">
          <section>
            <h2 className="text-3xl font-display font-light text-gray-900 dark:text-white mb-6">
              Our Mission
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              To increase the number of culturally responsible Black engineers who excel academically,
              succeed professionally, and positively impact the community.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-display font-light text-gray-900 dark:text-white mb-6">
              CU Denver Chapter
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              Founded to empower underrepresented engineers through mentorship, community, and excellence.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-display font-light text-gray-900 dark:text-white mb-12">
              Executive Board
            </h2>
            <div className="grid md:grid-cols-3 gap-8">  {/* Kameryn Kellys section */}
              <div className="border-l-4 border-[#00000] pl-6">
                <img 
                    src={KamsPic}
                    alt="KamsPic" 
                    className="h-20 w-auto max-w-[180px] mx-auto mb-8"
                  />
                <h3 className="text-xl font-display font-semibold text-gray-900 dark:text-white mb-2">
                  Kameren Kelly
                </h3>
                <p className="text-gray-600 dark:text-gray-100 mb-4">
                  President
                </p>
                <p className="text-gray-600 dark:text-gray-400 mb-4">               
                    "My name is Kameren Kelly, and I am a senior in mechanical engineering at the University of Colorado Denver, as well as your CU Denver NSBE Chapter President. My goal right after undergrad is to pursue a master's degree in robotics.
                    After college, I intend to pursue startup companies and roles with a heavy focus on interdisciplinary skills. In my free time, I love to rock climb, do calisthenics workouts, and enjoy media related to Cyberpunk."
                  </p>
                <a
                  href="https://www.linkedin.com/in/kameren-kelly-60a380213/"
                  target="_blank"
                  rel="nonopener nonreferrer"
                  className="text-[#0A66C2] hover:underline underline-offset-4 text-sm"
                >
                  LinkedIn →
                </a>
              </div>

              <div className="border-l-4 border-[#00000] pl-6"> {/*Ridwans Section */}
                  <img 
                    src={RidwanPic} 
                    alt="RidwansPic" 
                    className="h-20 w-auto max-w-[180px] mx-auto mb-8"
                  />
                  <h3 className= "text-xl font-display font-semibold text-gray-900 dark:text-white mb-2">
                    Ridwan Mohamud
                  </h3>
                  <h2 className="text-gray-600 dark:text-gray-200 mb-4">
                  Vice President
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">               
                    "Hi! I'm Ridwan, a fourth-year Computer Science major at the University of Colorado Denver and the current Vice President of NSBE. Outside of school and NSBE, 
                    I enjoy staying active in my community, gaming, and spending time outdoors. I'm especially proud of my academic projects, where I've applied machine learning and software 
                    development to build creative, practical solutions while strengthening my technical and problem-solving skills."
                  </p>
                  <a
                    href= "https://www.linkedin.com/in/ridwan-mohamud-b8576a324/"
                    target="_blank"
                    rel="nonopener nonreferrer"
                    className="text-[#0A66C2] hover:underline underline-offset-4 text-sm"
                    
                    >
                      LinkedIn →

                  </a>
              </div>

              <div className="border-l-4 border-[#00000] pl-6"> {/* Raheem Misherghis Section */}
                  <img 
                    src={RaheemsPic} 
                    alt="RaheemsPic" 
                    className="h-20 w-auto max-w-[180px] mx-auto mb-8"
                  />
                  <h3 className= "text-xl font-display font-semibold text-gray-900 dark:text-white mb-2">
                    Raheem Misherghi
                  </h3>
                  <h2 className="text-gray-600 dark:text-gray-200 mb-4">
                  Treasurer
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">               
                    "Hello, my name is Raheem Misherghi. I am a junior at CU Denver studying computer science with a certificate in cybersecurity, and I also work in IT for the university. 
                    I enjoy pursuing new projects that connect to my interests outside of school, especially when they allow me to apply technical skills in streamlined ways. Outside of academics and work, I like to travel, play sports, and explore world history."
                  </p>
                  <a
                    href= "https://www.linkedin.com/in/raheem-misherghi/"
                    target="_blank"
                    rel="nonopener nonreferrer"
                    className="text-[#0A66C2] hover:underline underline-offset-4 text-sm"
                    
                    >
                      LinkedIn →

                  </a>

              </div>

               <div className="border-l-4 border-[#00000] pl-6"> {/* Abeal Gebreziabher Section */}
                  <img 
                    src={AbealPic} 
                    alt="AbealPic" 
                    className="h-20 w-auto max-w-[180px] mx-auto mb-8"
                  />
                  <h3 className= "text-xl font-display font-semibold text-gray-900 dark:text-white mb-2">
                    Abeal Gebreziabher
                  </h3>
                  <h2 className="text-gray-600 dark:text-gray-100 mb-4">
                  Senator
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">            
                    "Hello, my name is Abeal Gebreziabher and I am a Computer Science major at the University of Colorado Denver. "
                  </p>
                  <a
                    href= "https://www.linkedin.com/in/abeal-gebreziabher-962bb8354/"
                    target="_blank"
                    rel="nonopener nonreferrer"
                    className="text-[#0A66C2] hover:underline underline-offset-4 text-sm"
                    
                    >
                      LinkedIn →

                  </a>

              </div>

               <div className="border-l-4 border-[#00000] pl-6"> {/* Ahmed Robles Section */}
                  <img 
                    src={ATBPic} 
                    alt="ATBPic" 
                    className="h-20 w-auto max-w-[180px] mx-auto mb-8"
                  />
                  <h3 className= "text-xl font-display font-semibold text-gray-900 dark:text-white mb-2">
                    Ahmed Roble
                  </h3>
                  <h2 className="text-gray-600 dark:text-gray-100 mb-4">
                  Senator
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">               
                    "Hello my name is Ahmed Roble. I am a third year Information Systems major at the Community College of Denver. My academic interests are primarly focused around computer architecture and technology. In my free time, I like to play and watch basketball,
                    hang out with friends, and watch anime. I also enjoy exploring new tools and technological software to solve everyday problems. 
                  </p>
                  <a
                    href= "https://www.linkedin.com/in/ahmedroble3/"
                    target="_blank"
                    rel="nonopener nonreferrer"
                    className="text-[#0A66C2] hover:underline underline-offset-4 text-sm"
                    
                    >
                      LinkedIn →

                  </a>

              </div>


      
              <div className="border-l-4 border-[#00000] pl-6"> {/* Ahmed Abdis Section */}
                  <img 
                    src={AhmedAbdiPic} 
                    alt="Chubbs Pic" 
                    className="h-20 w-auto max-w-[180px] mx-auto mb-8"
                  />
                  <h3 className= "text-xl font-display font-semibold text-gray-900 dark:text-white mb-2">
                    Ahmed Abdi
                  </h3>
                  <h2 className="text-gray-600 dark:text-gray-100 mb-4">
                  Communications
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">               
                    "Hi everyone, my name is Ahmed Abdi. I'm a junior majoring in Computer Science and Data Science at MSU Denver. I'm passionate about building projects that connect what we learn in class to real-world impact. 
                    Right now, I'm developing a machine learning library from scratch. Outside of school, I love photography and traveling. This year, I'm primarily focused on helping grow NSBE's community through events, opportunities, and collaboration."
                  </p>
                  <a
                    href= "https://www.linkedin.com/in/ahmed-abdi-ab22532a1/"
                    target="_blank"
                    rel="nonopener nonreferrer"
                    className="text-[#0A66C2] hover:underline underline-offset-4 text-sm"
                    
                    >
                      LinkedIn →

                  </a>

              </div>

              <div className="border-l-4 border-[#00000] pl-6">{/* Elyas Larfi section */}
                <img 
                    src={ElyasPic} 
                    alt="ElyasPic" 
                    className="h-20 w-auto max-w-[180px] mx-auto mb-8"
                  />
                <h3 className="text-xl font-display font-semibold text-gray-900 dark:text-white mb-2">
                  Elyas Larfi
                </h3>
                <p className="text-gray-600 dark:text-gray-100 mb-4">
                  Programs Chair
                </p>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  "Hi, my name is Elyas Larfi. I'm a senior majoring in Computer Science at CU Denver, 
                  with experience in AI research, robotics projects, aswell as finishing a software engineering internship with a biotech startup. Outside of academics, I enjoy gaming, traveling, MMA, and photography. I'm especially interested in advancing autonomous systems and healthcare robotics.
                  I have long-term aspirations of pursuing a PhD and contributing to innovations in autonomous systems and healthcare robotics. "
                </p>
                <a
                  href="https://linkedin.com/in/elyaslarfi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#0A66C2] hover:underline underline-offset-4 text-sm"
                >
                  LinkedIn →
                </a>
              </div>

              <div className="border-l-4 border-[#00000] pl-6"> {/* Lynn Sayed */}
                  <img 
                    src={LynnPic} 
                    alt="LynnPic" 
                    className="h-20 w-auto max-w-[180px] mx-auto mb-8"
                  />
                  <h3 className= "text-xl font-display font-semibold text-gray-900 dark:text-white mb-2">
                    Lynn Sayed
                  </h3>
                  <h2 className="text-gray-600 dark:text-gray-100 mb-4">
                  Secretary
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">               
                    "Hey, my name is Lynn Sayed and I am an Information Systems major with a minor in Computer Engineering. I'm passionate about combining technology, leadership, and equity to create meaningful impact. Outside of school, I love to watch cartoons, draw,
                    volunteer, and make/edit videos. I am also the oldest sibling of four and have two adorable cats!"
                  </p>
                  <a
                    href= "https://www.linkedin.com/in/lynn-sayed/"
                    target="_blank"
                    rel="nonopener nonreferrer"
                    className="text-[#0A66C2] hover:underline underline-offset-4 text-sm"
                    
                    >
                      LinkedIn →

                  </a>

              </div>

              <div className="border-l-4 border-[#00000] pl-6"> {/* Mohammed Sultans Section */}
                  <img 
                    src={MoPic} 
                    alt="MoPic" 
                    className="h-20 w-auto max-w-[180px] mx-auto mb-8"
                  />
                  <h3 className= "text-xl font-display font-semibold text-gray-900 dark:text-white mb-2">
                    Mohammed Sultan
                  </h3>
                  <h2 className="text-gray-600 dark:text-gray-100 mb-4">
                  Professional Delegate
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">               
                    "I'm Mohammed Sultan. I'm studying information systems at the Unversity of Colorado Denver and am currently in my final year. If i were to describe the kind of person I am,
                    I'd say that I spend a majority of my time moving around rather than sitting, participating in hiking when the weathers ghood, playing basketball whenever opportunities to playu arise, and snowboaridng whenever the snow caves in.
                    I like being outside with my community, I am really focused on my religion, and love keeping life simple, doing good things, with good views, and meeting good people "
                  </p>
                  <a
                    href= "https://www.linkedin.com/in/mohammedtahirsultan/"
                    target="_blank"
                    rel="nonopener nonreferrer"
                    className="text-[#0A66C2] hover:underline underline-offset-4 text-sm"
                    
                    >
                      LinkedIn →

                  </a>

              </div>

              <div className="border-l-4 border-[#00000] pl-6"> {/* Bushra Hashi */}
                  <img 
                    src={BushraPic  } 
                    alt="BushraPicture" 
                    className="h-20 w-auto max-w-[180px] mx-auto mb-8"
                  />
                  <h3 className= "text-xl font-display font-semibold text-gray-900 dark:text-white mb-2">
                    Bushra Hashi
                  </h3>
                  <h2 className="text-gray-600 dark:text-gray-100 mb-4">
                  Freshmen Representative
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">               
                    "Hi! I'm Bushra, a first-generation student at CU Denver studying Information Management and Cybersecurity/Info Systems. I am passionate about STEM, leadership, and helping others grow.
                     When I'm not studying, I love traveling, exploring new cultures, and learning from different prespectives."
                  </p>
                  <a
                    href= "https://www.linkedin.com/in/bushra-hashi/"
                    target="_blank"
                    rel="nonopener nonreferrer"
                    className="text-[#0A66C2] hover:underline underline-offset-4 text-sm"
                    
                    >
                      LinkedIn →

                  </a>

              </div>


            </div>
          </section>
        </div>
      </div>
    </main>
  );
}


