import React from 'react';
import styles from '../styles/WWDInfo.module.css'; 


const WWDInfo = () => {
    return (
        <div className={styles.pageContainer}>
            
            <div className={styles.contentBox}>
                <section className={styles.container}>
                    <div className={styles.textContainer}>
                        <div className={styles.content}>
                            <p>The BMF comprises 236,000 acres of forest, rich in biodiversity, that will be protected in perpetuity for the people and Government of Belize (GoB). It was purchased from a US-based timber investment management company in December 2020, through years of partnership among NGOs, government and private sector organizations, and individuals, as it represented the last remaining extensive and contiguous lowland broadleaf forest of Belize.</p>
                            <p>The reserve borders Guatemala to the west, the Rio Bravo Conservation and Management Area (RBCMA) to the north, and private agricultural lands to the east and south. The northern part of the BMF also surrounds a private, mainly forested property known as Gallon Jug, which includes the Chan Chich Lodge and Sylvester Village. Together with the RBCMA and Gallon Jug, the BMF comprises nine percent of Belize’s land territory.</p>
                            <p>The protection of the BMF is one of the latest and largest contributions to Belize’s leadership in land and ocean conservation. Along with the RBCMA and nearby protected lands, the BMF consolidates more than half a million acres of protected forest in Belize that are immediately connected to the tri-national Selva Maya. Apart from being a home to Belize’s most exceptional biodiversity, including the charismatic jaguar, the globally endangered Baird’s tapir, and the critically endangered Central American river turtle, the BMF makes up the majority of the Belize portion of the Rio Hondo watershed shared with Mexico and plays a significant role in climate resilience for the country and region.</p>
                            <p>The protection of these forests prevents conversion to large-scale monocrop agriculture and further fulfills national goals to reduce pressures on biodiversity, improve mitigation and adaptation to climate change, and ensure the continued provision of vital ecosystem goods and services, such as water security, to local communities and industry.</p>
                            <p>The trustee, steward, and manager of the BMF is a local nonprofit organization, the BMFT, established in December 2020. The BMFT was also registered as an NGO under Belize's NGO Act in August 2021. The BMFT needed a strategic plan to guide its programs and operations and therefore embarked on a yearlong stakeholder engagement and participation process to develop a Conservation Action Plan (CAP). The BMF CAP is presented here and encompasses strategies to improve conservation targets or mitigate threats to those targets in the BMF and surrounding landscape. Its elaboration involved planning steps as outlined in the Conservation Measures Partnership’s Open Standards for the Practice of Conservation.</p>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default WWDInfo;
