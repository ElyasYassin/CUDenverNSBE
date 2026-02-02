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
                    "Hello my name is Ridwan, I am"
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
                    "Hello my name is raheem I am"
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
                    "Hello my name is raheem I am"
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
                    "Hello my name is raheem I am"
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
                    "Hello my name is raheem I am"
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
                    "Hello my name is raheem I am"
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
                    "Hello my name is raheem I am"
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
                    /*src={AbealPic} */
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
                    "Hello my name is raheem I am"
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
