import { Link } from "react-router-dom";
import { assets } from "../assets/assets";
import PrimaryButton from "./PrimaryButton";
import SecondaryButton from "./SecondaryButton";

function HeroSection() {
  return (
    <section
      className="py-20"
      style={{ backgroundColor: "var(--color-background)" }}
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Text Section */}
          <div>
            <h1 className="text-[32px] md:text-6xl font-bold mb-6 hero-main-text lg:text-[50px] xl:text-[64px]">
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
              className="hero-sub-text mb-8"
              style={{ fontFamily: "Instrument Sans" }}
            >
              We help professionals and businesses thrive through tailored
              recruitment solutions across London and beyond.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4">
              <div className="flex flex-wrap gap-4">
                <PrimaryButton to="/employers">I'm Hiring</PrimaryButton>
                <SecondaryButton to="/jobseekers">Find a Job</SecondaryButton>
              </div>
            </div>

            {/* Metrics */}
            <div className="mt-12 flex items-center gap-12">
              <div>
                <div className="text-2xl font-bold">20+</div>
                <div className="text-gray-600">Years Combined Expertise</div>
              </div>
              <div>
                <div className="text-2xl font-bold">1000+</div>
                <div className="text-gray-600">Successful Placements</div>
              </div>
              <div className="flex items-center text-primary">
                <div className="flex items-center gap-2">
                  <div className="bg-green-500 rounded-full w-2 h-2"></div>
                  <span>Available 24/7</span>
                </div>
              </div>
            </div>
          </div>

          {/* Image Section */}
          <div className="relative">
            <img
              src={assets.hero_side}
              alt="Candidates"
              className="w-full h-auto"
            />
            <div className="relative rounded-3xl overflow-hidden">
              <div className="absolute -right-12 top-12 bg-pink-100 rounded-2xl p-4 w-64 h-72"></div>
              <div className="absolute -left-6 bottom-12 bg-green-100 rounded-2xl p-4 w-64 h-72"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
