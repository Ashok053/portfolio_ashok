const Projects = () => { 
  const projects = [
    {
      title: 'AI-Based Career Recommendation System (Final Year Project)',
      problem: 'Developed an ML system to recommend suitable career paths for students based on academic background, skills, and interests.',
      approach: 'Designed structured data pipelines for preprocessing and feature extraction, trained classification models, and evaluated recommendations using validation metrics. Focused on creating a reproducible solution with clear assumptions.',
      tech: ['Python', 'Scikit-learn', 'Pandas', 'Feature Engineering', 'Model Evaluation'],
      outcome: 'Delivered a functional career recommendation system as a final-year project. Gained experience in problem formulation, ML pipeline design, and translating requirements into deployable ML solutions.',
      github: 'https://github.com/ashok053/career-recommendations'
    },
    {
      title: 'MedicoAgent: Multilingual AI Health Assistant(major internship Project)',
      problem: 'Patients often misinterpret medical information due to language barriers and low health literacy, increasing health risks.',
      approach: 'Built a multilingual LLM-based pipeline with scraping of trusted sources (WHO, FDA, MedlinePlus), structured ingestion, semantic retrieval, and safety-constrained response generation.',
      tech: ['Python', 'LLMs', 'NLP', 'PostgreSQL', 'Qdrant', 'Web Scraping', 'ASR flow, TTS', 'FastAPI','Streamlit', ],
      learnings: 'Gained hands-on experience in LLM safety constraints, human-in-the-loop (HITL) validation, and designing reliable AI workflows for sensitive domains.',
      outcome: 'Delivered a working AI assistant that improves access to understandable health information through structured retrieval and controlled generation.',
      github: 'https://github.com/ashok053/medicoagent'
    },
    {
      title: 'Customer Churn Prediction – ML-Based Classification',
      problem: 'Built a leakage-proof churn prediction system using clean feature pipelines, stratified splitting, and nested cross-validation.',
      approach: 'Compared baseline and advanced models (LogReg, Random Forest, XGBoost), handled class imbalance with class weights/SMOTE, evaluated performance using ROC-AUC & PR-AUC. Applied SHAP explainability, probability calibration, fairness slice analysis, and exported versioned model artifacts with FastAPI + Streamlit UI.',
      tech: ['Python', 'Scikit-learn', 'XGBoost', 'MLflow', 'SHAP', 'FastAPI', 'Streamlit'],
      outcome: 'Achieved ROC-AUC 0.86 and PR-AUC 0.67. Gained practical experience in explainable ML, model calibration, and production-ready deployment.',
      github: 'https://github.com/ashok053/churnpredictions'
    },
    {
      title: 'Deep Learning for Vision: From Scratch to Transfer Learning',
      problem: 'Trained and evaluated image classification models on CIFAR-10 to study training stability, data augmentation, transfer learning, and model reliability.',
      approach: 'Built CNNs from scratch with modern training practices (augmentations, OneCycle LR, AMP), then fine-tuned pretrained ResNet/MobileNet models. Conducted augmentation ablations (RandAugment, MixUp, CutMix), analyzed errors with Grad-CAM, and evaluated robustness and calibration using ECE and reliability diagrams.',
      tech: ['Python', 'PyTorch', 'TorchVision', 'CIFAR-10', 'Grad-CAM', 'AMP'],
      outcome: 'Achieved 92% accuracy with an ECE of 0.0184. Produced calibrated, interpretable models with reproducible training pipelines and deployable inference code.',
      github: 'https://github.com/ashok053/visionstransfer-learning'
    },
    {
      title: 'Loan Risk Predictor – ML-Based Loan Classification',
      problem: 'Developed a loan risk classification system using financial and personal attributes.',
      approach: 'Performed Chi-Square, ANOVA, and correlation analysis for feature relevance. Evaluated multiple models across Accuracy, Precision, Recall, and F1 Score, with Random Forest achieving top performance. Built a Streamlit app for real-time predictions with input guidance and risk probabilities.',
      tech: ['Python', 'Scikit-learn', 'Random Forest', 'Pandas', 'Streamlit'],
      outcome: 'Achieved 99.6% accuracy. Delivered an interactive application with clear model interpretation and deployable interface.',
      github: 'https://github.com/Ashok053/loan_risk_predictor'
    },
    {
      title: 'Transformer-Based Sentiment Analysis System',
      problem: 'Built a sentiment analysis pipeline using transformer-based language models to classify large-scale text reviews.',
      approach: 'Fine-tuned pretrained transformer models with proper tokenization, training, evaluation, and error analysis. Focused on reproducibility and generalization, leveraging modern NLP fine-tuning techniques.',
      tech: ['Python', 'Transformers', 'PyTorch', 'Fine-tuning', 'NLP'],
      outcome: 'Successfully built a high-performing sentiment analysis system and gained hands-on experience with transformer architectures and NLP fine-tuning.',
      github: 'https://github.com/ashok053/sentiment-analysis'
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Projects</h2>
        <div className="grid grid-cols-1 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="p-6 bg-white dark:bg-gray-900 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <h3 className="text-2xl font-semibold mb-4 text-blue-600 dark:text-blue-400">
                {project.title}
              </h3>
              <div className="space-y-4 text-gray-700 dark:text-gray-300">
                <div>
                  <h4 className="font-semibold mb-2">Problem</h4>
                  <p>{project.problem}</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Approach</h4>
                  <p>{project.approach}</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Outcome & Learning</h4>
                  <p>{project.outcome}</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">GitHub</h4>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 underline"
                  >
                    {project.github}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
