import { useEffect, useState } from "react";
import { books } from "../../data/books";

const HeroBooksAnimation = () => {
  const bookImages = books.map((book) => ({
    id: book.id,
    title: book.title,
    image: book.image,
  }));

  const [activeIndex, setActiveIndex] = useState(0);
  const [flipClass, setFlipClass] = useState("");

  useEffect(() => {
    const id = window.setInterval(() => {
      setFlipClass("flip-out");

      window.setTimeout(() => {
        setActiveIndex((prev) => (prev + 1) % bookImages.length);
        setFlipClass("flip-in");

        window.requestAnimationFrame(() => {
          window.requestAnimationFrame(() => {
            setFlipClass("");
          });
        });
      }, 400);
    }, 3500);

    return () => window.clearInterval(id);
  }, [bookImages.length]);

  const activeBook = bookImages[activeIndex];

  return (
    <div className="hidden justify-center lg:flex">
      <div className="hero-book-stage h-[min(600px,62vh)] w-[min(380px,346w)] xl:h-[min(680px,72vh)] xl:w-[min(400px,32vw)]">
        <div className={`hero-book-card ${flipClass}`}>
          <img
            src={activeBook.image}
            alt={activeBook.title}
            className="h-full w-full object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroBooksAnimation;
