import React, { useEffect, useState } from 'react'
import { Container } from '../../styles/styled'
import Main from '../../components/Main/Main'
import Slider from '../../components/Slider/Slider'
import Carusel from '../../components/Carusel/Carusel'
import Title from './../../components/Title/Title';
import { CaruselBox } from './../../styles/styled';
import axios from 'axios'
import Motive from '../../components/Motive/Motive'

const API_KEY = '10927fb143f2a18c417e39a39f340a01'

const monuments = [
   {
      id: 1,
      title: "Ark of Bukhara",
      description: {
         descr: "he Ark is a large earthen fortification located in the northwestern part of contemporary Bukhara. In layout, it resembles a modified rectangle, a little elongated from the west to the east. The perimeter of the external walls is 789.6 m (2,591 ft), the area enclosed being 3.96 ha (9.8 acres). The height of the walls varies from 16 to 20 m (52 to 66 ft).Entrance to the Ark fortress, photographed around 1907 by Sergey Prokudin-Gorsky The ceremonial entrance into the citadel is architecturally framed by two 18th-century towers. The upper parts of the towers are connected by a gallery, rooms, and terraces. A gradually rising ramp leads through a winch-raised portal and a covered long corridor to the mosque of Dzhuma. The covered corridor offers access to storerooms and prison cells. In the center of the Ark is located a large complex of buildings, one of the best-preserved being the mosque of Ul'dukhtaron, which is connected to legends of forty girls tortured and cast into a well.",
         construction: "Prince Siyawush or Siyavusha built the Ark of Bukhara and was eventually buried there. After his death, the great citadel was put out of commission to mourn the prince. Three thousand years later, Budun Bukhar Khudah restored the citadel. There were many aspects of the design of the Ark of Bukhara that were influenced by astrological elements. For example, the palace has 7 stone pillars for the 7 star constellation Ursa Major. The overall shape of the Ark was also influenced by the constellation. Foundations of the citadel were also influenced by the topography and tombs of the area. There are multiple different kinds of tombs that became a unique feature of Bukhara. Single tombs were located in city buildings and there were also special tombs reserved for important people. The layout of the city divided it into three sections: the citadel, the madina, and the suburbs. All important buildings such as the mosques and government offices were within the citadel. The mosques within the Ark of Buhara were made of cotton, wood, clay, and both, raw and baked bricks. The baked bricks were used decoratively to line the mosques. The first mosque, Arslankhan, was built in 1119. Over its 349 year lifespan it was restored and expanded by the rulers, Kohandiz and Sharhristan. The rulers, amirs, and generals all lived inside the walls of the Ark of Bukhara. Outside of the ark were the suburbs where many villages were located. Eventually, the Canpirak wall was built to protect the people of those villages and provide more defense the citadel.",
         history: "The Ark is built on the remains of earlier structures, which constitute a layer twenty meters deep under the base arch, the layers indicating that previous fortresses had been built and destroyed on the site. The first known reference to the Ark is contained in the 'History of Bukhara' by Narshakhi (899 - 960). Abubakra wrote 'Bindu, the ruler of Bukhara, built this fortress, but it soon was destroyed. Many times it was constructed, many times destroyed.' Abubakra says that when the last ruler to rebuild asked counsel of his wise men, they advised him to construct the fortress around seven points, located in the same relation to each other as the stars of the constellation Ursa Major. Thus built, the fortress was never again destroyed.The age of the Ark has not been established accurately, but by 500 CE it was already the residence of local rulers. Here, in the fastness of the citadel, lived the emirs, their chief viziers, military leaders, and numerous servants."
      },
      img_src: "./src/assets/imgs/buildings/ark_bukhara.png"
   }
]


function HomePage() {
   const [trends, setTrends] = useState([])

   useEffect(() => {
      getTrends()
   }, [])

   async function getTrends() {
      await axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}&page=1`)
         .then(res => {
            setTrends(res.data.results)
            console.log(res.data.results)
         })
         .catch(err => console.log(err))
   }



   return (
      <Main>
         <Slider />
         <Container>
            <Motive />
            <CaruselBox>
               <Title title={'Top Monuments'} />
               <Carusel contents={monuments} type={'home'} />
            </CaruselBox>
         </Container>
      </Main>
   )
}

export default HomePage