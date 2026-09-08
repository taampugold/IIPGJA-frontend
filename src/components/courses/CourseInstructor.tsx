const instructor = {
  name: "Dr. John Smith",
  designation: "Senior Jewellery Assay Expert",
  experience: "15+ Years",
  students: "5,000+",
  courses: "12",
  rating: "4.9",
  image:
    "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600",
};

const CourseInstructor = () => {
  return (
    <section className="mt-16 rounded-3xl bg-white p-8 shadow-md">
      <h2 className="mb-8 text-3xl font-bold text-gray-900">
        Meet Your Instructor
      </h2>

      <div className="grid gap-10 lg:grid-cols-3">

        {/* Image */}

        <div className="flex justify-center">
          <img
            src={instructor.image}
            alt={instructor.name}
            className="h-72 w-72 rounded-3xl object-cover shadow-lg"
          />
        </div>

        {/* Details */}

        <div className="lg:col-span-2">

          <h3 className="text-3xl font-bold">
            {instructor.name}
          </h3>

          <p className="mt-2 text-lg text-[#b8903d]">
            {instructor.designation}
          </p>

          <p className="mt-6 leading-8 text-gray-600">
            Our instructor has extensive experience in jewellery
            hallmarking, precious metal testing, and quality
            certification. This course is designed using
            real-world industry practices so students gain
            practical knowledge along with theoretical concepts.
          </p>

          {/* Stats */}

          <div className="mt-10 grid grid-cols-2 gap-6 md:grid-cols-4">

            <div className="rounded-xl bg-[#faf7ef] p-5 text-center">

              <h4 className="text-3xl font-bold text-[#b8903d]">
                {instructor.experience}
              </h4>

              <p className="mt-2 text-sm text-gray-600">
                Experience
              </p>

            </div>

            <div className="rounded-xl bg-[#faf7ef] p-5 text-center">

              <h4 className="text-3xl font-bold text-[#b8903d]">
                {instructor.students}
              </h4>

              <p className="mt-2 text-sm text-gray-600">
                Students
              </p>

            </div>

            <div className="rounded-xl bg-[#faf7ef] p-5 text-center">

              <h4 className="text-3xl font-bold text-[#b8903d]">
                {instructor.courses}
              </h4>

              <p className="mt-2 text-sm text-gray-600">
                Courses
              </p>

            </div>

            <div className="rounded-xl bg-[#faf7ef] p-5 text-center">

              <h4 className="text-3xl font-bold text-[#b8903d]">
                ⭐ {instructor.rating}
              </h4>

              <p className="mt-2 text-sm text-gray-600">
                Rating
              </p>

            </div>

          </div>

          {/* Expertise */}

          <div className="mt-10">

            <h4 className="mb-4 text-xl font-semibold">
              Areas of Expertise
            </h4>

            <div className="flex flex-wrap gap-3">

              {[
                "Gold Assaying",
                "Silver Testing",
                "BIS Hallmarking",
                "Jewellery Manufacturing",
                "Quality Control",
                "Lab Testing",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full bg-[#f6edd8] px-4 py-2 text-sm font-medium text-[#b8903d]"
                >
                  {item}
                </span>
              ))}

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default CourseInstructor;