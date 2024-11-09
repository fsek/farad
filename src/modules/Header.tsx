import logo from '../assets/FARAD-logga.png';

function Header() {
    return (
        <header className="flex justify-start items-center w-screen">
          <a href="/" className="flex items-center">
            <img src={logo} alt="Logo" className="h-20 w-auto m-4" />
          </a>
          <h1 className="text-2xl font-bold">FARAD 2025</h1>

          <nav className="flex space-x-6 ml-auto mr-10">
            <a href="/Studenter" className="text-black text-lg font-bold hover:text-gray-300">För studenter</a>
            <a href="/Foretag" className="text-black text-lg font-bold hover:text-gray-300">För företag</a>
            <a href="/OmOss" className="text-black text-lg font-bold hover:text-gray-300">Om oss</a>
          </nav>
        </header>
        
      );
}

export default Header;