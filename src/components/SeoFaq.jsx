const SeoFaq = () => {
  const faqs = [
    {
      question: 'Who is Ashok Lamsal?',
      answer:
        'Ashok Lamsal is a machine learning engineer from Nepal focused on AI product development, NLP, LLM applications, and deep learning systems.'
    },
    {
      question: 'Is Ashok Lamsal available for AI and machine learning roles?',
      answer:
        'Yes. Ashok is open to machine learning engineer and AI engineer opportunities, including project collaboration and full-time roles.'
    },
    {
      question: 'What technologies does Ashok Lamsal use?',
      answer:
        'Ashok works with Python, PyTorch, TensorFlow, scikit-learn, FastAPI, Streamlit, LangChain, RAG pipelines, and MLOps tools such as MLflow.'
    },
    {
      question: 'Where is Ashok Lamsal based?',
      answer:
        'Ashok Lamsal is based in Nepal and works on AI and machine learning projects with practical real-world impact.'
    }
  ]

  return (
    <section id="faq" className="py-20 px-4" aria-label="Frequently asked questions about Ashok Lamsal">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((item) => (
            <details key={item.question} className="p-5 bg-white dark:bg-gray-800 rounded-lg shadow-md">
              <summary className="font-semibold text-lg text-gray-900 dark:text-white cursor-pointer">
                {item.question}
              </summary>
              <p className="mt-3 text-gray-700 dark:text-gray-300 leading-relaxed">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SeoFaq