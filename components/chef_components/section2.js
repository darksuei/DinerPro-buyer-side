import Rating_stars from "../rating_stars"
import styles from "./chef.module.css"

function Section2({skills, contact_details, rating_stars=2}) {

  return (
    <div className={styles.section2}>
        <div className={styles.skills}>
            <h1>Skills</h1>
            <div>       
                {skills.map((skill, index)=><button key={index}>
                    {skill}
                </button>)}
            </div>
            <button className={styles.button}>Book chef</button>
        </div>
        <hr />
        <div className={styles.contact}>
            <h1>Contact information</h1>
            {contact_details.address && <p>Address: ${contact_details.address} </p>}
            {contact_details.email && <p>Email:   ${contact_details.email}</p>}
            {contact_details.facebook && <p>Facebook:   ${contact_details.facebook} Janeokoye Buffet</p>}
            {contact_details.instagram && <p>Instagram:   ${contact_details.instagram}</p>}
            {contact_details.twitter && <p>Twitter handle:  ${contact_details.twitter}</p>}

            <span>
                <h2>Overall Rating</h2>
                <Rating_stars
                    stars={rating_stars}/>
            </span>
        </div>
    </div>
  )
}

export default Section2
