import { assets } from "../assets/assets";
import PrimaryButton from "./PrimaryButton";
import SecondaryButton from "./SecondaryButton";

function HeroSection() {
  return (
    <section
      className="py-8 sm:py-12 md:py-16 lg:py-20"
      style={{
        backgroundImage: `url(${assets.white_noise})`,
      }}
    >
      <div className="mx-auto px-4 sm:px-6 md:px-10 lg:px-20">
        {/* Desktop Layout */}
        <div className="hidden md:grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Text Section */}
          <div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 md:mb-6 hero-main-text">
              Connecting{" "}
              <span className="text-blue-700 underline decoration-2 underline-offset-4">
                Talents
              </span>
              <br />
              with{" "}
              <span className="text-blue-700 underline decoration-2 underline-offset-4">
                Opportunity
              </span>
            </h1>

            <p
              className="hero-sub-text mb-6 md:mb-8 text-base lg:text-lg"
              style={{ fontFamily: "Instrument Sans" }}
            >
              We help professionals and businesses thrive through tailored
              recruitment solutions across London and beyond.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4">
              <PrimaryButton to="/employers">I'm Hiring</PrimaryButton>
              <SecondaryButton to="/jobseekers">Find a Job</SecondaryButton>
            </div>

            {/* Metrics */}
            <div className="mt-8 md:mt-12 flex flex-wrap items-center gap-6 md:gap-12">
              <div>
                <div className="text-xl md:text-2xl font-bold">20+</div>
                <div className="text-gray-600 text-sm md:text-base">
                  Years Combined Expertise
                </div>
              </div>
              <div>
                <div className="text-xl md:text-2xl font-bold">1000+</div>
                <div className="text-gray-600 text-sm md:text-base">
                  Successful Placements
                </div>
              </div>
              <div className="flex items-center text-primary">
                <div className="available-btn flex items-center gap-2">
                  <div className="bg-green-500 rounded-full w-2 h-2"></div>
                  <span className="text-sm md:text-base">Available 24/7</span>
                </div>
              </div>
            </div>
          </div>

          {/* Image Section - Desktop */}
          <div className="relative">
            <img
              src={assets.hero_side}
              alt="Candidates"
              className="w-full h-auto"
            />
            <div className="relative rounded-3xl overflow-hidden">
              <div className="absolute -right-6 lg:-right-12 top-12 bg-pink-100 rounded-2xl p-4 w-48 lg:w-64 h-56 lg:h-72"></div>
              <div className="absolute -left-4 lg:-left-6 bottom-12 bg-green-100 rounded-2xl p-4 w-48 lg:w-64 h-56 lg:h-72"></div>
            </div>
          </div>
        </div>

        {/* Mobile Layout - Matching Figma Design */}
        <div className="md:hidden flex px-4 py-20 flex-col gap-6 mx-auto">
          {/* Hero Text */}
          <div className="w-full">
            <div className=" self-stretch mb-6">
              <h1 className="text-4xl  font-bold font-['Bricolage_Grotesque'] text-neutral-800 sm:text-6xl md:hidden">
                Connecting{" "}
                <span className="text-blue-700 underline decoration-2 underline-offset-4">
                  Talents
                </span>
                <span> with </span>
                <span className="text-blue-700 underline decoration-2 underline-offset-4">
                  Opportunity
                </span>
              </h1>
            </div>

            <p className="self-stretch justify-start text-neutral-800 text-base font-normal font-['Instrument_Sans'] leading-tight mb-6">
              We help professionals and businesses thrive through tailored
              recruitment solutions across London and beyond.
            </p>
            {/* Action Buttons - Side by Side */}
            <div className="flex flex-wrap gap-4">
              <PrimaryButton to="/employers">I'm Hiring</PrimaryButton>
              <SecondaryButton to="/jobseekers">Find a Job</SecondaryButton>
            </div>
          </div>

          {/* Candidate Images with Badges/Tags */}
          <div className="self-stretch gap-5 w-full py-3">
            <img
              className="self-stretch h-64"
              src={assets.hero_side}
              alt="Candidate"
            />
          </div>

          {/* Metrics Section */}
          <div className="w-full">
            <div className="mb-4">
              <div className="justify-start text-neutral-800 text-2xl font-bold font-['Bricolage_Grotesque']">
                20+
              </div>
              <div className="text-base font-normal font-['Instrument_Sans']">
                Years Combined Expertise
              </div>
            </div>

            <div className="mb-4">
              <div className="self-stretch justify-start text-neutral-800 text-2xl font-bold font-['Bricolage_Grotesque']">
                1000+
              </div>
              <div className="text-base font-normal font-['Instrument_Sans']">
                Successful Placements
              </div>
            </div>

            <div className="flex items-center text-primary">
              <div className="available-btn flex items-center gap-2">
                <div className="bg-green-500 rounded-full w-3 h-3"></div>
                <span className="text-sm md:text-base">Available 24/7</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
