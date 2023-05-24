import { TypeAnimation } from "react-type-animation";
import NO348 from '../assets/videos/NO348.mp4';

function Banner(isVideo) {
  console.log(isVideo);
    return (
        (isVideo === true) ?
          <div className='flex justify-center h-screen'>
              <video autoPlay muted loop id="myVideo" className='object-cover w-full h-full'>
                <source src={NO348} type="video/mp4" />
              </video>
              <p className="lg:visible invisible text-2xl absolute px-6 lg:bottom-48 bottom-8 lg:tracking-widest">
                Meme Pepe <span className="lg:mx-10">+</span>
                AI-generated <span className="lg:mx-10">+</span>
                Community <span className="lg:mx-10">=</span>
                <span className="text-6xl align-middle">
                  <TypeAnimation
                      sequence={[
                        "PEPE",
                        1000,
                        "AIPEPE",
                        2000,
                      ]}
                      speed={1}
                  />
              </span>
              </p>
          </div>
            :
          <div className="banner h-full">
            <h1 className="flex justify-center h-screen">
              <p className="text-2xl absolute bottom-48 tracking-widest text-center">
                Meme Pepe <br />
                + <br />
                AI-generated <br />
                + <br />
                Community <br />
                = <br />
                <span className="text-6xl align-middle">
                      <TypeAnimation
                          sequence={[
                            "PEPE",
                            1000,
                            "AIPEPE",
                            2000,
                          ]}
                          speed={1}
                      />
                  </span>
              </p>
            </h1>
          </div>
    )
}

export default Banner;
