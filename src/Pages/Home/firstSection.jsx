export default function FirstSection() {
  return (
    <section id="firstSection" className="first-section p-16 ">
      <div className="firse-section-box flex w-full p-20 items-center justify-center bg-slate-400 rounded-2xl text-white">
        <div>
          <div className="content">
          <p className="first-section-title-hello">Hello, I'm Peterpan</p>
          <h1 className="my-3">
            <span className="first-section-title-welcome-color font-semibold text-5xl">
              Welcome To My Website
            </span>
          </h1>
          <p className="first-section-description">
            เว็ปไซต์นี้เป็นเว็ปไซต์นำเสนอผลงานต่าง ๆ ที่ผมได้ทำไว้ในเว็ปไซต์นี้
          </p>
          </div>
          <div className="button mt-4">
          <button className="bg-transparent duration-200 hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
            Let's go
          </button>
          </div>
        </div>
        <div className="first-section-img ml-20 h-[400px]">

          <img src="./image/Profile.jpg" alt="My profile" className="w-full h-full object-contain" />
        </div>
      </div>
    </section>
  );
}
