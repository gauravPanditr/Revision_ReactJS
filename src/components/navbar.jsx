

export const Navbar = ({ currentTab, setCurrentTab }) => {
    return (
        <nav className="bg-gray-900 text-white px-6 py-4 flex justify-between items-center shadow-md sticky top-0 z-50">
            {/* Logo / Title */}
            <div className="text-2xl font-bold">NewsPortal</div>

            {/* Links */}
            <div className="flex space-x-6">
                <button
                    onClick={() => setCurrentTab("tech")}
                    className={`px-3 py-1 rounded font-medium transition-colors duration-300 ${
                        currentTab === "tech"
                            ? "bg-blue-500 text-white"
                            : "hover:bg-gray-700"
                    }`}
                >
                    Tech News
                </button>
                <button
                    onClick={() => setCurrentTab("all")}
                    className={`px-3 py-1 rounded font-medium transition-colors duration-300 ${
                        currentTab === "all"
                            ? "bg-blue-500 text-white"
                            : "hover:bg-gray-700"
                    }`}
                >
                    All News
                </button>
            </div>
        </nav>
    );
};


