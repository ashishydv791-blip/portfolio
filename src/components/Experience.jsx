import '../styles/Experience.css';

export default function Experience({ experience }) {
  return (
    <section id="experience" className="experience">
      <div className="container">
        <h2>Work Experience</h2>
        <div className="experience-timeline">
          {experience.map((job) => (
            <div key={job.id} className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h3>{job.title}</h3>
                <p className="company">{job.company}</p>
                <p className="duration">{job.duration}</p>
                <p>{job.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
