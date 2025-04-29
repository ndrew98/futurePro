import { assets } from "../assets/assets";

function AboutSection() {
  return (
    <section
      className="py-12 sm:py-16 md:py-20 lg:py-28 px-4 sm:px-6 md:px-10 lg:px-20 text-white"
      style={{
        backgroundColor: "var(--color-graydark)",
        backgroundImage: `url(${assets.white_noise})`,
      }}
    >
      <div className="mx-auto">
        {/* Mobile layout (stacked) */}
        <div className="flex flex-col gap-8 md:hidden">
          {/* Image */}
          <div className="rounded-3xl overflow-hidden shadow-[4px_4px_0px_0px_rgba(28,35,35,1.00)]">
            <img
              src={assets.our_story_teamphoto}
              alt="Our Team"
              className="w-full h-56 object-cover"
            />
          </div>

          {/* Content */}
          <div className="flex flex-col gap-6">
            {/* Heading section */}
            <div className="flex flex-col gap-3">
              <div>
                <div className="text-blue-50 text-base font-semibold font-['Bricolage_Grotesque']">
                  OUR STORY
                </div>
                <div className="text-blue-50 text-3xl font-bold font-['Bricolage_Grotesque']">
                  A Trusted Partner in Recruitment
                </div>
              </div>
              <p className="text-blue-50 text-base font-normal font-['Instrument_Sans'] leading-tight">
                For over 9 years, Future Professionals Ltd has been a trusted
                partner in professional recruitment, building a reputation for
                excellence. Our dedicated team is passionate about connecting
                the right people with the right opportunities.
              </p>
            </div>

            {/* Stats Cards */}
            <div className="flex flex-col gap-3">
              {/* Active Members Card */}
              <div className="h-28 p-4 bg-neutral-800 rounded-2xl outline outline-1 outline-offset-[-1px] outline-neutral-700 flex flex-col justify-start items-start">
                <div className="w-8 h-8">
                  <img src={assets.members} alt="" className="h-8 w-8" />
                </div>
                <div className="text-blue-50 text-2xl font-semibold font-['Bricolage_Grotesque']">
                  380,000
                </div>
                <div className="text-blue-50 text-base font-normal font-['Instrument_Sans'] leading-snug">
                  Active Members
                </div>
              </div>

              {/* Expert Agents Card */}
              <div className="h-28 p-4 bg-neutral-800 rounded-2xl outline outline-1 outline-offset-[-1px] outline-neutral-700 flex flex-col justify-start items-start">
                <div className="w-8 h-8">
                  <img src={assets.agents} alt="" className="h-8 w-8" />
                </div>
                <div className="text-blue-50 text-2xl font-semibold font-['Bricolage_Grotesque']">
                  150+
                </div>
                <div className="text-blue-50 text-base font-normal font-['Instrument_Sans'] leading-snug">
                  Expert Agents
                </div>
              </div>

              {/* Companies Available Card */}
              <div className="p-4 bg-neutral-800 rounded-2xl outline outline-1 outline-offset-[-1px] outline-neutral-700 flex flex-col justify-start items-start">
                <div className="w-8 h-8">
                  <img src={assets.handshake} alt="" className="h-8 w-8" />
                </div>
                <div className="text-blue-50 text-2xl font-semibold font-['Bricolage_Grotesque']">
                  27,000+
                </div>
                <div className="text-blue-50 text-base font-normal font-['Instrument_Sans'] leading-snug">
                  Companies Available
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop layout (grid) - Hidden on mobile */}
        <div className="hidden md:grid md:grid-cols-2 gap-8 lg:gap-12">
          <div className="about-image-box rounded-lg overflow-hidden">
            <img
              src={assets.our_story_teamphoto}
              alt="Our Team"
              className="w-full h-auto"
            />
          </div>

          <div className="flex flex-col gap-6">
            <div>
              <div className="text-blue-50 text-base font-semibold font-['Bricolage_Grotesque']">
                OUR STORY
              </div>
              <h2 className="text-blue-50 text-3xl md:text-4xl lg:text-5xl font-bold font-['Bricolage_Grotesque']">
                A Trusted Partner in Recruitment
              </h2>
              <p className="text-blue-50 text-base md:text-lg lg:text-xl font-normal font-['Instrument_Sans'] leading-relaxed mt-4">
                For over 9 years, Future Professionals Ltd has been a trusted
                partner in professional recruitment, building a reputation for
                excellence. Our dedicated team is passionate about connecting
                the right people with the right opportunities.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-6 mt-4">
              <div className="bg-gray-800/50 p-4 lg:p-6 rounded-lg border border-neutral-800">
                <div className="text-blue-500 mb-2">
                  <img src={assets.members} alt="" className="h-8 w-8" />
                </div>
                <div className="text-blue-50 text-xl lg:text-2xl font-semibold font-['Bricolage_Grotesque']">
                  380,000
                </div>
                <div className="text-blue-50 text-sm lg:text-base font-normal font-['Instrument_Sans'] leading-snug">
                  Active Members
                </div>
              </div>
              <div className="bg-gray-800/50 p-4 lg:p-6 rounded-lg border border-neutral-800">
                <div className="text-orange-500 mb-2">
                  <img src={assets.agents} alt="" className="h-8 w-8" />
                </div>
                <div className="text-blue-50 text-xl lg:text-2xl font-semibold font-['Bricolage_Grotesque']">
                  150+
                </div>
                <div className="text-blue-50 text-sm lg:text-base font-normal font-['Instrument_Sans'] leading-snug">
                  Expert Agents
                </div>
              </div>
              <div className="bg-gray-800/50 p-4 lg:p-6 rounded-lg border border-neutral-800">
                <div className="text-blue-500 mb-2">
                  <img src={assets.handshake} alt="" className="h-8 w-8" />
                </div>
                <div className="text-blue-50 text-xl lg:text-2xl font-semibold font-['Bricolage_Grotesque']">
                  27,000+
                </div>
                <div className="text-blue-50 text-sm lg:text-base font-normal font-['Instrument_Sans'] leading-snug">
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
