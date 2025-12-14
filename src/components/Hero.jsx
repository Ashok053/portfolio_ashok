const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-16 px-4"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          Hi, I&apos;m{' '}
          <span className="text-blue-600 dark:text-blue-400">
            Ashok Lamsal
          </span>
        </h1>

        <h2 className="text-2xl md:text-3xl text-gray-700 dark:text-gray-300 mb-8">
          Aspiring Machine Learning Engineer and AI enthusiast 
        </h2>

        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8">
          I build intelligent systems that solve real-world problems. Currently
          exploring deep learning, NLP, LLMs, and Gen AI through hands-on projects and continuous learning.
        </p>

        <div className="flex justify-center gap-4 flex-wrap">
          <a
            href="#projects"
            className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="px-8 py-3 border-2 border-blue-600 text-blue-600 dark:text-blue-400 rounded-lg hover:bg-blue-50 dark:hover:bg-gray-800 transition-colors"
          >
            Get in Touch
          </a>

          <a
            href="https://drive.google.com/file/d/1PgqBUv8QnB8neHxC86MTbY9PoPO9d2j0/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 border-2 border-green-600 text-green-600 dark:text-green-400 rounded-lg hover:bg-green-50 dark:hover:bg-gray-800 transition-colors"
          >
            Resume
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
