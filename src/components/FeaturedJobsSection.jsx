import React, { useState, useEffect } from "react";
import { MapPin, ChevronRight } from "lucide-react";
import SecondaryButton from "./SecondaryButton";
import { assets } from "../assets/assets";

const FeaturedJobsSection = () => {
  const [featuredJobs, setFeaturedJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Using mock data for now, will later fetch from the api
    const mockJobs = [
      {
        id: 1,
        title: "Compliance Officer",
        location: "London",
        type: "Full Time",
        salary: "£26,000 per annum",
      },
      {
        id: 2,
        title: "Jnr Recruitment Consultant - Nursing and Doctors",
        location: "London",
        type: "Hybrid",
        salary: "£28,000 per annum",
      },
      {
        id: 3,
        title: "Business Development Consultant",
        location: "London",
        type: "Full Time",
        salary: "£26,000 per annum",
      },
    ];

    setFeaturedJobs(mockJobs);
    setLoading(false);
  }, []);

  return (
    <section
      className="w-full px-4 py-12 md:px-20 md:py-28 flex flex-col justify-start items-center gap-8 md:gap-12"
      style={{
        backgroundImage: `url(${assets.white_noise})`,
      }}
    >
      <div className="w-full sm:w-96 md:w-auto">
        <div className="text-center mb-8 md:mb-12">
          <div className="text-center text-neutral-800 text-base font-semibold font-['Bricolage_Grotesque'] mb-2">
            LATEST ROLES
          </div>
          <h2 className="text-center text-neutral-800 text-3xl md:text-5xl font-bold font-['Bricolage_Grotesque'] leading-10 md:leading-[62.40px]">
            Fresh Opportunities, Handpicked for You
          </h2>
          <p className="text-center text-neutral-800 text-base md:text-lg font-normal font-['Instrument_Sans'] leading-tight md:leading-normal mx-auto">
            We update our listings regularly with the latest vacancies across
            industries. Explore some of our most recent opportunities below—and
            apply today.
          </p>
        </div>

        {loading ? (
          <div className="flex justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        ) : (
          <>
            <div className="flex flex-col gap-5 md:grid md:grid-cols-3 md:gap-8">
              {featuredJobs.map((job) => (
                <div
                  key={job.id}
                  className="bg-white rounded-[20px] p-5 self-stretch outline outline-[0.50px] outline-offset-[-0.50px] outline-neutral-800 shadow-md flex flex-col justify-between"
                >
                  <div className="flex-1 flex flex-col gap-3">
                    <h3 className="self-stretch text-neutral-800 text-xl font-bold font-['Bricolage_Grotesque'] leading-relaxed">
                      {job.title}
                    </h3>
                    <div className="inline-flex items-end gap-2">
                      <MapPin className="h-5 w-5 text-neutral-800" />
                      <span className="text-center text-neutral-800 text-base font-normal font-['Instrument_Sans'] leading-tight">
                        {job.location}
                      </span>
                    </div>

                    <div className="inline-flex flex-wrap gap-3.5">
                      <span className="px-4 py-2 rounded-[100px] outline outline-1 outline-offset-[-1px] outline-neutral-400 flex justify-center items-center text-sm text-neutral-800 font-['Instrument_Sans']">
                        {job.type}
                      </span>
                      <span className="px-4 py-2 rounded-[100px] outline outline-1 outline-offset-[-1px] outline-neutral-400 flex justify-center items-center text-sm text-neutral-800 font-['Instrument_Sans']">
                        {job.salary}
                      </span>
                    </div>
                  </div>

                  <div className="self-stretch inline-flex justify-start items-center gap-4 mt-4">
                    <button className="flex-1 px-6 py-3 bg-green-300 rounded-[100px] shadow-[4px_4px_0px_0px_rgba(28,35,35,1.00)] outline outline-1 outline-offset-[-1px] outline-neutral-800 flex justify-center items-center">
                      <span className="text-neutral-800 text-base font-medium font-['Bricolage_Grotesque'] leading-tight">
                        View Job
                      </span>
                    </button>
                    <button className="flex-1 px-6 py-3 bg-white rounded-[100px] shadow-[4px_4px_0px_0px_rgba(28,35,35,1.00)] outline outline-1 outline-offset-[-1px] outline-neutral-800 flex justify-center items-center">
                      <span className="text-neutral-800 text-base font-medium font-['Bricolage_Grotesque'] leading-tight">
                        Save
                      </span>
                    </button>
                    <button className="p-2 rounded-[100px] outline outline-1 outline-offset-[-1px] outline-neutral-400 flex justify-start items-center gap-2.5 overflow-hidden">
                      <img
                        src={assets.sharenetwork}
                        alt="SharedNetwork"
                        className="w-6 h-6"
                      />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 md:mt-10 text-center flex items-center justify-center">
              <SecondaryButton to="job-board">
                <div className="flex items-center gap-2">
                  <span>Browse all jobs</span>
                  <ChevronRight size={20} />
                </div>
              </SecondaryButton>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default FeaturedJobsSection;
