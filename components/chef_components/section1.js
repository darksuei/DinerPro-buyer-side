import Image from 'next/image'
import styles from './chef.module.css'
import picture from '../../public/images/homepage/succesStory.png'
import { CiLocationOn } from 'react-icons/ci'

function Section1({about, experience, name, location, mini_category, picture_url}) {
  return (
    <div className={styles.section1}> 
      <div className='flex items-center'>
        <div className={styles.image}>
            <Image 
                src={picture}
                // {picture_url} 
                // width={100} 
                // height={80} 
                fill
                alt={name} 
                style={{objectFit: 'cover', objectPosition: "top"}} />
        </div>
        <div>
            <h1 className={styles.name}>{name}</h1>
            <p className={styles.category}>{mini_category}</p>
            <p className={styles.location}><span><CiLocationOn/></span>{location}</p>
        </div>
      </div>
      <div className={styles.more}>
        <div>
            <h1>About</h1>
            <p>{about}</p>
        </div><hr />
        <div>
            <h1>Experience</h1>
            <p>{experience}</p>
        </div>
      </div>
    </div>
  )
}

export default Section1
