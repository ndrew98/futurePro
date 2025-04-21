import { assets } from "../assets/assets";

function AboutSection() {
  return (
    <section
      className="about-section py-28 px-20  text-white"
      style={{ backgroundColor: "var( --color-graydark)" }}
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 r">
          <div className="about-image-box rounded-lg overflow-hidden">
            <img src={assets.our_story_teamphoto} alt="" />
          </div>
          <div>
            <div className="self-stretch justify-start text-blue-50 text-base font-semibold font-['Bricolage_Grotesque']">
              OUR STORY
            </div>
            <h2 className="self-stretch justify-start text-blue-50 text-5xl font-bold font-['Bricolage_Grotesque']">
              A Trusted Partner in Recruitment
            </h2>
            <p className="self-stretch justify-start text-blue-50 text-xl font-normal font-['Instrument_Sans'] leading-relaxed">
              For over 9 years, Future Professionals Ltd has been a trusted
              partner in professional recruitment, building a reputation for
              excellence. Our dedicated team is passionate about connecting the
              right people with the right opportunities.
            </p>
            <div className="grid grid-cols-3 gap-6 ">
              <div className="bg-gray-800/50 p-6 rounded-lg border border-neutral-800">
                <div className="text-blue-500 mb-2">
                  <img src={assets.members} alt="" className="h-8 w-8 " />
                </div>
                <div className="justify-start text-blue-50  text-2xl font-semibold font-['Bricolage_Grotesque']">
                  380,000
                </div>
                <div className="self-stretch justify-start text-blue-50 text-base font-normal font-['Instrument_Sans'] leading-snug">
                  Active Members
                </div>
              </div>
              <div
                className="bg-gray-800/50 p-6 rounded-lg
              border border-neutral-800"
              >
                <div className="text-orange-500 mb-2">
                  <img src={assets.agents} alt="" className="h-8 w-8 " />
                </div>
                <div className="justify-start text-blue-50 text-2xl font-semibold font-['Bricolage_Grotesque']">
                  150+
                </div>
                <div className="self-stretch justify-start text-blue-50 text-base font-normal font-['Instrument_Sans'] leading-snug">
                  Expert Agents
                </div>
              </div>
              <div className="bg-gray-800/50 p-6 rounded-lg border border-neutral-800">
                <div className="text-blue-500 mb-2">
                  <img src={assets.handshake} alt="" className="h-8 w-8 " />
                </div>
                <div className="justify-start text-blue-50 text-2xl font-semibold font-['Bricolage_Grotesque']">
                  27,000+
                </div>
                <div className="self-stretch justify-start text-blue-50 text-base font-normal font-['Instrument_Sans'] leading-snug">
                  Companies Available
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
