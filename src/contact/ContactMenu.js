

export default function ContactMenu() {
 
  const linkedInProfileUrl = "https://www.linkedin.com/in/mohdfaiyaazkhan/";
  const GithubProfileUrl = "https://github.com/MohdFaiyaazKhan";
  const MailUrl = "mailto:Khanfaiyaaz179@gmail.com";
  const Resume = "https://drive.google.com/file/d/1LFK7RhKGmiVPkhR0ignvRZpRuVyF0baQ/view?usp=drive_link"

  return (
    <div className="contact-menu">
        <p>Visit my LinkedIn profile:</p>
        <a className="linkedin" href={linkedInProfileUrl} target="_blank" rel="noopener noreferrer">
          My LinkedIn
        </a>
        
        <p>Visit my GitHub profile:</p>
        <a className="github" href={GithubProfileUrl} target="_blank" rel="noopener noreferrer">
          My GitHub
        </a>
        
        <p>Mail me on:</p>
        <a className="mail" href={MailUrl} target="_blank" rel="noopener noreferrer">
          Khanfaiyaaz179@gmail.com
        </a>
        
        <p>Check my Resume here:</p>
        <a className="resume" href={Resume} target="_blank" rel="noopener noreferrer">
          MyResume
        </a>
      </div>

  );
}
