interface LogoProps {
  className?: string;
  alt?: string;
}

const Logo = ({
  className = "h-16 w-auto object-contain",
  alt = "IIPGJA",
}: LogoProps) => (
  <img src="/images/IIPGJA-logo.png" alt={alt} className={className} />
);

export default Logo;
