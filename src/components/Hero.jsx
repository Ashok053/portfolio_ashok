const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-16 px-4"
      aria-label="Hero section"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          Hi, I&apos;m{' '}
          <span className="text-blue-600 dark:text-blue-400" itemProp="name">
            Ashok Lamsal
          </span>
        </h1>

        <h2 className="text-2xl md:text-3xl text-gray-700 dark:text-gray-300 mb-8" itemProp="jobTitle">
          Machine Learning Engineer | AI Developer
        </h2>

        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8" itemProp="description">
          I build intelligent systems that solve real-world problems. Currently
          working as <strong>AI/ML Intern at Frost Digital Venture</strong>, exploring Deep Learning, 
          NLP, LLMs, and Generative AI through hands-on projects and continuous learning.
        </p>

        <div className="flex justify-center gap-4 flex-wrap">
          <a
            href="#projects"
            className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium shadow-lg hover:shadow-xl"
            aria-label="View my machine learning projects"
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="px-8 py-3 border-2 border-blue-600 text-blue-600 dark:text-blue-400 rounded-lg hover:bg-blue-50 dark:hover:bg-gray-800 transition-colors font-medium"
            aria-label="Contact Ashok Lamsal"
          >
            Get in Touch
          </a>

          <a
            href="https://drive.google.com/file/d/1PgqBUv8QnB8neHxC86MTbY9PoPO9d2j0/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 border-2 border-green-600 text-green-600 dark:text-green-400 rounded-lg hover:bg-green-50 dark:hover:bg-gray-800 transition-colors font-medium"
            aria-label="Download Ashok Lamsal's Resume"
          >
            Download Resume
          </a>
        </div>

        {/* Hidden SEO keywords */}
        <div className="hidden" itemScope itemType="https://schema.org/Person">
          <span itemProp="name">Ashok Lamsal</span>
          <span itemProp="jobTitle">Machine Learning Engineer</span>
          <span itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
            <span itemProp="addressCountry">Nepal</span>
          </span>
          <span itemProp="knowsAbout">Machine Learning</span>
          <span itemProp="knowsAbout">Deep Learning</span>
          <span itemProp="knowsAbout">Natural Language Processing</span>
          <span itemProp="knowsAbout">Large Language Models</span>
          <span itemProp="knowsAbout">Generative AI</span>
        </div>
      </div>
    </section>
  )
}

export default Hero