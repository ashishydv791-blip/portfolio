import '../styles/Skills.css';

export default function Skills({ skills }) {
  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2>Skills & Expertise</h2>
        <div className="skills-grid">
          {skills.map((skillGroup, index) => (
            <div key={index} className="skill-category">
              <h3>{skillGroup.category}</h3>
              <div className="skill-items">
                {skillGroup.items.map((item, idx) => (
                  <div key={idx} className="skill-item">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
