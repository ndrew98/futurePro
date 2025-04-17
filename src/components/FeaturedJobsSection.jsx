import React, { useState, useEffect } from "react";
import { MapPin, ChevronRight } from "lucide-react";

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
      className="py-16"
      style={{ backgroundColor: "var( --color-background)" }}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="text-sm text-gray-500 mb-2">LATEST ROLES</div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Fresh Opportunities, Handpicked for You
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
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
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {featuredJobs.map((job) => (
                <div
                  key={job.id}
                  className="bg-white p-6 rounded-xl shadow-md border border-gray-700"
                >
                  <div className="mb-4">
                    <MapPin className="inline-block h-5 w-5 text-gray-500 mr-1" />
                    <span className="text-gray-600">{job.location}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3">{job.title}</h3>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-4 py-1 bg-gray-100 rounded-full text-sm">
                      {job.type}
                    </span>
                    <span className="px-4 py-1 bg-gray-100 rounded-full text-sm">
                      {job.salary}
                    </span>
                  </div>
                  <div className="flex items-center justify-between mt-4">
                    <button
                      className="text-center text-black py-2 px-6 rounded-full hover:bg-gray-50 transition"
                      style={{
                        backgroundColor: "#40ED8D",
                        boxShadow: "0px 3px 6px rgba(0, 0, 0, 1)",
                      }}
                    >
                      View Job
                    </button>
                    <button
                      className="text-center text-black border  border-gray-300 py-2 px-6 rounded-full hover:border-gray-400 transition"
                      style={{ boxShadow: "0px 2px 4px rgba(0, 0, 0, 1)" }}
                    >
                      Save
                    </button>
                    <button className="p-2 text-gray-500 hover:text-gray-700">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 text-center">
              <button
                style={{
                  boxShadow: "0px 3px 6px rgba(0, 0, 0, 1)",
                }}
                className="px-6 py-3 border text-black  bg-white border-gray-300 rounded-full inline-flex items-center gap-2 hover:bg-gray-50 transition"
              >
                Browse all jobs
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default FeaturedJobsSection;
