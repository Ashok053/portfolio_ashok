const Blogs = () => {
  const blogs = [
    {
      title: 'Building an AI-Based Career Recommendation System and its issues',
      description:
        'Insights into designing end-to-end ML pipelines for recommending career paths, focusing on feature engineering, model evaluation, and reproducibility.',
      link: '#',
    },
    {
      title: 'Customer Churn Prediction with Explainable ML: power of Stastical Modeling',
      description:
        'A practical walkthrough on building churn prediction models, handling class imbalance, applying SHAP explainability, and deploying with FastAPI and Streamlit.',
      link: '#',
    },
    {
      title: 'Deep Learning for Vision with Transfer Learning : Footprint for LLM ',
      description:
        'Exploring CNNs, transfer learning, advanced data augmentations, Grad-CAM visualizations, and creating deployable image classification models.',
      link: '#',
    },
  ];

  return (
    <section id="blogs" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">
          Technical Blogs
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.map((blog) => (
            <a
              key={blog.title}
              href={blog.link}
              className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow block"
            >
              <h3 className="text-xl font-semibold mb-3 text-blue-600 dark:text-blue-400">
                {blog.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {blog.description}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;
