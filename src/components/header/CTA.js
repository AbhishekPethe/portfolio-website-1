import CV from "../../assets/Resume (6).pdf"

export default function CTA(){
    return(
        <div className="cta">
            <a href={CV} className="btn">Download Resume</a>
            <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
    )
}