     import React, { useState } from 'react';
      import styles from '../styles/biography.module.css';
      import Elma from "../assets/Elma.png";
      import Tzul from "../assets/Tzul.JPG";
import ProfilePic from "../assets/ProfilePic.jpg";
import MichealHM from "../assets/MichealHM.png"
import JPepper from "../assets/JPepper.png"
import MGruin from "../assets/MGruin.png"
import DBuck from "../assets/DBuck.jpg"
import JRob from "../assets/JRob.jpg"

      const teamMembers = [
        {
            name: "Elma Kay",
            position: "Managing Director of the Belize Maya Forest Trust",
            description: "Elma Kay, Managing Director of the Belize Maya Forest Trust was part of the effort to secure the protection of the Belize Maya Forest. She combines almost 20 years of experience in academics, conservation and policy work for protected areas and forest management, as well as institutional building and organizational leadership for civil society organizations. She has served in committees related to carbon such as the Belize National Climate Change Committee and the Reducing Emissions from Deforestation and Forest Degradation (REDD+) Technical Expert Group, currently serves in several non-governmental organization (NGO) boards and is Chairwoman of the board of directors of the Belize Network of NGO’s.",
            imgSrc: Elma
          },
        {
            name: "Sayuri Tzul",
            position: "Community Outreach and Stewards Coordinator ",
            description: "Sayuri Tzul is currently in the role of Community Outreach and Stewards Coordinator, where she brings her extensive experience in wildlife conservation, epiphyte inventory, communications, conservation education, and sustainable tourism. With over a decade of background in conservation work in Belize, she has pursued further education, earning a master's degree in Agrobusiness and Sustainable Markets from the University of CATIE in Costa Rica. Sayuri has been instrumental in developing educational materials for conservation education, implementing effective communication strategies, and initiating stewardship programs, all in line with her dedication to driving positive change and enhancing livelihoods through her work in conservation and sustainability.",
            imgSrc: Tzul
          },
          {
            name: "Lyndon Mai",
            position: "Protected Areas Manager",
            description: "Lyndon currently serves as the Protected Area Manager for the Belize Maya Forest Trust, where he is committed to the conservation and protection of Belize's natural heritage. He is responsible for overseeing the protection and management of the Belize Maya Forest, a vast expanse of 236,000 acres. His role involves implementing a strategic approach to environmental protection to ensure the forest continued preservation and heath. He began his tenure at BMFT as the Protection and Operations Coordinator, playing a pivotal role in safeguarding the forest and coordinating efforts to maintain its ecological integrity. In his current position, he manages the daily operations of the ranger team, aligning fieldwork and administrative activities with the organization’s conservation objectives. Before joining BMFT, he served for a decade with the Belize Defence Force. During his military career, he developed a diverse skill set and a disciplined approach to operations management. His expertise in navigation, mapping, and operational oversight has proven essential in his present role. Driven by a passion for the natural world and a strong foundation in organizational and technological skills, Lyndon is dedicated to advancing BMFT’s mission. He is enthusiastic about contributing to the protection and sustainability of the Belize Maya Forest, ensuring its preservation for future generations.",
            imgSrc: ProfilePic
          },
          {
            name: "Ernesto Velasquez",
            position: "Head Ranger ",
            description: "In the beautiful village of Bullet Tree Falls in the Cayo District, Ernesto Velasquez resides. With a nine-year experience in the Belize Maya Forest area, Ernesto has been working diligently to protect this incredible forest, which was previously unprotected. As the head ranger and fire boss at the Belize Maya Forest Trust for the past two years, Ernesto has had the privilege of directly collaborating with the ranger team's management. This role has provided him with a remarkable experience, and he remains committed to working alongside the ranger team to safeguard the native forest, its trees, the water systems of the Cara Blanca Pools, and the endangered animals of the Belizean jungle. ",
            imgSrc: ProfilePic
          },
          {
            name: "Andy Naj",
            position: "BMF Ranger ",
            description: "Andy, a dedicated BMF Ranger, is on a noble mission to safeguard and educate future generations on the intrinsic value of coexisting with nature. Residing in Arenal village, Cayo District, he has witnessed a gradual decline in wildlife, prompting him to immerse himself fully in the protection of the environment. Every moment spent in the defense of wildlife and forests is cherished by Andy, as he firmly believes in the interconnectedness between all living beings and the ecosystem. Andy considers himself fortunate to have found his calling as a BMF Ranger, where he is constantly learning from the diverse flora and fauna that surround him. Nature, in his eyes, is the ultimate mentor, imparting invaluable lessons on the importance of stewardship and conservation. Beyond the technical aspects of his role, Andy's unwavering passion and deep affection for the forest and its biodiversity drive him to instill a sense of responsibility in others. Through his work at BMF, he strives to raise awareness about the critical role that plants and animals play in sustaining our existence. ",
            imgSrc: ProfilePic
          },
          {
            name: "Andy Naj",
            position: "BMF Ranger ",
            description: "Andy, a dedicated BMF Ranger, is on a noble mission to safeguard and educate future generations on the intrinsic value of coexisting with nature. Residing in Arenal village, Cayo District, he has witnessed a gradual decline in wildlife, prompting him to immerse himself fully in the protection of the environment. Every moment spent in the defense of wildlife and forests is cherished by Andy, as he firmly believes in the interconnectedness between all living beings and the ecosystem. Andy considers himself fortunate to have found his calling as a BMF Ranger, where he is constantly learning from the diverse flora and fauna that surround him. Nature, in his eyes, is the ultimate mentor, imparting invaluable lessons on the importance of stewardship and conservation. Beyond the technical aspects of his role, Andy's unwavering passion and deep affection for the forest and its biodiversity drive him to instill a sense of responsibility in others. Through his work at BMF, he strives to raise awareness about the critical role that plants and animals play in sustaining our existence. ",
            imgSrc: ProfilePic
          },
          {
            name: "Moises Velasquez",
            position: "BMF Ranger ",
            description: "Moises Velasquez serves as a ranger at the Belize Maya Forest, finding immense fulfillment in safeguarding a vital part of Belize that will benefit both present and future generations. Witnessing the gradual disappearance of Belize's forests and the consequential loss of watersheds during his upbringing, he is deeply committed to his role at the Belize Maya Forest Trust. His daily tasks involve exploring the stunning, verdant forest on foot, marveling at the breathtaking lagoons, and continuously being captivated by the diverse wildlife that thrives in this natural habitat. ",
            imgSrc: ProfilePic
          },
          {
            name: "Myro Sho",
            position: "BMF Ranger ",
            description: "Myro Ervin Sho,  stands as a beacon of dedication in his role as a ranger at the Belize Maya Forest Trust. Originally from Pueblo Viejo Village, Toledo District, his commitment to preserving the natural treasures of Belize's forests transcends mere employment, constituting a heartfelt mission. For him being a ranger is not just a profession; it's a solemn responsibility to safeguard the delicate balance of nature. His daily endeavors involve protecting the diverse flora and fauna, maintaining ecological harmony, and ensuring the sustainability of these invaluable ecosystems for generations to come. To him, this duty holds immense significance. The forests they protect serve as the lungs of the Earth, purifying the air, providing habitats for countless species, and offering invaluable resources crucial to sustaining life. The forests also hold cultural and historical importance, deeply rooted in the heritage of the people of Belize. He stands tall as guardians of Belize's natural heritage, tirelessly working to ensure that these forests thrive, not just for today, but for the countless tomorrows yet to come. ",
            imgSrc: ProfilePic
          },
          {
            name: "Byron August",
            position: "BMF Ranger ",
            description: "Byron is a BMF Ranger, his role of safeguarding the diverse wildlife and rich biodiversity within the forest has heightened his reverence for the environment and the obligation to safeguard it for the coming generations. Moreover, the impact of his efforts transcends the boundaries of Belize, as wildlife freely traverses through Guatemala and Mexico, emphasizing the interconnectedness of ecosystems. He has cultivated within him a profound sense of responsibility and honor in preserving the natural legacy of the area, ensuring that the forthcoming generations can revel in its magnificence. It is not merely a duty but a clarion call for all individuals to actively engage in safeguarding the invaluable forests by abstaining from excessive hunting and averting fires in the broadleaf forests.  ",
            imgSrc: ProfilePic
          },
          {
            name: "Keith Green",
            position: "BMF Ranger ",
            description: "Keith is from San Ignacio town in Cayo. Throughout his upbringing, he has always been known as a spirited and ambitious individual who finds joy in exploring the stunning outdoors of Belize and immersing himself in the natural environment. His deep-rooted love for nature and the wildlife of Belize has steered him towards a career dedicated to environmental conservation and protection. Being a BMF Ranger has not only transformed his life but has also provided him with a fulfilling career brimming with enriching experiences and a profound understanding of Belize's rich heritage and environment. From conducting patrols in their protected forest reserves to combatting forest fires, every challenge he faces as a Forest Ranger has been a valuable learning experience. He takes immense pride in serving as a protector of the environment under the Belize Maya Forest Trust organization.  ",
            imgSrc: ProfilePic
          },
          {
            name: "Mariano Taca",
            position: "BMF Ranger ",
            description: "Mariano Taca, also known as Marz, hails from the beautiful town of Peini (Punta Gorda). He has an associate degree in Natural Resources Management, which is the reason he has chosen to pursue a career working with the environment and biodiversity that he loves. He is physically fit, possesses strong communication skills, and has a passion for conservation. The Belize Maya Forest has an abundance of flora and fauna and the beautiful Cara Blanca pools, which are the heart of the forest and vital to biodiversity. He appreciates the opportunity given to them to train in fire suppression and the use of the Spatial Monitoring and Reporting Tool (SMART) to record their daily work. His vision working at BMFT is to work closely with guests and share information about the unique features of the Belize Maya Forest through educational tours and presentations. They also really enjoy bird watching at Belize Maya Forest. His commitment and passion for conserving the natural environment at BMFT will play a vital role in fostering a positive and memorable experience for all. ",
            imgSrc: ProfilePic
          },
          {
            name: "Alpheos Edwards",
            position: "BMF Ranger ",
            description: "Alpheos Edwards lives in the beautiful town of Santa Elena, Cayo District. He is proud to be a forest ranger for the Belize Maya Forest (BMF). Today, he wants to share his experience as a ranger within the beautiful forest and vast pools and streams of the BMF. Working as a ranger, he feels the forest is calling for them. He believes that Belize Maya Forest is for everyone, to protect and enjoy. The area is enriched with flora and fauna, a forest that serves as the lungs of nature, purifying the air they breathe. Exploring nature is his hobby; everywhere he goes, he feels like nature follows him. The sun, the rain, the air, the birds—he never feels alone because nature has become part of him. ",
            imgSrc: ProfilePic
          },
          {
            name: "Edgar Mendrano",
            position: "BMF Ranger ",
            description: "Edgar Medrano stated that his name is Edgar Medrano. He has been working in the Belize Maya Forest for the past 10 years, two of which were spent with BMFT and the other eight with a previous landowner. He expressed his enjoyment in working for BMFT because the organization has opened new opportunities for the staff. They have participated in several trainings, including search and rescue as well as basic techniques of wildland fire suppression. Such trainings are very helpful because this year, for example, they had several fires in which these basic techniques had to be implemented. The speaker has a real passion for the forest. They believe that without the forest, which produces clean air and provides temperature control, no living thing on this planet would be able to survive. They emphasize the necessity of the forest while noting that the forest also needs support to remain green. Therefore, the speaker would like to ask everyone to be a part of this green world. ",
            imgSrc: ProfilePic
          },
          {
            name: "Rhajied Reyes",
            position: "BMF Ranger ",
            description: "His name is Rhajjed Rhamar Reyes, and he hails from the beautiful Teakettle village. At 21 years old, he proudly serves as a ranger for the Belize Maya Forest Trust. This role resonates deeply within him because it allows him to immerse himself in the beauty of nature while actively protecting it and learning new skills. Being a ranger is more than just a job for him; it’s a passion rooted in his upbringing in the heart of Belize's rich ecosystems. Growing up surrounded by the stunning biodiversity of the forest, he developed a profound appreciation for the natural heritage. The experience ignited a desire within him to safeguard these precious environments for future generations. Every day as a ranger, he is motivated by the opportunity to make a tangible difference. Whether it is conducting wildlife surveys, patrolling protected areas, or engaging with local communities to promote conservation efforts, each task contributes to the larger goal of preserving the natural wonders. He is excited to share his experience and insights with others and grateful to be working with like-minded individuals who share the same passion for the natural wonders and wildlife. ",
            imgSrc: ProfilePic
          },
          {
            name: "Ian Flowers",
            position: "BMF Ranger ",
            description: "Ian Flowers is a passionate permaculture expert and landscaper renowned for crafting stunning resort cabins and organic farm landscapes, cultivating organic food with precision. Now, as a proud member of the BMFT ranger team, each day brings awe-inspiring moments for him as he witnesses the breathtaking flora and fauna in their Belizean backyard. Being part of the BMFT team is not just a job for them; it's a calling to safeguard their land, protect their animals, and preserve their precious trees. In the dry season, their team channels unwavering dedication, putting forth 100% effort into ensuring the forest remains resilient. Their commitment extends beyond duty — they are resolute in their mission to protect the unique and beautiful species that thrive deep within the woods of BMF. Together, they forge a legacy of conservation and harmony with nature. ",
            imgSrc: ProfilePic
          },    
          {
            name: "Ermain Requena",
            position: "Restoration and Regenerative Agriculture Coordinator",
            description: "Ermain Requena is a proud team member of the Belize Maya Forest Trust, serving as the Restoration and Regenerative Agriculture Coordinator. With over fifteen years of experience in working with farmers and providing technical support for small-scale agriculture, Ermain is dedicated to sharing his knowledge and promoting sustainable farming practices within the farming community. As part of the Belize Maya Forest Trust, Ermain collaborates with nine stakeholder communities in the wider Belize Maya Forest landscape. The focus of their regenerative agriculture program is to enhance livelihoods through nature-based solutions while working closely with farmers, community stakeholders, and community stewards. Ermain is grateful to be part of a passionate and diverse team that is committed to conserving the Belize Maya Forest through collaboration with nearby communities. ",
            imgSrc: ProfilePic
          },
          {
            name: "Raquel Chun",
            position: "Conservation Data Analyst",
            description: "Raquel comes from the beautiful village of Roaring Creek in the Cayo District. She has joined the Belize Maya Forest Trust (BMFT) team as the new Conservation Data Analyst. The endless natural beauty of Belize, along with the struggles and challenges in managing these areas, has always fascinated her. Her journey into conservation started at the University of Belize, where she studied marine science and natural resource management. She furthered her studies abroad with a Master's degree in Wildlife Health and Population Management at the University of Sydney, Australia and she is completing a doctoral degree in Climate Change and Smallholder Agriculture at Durham University in the United Kingdom. Belize has always held her heart and she has returned home to help protect the vibrant natural resources and contribute to the communities that depend on them.",
            imgSrc: ProfilePic
          },
          {
            name: "Matt Griffis",
            position: "Conservation Program Officer",
            description: "Matt Griffis serves as the Conservation Program Officer at the Wyss Foundation, a position he has held since 2011. In his role, he is responsible for managing the Foundation's land acquisitions program and overseeing conservation grantmaking efforts in Africa, Asia, and Europe. He earned a Bachelor of Science degree in Environmental Sciences from the University of California, Berkeley, and went on to obtain a Master of Science degree in Environmental Policy and Planning from the University of Michigan.  Matt resides in Durango, Colorado, where he engages in activities such as backpacking, trail running, skiing, and volunteering with organizations like the American Hiking Society and the Boy Scouts of America. ",
            imgSrc: ProfilePic
          },
          {
            name: "Michael H.M. Bowen",
            position: "Unkown",
            description: "Michael H.M. Bowen, an eighth-generation Belizean, who’s family first came to Belize in 1752, was educated in the United States of America, joined the family company after graduating from Duke University. In 2010 Michael became the CEO of Bowen & Bowen, a third-generation family company, which is the parent company of Crystal Bottling Company and Belize Brewing Company, the bottlers of Coca-Cola and Belikin Beer, among other companies, including Gallon Jug, a ~30,000 acres private rainforest jungle reserve which host the world-renown boutique lodge Chan Chich. Michael continues to push Bowen & Bowen’s mission statement, Pursuing excellence for a stronger Belize. ",
            imgSrc: MichealHM
          },
          {
            name: "Justin Pepper",
            position: "Uknown",
            description: "Justin Pepper is the Bobolink Foundation’s Chief Conservation Officer. Bobolink’s focus is biodiversity conservation in the Americas, emphasizing grasslands, coastal conservation, wildlife and wild landscapes, and community-based conservation. Prior to Bobolink, Justin worked for Audubon, first, supporting, amplifying and celebrating grassroots conservation leaders in the Chicago area, and later, developing a market-based approach to grassland bird conservation in partnership with conservation-minded ranchers. He previously worked for the Missouri Department of Conservation and The Nature Conservancy of Minnesota and graduated from the University of Kansas. ",
            imgSrc: JPepper
          },
          {
            name: "Mark Gruin",
            position: "Past Board Director",
            description: "Past Board Director (Deceased) Mark Gruin, Trustee of Rainforest Trust has dedicated more than 30 years to international conservation and sustainable development. He has worked, lived and traveled in more than 40 countries, helping a wide range of local and international non-governmental organizations create, develop and implement sustainable development strategies that integrate preserving biodiversity and threatened habitats with creating economic and humanitarian benefits to local communities. His career has been characterized by committed early involvement, working on the ground in early stages of difficult projects to find ways to quickly address immediate needs, while establishing a foundation for lasting and sustainable impact and increased local capacity. An inveterate wanderer and wonderer, working in remote places with little infrastructure and pressing needs has been the norm, including many projects throughout South and Central America and the Caribbean, the Russian Far East, sub-Saharan and the Horn of Africa, North America, Europe and the Caucasus. ",
            imgSrc: MGruin
          },
          {
            name: "Deeriann Buckley-Wade",
            position: "Uknown",
            description: "Deeriann Buckley-Wade is the Conservation Analyst with The Nature Conservancy’s Belize Business Unit. She holds a dual bachelor’s degree in environmental science from Galen University and the University of Indianapolis, as well as a master’s degree in Climate Change and Development from the SOAS University of London. Prior to TNC, she served as a public officer with the Government of Belize for almost 16 years, working in various capacities within the administrative and technical grades. Most recently, she served as a Blue Economy Officer responsible for matters relating to energy, climate change, maritime transport and sustainable development with the Ministry of Blue Economy and Civil Aviation. ",
            imgSrc: DBuck
          },
          {
            name: "Julie Robinson",
            position: "Belize Program Director, The Nature Conservancy",
            description: "Julie has a BSc in Biology from the University of South Florida. For over twenty-five years, Julie has focused her work on marine research and conservation off the coast of Belize. Today, she is the Belize Program Director for The Nature Conservancy where she provides strategic leadership for a steadily growing program that addresses crises including biodiversity loss and climate change through the implementation of Sustainable Fisheries and Mariculture Programs, Regenerative Ranching & Agriculture Programs, Land protection and Carbon offsetting programs. She was pivotal in the closing of the Belize Blue Bonds deal and continues to lead this program in close collaboration with the Government of Belize. Each of these programs aim to align science, technology, policy, finance and livelihoods for the benefit of people and the environment. Julie joined the Conservancy in 2006 where her focus was primarily as a marine program manager, building research and management capacity of local partners. She has led multi-disciplinary planning and science teams and built partnerships across diverse sectors and disciplines including government, private sector and non-profit organizations across multiple geographies including Mexico and the Seychelles. All of Julie’s conservation work is based on consultation where she has built a long process for cultivation and building consensus amongst stakeholders.",
            imgSrc: JRob
          },




      ];
      
      const Biography = () => {
        const [selectedMember, setSelectedMember] = useState(null);
      
        const openModal = (member) => {
          setSelectedMember(member);
        };
      
        const closeModal = () => {
          setSelectedMember(null);
        };
      
        return (
          <div className={styles.biographypage}>
            {teamMembers.map((member) => (
              <div key={member.name} className={styles.teammember} onClick={() => openModal(member)}>
                <div className={styles.image}>
                  <img src={member.imgSrc} alt={member.name} />
                </div>
                <div className={styles.description}>
                  <h2 className={styles.name}>{member.name}</h2>
                  <h3 className={styles.position}>{member.position}</h3>
                </div>
              </div>
            ))}
            <div className={`${styles.modal} ${selectedMember ? styles.show : ''}`}>
              <div className={styles.modalContent}>
                <span className={styles.close} onClick={closeModal}>&times;</span>
                <div className={styles.modalImage}>
                  <img src={selectedMember?.imgSrc} alt={selectedMember?.name} />
                </div>
                <div className={styles.modalDetails}>
                  <h2 className={styles.name}>{selectedMember?.name}</h2>
                  <h3 className={styles.position}>{selectedMember?.position}</h3>
                  <p>{selectedMember?.description}</p>
                </div>
              </div>
            </div>
          </div>
        );
      };
      
      export default Biography;
      