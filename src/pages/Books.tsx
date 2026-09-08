import { motion } from "framer-motion";
import PageLayout from "../components/layout/PageLayout";
import PageContainer from "../components/layout/PageContainer";
import BookCard from "../components/books/BookCard";
import { books } from "../data/books";

const Books = () => {
  return (
    <PageLayout>
      <section className="relative w-full overflow-hidden bg-slate-900 py-24 text-white">
        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-yellow-500/20 blur-3xl" />
        <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-yellow-500/10 blur-3xl" />

        <PageContainer fullWidth className="relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
             <span className="font-semibold uppercase tracking-[4px] text-yellow-400">
           Published Books
          </span>
            <h1 className="mt-5 text-4xl font-bold text-white md:text-6xl">
              Tampu
              <span className="mt-1 block text-yellow-400">Published Books</span>
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              Learn from professionally designed books prepared by IIPGJA experts.
            </p>
          </motion.div>
        </PageContainer>
      </section>

      <section className="bg-[#faf9f6] py-16">
        <PageContainer>
          <div className="flex flex-col gap-4">
            {books.map((book) => (
              <BookCard key={book.id} book={book} />
            ))}
          </div>
        </PageContainer>
      </section>
    </PageLayout>
  );
};

export default Books;
