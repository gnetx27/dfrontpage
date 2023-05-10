
import { useEffect, useRef, useState } from "react";

import img_reco from '../../util/img/recognition.svg';
import img_award from '../../util/img/award.svg';

const tabsData = [
  {
    label: "Certficate",
    title: "Student of the Month",
    content: "is one of the highest honors your child can receive here at Code Galaxy. Students who receive this award consistently show up to classes, work hard to learn new things, actively participate in the courses, and are overall go-getters!",
    img:img_reco
  },
  {
    label: "Awards",
    title: "Tilte",
    content:
      "Text",
    img:img_award
  },
];

const Recognition=()=> {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const [tabUnderlineWidth, setTabUnderlineWidth] = useState(0);
  const [tabUnderlineLeft, setTabUnderlineLeft] = useState(0);

  const tabsRef = useRef([]);

  useEffect(() => {
    function setTabPosition() {
      const currentTab = tabsRef.current[activeTabIndex];
      console.log(currentTab?.offsetLeft, currentTab?.clientWidth);
      setTabUnderlineLeft(currentTab?.offsetLeft ?? 0);
      setTabUnderlineWidth(currentTab?.clientWidth ?? 0);
    }

    setTabPosition();
    window.addEventListener("resize", setTabPosition);

    return () => window.removeEventListener("resize", setTabPosition);
  }, [activeTabIndex]);

  return (
    <div className="flex">
    <div data-aos="fade-up" className="bg-white rounded-xl shadow-xl w-[65%] m-10 m-l-10 p-5 ">
      <div className="relative ">
        <div className="flex space-x-3 text-center">
          {tabsData.map((tab, idx) => {
            return (
              <button
                key={idx}
                ref={(el) => (tabsRef.current[idx] = el)}
                className="pt-2 pb-3 text-red"
                onClick={() => setActiveTabIndex(idx)}>
                {tab.label}
              </button>
            );
          })}
        </div>
        <span
          className="absolute bottom-0 block h-1 bg-red-100 transition-all duration-300"
          style={{ left: tabUnderlineLeft, width: tabUnderlineWidth }}
        />
      </div>
      <div className="py-4 md:flex">
        <div className="w-[70%]">
          <b>{tabsData[activeTabIndex].title}</b>
          <p>{tabsData[activeTabIndex].content}</p>
        </div>
        <div >
        <img src={img_award} alt="img"/>
        </div>
      </div>
    </div>
    <div data-aos="fade-left" className="hidden md:block ">
      <img src={tabsData[activeTabIndex].img} className="rounded-xl shadow-xl w-[100%]" alt="img"/>
    </div>
    </div>
  );
}

export default Recognition;
