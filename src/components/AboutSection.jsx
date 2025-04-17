import { assets } from "../assets/assets";

function AboutSection() {
  return (
    <section
      className="py-16  text-white"
      style={{ backgroundColor: "var( --color-graydark)" }}
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="rounded-lg overflow-hidden">
            <img src={assets.our_story_teamphoto} alt="" />
          </div>
          <div>
            <div className="text-sm text-gray-400 mb-2">OUR STORY</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              A Trusted Partner in Recruitment
            </h2>
            <p className="text-gray-300 mb-6">
              For over 9 years, Future Professionals Ltd has been a trusted
              partner in professional recruitment, building a reputation for
              excellence. Our dedicated team is passionate about connecting the
              right people with the right opportunities.
            </p>
            <div className="grid grid-cols-3 gap-6 text-center">
              <div className="bg-gray-800/50 p-6 rounded-lg border border-neutral-800">
                <div className="text-blue-500 mb-2">
                  <img
                    src={assets.members}
                    alt=""
                    className="h-8 w-8 mx-auto"
                  />
                </div>
                <div className="text-xl font-bold">380,000</div>
                <div className="text-gray-400 text-sm">Active Members</div>
              </div>
              <div
                className="bg-gray-800/50 p-6 rounded-lg
              border border-neutral-800"
              >
                <div className="text-orange-500 mb-2">
                  <img src={assets.agents} alt="" className="h-8 w-8 mx-auto" />
                </div>
                <div className="text-xl font-bold">150+</div>
                <div className="text-gray-400 text-sm">Expert Agents</div>
              </div>
              <div className="bg-gray-800/50 p-6 rounded-lg border border-neutral-800">
                <div className="text-blue-500 mb-2">
                  <img
                    src={assets.handshake}
                    alt=""
                    className="h-8 w-8 mx-auto"
                  />
                </div>
                <div className="text-xl font-bold">27,000+</div>
                <div className="text-gray-400 text-sm">Companies Available</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
