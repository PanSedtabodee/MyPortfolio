export default function AboutMe() {
    return (
        <section id="aboutMe" className="about-me px-16">
         <div className="first-section-box flex w-full p-24 py-30 items-center justify-center bg-slate-400 rounded-2xl text-white">
            <div className="first-section-img mr-20 ">
                <div className="flex flex-row">
            <img src="./image/KMUTT.png" alt="My profile" className="object-contain rounded-lg bg-white p-5 h-[250px] mr-8" />
            <img src="./image/SIT.jpg" alt="My profile" className="object-contain rounded-lg h-[250px]" />
            </div>
            </div>
          <div className="text-center">
            <h2 className="text-base font-semibold text-white tracking-wide">
              เกี่ยวกับผม
            </h2>
            <p className="mt-1 text-4xl font-semibold text-white sm:text-5xl sm:tracking-tight lg:text-6xl">
              About me
            </p>
            <p className="max-w-xl mt-5 mx-auto text-xl text-white">
              ตอนนี้กำลังศึกษาอยู่ชั้นปีที่ 3 มหาวิทยาลัยพระจอมเกล้าธนบุรี <br className="mb-2"/>
              คณะเทคโนโลยีสารสนเทศ สาขาเทคโนโลยีสารสนเทศ
            </p>
          </div>
          </div>
        </section>
    )
}