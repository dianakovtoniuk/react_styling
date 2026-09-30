
import logo from '../assets/logo.png';
// import classes from './Header.module.css';


export default function Header() {
  return (
    <header className="flex flex-col items-center justify-center my-8 md:mb-16">
      <img
        src={logo}
        alt="A canvas"
        className="object-contain mb-8 w-44 h-44"
      />
      <h1 className="text-2xl md:text-4xl font-semibold tracking-[0.4em] text-center uppercase text-orange-800 font-['Pacifico',cursive]">
        ReactArt
      </h1>
      <p className="text-center text-[#a39191]">
        A community of artists and art-lovers.
      </p>
    </header>
  );
}
