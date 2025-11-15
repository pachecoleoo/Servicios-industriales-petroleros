// src/components/Header.jsx
import Navbar from './Navbar';

function Header() {
  return (
    <header className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
      <div className="text-xl font-bold text-red-600">
        SIP
      </div>
      <Navbar />
    </header>
  );
}

export default Header;
