import profile from './assets/photo_2024-05-03_13-35-27.jpg';
import second from './assets/googleps.jpg';
import solvento from './assets/cropped-Spi-logo-2048x547.png';
import kadakareer from './assets/kadakareer.png';
import makati from './assets/makati-logo.png';
import v88 from "./assets/village_88_logo.jpeg";
import tac from './assets/tacpic.jpg';
import './App.css';

import * as React from "react";

function App(props) {
  return (
    <div className="flex flex-col bg-white">
      <div className="flex flex-col justify-center px-16 py-4 w-full border-b border-solid bg-gray-950 border-b-black border-b-opacity-0 max-md:px-5 max-md:max-w-full">
        <div className="flex gap-5 justify-between px-8 mx-5 max-md:flex-wrap max-md:px-5 max-md:mr-2.5 max-md:max-w-full">
          <div className="text-3xl font-bold tracking-tight leading-9 text-center text-gray-50">
            &lt;Devzi /&gt;
          </div>
          <div className="flex gap-5 justify-between items-center text-base font-medium leading-6 text-gray-300 whitespace-nowrap max-md:flex-wrap max-md:max-w-full">
            <div className="self-stretch my-auto">About</div>
            <div className="self-stretch my-auto">Work</div>
            <div className="self-stretch my-auto">Testimonials</div>
            <div className="self-stretch my-auto">Contact</div>
            <div className="self-stretch my-auto w-px h-6 bg-gray-800" />
            <div className="flex gap-5 justify-between self-stretch pl-1.5 text-gray-900">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/816cfe884d13badd8c67c4829b76f3865031aa7e3a5b4d7213d42c6833dc7fa5?"
                className="my-auto w-6 aspect-square"
              />
              <div className="grow justify-center px-4 py-1.5 bg-gray-50 rounded-xl">
                Download CV
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center px-16 py-12 w-full bg-gray-950 max-md:px-5 max-md:max-w-full">
        <div className="flex-wrap px-8 mx-5 my-12 max-md:px-5 max-md:my-10 max-md:mr-2.5 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
            <div className="flex flex-col w-[71%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow justify-center self-stretch py-2.5 max-w-screen-md max-md:mt-10 max-md:max-w-full">
                <div className="text-6xl font-bold tracking-tighter text-gray-50 leading-[72px] max-md:max-w-full max-md:text-4xl">
                  Hi, I’m Ezi 👋
                </div>
                <div className="mt-2 text-base leading-6 text-gray-300 max-md:max-w-full">
                  I'm a full stack developer committed to creating web applications 
                  that elevate user experiences. Demonstrating a strong aptitude 
                  for how front-end looks and back-end functionality.<br></br><br></br>
                  I do more than just coding. Systems engineering is something 
                  I'm very interested in. My curiosity extends to understanding 
                  the architecture and infrastructure that support applications. 
                  I ensure that the applications I create not only function flawlessly 
                  but are also supported by well-designed, resilient systems.
                </div>{" "}
                <div className="flex gap-2 justify-between mt-12 text-base leading-6 text-gray-300 max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/010a15f89799336923191fb7046b27fa45aa0bb65b69d824d7a3c849ecc78c01?"
                    className="w-6 aspect-square"
                  />{" "}
                  <div className="flex-auto max-md:max-w-full">
                    Makati City, Philippines
                  </div>
                </div>{" "}
                <div className="flex gap-4 self-start px-2 mt-2 text-base leading-6 text-gray-300 whitespace-nowrap">
                  <div className="my-auto w-2 h-2 bg-emerald-500 rounded-3xl" />{" "}
                  <div className="grow">Available for new projects</div>
                </div>{" "}
                <div className="flex gap-4 p-1.5 mt-12 max-w-full w-[116px] max-md:mt-10">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/13db3a51ab9998fe4ae51b4b216f51595bbac575d2d7a69e35fce38a0224375d?"
                    className="flex-1 shrink-0 w-full aspect-square"
                  />{" "}
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/ae15e50df4743b25a3d5b76088b51bde2ab26fdf852979c859d71e2bc3c0aaaa?"
                    className="flex-1 shrink-0 w-full aspect-square"
                  />{" "}
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/dfeabbcc91305c1996824f4ca03c9784f278bc017dcfa16c91885581c2d1a1a4?"
                    className="flex-1 shrink-0 w-full aspect-square"
                  />
                </div>
              </div>
            </div>{" "}
            <div className="flex flex-col ml-5 w-[29%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow pt-10 pl-10 max-md:mt-10">
                <div className="flex flex-col items-start pr-10 pb-10 bg-gray-700 border-8 border-solid border-[color:var(--Gray-Dark-Default,#030712)] max-md:pr-5">
                  <img
                    loading="lazy"
                    srcSet={profile}
                    className="z-10 -mt-10 w-full aspect-[1] object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>{" "}
      <div className="flex flex-col justify-center px-16 py-12 w-full bg-gray-900 max-md:px-5 max-md:max-w-full">
        <div className="flex flex-col px-8 mx-5 my-12 max-md:px-5 max-md:my-10 max-md:mr-2.5 max-md:max-w-full">
          <div className="justify-center self-center px-5 py-1 text-sm font-medium leading-5 text-gray-300 whitespace-nowrap bg-gray-700 rounded-xl">
            About me
          </div>{" "}
          <div className="flex-wrap mt-12 max-md:mt-10 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
              <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                <img
                  loading="lazy"
                  srcSet={second}
                  className="w-full h-auto object-cover max-md:mt-10 max-md:max-w-full"
                />
              </div>{" "}
              <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow self-stretch text-base leading-6 text-gray-300 max-md:mt-10 max-md:max-w-full">
                  <div className="text-3xl font-semibold tracking-tight leading-9 text-gray-50 max-md:max-w-full">
                    Curious about me? Here you have it:
                  </div>{" "}
                  <div className="mt-6 underline max-md:max-w-full">
                    <span className="text-gray-300">I'm a passionate, </span>
                    <a
                      href="https://www.figma.com/@shahsagarm"
                      className="text-gray-300 underline"
                      target="_blank"
                    >
                      self-proclaimed designer
                    </a>
                    <span className="text-gray-300">
                      {" "}
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </span>
                  </div>
                  <div className="mt-4 max-md:max-w-full">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                  </div>
                  <div className="mt-4 max-md:max-w-full">
                    I am very much a progressive thinker and enjoy working on
                    products end to end, from ideation all the way to
                    development.
                  </div>
                  <div className="mt-4 underline max-md:max-w-full">
                    <span className="text-gray-300">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, {" "}
                    </span>
                    <a
                      href="https://twitter.com/shahsagarm"
                      className="text-gray-300 underline"
                      target="_blank"
                    >
                      Twitter
                    </a>
                    <span className="text-gray-300">
                      {" "}
                      where I share tech-related bites and build in public, or
                      you can follow me on{" "}
                    </span>
                    <a
                      href="https://github.com/shahsagarm"
                      className="text-gray-300 underline"
                      target="_blank"
                    >
                      GitHub
                    </a>
                    <span className="text-gray-300">.</span>
                  </div>{" "}
                  <div className="mt-4 leading-[150%] max-md:max-w-full">
                    Finally, some quick bits about me.
                  </div>{" "}
                  <div className="flex gap-2.5 justify-between mt-4 whitespace-nowrap leading-[150%] max-md:flex-wrap max-md:max-w-full">
                    <div className="flex flex-col flex-1">
                      <div>BS in Computer Scinece major in Application Development</div>{" "}
                      <div className="mt-2.5">Full time freelancer</div>
                    </div>{" "}
                    <div className="flex flex-col flex-1">
                      <div>Avid learner</div>{" "}
                      <div className="mt-2.5">Aspiring Software Engineer</div>
                    </div>
                  </div>{" "}
                  <div className="mt-4 max-md:max-w-full">
                    One last thing, I'm available for freelance work, so feel
                    free to reach out and say hello! I promise I don't bite 😉
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>{" "}
      <div className="flex flex-col justify-center px-16 py-12 w-full text-gray-300 bg-gray-950 max-md:px-5 max-md:max-w-full">
        <div className="flex flex-col px-8 mx-5 my-12 max-md:px-5 max-md:my-10 max-md:mr-2.5 max-md:max-w-full">
          <div className="flex justify-center items-center px-16 max-md:px-5 max-md:max-w-full">
            <div className="flex flex-col max-w-full w-[576px]">
              <div className="justify-center self-center px-5 py-1 text-sm font-medium leading-5 whitespace-nowrap bg-gray-700 rounded-xl">
                Skills
              </div>{" "}
              <div className="mt-4 max-w-xl text-xl leading-7 text-center max-md:max-w-full">
                The skills, tools and technologies I am really good at: try iwn branch
              </div>
            </div>
          </div>{" "}
          <div className="flex gap-5 justify-between mt-12 text-lg leading-7 whitespace-nowrap max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
            <div className="flex flex-col flex-1 justify-center">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/ae1ac3d0b8f742ea388396233a0fc2fac722c2521bc16662a80f1e77d551833c?"
                className="self-center w-16 aspect-square"
              />{" "}
              <div className="mt-2">Javascript</div>
            </div>{" "}
            <div className="flex flex-col flex-1 justify-center">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/d2e6a4e8a8b39eebdb6112833f49cf7284c49f34cfa87317ef09657d7db8362b?"
                className="self-center w-16 aspect-square"
              />{" "}
              <div className="mt-2">Typescript</div>
            </div>{" "}
            <div className="flex flex-col flex-1 justify-end">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/a2577ef3e1131864b3d5bbb1894317fc821ea4cc1cad5fa757d7470484f21e15?"
                className="self-center aspect-[1.1] w-[70px]"
              />{" "}
              <div className="mt-2">React</div>
            </div>{" "}
            <div className="flex flex-col flex-1 justify-center">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/d9aba8831f289b82d5e7415f88becd616e80af9dce8437bcdde7104bbd19d9b8?"
                className="self-center w-16 aspect-square"
              />{" "}
              <div className="mt-2">Next.js</div>
            </div>{" "}
            <div className="flex flex-col flex-1 justify-center">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/cdbf70f3b182e880a85a00006614768a76b0efae8312a56536c205b7f41196fc?"
                className="self-center aspect-[1.02] w-[65px]"
              />{" "}
              <div className="mt-2">Node.js</div>
            </div>{" "}
            <div className="flex flex-col flex-1 justify-center">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/37362dec13330eae26b614d6a3379edd5cbaf7790e5634795915003b3072a389?"
                className="self-center w-16 aspect-square"
              />{" "}
              <div className="mt-2">Express.js</div>
            </div>{" "}
            <div className="flex flex-col flex-1 justify-center">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/82be942339a5ae08d17021b43824ea589e96ae150edbb7e53a87eddf694da344?"
                className="self-center aspect-[1.03] w-[66px]"
              />{" "}
              <div className="mt-2">Nest.js</div>
            </div>{" "}
            <div className="flex flex-col flex-1 justify-center">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/288c714ed456e7f9e9bb00a9f9f033dbf1773e86b79a3b1ee4c47fcad4a19e52?"
                className="self-center aspect-[1.23] w-[79px]"
              />{" "}
              <div className="mt-2">Socket.io</div>
            </div>
          </div>{" "}
          <div className="flex gap-5 justify-between mt-12 text-lg leading-7 whitespace-nowrap max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
            <div className="flex flex-col flex-1 justify-center">
              <img
                loading="lazy"
                srcSet="..."
                className="self-center aspect-[0.97] w-[62px]"
              />{" "}
              <div className="mt-2">PostgreSQL</div>
            </div>{" "}
            <div className="flex flex-col flex-1 justify-center">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/958267494732001c9c932bec3a487935cd7381de3e0dd18846f929e855ba6826?"
                className="self-center aspect-[0.47] w-[30px]"
              />{" "}
              <div className="mt-2">MongoDB</div>
            </div>{" "}
            <div className="flex flex-col flex-1 justify-center">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/652291bc158e5d75a66184375a96defdaad80bee097ad05118d4f5dd0e12df3b?"
                className="self-center w-16 aspect-square"
              />{" "}
              <div className="mt-2">Sass/Scss</div>
            </div>{" "}
            <div className="flex flex-col flex-1 justify-center">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/a65b205db44e70558956d1e8f5e5092f78cc44862e5bccc02ce25d8096a25c78?"
                className="self-center aspect-[1.64] w-[105px]"
              />{" "}
              <div className="mt-2">Tailwindcss</div>
            </div>{" "}
            <div className="flex flex-col flex-1 justify-center">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/6375e1b5920c21551f8b2117ef965682d7038a987f9ce9af2105e80963335220?"
                className="self-center aspect-[0.81] w-[52px]"
              />{" "}
              <div className="mt-2">Figma</div>
            </div>{" "}
            <div className="flex flex-col flex-1 justify-center">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/b9f3834a9da834313b87150cce209fb64ffd2dc4c676b98107342e673421bf21?"
                className="self-center aspect-[1.1] w-[70px]"
              />{" "}
              <div className="mt-2">Cypress</div>
            </div>{" "}
            <div className="flex flex-col flex-1 justify-center">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/07395fdeec7dc86d34216bf4efcb063a0683fbe0a78b504d1dc94b02cfacc84d?"
                className="self-center w-16 aspect-square"
              />{" "}
              <div className="mt-2">Storybook</div>
            </div>{" "}
            <div className="flex flex-col flex-1 justify-center items-center">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/c96ba05ff8fda2036be5e0b89b0de15c0837e16a77174847f2d8bca462dfab94?"
                className="w-16 aspect-square"
              />{" "}
              <div className="mt-2">Git</div>
            </div>
          </div>
        </div>
      </div>{" "}
      <div className="flex flex-col justify-center px-16 py-12 w-full bg-gray-900 max-md:px-5 max-md:max-w-full">
        <div className="flex flex-col justify-center items-center px-8 mx-5 my-12 max-md:px-5 max-md:my-10 max-md:mr-2.5 max-md:max-w-full">
          <div className="flex justify-center items-center self-stretch px-16 text-gray-300 max-md:px-5 max-md:max-w-full">
            <div className="flex flex-col max-w-full w-[576px]">
              <div className="justify-center self-center px-5 py-1 text-sm font-medium leading-5 whitespace-nowrap bg-gray-700 rounded-xl">
                Experience
              </div>{" "}
              <div className="mt-4 max-w-xl text-xl leading-7 text-center max-md:max-w-full">
                Here is a quick summary of my most recent experiences:
              </div>
            </div>
          </div>{" "}
          <div className="flex flex-col justify-center p-8 mt-12 max-w-full bg-gray-800 rounded-xl shadow-xl w-[896px] max-md:px-5 max-md:mt-10">
            <div className="flex gap-5 justify-between w-full max-md:flex-wrap max-md:max-w-full">
              <img
                loading="lazy"
                srcSet={solvento}
                className="self-start max-w-full aspect-[3.7] w-[102px]"
              />{" "}
              <div className="flex flex-col ml-5 w-[77%] max-md:ml-0 max-md:w-full">
                <div className="grow max-md:mt-10 max-md:max-w-full">
                  <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                    <div className="flex flex-col w-[72%] max-md:ml-0 max-md:w-full">
                      <div className="flex flex-col grow text-base leading-6 text-gray-300 max-md:mt-10">
                        <div className="text-xl font-semibold leading-7 text-gray-50 whitespace-nowrap">
                        System Engineer
                        </div>{" "}
                        <div className="mt-4">
                        • Designed and managed virtualized infrastructure for cloud and non-cloud platforms, ensuring scalability, security, and performance.
                        </div>{" "}
                        <div className="mt-1 leading-6">
                        • Conducted technical evaluations and provided IT management with recommendations on cloud technology adoption and capacity planning.
                        </div>{" "}
                        <div className="mt-1">
                        • Implemented and maintained internal enterprise virtualization environments, supporting business-critical applications and enhancing system reliability.
                        </div>{" "}
                        <div className="mt-1 leading-6">
                        • Collaborated with project teams to deliver technical solutions for clients, including system installation, configuration, and troubleshooting.
                        </div>
                      </div>
                    </div>{" "}
                    <div className="flex flex-col ml-5 w-[28%] max-md:ml-0 max-md:w-full">
                      <div className="text-base leading-6 text-gray-200 whitespace-nowrap max-md:mt-10">
                        Feb 2024 - Present
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>{" "}
          <div className="flex flex-col justify-center p-8 mt-12 max-w-full bg-gray-800 rounded-xl shadow-xl w-[896px] max-md:px-5 max-md:mt-10">
            <div className="max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
                <div className="flex flex-col w-[23%] max-md:ml-0 max-md:w-full">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/92134e0a3d91264fa5930deee4a7507472fa055e17e22acfc4e2b24032304535?"
                    className="max-w-full aspect-[3.7] w-[102px] max-md:mt-10"
                  />
                </div>{" "}
                <div className="flex flex-col ml-5 w-[77%] max-md:ml-0 max-md:w-full">
                  <div className="grow max-md:mt-10 max-md:max-w-full">
                    <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
                      <div className="flex flex-col w-[72%] max-md:ml-0 max-md:w-full">
                        <div className="flex flex-col grow text-base leading-6 text-gray-300 max-md:mt-10">
                          <div className="text-xl font-semibold leading-7 text-gray-50 whitespace-nowrap">
                          Freelance Mobile Developer
                          </div>{" "}
                          <div className="mt-4">
                          • Developed and maintained custom mobile applications for clients, ensuring high performance, user-friendly interfaces, and cross-platform compatibility.
                          </div>{" "}
                          <div className="mt-1">
                          • Collaborated with clients to gather requirements, define project scope, and deliver tailored mobile solutions.
                          </div>{" "}
                          <div className="mt-1 leading-6">
                          • Utilized frameworks like React Native and Flutter to create scalable and responsive mobile apps.
                          </div>{" "}
                          <div className="mt-1">
                          • Integrated third-party APIs, optimized mobile performance, and ensured the security of mobile applications.
                          </div>
                        </div>
                      </div>{" "}
                      <div className="flex flex-col ml-5 w-[28%] max-md:ml-0 max-md:w-full">
                        <div className="text-base leading-6 text-gray-200 whitespace-nowrap max-md:mt-10">
                          August 2024 - Present
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>{" "}
          <div className="flex flex-col justify-center p-8 mt-12 max-w-full bg-gray-800 rounded-xl shadow-xl w-[896px] max-md:px-5 max-md:mt-10">
            <div className="flex gap-5 justify-between w-full max-md:flex-wrap max-md:max-w-full">
              <img
                loading="lazy"
                srcSet={kadakareer}
                className="self-start max-w-full aspect-[3.7] w-[102px]"
              />{" "}
              <div className="flex flex-col ml-5 w-[77%] max-md:ml-0 max-md:w-full">
                <div className="grow max-md:mt-10 max-md:max-w-full">
                  <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                    <div className="flex flex-col w-[72%] max-md:ml-0 max-md:w-full">
                      <div className="flex flex-col grow text-base leading-6 text-gray-300 max-md:mt-10">
                        <div className="text-xl font-semibold leading-7 text-gray-50 whitespace-nowrap">
                        Product Engineer
                        </div>{" "}
                        <div className="mt-4">
                        • Enhancing existing products (Koach Konnector and Kareer Explorer) with new features and updates.
                        </div>{" "}
                        <div className="mt-1 leading-6">
                        • Developed new products to add to our platform
                        </div>{" "}
                        <div className="mt-1">
                        • Utilized frameworks like React, NodeJS, ExpressJS and Firebase to create scalable and responsive web applications.
                        </div>{" "}
                      </div>
                    </div>{" "}
                    <div className="flex flex-col ml-5 w-[28%] max-md:ml-0 max-md:w-full">
                      <div className="text-base leading-6 text-gray-200 whitespace-nowrap max-md:mt-10">
                      Jan 2024 - June 2024
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>{" "}
          <div className="flex flex-col justify-center p-8 mt-12 max-w-full bg-gray-800 rounded-xl shadow-xl w-[896px] max-md:px-5 max-md:mt-10">
            <div className="flex gap-5 justify-between w-full max-md:flex-wrap max-md:max-w-full">
              <img
                loading="lazy"
                srcSet={v88}
                className="self-start max-w-full w-[60px]"
              />{" "}
              <div className="flex flex-col ml-5 w-[77%] max-md:ml-0 max-md:w-full">
                <div className="grow max-md:mt-10 max-md:max-w-full">
                  <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                    <div className="flex flex-col w-[72%] max-md:ml-0 max-md:w-full">
                      <div className="flex flex-col grow text-base leading-6 text-gray-300 max-md:mt-10">
                        <div className="text-xl font-semibold leading-7 text-gray-50 whitespace-nowrap">
                        Full Stack Web Development Trainee
                        </div>{" "}
                        <div className="mt-4">
                        • Created various website using Javascript and PHP
                        </div>{" "}
                        
                      </div>
                    </div>{" "}
                    <div className="flex flex-col ml-5 w-[28%] max-md:ml-0 max-md:w-full">
                      <div className="text-base leading-6 text-gray-200 whitespace-nowrap max-md:mt-10">
                        Jan 2024 - April 2024
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>{" "}
          <div className="flex flex-col justify-center p-8 mt-12 max-w-full bg-gray-800 rounded-xl shadow-xl w-[896px] max-md:px-5 max-md:mt-10">
            <div className="flex gap-5 justify-between w-full max-md:flex-wrap max-md:max-w-full">
              <img
                loading="lazy"
                srcSet={makati}
                className="self-start max-w-full w-[60px]"
              />{" "}
              <div className="flex flex-col ml-5 w-[77%] max-md:ml-0 max-md:w-full">
                <div className="grow max-md:mt-10 max-md:max-w-full">
                  <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                    <div className="flex flex-col w-[72%] max-md:ml-0 max-md:w-full">
                      <div className="flex flex-col grow text-base leading-6 text-gray-300 max-md:mt-10">
                        <div className="text-xl font-semibold leading-7 text-gray-50 whitespace-nowrap">
                        IT Support OJT
                        </div>{" "}
                        <div className="mt-4">
                        • IT support at Pembo, Makati CIty Barangay Hall
                        </div>{" "}
                        <div className="mt-1 leading-6">
                        • I ensure that the barangay's data is accurate and organized.
                        </div>{" "}
                        <div className="mt-1 leading-6">
                        • I efficiently managed large datasets, adhering to established formats and procedures to maintain data integrity
                        </div>
                      </div>
                    </div>{" "}
                    <div className="flex flex-col ml-5 w-[28%] max-md:ml-0 max-md:w-full">
                      <div className="text-base leading-6 text-gray-200 whitespace-nowrap max-md:mt-10">
                        August 2023 - December 2023
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>{" "}
          <div className="flex flex-col justify-center p-8 mt-12 max-w-full bg-gray-800 rounded-xl shadow-xl w-[896px] max-md:px-5 max-md:mt-10">
            <div className="flex gap-5 justify-between w-full max-md:flex-wrap max-md:max-w-full">
              <img
                loading="lazy"
                srcSet={makati}
                className="self-start max-w-full w-[60px]"
              />{" "}
              <div className="flex flex-col ml-5 w-[77%] max-md:ml-0 max-md:w-full">
                <div className="grow max-md:mt-10 max-md:max-w-full">
                  <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                    <div className="flex flex-col w-[72%] max-md:ml-0 max-md:w-full">
                      <div className="flex flex-col grow text-base leading-6 text-gray-300 max-md:mt-10">
                        <div className="text-xl font-semibold leading-7 text-gray-50 whitespace-nowrap">
                        IT Support Intern
                        </div>{" "}
                        <div className="mt-4">
                        • IT support at Local Civil Registry Department, Makati City Hall 
                        </div>{" "}
                        <div className="mt-1 leading-6">
                        •  I ensure that the city hall's data regarding the birth certificates of the people in Makati City, dead or alive, is accurate and
                        organized
                        </div>{" "}
                        <div className="mt-1 leading-6">
                        • I efficiently managed large datasets, adhering to established formats and procedures to maintain data integrity.

                        </div>
                      </div>
                    </div>{" "}
                    <div className="flex flex-col ml-5 w-[28%] max-md:ml-0 max-md:w-full">
                      <div className="text-base leading-6 text-gray-200 whitespace-nowrap max-md:mt-10">
                        Jan 2021 - March 2020
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>{" "}
          <div className="flex flex-col justify-center p-8 mt-12 max-w-full bg-gray-800 rounded-xl shadow-xl w-[896px] max-md:px-5 max-md:mt-10">
            <div className="flex gap-5 justify-between w-full max-md:flex-wrap max-md:max-w-full">
              <img
                loading="lazy"
                srcSet={tac}
                className="self-start max-w-full w-[50px]"
              />{" "}
              <div className="flex flex-col ml-5 w-[77%] max-md:ml-0 max-md:w-full">
                <div className="grow max-md:mt-10 max-md:max-w-full">
                  <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                    <div className="flex flex-col w-[72%] max-md:ml-0 max-md:w-full">
                      <div className="flex flex-col grow text-base leading-6 text-gray-300 max-md:mt-10">
                        <div className="text-xl font-semibold leading-7 text-gray-50 whitespace-nowrap">
                        Business owner
                        </div>{" "}
                        <div className="mt-4">
                        • Importing action figure from suppliers in Japan and selling here in Philippines.
                        </div>{" "}
                      </div>
                    </div>{" "}
                    <div className="flex flex-col ml-5 w-[28%] max-md:ml-0 max-md:w-full">
                      <div className="text-base leading-6 text-gray-200 whitespace-nowrap max-md:mt-10">
                        Jan 2021 - Feb 2022
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>{" "}
      <div className="flex flex-col justify-center px-16 py-12 w-full bg-gray-950 max-md:px-5 max-md:max-w-full">
        <div className="flex flex-col justify-center px-8 mx-5 my-12 max-md:px-5 max-md:my-10 max-md:mr-2.5 max-md:max-w-full">
          <div className="flex justify-center items-center px-16 text-gray-300 max-md:px-5 max-md:max-w-full">
            <div className="flex flex-col max-w-full w-[576px]">
              <div className="justify-center self-center px-5 py-1 text-sm font-medium leading-5 whitespace-nowrap bg-gray-700 rounded-xl">
                Work
              </div>{" "}
              <div className="mt-4 max-w-xl text-xl leading-7 text-center max-md:max-w-full">
                Some of the noteworthy projects I have built:
              </div>
            </div>
          </div>{" "}
          <div className="mx-8 mt-12 bg-gray-800 rounded-xl shadow-xl max-md:mt-10 max-md:mr-2.5 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
              <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow justify-center self-stretch p-12 w-full bg-gray-700 rounded-xl border-r border-solid border-r-[color:var(--Gray-Dark-100,#1F2937)] max-md:px-5 max-md:max-w-full">
                  <img
                    loading="lazy"
                    srcSet="..."
                    className="w-full shadow-md aspect-[1.25] max-md:max-w-full"
                  />
                </div>
              </div>{" "}
              <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow items-start self-stretch px-12 py-12 text-sm font-medium leading-5 text-gray-300 rounded-xl max-md:px-5 max-md:max-w-full">
                  <div className="self-stretch text-xl font-semibold leading-7 text-gray-50 text-ellipsis max-md:max-w-full">
                  Project
                  </div>{" "}
                  <div className="self-stretch mt-6 text-base leading-6 max-md:max-w-full">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Maecenas nec urna ac tellus volutpat viverra. Vestibulum
                    ante ipsum primis in faucibus orci luctus et ultrices
                    posuere cubilia curae.
                  </div>{" "}
                  <div className="flex gap-2 pr-12 mt-6 whitespace-nowrap max-md:flex-wrap max-md:pr-5 max-md:max-w-full">
                    <div className="grow justify-center px-5 py-1 bg-gray-700 rounded-xl">
                      React
                    </div>{" "}
                    <div className="grow justify-center px-5 py-1 bg-gray-700 rounded-xl">
                      Next.js
                    </div>{" "}
                    <div className="grow justify-center px-5 py-1 bg-gray-700 rounded-xl">
                      Typescript
                    </div>{" "}
                    <div className="grow justify-center px-5 py-1 bg-gray-700 rounded-xl">
                      Nest.js
                    </div>
                  </div>{" "}
                  <div className="flex gap-2 mt-2 whitespace-nowrap max-md:flex-wrap max-md:max-w-full">
                    <div className="grow justify-center px-5 py-1 bg-gray-700 rounded-xl">
                      PostgreSQL
                    </div>{" "}
                    <div className="grow justify-center px-5 py-1 bg-gray-700 rounded-xl">
                      Tailwindcss
                    </div>{" "}
                    <div className="grow justify-center px-5 py-1 bg-gray-700 rounded-xl">
                      Figma
                    </div>{" "}
                    <div className="grow justify-center px-5 py-1 bg-gray-700 rounded-xl">
                      Cypress
                    </div>
                  </div>{" "}
                  <div className="flex gap-2 mt-2 whitespace-nowrap">
                    <div className="grow justify-center px-5 py-1 bg-gray-700 rounded-xl">
                      Storybook
                    </div>{" "}
                    <div className="justify-center px-5 py-1 bg-gray-700 rounded-xl aspect-[2.14]">
                      Git
                    </div>
                  </div>{" "}
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/f8a7711bd4739fa0086208b432221970c275e684119b1eb8fdd08ed40cbb64e0?"
                    className="mt-8 w-6 aspect-square"
                  />
                </div>
              </div>
            </div>
          </div>{" "}
          <div className="mx-8 mt-12 bg-gray-800 rounded-xl shadow-xl max-md:mt-10 max-md:mr-2.5 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
              <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow items-start self-stretch px-12 py-12 text-sm font-medium leading-5 text-gray-300 rounded-xl max-md:px-5 max-md:max-w-full">
                  <div className="self-stretch text-xl font-semibold leading-7 text-gray-50 text-ellipsis max-md:max-w-full">
                    Project
                  </div>{" "}
                  <div className="self-stretch mt-6 text-base leading-6 max-md:max-w-full">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Maecenas nec urna ac tellus volutpat viverra. Vestibulum
                    ante ipsum primis in faucibus orci luctus et ultrices
                    posuere cubilia curae.
                  </div>{" "}
                  <div className="flex gap-2 pr-12 mt-6 whitespace-nowrap max-md:flex-wrap max-md:pr-5 max-md:max-w-full">
                    <div className="grow justify-center px-5 py-1 bg-gray-700 rounded-xl">
                      React
                    </div>{" "}
                    <div className="grow justify-center px-5 py-1 bg-gray-700 rounded-xl">
                      Next.js
                    </div>{" "}
                    <div className="grow justify-center px-5 py-1 bg-gray-700 rounded-xl">
                      Typescript
                    </div>{" "}
                    <div className="grow justify-center px-5 py-1 bg-gray-700 rounded-xl">
                      Nest.js
                    </div>
                  </div>{" "}
                  <div className="flex gap-2 mt-2 whitespace-nowrap max-md:flex-wrap max-md:max-w-full">
                    <div className="grow justify-center px-5 py-1 bg-gray-700 rounded-xl">
                      PostgreSQL
                    </div>{" "}
                    <div className="grow justify-center px-5 py-1 bg-gray-700 rounded-xl">
                      Tailwindcss
                    </div>{" "}
                    <div className="grow justify-center px-5 py-1 bg-gray-700 rounded-xl">
                      Figma
                    </div>{" "}
                    <div className="grow justify-center px-5 py-1 bg-gray-700 rounded-xl">
                      Cypress
                    </div>
                  </div>{" "}
                  <div className="flex gap-2 mt-2 whitespace-nowrap">
                    <div className="grow justify-center px-5 py-1 bg-gray-700 rounded-xl">
                      Storybook
                    </div>{" "}
                    <div className="justify-center px-5 py-1 bg-gray-700 rounded-xl aspect-[2.14]">
                      Git
                    </div>
                  </div>{" "}
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/f8a7711bd4739fa0086208b432221970c275e684119b1eb8fdd08ed40cbb64e0?"
                    className="mt-8 w-6 aspect-square"
                  />
                </div>
              </div>{" "}
              <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow justify-center self-stretch p-12 w-full bg-gray-700 rounded-none border-l border-solid border-l-[color:var(--Gray-Dark-100,#1F2937)] max-md:px-5 max-md:max-w-full">
                  <img
                    loading="lazy"
                    srcSet="..."
                    className="w-full shadow-md aspect-[1.25] max-md:max-w-full"
                  />
                </div>
              </div>
            </div>
          </div>{" "}
          <div className="mx-8 mt-12 bg-gray-800 rounded-xl shadow-xl max-md:mt-10 max-md:mr-2.5 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
              <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow justify-center self-stretch p-12 w-full bg-gray-700 rounded-xl border-r border-solid border-r-[color:var(--Gray-Dark-100,#1F2937)] max-md:px-5 max-md:max-w-full">
                  <img
                    loading="lazy"
                    srcSet="..."
                    className="w-full shadow-md aspect-[1.25] max-md:max-w-full"
                  />
                </div>
              </div>{" "}
              <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow items-start self-stretch px-12 py-12 text-sm font-medium leading-5 text-gray-300 rounded-xl max-md:px-5 max-md:max-w-full">
                  <div className="self-stretch text-xl font-semibold leading-7 text-gray-50 text-ellipsis max-md:max-w-full">
                  Project
                  </div>{" "}
                  <div className="self-stretch mt-6 text-base leading-6 max-md:max-w-full">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Maecenas nec urna ac tellus volutpat viverra. Vestibulum
                    ante ipsum primis in faucibus orci luctus et ultrices
                    posuere cubilia curae.
                  </div>{" "}
                  <div className="flex gap-2 pr-12 mt-6 whitespace-nowrap max-md:flex-wrap max-md:pr-5 max-md:max-w-full">
                    <div className="grow justify-center px-5 py-1 bg-gray-700 rounded-xl">
                      React
                    </div>{" "}
                    <div className="grow justify-center px-5 py-1 bg-gray-700 rounded-xl">
                      Next.js
                    </div>{" "}
                    <div className="grow justify-center px-5 py-1 bg-gray-700 rounded-xl">
                      Typescript
                    </div>{" "}
                    <div className="grow justify-center px-5 py-1 bg-gray-700 rounded-xl">
                      Nest.js
                    </div>
                  </div>{" "}
                  <div className="flex gap-2 mt-2 whitespace-nowrap max-md:flex-wrap max-md:max-w-full">
                    <div className="grow justify-center px-5 py-1 bg-gray-700 rounded-xl">
                      PostgreSQL
                    </div>{" "}
                    <div className="grow justify-center px-5 py-1 bg-gray-700 rounded-xl">
                      Tailwindcss
                    </div>{" "}
                    <div className="grow justify-center px-5 py-1 bg-gray-700 rounded-xl">
                      Figma
                    </div>{" "}
                    <div className="grow justify-center px-5 py-1 bg-gray-700 rounded-xl">
                      Cypress
                    </div>
                  </div>{" "}
                  <div className="flex gap-2 mt-2 whitespace-nowrap">
                    <div className="grow justify-center px-5 py-1 bg-gray-700 rounded-xl">
                      Storybook
                    </div>{" "}
                    <div className="justify-center px-5 py-1 bg-gray-700 rounded-xl aspect-[2.14]">
                      Git
                    </div>
                  </div>{" "}
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/f8a7711bd4739fa0086208b432221970c275e684119b1eb8fdd08ed40cbb64e0?"
                    className="mt-8 w-6 aspect-square"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>{" "}
      <div className="flex flex-col justify-center px-16 py-12 w-full bg-gray-900 max-md:px-5 max-md:max-w-full">
        <div className="flex flex-col justify-center px-8 mx-5 my-12 max-md:px-5 max-md:my-10 max-md:mr-2.5 max-md:max-w-full">
          <div className="flex justify-center items-center px-16 text-gray-300 max-md:px-5 max-md:max-w-full">
            <div className="flex flex-col max-w-full w-[576px]">
              <div className="justify-center self-center px-5 py-1 text-sm font-medium leading-5 whitespace-nowrap bg-gray-700 rounded-xl">
                Testimonials
              </div>{" "}
              <div className="mt-4 max-w-xl text-xl leading-7 text-center max-md:max-w-full">
                Nice things people have said about me:
              </div>
            </div>
          </div>{" "}
          <div className="flex-wrap mt-12 rounded-xl max-md:mt-10 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
              <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow self-stretch px-12 py-12 w-full bg-gray-800 rounded-xl shadow-xl max-md:px-5 max-md:mt-10">
                  <div className="flex justify-center items-center self-center px-3 w-16 h-16 bg-gray-400 aspect-square rounded-[64px]">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/5846ff8f7d815f0c3ef0a23fe043e65e47bd128809daaa76c7877c03e349fba4?"
                      className="w-full aspect-square"
                    />
                  </div>{" "}
                  <div className="mt-6 text-base leading-6 text-gray-300">
                    “Job well done! I am really impressed. He is very very good
                    at what he does:) I would recommend Sagar and will rehire in
                    the future for Frontend development.”
                  </div>{" "}
                  <div className="mt-6 text-xl font-semibold leading-7 text-center text-gray-50 whitespace-nowrap">
                    John Doe
                  </div>{" "}
                  <div className="mt-1 text-sm leading-5 text-center text-gray-300 whitespace-nowrap">
                    Founder - xyz.com
                  </div>
                </div>
              </div>{" "}
              <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow self-stretch px-12 py-12 w-full bg-gray-800 rounded-xl shadow-xl max-md:px-5 max-md:mt-10">
                  <div className="flex justify-center items-center self-center px-3 w-16 h-16 bg-gray-400 aspect-square rounded-[64px]">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/e808f83970e540f165edc490f074dbc30a3c4da6430f6735da63d105be7fcc8d?"
                      className="w-full aspect-square"
                    />
                  </div>{" "}
                  <div className="mt-6 text-base leading-6 text-gray-300">
                    “Great guy, highly recommended for any COMPLEX front-end
                    development job! His skills are top-notch and he will be an
                    amazing addition to any team.”
                  </div>{" "}
                  <div className="mt-6 text-xl font-semibold leading-7 text-center text-gray-50 whitespace-nowrap">
                    John Doe
                  </div>{" "}
                  <div className="mt-1 text-sm leading-5 text-center text-gray-300 whitespace-nowrap">
                    Founder - abc.com
                  </div>
                </div>
              </div>{" "}
              <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow self-stretch p-12 w-full bg-gray-800 rounded-xl shadow-xl max-md:px-5 max-md:mt-10">
                  <div className="flex justify-center items-center self-center px-3 w-16 h-16 bg-gray-400 aspect-square rounded-[64px]">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/91133a5abbe3f984e33ef131142fc36dde36481cdce54db782fc9b0265a9e5e6?"
                      className="w-full aspect-square"
                    />
                  </div>{" "}
                  <div className="mt-6 text-base leading-6 text-gray-300 text-ellipsis">
                    “Sagar was extremely easy and pleasant to work with and he
                    truly cares about the project being a success. Sagar has a
                    high level of knowledge and was able to work on my MERN
                    stack application without any issues.”
                  </div>{" "}
                  <div className="mt-6 text-xl font-semibold leading-7 text-center text-gray-50 whitespace-nowrap">
                    John Doe
                  </div>{" "}
                  <div className="mt-1 text-sm leading-5 text-center text-gray-300">
                    Freelancer
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>{" "}
      <div className="flex flex-col justify-center px-16 py-12 w-full bg-gray-950 max-md:px-5 max-md:max-w-full">
        <div className="flex flex-col justify-center items-center px-8 mx-5 my-12 max-md:px-5 max-md:my-10 max-md:mr-2.5 max-md:max-w-full">
          <div className="flex justify-center items-center self-stretch px-16 text-gray-300 max-md:px-5 max-md:max-w-full">
            <div className="flex flex-col max-w-full w-[576px]">
              <div className="justify-center self-center px-5 py-1 text-sm font-medium leading-5 whitespace-nowrap bg-gray-700 rounded-xl">
                Get in touch
              </div>{" "}
              <div className="mt-4 max-w-xl text-xl leading-7 text-center max-md:max-w-full">
                What’s next? Feel free to reach out to me if you're looking for
                a developer, support, consulting, have a query, or simply want to connect.
              </div>
            </div>
          </div>
          <div className="flex gap-5 justify-between items-center py-0.5 pr-1.5 mt-12 text-4xl font-semibold tracking-tighter leading-10 text-center text-gray-50 whitespace-nowrap max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/1b61b26faf0b0689cf92e5a357555a2384e1c35da7421efdabff1dd434310fc6?"
              className="self-stretch my-auto w-8 aspect-square"
            />
            <div className="flex-auto self-stretch max-md:max-w-full">
              ezegambong@gmail.com
            </div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/34dadcb943c4a5cc138a52f957b0b428caa30e1f738e8db0b39df7a135a635f1?"
              className="self-stretch my-auto w-8 aspect-square"
            />
          </div>
          <div className="flex gap-5 justify-between items-center py-0.5 pr-1.5 mt-4 text-4xl font-semibold tracking-tighter leading-10 text-center text-gray-50">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/e0dcfe9f892067ec0ed927748c91a711e26e58d20fd3f7be9a75bb53ad933b05?"
              className="self-stretch my-auto w-8 aspect-square"
            />
            <div className="flex-auto self-stretch">+639396132455</div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/34dadcb943c4a5cc138a52f957b0b428caa30e1f738e8db0b39df7a135a635f1?"
              className="self-stretch my-auto w-8 aspect-square"
            />
          </div>
          <div className="mt-12 text-base leading-6 text-gray-300 whitespace-nowrap max-md:mt-10">
            You may also find me on these platforms!
          </div>
          <div className="flex gap-4 p-1.5 mt-2 max-w-full w-[116px]">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/13db3a51ab9998fe4ae51b4b216f51595bbac575d2d7a69e35fce38a0224375d?"
              className="flex-1 shrink-0 w-full aspect-square"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/f98fa21bdb8509f55589b315abfe90f88863cae37de01661f8d7c12f01109ad6?"
              className="flex-1 shrink-0 w-full aspect-square"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/dfeabbcc91305c1996824f4ca03c9784f278bc017dcfa16c91885581c2d1a1a4?"
              className="flex-1 shrink-0 w-full aspect-square"
            />
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center px-16 py-6 w-full text-sm leading-5 text-red-500 whitespace-nowrap bg-gray-900 max-md:px-5 max-md:max-w-full">
        <div className="flex gap-2 justify-center">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/cbdd9229077cfc24dc9f182c45ae90f4a66168493f54880120db7d8b003e6a6b?"
            className="my-auto w-4 aspect-square"
          />
          <div className="grow underline">
            <span className="text-gray-300">2024 | </span>
            <a
              href="https://www.figma.com/@shahsagarm"
              className="text-gray-300 underline"
              target="_blank"
            >
              Designed
            </a>
            <span className="text-gray-300"> and </span>
            <a
              href=""
              className="text-gray-300 underline"
              target="_blank"
            >
              coded
            </a>
            <span className="text-gray-300"> with </span>
            <span className="text-red-500">❤</span>
            <span className="text-gray-300">️️ by Ezekielle Gambong</span>
          </div>
        </div>
      </div>
    </div>
  );
}




export default App;
