const Footer = () => {
  return (
    <footer className="py-8 px-4 bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-gray-600 dark:text-gray-400">
          © {new Date().getFullYear()} Ashok Lamsal.
        </p>
        <p className="text-gray-500 dark:text-gray-500 text-sm mt-2">
          Always learning, always building.
        </p>
      </div>
    </footer>
  )
}

export default Footer