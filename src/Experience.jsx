function Experience() {
    const certifications = [
         ['15','cs50X: Introduction to computer science', 'HavardX', '2026'],['14','Introduction to coding', 'sheCodes', '2024'],['13','Bachelor of Arts', 'University of forthare', '2023'],
    ];

    return (
        <>
         <div id='experiences'>
            <div className="experience">
                <h5>Experience</h5>
                <h4 style={{fontSize: '1rem'}}>IT Support Intern — Internet Café</h4>
                <h4 style={{fontSize: '0.8rem'}}>Jun 2025 - Dec 2025</h4>
                <ul style={{ paddingLeft: '0.9em', fontSize: '0.9rem'}}>
                    <li key={18}>Diagnosed and resolved 100% of hardware, software, and connectivity issues within shift hours, with
                        zero unresolved escalations
                    </li>
                    <li key={19}>
                        Reduced average device downtime by proactively maintaining Windows PCs, printers, and
                        peripherals across the floor
                    </li>
                </ul>
            </div>
            <div className="certification">
                <h5>Certification</h5>
                <ul style={{listStyle: 'none', padding: '0', display: 'grid', gap: '0.3em' }}>
                    {certifications.map((cert) => 
                        <li key={cert[0]} style={{borderRadius: '10px', backgroundColor: '#9eed00c8', padding: '0.4em', fontSize: '0.9rem'}}>
                            <p style={{margin: '0'}}><b>{cert[1]}</b><br/> {cert[2]}<br/> {cert[3]}</p>
                        </li>
                    )}
                </ul>
            </div>
        </div>
        </>
    )
}

export default Experience