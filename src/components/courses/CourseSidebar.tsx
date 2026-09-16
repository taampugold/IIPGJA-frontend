import type { Course } from "../../types/Course";
import PaymentCard from "./PaymentCard";
import CourseFeatures from "./CourseFeatures";

interface Props {
  course: Course;
}

const CourseSidebar = ({ course }: Props) => {
  return (
    <div className="h-fit space-y-8 xl:sticky xl:top-28">
      <PaymentCard course={course} />
      <CourseFeatures />
    </div>
  );
};

export default CourseSidebar;
