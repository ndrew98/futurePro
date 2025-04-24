import React, { useState, useEffect } from "react";
import { MapPin, ChevronRight } from "lucide-react";
import SecondaryButton from "./SecondaryButton";
import { assets } from "../assets/assets";

const FeaturedJobsSection = () => {
  const [featuredJobs, setFeaturedJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Using mock data for now ,will later fetch from the api
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
      className="w-full px-20 py-28 inline-flex flex-col justify-start items-center gap-12"
      style={{
        backgroundImage: `url(${assets.white_noise})`,
      }}
    >
      <div className="mx-auto px-4">
        <div className="text-center mb-12">
          <div className="text-center justify-start text-neutral-800 text-base font-semibold font-['Bricolage_Grotesque'] mb-2">
            LATEST ROLES
          </div>
          <h2 className="text-center justify-start text-neutral-800 text-5xl font-bold font-['Bricolage_Grotesque'] leading-[62.40px]">
            Fresh Opportunities, Handpicked for You
          </h2>
          <p className="w-[801.01px] text-center j text-neutral-800 text-lg font-normal font-['Instrument_Sans'] leading-normal mx-auto">
            We update our listings regularly with the latest vacancies across
            industries. Explore some of our most recent opportunities below—and
            apply today.
          </p>
        </div>

        {loading ? (
          <div className="flex justify-center ">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 p-5  content-between md:grid-cols-3 gap-14">
              {featuredJobs.map((job) => (
                <div
                  key={job.id}
                  className="bg-white rounded-[20px] p-5 self-stretch  outline-[0.50px] outline-offset-[-0.50px] outline-neutral-800 shadow-md "
                >
                  <h3 className="mb-3 self-stretch text-neutral-800 text-xl font-bold font-['Bricolage_Grotesque'] leading-relaxed">
                    {job.title}
                  </h3>
                  <div className="mb-4">
                    <MapPin className="inline-block h-5 w-5 ext-neutral-800 mr-1" />
                    <span className="text-center  text-neutral-800 text-base font-normal font-['Instrument_Sans'] leading-tight">
                      {job.location}
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-4 py-2 rounded-[100px] outline-1 outline-offset-[-1px] outline-neutral-400 flex justify-center items-center gap-2.5 text-sm">
                      {job.type}
                    </span>
                    <span className="px-4 py-2 rounded-[100px] outline-1 outline-offset-[-1px] outline-neutral-400 flex justify-center items-center gap-2.5 text-sm text-neutral-800">
                      {job.salary}
                    </span>
                  </div>
                  <div className="self-stretch flex items-center justify-between mt-4 gap-3.5">
                    <button className="flex-1  px-6 py-3 bg-green-300 rounded-[100px] shadow-[4px_4px_0px_0px_rgba(28,35,35,1.00)] font-medium font-['Bricolage_Grotesque'] leading-tight  text-base  outline-1 outline-offset-[-1px] outline-neutral-800 flex justify-center items-center gap-2  hover:bg-gray-50 transition">
                      View Job
                    </button>
                    <button className="flex-1 px-6 py-3 bg-white rounded-[100px] shadow-[4px_4px_0px_0px_rgba(28,35,35,1.00)]  outline-1 outline-offset-[-1px]text-neutral-800 text-base font-medium font-['Bricolage_Grotesque'] leading-tight outline-neutral-800 flex justify-center items-center gap-2 hover:border-gray-400 transition">
                      Save
                    </button>
                    <button className="p-2 text-gray-500 rounded-full border border-gray-400 hover:text-gray-700">
                      <img src={assets.sharenetwork} alt="SharedNetwork" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 text-center flex items-center justify-center">
              <SecondaryButton to="job-board">Browse all jobs</SecondaryButton>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default FeaturedJobsSection;
