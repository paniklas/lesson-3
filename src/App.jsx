import Button from "./components/Button";

const App = () => {
    return (
      <div className="flex flex-col min-h-screen bg-black">
        {/* Header */}
        <header className="bg-gray-800 text-white px-4 flex justify-between items-center">
          {/* Logo on the left */}
          <div className="flex">
            <img src="logo/logo.png" alt="Logo" className="h-16 w-auto" />
          </div>
          {/* Navigation Links on the right */}
          <nav>
            <ul className="flex space-x-4 text-2xl justify-center items-center">
              <li>
                <a href="#superhero" className="hover:underline">Superhero</a>
              </li>
              <li>
                <a href="#action" className="hover:underline">Action</a>
              </li>
              <li>
                <a href="#history" className="hover:underline">History</a>
              </li>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14" height="20" width="20" id="Magnifying-Glass--Streamline-Core"><g id="magnifying-glass--glass-search-magnifying"><path id="Vector" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" d="M6 11.5c3.03757 0 5.5 -2.46243 5.5 -5.5S9.03757 0.5 6 0.5 0.5 2.96243 0.5 6s2.46243 5.5 5.5 5.5Z" strokeWidth="1"></path><path id="Vector_2" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" d="M13.5 13.5 10 10" strokeWidth="1"></path></g></svg>
            </ul>
          </nav>
        </header>

        {/* Content Section with Images */}
        <main className="flex-grow flex flex-col sm:flex-row justify-center items-center">
          <div className="flex flex-wrap justify-center gap-4 p-4 border-2 border-gray-200 m-4">
            <img src="/superhero1.webp" alt="Description 1" className="w-full p-2"/>
            <Button />
          </div>
          <div className="flex flex-wrap justify-center gap-4 p-4 border-2 border-gray-200 m-4">
            <img src="superhero2.webp" alt="Description 2" className="w-full p-2"/>
            <Button />
          </div>
          <div className="flex flex-wrap justify-center gap-4 p-4 border-2 border-gray-200 m-4">
            <img src="superhero3.webp" alt="Description 3" className="w-full p-2"/>
            <Button />
          </div>
        </main>

        {/* Footer */}
        <footer className="bg-gray-800 text-white p-4 text-center">
          <p>My Simple Footer</p>
        </footer>
      </div>
    )
}

export default App
