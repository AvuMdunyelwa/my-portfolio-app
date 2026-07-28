import heroImg from './assets/heropic.jpg'
import myCV from './assets/doc/Avuzwa_Mdunyelwa_CV.pdf'
import './App.css'
import Navbar from './Navbar.jsx'
import Projects from './Projects.jsx'
import Experience from './Experience.jsx'


function HeroSection() {
const techTools = [
  ['0','HTML & CSS', '#ffd2a9'],     
  ['1','Bootstrap', '#c7a4ff'],       
  ['2','JavaScript', '#fff3a5'],     
  ['3','React.js', '#a1e4ff'],        
  ['4','Python', '#aac6fd'],          
  ['5','Flask', '#bac2cc'],          
  ['6','SQL', '#ffb1c3'],            
  ['7','Git & GitHub', '#ababab'],    
  ['8','Render', '#F8F9FA'],        
  ['9','Vercel', '#d0ffb5'],           
  ['9','API', '#9cffb4'],           
  ['9','Databases', '#ff9ca8'],           
  ];
  
  return (
    <>
      <section className='hero-section'>
        <Navbar />
        <div className='intro' id='intro'>
          <div className="hero-img" style={{ width: '95px', height: '95px', backgroundImage: `url(${heroImg})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'top', border: '3px solid black', borderRadius: '60px', boxShadow: '1px 3px 6px grey'}}>
          </div>
          <h1>Hi, my name is Avuzwa Mdunyelwa and i build custom web applications that are <span style={{backgroundColor: '#aaff00c8', padding: '0.1em', color: '#ffffff', fontWeight: '500',borderRadius: '16px'}}>aesthetically</span> pleasing and <span style={{backgroundColor: '#049bffc8', padding: '0.1em', color: '#ffffff', fontWeight: '500', borderRadius: '16px'}}>functional</span>. </h1>
        </div>
      </section>
      <section className='about-section'>
        <div className="intro-2">
          <div className='overview' id='about' style={{width: '55%'}}>
            <h5>Overview</h5>
            <p style={{fontSize: '0.9rem', borderRight: '1px solid #757575', paddingRight: '0.1em'}}>
              Self-taught full-stack developer with a CS50x foundation and hands-on experience shipping and deploying
              production web applications end-to-end. Comfortable across the stack: relational database design,
              backend logic in Python/Flask, and interactive frontends in JavaScript. Seeking a Software Developer Internship to apply and grow these skills in a
              team environment.
            </p>
            <div style={{display: 'flex', gap: '0.8em'}}>
              <button><a href={myCV} target='_blank'>my cv</a></button>
              <button style={{backgroundColor: '#049bffc8', color: 'white'}}><a href='https://github.com/AvuMdunyelwa' target='_blank' style={{color: 'white'}}>GitHub</a></button>
              <button style={{backgroundColor: '#9eed00c8'}}><a href='https://www.linkedin.com/in/avuzwa-mdunyelwa' target='_blank' style={{color: 'white'}}>LinkedIn</a></button>
            </div>
          </div>
          <div className='tech-stack' style={{width: '50%', paddingLeft: '0.1em'}}>
            <h5>Tech-stack</h5>
            <ul>
              {techTools.map((tool) => 
                <li key={tool[0]} style={{fontSize: '0.8rem', backgroundColor: `${tool[2]}`, padding: '0.3em', borderRadius: '16px', fontWeight: 'bold'}}>{tool[1]}</li>
              )}
            </ul>
          </div>
        </div>
      </section>
      <section className='projects-section' style={{height: 'fit-content', maxWidth: '100%'}}>
        <Projects />
      </section>
      <section className='experience-section' style={{height: 'fit-content', maxWidth: '100%'}}>
        <Experience />
      </section>
      <section>
        <div className='contact' id='contact'>
            <h3 style={{marginBottom: '0', fontWeight: '800'}}>Tell me about your next project!</h3>
            <button style={{width: '9vw', height: '7vh', backgroundColor: 'black', color: 'white'}}><a href='avuzwamdunyelwa@gmail.com' style={{color: 'white'}}>Email</a></button>
        </div>
      </section>
    </>
  )
}

export default HeroSection
