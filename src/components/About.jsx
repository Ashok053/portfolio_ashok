const About = () => {
  return (
    <section 
      id="about" 
      className="py-20 px-4 bg-gray-50 dark:bg-gray-800"
      aria-label="About Ashok Lamsal"
      itemScope 
      itemType="https://schema.org/Person"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          About Me
        </h2>
        
        {/* Container with photo and text */}
        <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
          
          {/* Photo Section - Circle Version */}
          <div className="flex-shrink-0">
            <div className="relative w-48 h-48 md:w-64 md:h-64">
              <img
                src="/profile.jpg"
                alt="Ashok Lamsal - Machine Learning Engineer"
                className="w-full h-full object-cover rounded-full border-4 border-blue-600 dark:border-blue-400 shadow-xl"
                itemProp="image"
              />
              {/* Optional: Glowing effect */}
              <div className="absolute inset-0 rounded-full bg-blue-600 opacity-20 blur-xl -z-10"></div>
            </div>
          </div>

          {/* Text Section */}
          <div className="flex-1 space-y-6 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            <p>
              I'm <span itemProp="name"><strong>Ashok Lamsal</strong></span>, a final year{' '}
              <span itemProp="alumniOf">Computer Science student</span> with a deep passion for{' '}
              <strong>artificial intelligence</strong> and <strong>machine learning</strong>. 
              Currently, I am working as an{' '}
              <span itemProp="jobTitle">
                <strong>AI/ML Intern at Frost Digital Venture</strong>
              </span>{' '}
              (Frost and Sullivan) in <span itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
                <span itemProp="addressCountry">Nepal</span>
              </span>.
            </p>
            <p>
              My journey into <strong>ML</strong> began with fascination about how machines can learn from data and make intelligent decisions.
              Through coursework and self-driven projects, I've gained hands-on experience in building and deploying{' '}
              <strong>machine learning models</strong>. I'm particularly interested in{' '}
              <strong>Natural Language Processing (NLP)</strong>, <strong>Large Language Models (LLMs)</strong>,{' '}
              and the practical applications of <strong>Artificial Intelligence</strong> in solving real-world challenges.
            </p>
            <p>
              I believe in <em>learning by building</em>. Each project I work on is an opportunity to deepen my understanding 
              of <strong>ML algorithms</strong>, experiment with new techniques, and add a block in my journey. I'm actively seeking{' '}
              <strong>Junior/Fresher ML Engineer roles</strong> where I can apply my skills, learn from experienced engineers, 
              and make meaningful contributions to innovative AI solutions.
            </p>
            <p>
              When I'm not coding or training models, you'll find me reading <strong>research papers</strong>, novels, 
              participating in local community works, or contributing to meaningful open-source projects in the{' '}
              <strong>AI/ML community</strong>.
            </p>
          </div>
        </div>

        {/* Hidden SEO keywords */}
        <div className="hidden">
          <span itemProp="knowsAbout">Python Programming</span>
          <span itemProp="knowsAbout">Deep Learning</span>
          <span itemProp="knowsAbout">TensorFlow</span>
          <span itemProp="knowsAbout">PyTorch</span>
          <span itemProp="knowsAbout">Computer Vision</span>
          <span itemProp="knowsAbout">Data Science</span>
        </div>
      </div>
    </section>
  )
}

export default About