interface Props {
  rating: number;
  size?: "sm" | "md";
}

const StarRating = ({ rating, size = "sm" }: Props) => {
  const full = Math.floor(rating);
  const textSize = size === "md" ? "text-base" : "text-sm";

  return (
    <span
      className={`flex items-center gap-0.5 text-[#b8903d] ${textSize}`}
      aria-label={`${rating} out of 5`}
    >
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} className={i < full ? undefined : "text-gray-300"}>
          ★
        </span>
      ))}
    </span>
  );
};

export default StarRating;
