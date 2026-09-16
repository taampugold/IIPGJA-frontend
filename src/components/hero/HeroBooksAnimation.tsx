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
    <div className="mt-2 flex justify-center lg:mt-0">
      <div className="hero-book-stage h-[min(280px,42vh)] w-[min(200px,70vw)] sm:h-[min(380px,48vh)] sm:w-[min(250px,40vw)] xl:h-[min(680px,72vh)] xl:w-[min(400px,32vw)]">
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
