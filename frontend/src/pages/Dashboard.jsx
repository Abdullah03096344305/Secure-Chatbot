import  { useState } from 'react';

const Header = () => (
  <header className="w-full bg-black text-white p-4 shadow-md">
    <div className="container mx-auto flex justify-between items-center">
      <h1 className="text-2xl font-bold">Encrypted AI System</h1>
      <nav>
        <ul className="flex space-x-6">
          <li><a href="#" className="hover:underline">Home</a></li>
        </ul>
      </nav>
    </div>
  </header>
);

const Footer = () => (
  <footer className="w-full bg-black text-white p-4 mt-8">
    <div className="container mx-auto text-center">
      <p>&copy; {new Date().getFullYear()} Encrypted AI System. All rights reserved.</p>
    </div>
  </footer>
);

const Dashboard = () => {
  const [prompt, setPrompt] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Encrypted prompt submitted:', prompt);
    // You can call your encryption function and send to backend here
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="flex-grow flex items-center justify-center bg-gradient-to-br from-blue-100 to-green-600 p-6">
        <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-2xl">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">Secure Your AI Prompt</h2>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Enter your prompt
              </label>
              <textarea
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                rows="5"
                placeholder="Type your AI prompt here..."
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-900 transition duration-300"
            >
              Encrypt and Submit
            </button>
          </form>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Dashboard;
