function Skills() {
  const skills = [
    {
      icon: "</>",
      title: "Languages",
      items: ["JavaScript", "Java", "HTML", "CSS"],
    },
    {
      icon: "🖥",
      title: "Frontend",
      items: ["React", "React Native", "Vite", "Bootstrap"],
    },
    {
      icon: "⚙️",
      title: "Backend",
      items: ["Node.js", "Express.js"],
    },
    {
      icon: "🗄",
      title: "Database",
      items: ["MongoDB", "MSSQL"],
    },
    {
      icon: "🔧",
      title: "Tools",
      items: ["Git", "GitHub", "Postman", "VS Code", "IntelliJ IDEA"],
    },
  ];

  return (
    <section id="skills">
       <div className="about-title">
    
    <span className="aboutme">My</span>
        <span className="aboutme1" style={{position:'relative', right:'-20px'}}>Skills</span>

    </div>
    
      <div className="skills-grid">
        {skills.map((skill) => (
          <div className="skill-card" key={skill.title}>
            <div className="skill-card-header">
              <span className="skill-icon">{skill.icon}</span>
              <h3>{skill.title}</h3>
            </div>
            <ul className="skill-list">
              {skill.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;