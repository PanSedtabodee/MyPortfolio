import { useState } from "react";
import IconsInstagram from "../../Icon/IconsInstagram.jsx";
import IconsLinkedin from "../../Icon/IconsLinkedin.jsx";
import IconsGithub from "../../Icon/IconsGithub.jsx";
import IconsFacebook from "../../Icon/IconsFacebook.jsx";
export default function ContactMe() {
  const email = "p_p_pan45@hotmail.com";
  const [showLinkedinText, setShowLinkedinText] = useState(false);
  const [showInstagramText, setShowInstagramText] = useState(false);
  const [showFacebookText, setShowFacebookText] = useState(false);
  const [showGithubText, setShowGithubText] = useState(false);
  return (
    <section id="contactMe" className="contact-me">
      <div>
        <div className="max-w-screen-xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base font-semibold text-blue-600 tracking-wide uppercase">
              ช่องทางการติดต่อ
            </h2>
            <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            Contact me
            </p>
            <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
              โปรดส่ง Email มาที่ {email}
            </p>
            <p className="max-w-xl mx-auto text-xl text-gray-500 mt-2">or</p>

            <div className="flex justify-center items-center my-1">
              <div className="Linkendin justify-center items-center my-3">
                <div className="Instagram justify-center justify-items-center mx-5">
                  <a
                    href="https://www.linkedin.com/in/sedtabodee-boonphitak-b9a8ab28a/"
                    className="justify-items-center"
                    target="_blank"
                    onMouseEnter={() => setShowLinkedinText(true)}
                    onMouseLeave={() => setShowLinkedinText(false)}
                  >
                    <IconsLinkedin className="w-full h-8 justify-items-center" />
                    {showLinkedinText && (
                      <p className="w-fit text-gray-500">Linkedin</p>
                    )}
                  </a>
                </div>
              </div>

              <div className="Instagram justify-center items-center my-3">
                <div className="Instagram justify-center justify-items-center mx-5">
                  <a
                    href="https://www.instagram.com/_peterpeterpan_/"
                    target="_blank"
                    onMouseEnter={() => setShowInstagramText(true)}
                    onMouseLeave={() => setShowInstagramText(false)}
                  >
                    <IconsInstagram className="w-full h-8" />
                    {showInstagramText && (
                      <p className="w-fit text-gray-500">Instagram</p>
                    )}
                  </a>
                </div>
              </div>

              <div className="Facebook justify-center items-center my-3">
                <div className="justify-center justify-items-center mx-5">
                  <a
                    href="https://www.facebook.com/profile.php?id=100003733633423"
                    target="_blank"
                    onMouseEnter={() => setShowFacebookText(true)}
                    onMouseLeave={() => setShowFacebookText(false)}
                  >
                    <IconsFacebook className="w-full h-8" />
                    {showFacebookText && (
                      <p className="w-fit text-gray-500">Facebook</p>
                    )}
                  </a>
                </div>
              </div>

              <div className="Github justify-center items-center my-3">
                <div className="Facebook justify-center justify-items-center mx-5">
                  <a
                    href="https://github.com/PanSedtabodee"
                    target="_blank"
                    onMouseEnter={() => setShowGithubText(true)}
                    onMouseLeave={() => setShowGithubText(false)}
                  >
                    <IconsGithub className="w-full h-8" />
                    {showGithubText && (
                      <p className="w-fit text-gray-500">Github</p>
                    )}
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
