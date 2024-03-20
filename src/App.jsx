import Button from "./components/Button";

const App = () => {
    return (
      <div className="flex flex-col min-h-screen bg-black">
        {/* Header */}
        <header className="bg-gray-800 text-white px-4 flex justify-between items-center">
          {/* Logo on the left */}
          <div className="logo">
            <img src="logo/logo.png" alt="Logo" className="h-16 w-auto" />
          </div>
          {/* Navigation Links on the right */}
          <nav>
            <ul className="flex space-x-4">
              <li>
                <a href="#superhero" className="hover:underline">Superhero</a>
              </li>
              <li>
                <a href="#action" className="hover:underline">Action</a>
              </li>
              <li>
                <a href="#history" className="hover:underline">History</a>
              </li>
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
