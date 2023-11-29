import { Link } from "react-scroll";
export default function FirstSection() {
  return (
    <section id="firstSection" className="first-section p-16 pb-10">
      <div className="first-section-box flex w-full p-20 items-center justify-center bg-slate-400 rounded-2xl text-white">
        <div>
          <div className="content">
          <p className="first-section-hello text-white">Hello, I'm Peterpan</p>
          <h1 className="my-3">
            <span className="first-section-title-welcome-color font-semibold text-5xl">
              Welcome To My Website
            </span>
          </h1>
          <p className="first-section-description">
            เว็ปไซต์นี้เป็นเว็ปไซต์นำเสนอผลงานต่าง ๆ ที่ผมได้ทำไว้ในเว็ปไซต์นี้
          </p>
          </div>
          <div className="button mt-6">
          {/* <button className="bg-transparent duration-200 hover:bg-blue-500 text-white font-semibold  py-2 px-4 border border-white hover:border-transparent rounded">
            Let's go
          </button> */}
          <Link
                to="aboutMe"
                smooth={true}
                offset={-70}
                duration={500}
                className="bg-transparent cursor-pointer duration-200 hover:bg-blue-500 text-white font-semibold py-2 px-4 border border-white hover:border-transparent rounded"
              >
                Let's go
              </Link>
          </div>
        </div>
        <div className="first-section-img ml-20 h-[450px]">
          <img src="./image/Profile.jpg" alt="My profile" className="w-full h-full object-contain rounded-lg" />
        </div>
      </div>
    </section>
  );
}
