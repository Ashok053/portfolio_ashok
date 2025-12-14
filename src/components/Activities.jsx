const Activities = () => {
  const activities = [
    {
      title: 'AI/ML Intern : Frost Digital Venture(Frost & sullivan)',
      duration: '2025 november – Present',
      description:
        'Working as AI/ML intern focused on machine learning and AI, contributing to real-world projects involving data preprocessing, model development, and deployment. Gained hands-on experience in applying ML techniques to solve practical problems under supervison of Mr. Binayek Pokhrel',
    },
    {
      title: 'Project Lead – Code for Change',
      duration: '2024 – 2025',
      description:
        'Led a student IT community of 50+ members from 10 colleges in chitwan, overseeing planning, task allocation, and smooth operations, managing resources, finances and Organized 20+ workshops and events and boosted student participation by 60% , Established partnerships with IT professionals, clubs, and colleges to expand community activities.',
    },
    {
      title: 'Microsoft Learn Student Ambassador',
      duration: '2024 – Present',
      description:
        'Representing Microsoft Learn on campus, organizing workshops, mentoring peers, and promoting technology learning initiatives.',
    },
    {
      title: 'Nepal Cloud Professional Volunteer',
      duration: '2025',
      description:
        'Contributed as a volunteer to cloud-focused initiatives, helping communities understand cloud technologies and participate in events.',
    },
    {
      title: 'Red Cross Volunteer',
      duration: '2013 – 2021',
      description:
        'Led junior & youth Red Cross circle in school. Participated in multiple community service initiatives, disaster relief, and awareness campaigns over eight years at the local, district, and national levels; served as a district board member for the Junior & Youth Red Cross Council for 3 years.'
    },
    {
      title: 'Hackathons',
      description:
        'Participated in KUSOM IS Hackathon (2024) and OSM HackFest (2025), building innovative projects in team environments and collaborating on open-source solutions.',
    },
  ];

  return (
    <section id="activities" className="py-20 px-4 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Activities & Leadership</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {activities.map((activity) => (
            <div
              key={activity.title}
              className="p-6 bg-white dark:bg-gray-900 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <h3 className="text-2xl font-semibold mb-2 text-blue-600 dark:text-blue-400">
                {activity.title}
              </h3>
              <p className="text-gray-500 dark:text-gray-400 font-medium mb-2">{activity.duration}</p>
              <p className="text-gray-700 dark:text-gray-300">{activity.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Activities;
