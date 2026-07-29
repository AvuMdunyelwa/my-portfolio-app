import weatherapp from './assets/weatherapp2.png'
import one00pages from './assets/100pages.png'

function Projects() {
    const projectsInfo = [
        {'id': 16, 'theme': '#29a9ffc8', 'projectName': '100Pages', 'liveDemo': 'https://one00pages-o956.onrender.com/', 'githubLink': 'https://github.com/AvuMdunyelwa/100Pages', 'thumbNail': `${one00pages}`, 'description': 'A fullstack website that allows users to track their listening habits through adding reviews and ratings to their favourite songs'},
        {'id': 17, 'theme': '#ffbc04c8','projectName': 'Weather App', 'liveDemo': 'https://weather-forecast-kappa-navy.vercel.app/', 'githubLink': 'https://github.com/AvuMdunyelwa/weather-forecast', 'thumbNail': `${weatherapp}`, 'description': 'A weather forecast that displays 3-days forecast with imagery of the city'},
    ];

    return (
        <>
            <div className="projects" id='projects' style={{ backgroundColor: '#e7e7e7', padding: '0.7em', borderRadius: '10px', display: 'grid', gap: '0.7em'}}>
                <h5>Projects</h5>
                {projectsInfo.map((project) => 
                    <div className="project" key={project['id']} style={{gap: '0.5em', backgroundColor: 'white', padding: '0.7em', borderRadius: '10px'}}>
                        <img src={project['thumbNail']} alt="project-image" style={{borderRadius: '10px'}} />
                        <aside style={{padding: '0.8em'}}>
                            <h4 style={{fontWeight: '800', fontSize: '1rem', color: `${project['theme']}`}}>{project['projectName']}</h4>
                            <p style={{fontSize: '0.9rem'}}>{project['description']}</p>
                            <div className="links" style={{display: 'flex', gap: '0.5em'}}>
                                <button style={{backgroundColor: 'black'}} ><a href={project['githubLink']} target='_blank' style={{ color: 'white'}}>GitHub</a></button>
                                <button><a href={project['liveDemo']}>Demo</a></button>
                            </div>
                        </aside>
                    </div>
                )}
            </div>
        </>
    )
}

export default Projects
