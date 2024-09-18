import React, { useState } from 'react';
import styles from '../styles/ourteam.module.css';
import ProfilePic from "../assets/ProfilePic.jpg";
import Rhajjed_Reyes from "../assets/Rhajjed_Reyes.jpg";
import AndyNaj from "../assets/Andy Naj.JPG";
import MoisesVel from "../assets/Moises Velasquez.JPG";
import MyroSho from "../assets/Myro Sho.JPG";
import Byron from "../assets/Byron August.JPG";
import Mar from "../assets/Mariano Taca.JPG";
import Alpheos from "../assets/Alpheos Edwards.JPG";
import Edgar from "../assets/Edgar Mendrano.JPG";
import Rtop from "../assets/Rtop.JPG";
import Staff from "./Staff";

const teamMembers = [
    {
      name: "Ernesto Velasquez",
      position: "Head Ranger ",
      description: "In the beautiful village of Bullet Tree Falls in the Cayo District, Ernesto Velasquez resides. With a nine-year experience in the Belize Maya Forest area, Ernesto has been working diligently to protect this incredible forest, which was previously unprotected. As the head ranger and fire boss at the Belize Maya Forest Trust for the past two years, Ernesto has had the privilege of directly collaborating with the ranger team's management. This role has provided him with a remarkable experience, and he remains committed to working alongside the ranger team to safeguard the native forest, its trees, the water systems of the Cara Blanca Pools, and the endangered animals of the Belizean jungle. ",
      imgSrc: ProfilePic
    },
    {
      name: "Andy Naj",
      position: "BMF Ranger ",
      description: "Andy, a dedicated BMF Ranger, is on a noble mission to safeguard and educate future generations on the intrinsic value of coexisting with nature. Residing in Arenal village, Cayo District, he has witnessed a gradual decline in wildlife, prompting him to immerse himself fully in the protection of the environment. Every moment spent in the defense of wildlife and forests is cherished by Andy, as he firmly believes in the interconnectedness between all living beings and the ecosystem. Andy considers himself fortunate to have found his calling as a BMF Ranger, where he is constantly learning from the diverse flora and fauna that surround him. Nature, in his eyes, is the ultimate mentor, imparting invaluable lessons on the importance of stewardship and conservation. Beyond the technical aspects of his role, Andy's unwavering passion and deep affection for the forest and its biodiversity drive him to instill a sense of responsibility in others. Through his work at BMF, he strives to raise awareness about the critical role that plants and animals play in sustaining our existence. ",
      imgSrc: AndyNaj
    },
    {
      name: "Moises Velasquez",
      position: "BMF Ranger ",
      description: "Moises Velasquez serves as a ranger at the Belize Maya Forest, finding immense fulfillment in safeguarding a vital part of Belize that will benefit both present and future generations. Witnessing the gradual disappearance of Belize's forests and the consequential loss of watersheds during his upbringing, he is deeply committed to his role at the Belize Maya Forest Trust. His daily tasks involve exploring the stunning, verdant forest on foot, marveling at the breathtaking lagoons, and continuously being captivated by the diverse wildlife that thrives in this natural habitat. ",
      imgSrc: MoisesVel
    },
    {
      name: "Myro Sho",
      position: "BMF Ranger ",
      description: "Myro Ervin Sho,  stands as a beacon of dedication in his role as a ranger at the Belize Maya Forest Trust. Originally from Pueblo Viejo Village, Toledo District, his commitment to preserving the natural treasures of Belize's forests transcends mere employment, constituting a heartfelt mission. For him being a ranger is not just a profession; it's a solemn responsibility to safeguard the delicate balance of nature. His daily endeavors involve protecting the diverse flora and fauna, maintaining ecological harmony, and ensuring the sustainability of these invaluable ecosystems for generations to come. To him, this duty holds immense significance. The forests they protect serve as the lungs of the Earth, purifying the air, providing habitats for countless species, and offering invaluable resources crucial to sustaining life. The forests also hold cultural and historical importance, deeply rooted in the heritage of the people of Belize. He stands tall as guardians of Belize's natural heritage, tirelessly working to ensure that these forests thrive, not just for today, but for the countless tomorrows yet to come. ",
      imgSrc: MyroSho
    },
    {
      name: "Byron August",
      position: "BMF Ranger ",
      description: "Byron is a BMF Ranger, his role of safeguarding the diverse wildlife and rich biodiversity within the forest has heightened his reverence for the environment and the obligation to safeguard it for the coming generations. Moreover, the impact of his efforts transcends the boundaries of Belize, as wildlife freely traverses through Guatemala and Mexico, emphasizing the interconnectedness of ecosystems. He has cultivated within him a profound sense of responsibility and honor in preserving the natural legacy of the area, ensuring that the forthcoming generations can revel in its magnificence. It is not merely a duty but a clarion call for all individuals to actively engage in safeguarding the invaluable forests by abstaining from excessive hunting and averting fires in the broadleaf forests.  ",
      imgSrc: Byron
    },
    {
      name: "Keith Green",
      position: "BMF Ranger ",
      description: "Keith is from San Ignacio town in Cayo. Throughout his upbringing, he has always been known as a spirited and ambitious individual who finds joy in exploring the stunning outdoors of Belize and immersing himself in the natural environment. His deep-rooted love for nature and the wildlife of Belize has steered him towards a career dedicated to environmental conservation and protection. Being a BMF Ranger has not only transformed his life but has also provided him with a fulfilling career brimming with enriching experiences and a profound understanding of Belize's rich heritage and environment. From conducting patrols in their protected forest reserves to combatting forest fires, every challenge he faces as a Forest Ranger has been a valuable learning experience. He takes immense pride in serving as a protector of the environment under the Belize Maya Forest Trust organization.  ",
      imgSrc: ProfilePic
    },
    {
      name: "Mariano Taca",
      position: "BMF Ranger ",
      description: "Mariano Taca, also known as Marz, hails from the beautiful town of Peini (Punta Gorda). He has an associate degree in Natural Resources Management, which is the reason he has chosen to pursue a career working with the environment and biodiversity that he loves. He is physically fit, possesses strong communication skills, and has a passion for conservation. The Belize Maya Forest has an abundance of flora and fauna and the beautiful Cara Blanca pools, which are the heart of the forest and vital to biodiversity. He appreciates the opportunity given to them to train in fire suppression and the use of the Spatial Monitoring and Reporting Tool (SMART) to record their daily work. His vision working at BMFT is to work closely with guests and share information about the unique features of the Belize Maya Forest through educational tours and presentations. They also really enjoy bird watching at Belize Maya Forest. His commitment and passion for conserving the natural environment at BMFT will play a vital role in fostering a positive and memorable experience for all. ",
      imgSrc: Mar
    },
    {
      name: "Alpheos Edwards",
      position: "BMF Ranger ",
      description: "Alpheos Edwards lives in the beautiful town of Santa Elena, Cayo District. He is proud to be a forest ranger for the Belize Maya Forest (BMF). Today, he wants to share his experience as a ranger within the beautiful forest and vast pools and streams of the BMF. Working as a ranger, he feels the forest is calling for them. He believes that Belize Maya Forest is for everyone, to protect and enjoy. The area is enriched with flora and fauna, a forest that serves as the lungs of nature, purifying the air they breathe. Exploring nature is his hobby; everywhere he goes, he feels like nature follows him. The sun, the rain, the air, the birds—he never feels alone because nature has become part of him. ",
      imgSrc: Alpheos
    },
    {
      name: "Edgar Mendrano",
      position: "BMF Ranger ",
      description: "Edgar Medrano stated that his name is Edgar Medrano. He has been working in the Belize Maya Forest for the past 10 years, two of which were spent with BMFT and the other eight with a previous landowner. He expressed his enjoyment in working for BMFT because the organization has opened new opportunities for the staff. They have participated in several trainings, including search and rescue as well as basic techniques of wildland fire suppression. Such trainings are very helpful because this year, for example, they had several fires in which these basic techniques had to be implemented. The speaker has a real passion for the forest. They believe that without the forest, which produces clean air and provides temperature control, no living thing on this planet would be able to survive. They emphasize the necessity of the forest while noting that the forest also needs support to remain green. Therefore, the speaker would like to ask everyone to be a part of this green world. ",
      imgSrc: Edgar
    },
    {
      name: "Rhajied Reyes",
      position: "BMF Ranger ",
      description: "His name is Rhajjed Rhamar Reyes, and he hails from the beautiful Teakettle village. At 21 years old, he proudly serves as a ranger for the Belize Maya Forest Trust. This role resonates deeply within him because it allows him to immerse himself in the beauty of nature while actively protecting it and learning new skills. Being a ranger is more than just a job for him; it’s a passion rooted in his upbringing in the heart of Belize's rich ecosystems. Growing up surrounded by the stunning biodiversity of the forest, he developed a profound appreciation for the natural heritage. The experience ignited a desire within him to safeguard these precious environments for future generations. Every day as a ranger, he is motivated by the opportunity to make a tangible difference. Whether it is conducting wildlife surveys, patrolling protected areas, or engaging with local communities to promote conservation efforts, each task contributes to the larger goal of preserving the natural wonders. He is excited to share his experience and insights with others and grateful to be working with like-minded individuals who share the same passion for the natural wonders and wildlife. ",
      imgSrc: Rhajjed_Reyes
    },
    {
      name: "Ian Flowers",
      position: "BMF Ranger ",
      description: "Ian Flowers is a passionate permaculture expert and landscaper renowned for crafting stunning resort cabins and organic farm landscapes, cultivating organic food with precision. Now, as a proud member of the BMFT ranger team, each day brings awe-inspiring moments for him as he witnesses the breathtaking flora and fauna in their Belizean backyard. Being part of the BMFT team is not just a job for them; it's a calling to safeguard their land, protect their animals, and preserve their precious trees. In the dry season, their team channels unwavering dedication, putting forth 100% effort into ensuring the forest remains resilient. Their commitment extends beyond duty — they are resolute in their mission to protect the unique and beautiful species that thrive deep within the woods of BMF. Together, they forge a legacy of conservation and harmony with nature. ",
      imgSrc: ProfilePic
    },    
   




  ];

  const Ourteam = () => {
    const [selectedMember, setSelectedMember] = useState(null);
  
    const openModal = (member) => {
      setSelectedMember(member);
    };
  
    const closeModal = () => {
      setSelectedMember(null);
    };
  
    return (
      <div>
        <header className={styles.header}>
          <img src={Rtop} alt="Header" className={styles.headerImage} />
          <h1 className={styles.titleoverlay}>Our Team</h1>
        </header>
        <Staff></Staff>
        <section className={`${styles.section2} ${styles.animateRollIn}`}>
        <header className={styles.banner3}>Protection Team</header>
      </section>
        <div className={styles.biographypage}>
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className={styles.teammember}
              onClick={() => openModal(member)}
            >
              <div className={styles.image}>
                <img src={member.imgSrc} alt={member.name} />
              </div>
              <div className={styles.text}>
                <h2 className={styles.name}>{member.name}</h2>
                <h3 className={styles.position}>{member.position}</h3>
              </div>
            </div>
          ))}
  
          {selectedMember && (
            <div className={`${styles.modal} ${styles.show}`}>
              <div className={styles.modalContent}>
                <span className={styles.close} onClick={closeModal}>&times;</span>
                <div className={styles.modalImage}>
                  <img src={selectedMember.imgSrc} alt={selectedMember.name} />
                </div>
                <div className={styles.modalDetails}>
                  <h2 className={styles.name}>{selectedMember.name}</h2>
                  <h3 className={styles.position}>{selectedMember.position}</h3>
                  <p>{selectedMember.description}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  };
  
  export default Ourteam;