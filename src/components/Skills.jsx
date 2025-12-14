const Skills = () => {
const skillCategories = [
  {
    title: 'Programming and CS ',
    skills: ['Python', 'SQL', 'OOPs','DSA','Operating Systems','DBMS','cloud']
  },
  {
    title: 'ML & DL ',
    skills: [
      'Classical ML',
      'Deep learnings',
      'Natural language Processing',
      'Transformers',
      'Scikit-learn',
      'Pytorch',
      'TensorFlow',
      'Model development and deployment'
    ]
  },
  {
    title: 'LLM & RAG',
    skills: [

      'Large Language Models (LLMs)',
      'Fine-tuning',
      'LangChain',
      'LangGraph',
      'Retrieval-Augmented Generation (RAG)',
      'Vector Databases',
      'Prompt Engineering'
    ]
  },
  {
    title: 'MLOps & Experiment Tracking',
    skills: [
      'MLflow',
      'Weights & Biases',
      'Model Versioning',
      'Experiment Tracking'
    ]
  },
  {
    title: 'Data & Deployment',
    skills: [
      'Pandas',
      'NumPy',
      'matplotlib & seaborn',
      'streamlit',
      'Docker',
      'FastAPI',
      'Git & GitHub'
    ]
  }
]



  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md"
            >
              <h3 className="text-2xl font-semibold mb-4 text-blue-600 dark:text-blue-400">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills