import { CourseProps } from "@/types";
import "./CourseCard.scss";

export function CourseCard({ date, title, description }: CourseProps) {
  return (
    <div className="course-card">
      <div>
        <h3>{title}</h3>
        <span>{description}</span>
      </div>
      <span>{date}</span>
    </div>
  );
}
