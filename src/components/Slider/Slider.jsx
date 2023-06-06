import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper';
import Slide from './Slide';
import "swiper/css";
import "swiper/css/pagination";
import bg_1x600 from '../../assets/imgs/slider/bg_1x600.webp';
import bg_1x1200 from '../../assets/imgs/slider/bg_1x1200.webp'
import bg_2x600 from '../../assets/imgs/slider/bg_2x600.jpg'
import bg_2x1200 from '../../assets/imgs/slider/bg_2x1200.jpg'
import bg_3x600 from '../../assets/imgs/slider/bg_3x600.webp'
import bg_3x1200 from '../../assets/imgs/slider/bg_3x1200.webp'
import bg_4x600 from '../../assets/imgs/slider/bg_4x600.webp'
import bg_4x1200 from '../../assets/imgs/slider/bg_4x1200.webp'
import bg_5x600 from '../../assets/imgs/slider/bg_5x600.webp'

const slides = [
   {
      id: 1,
      bg_urls: [
         bg_1x600,
         bg_1x1200
      ],
      title: "Itchan Kala",
      descr: 'The old town retains more than 50 historic monuments and 250 old houses, dating primarily from the eighteenth or nineteenth centuries. ',
   },
   {
      id: 2,
      bg_urls: [
         bg_2x600,
         bg_2x1200
      ],
      title: "Ulugh Beg Observatory",
      descr: 'The Ulugh Beg Observatory is an observatory in Samarkand, Uzbekistan, built in the 1420s by the Timurid astronomer Ulugh Beg',
   },
   {
      id: 3,
      bg_urls: [
         bg_3x600,
         bg_3x1200
      ],
      title: "Registan",
      descr: 'The Registan was the heart of the ancient city of Samarkand of the Timurid Empire, now in Uzbekistan',
   },
   {
      id: 4,
      bg_urls: [
         bg_4x600,
         bg_4x1200
      ],
      title: "Gur-e-Amir",
      descr: 'The Gūr-i Amīr or Guri Amir is a mausoleum of the Turco-Mongol conqueror Timur (also known as Tamerlane) in Samarkand, Uzbekistan',
   },
   {
      id: 5,
      bg_urls: [
         bg_5x600,
         bg_5x600
      ],
      title: "Po-i-Kalyan",
      descr: 'Po-i-Kalan, or Poi Kalan (Uzbek: Poi Kalon, which means "At the Foot of the Great One"), is an Islamic religious complex located in Bukhara, Uzbekistan.',
   }
]


function Slider() {
   
   return (
      <Swiper
         modules={[Pagination, Navigation, Autoplay]}
         navigation={true}
         spaceBetween={0}
         pagination={{ 
            clickable: true,
            dynamicBullets: true
         }}
         loop={true}
         autoplay={{
            delay: 3000,
            disableOnInteraction: false
         }}
      >
         {
            slides.map(item => (
               <SwiperSlide key={item.id}>
                  <Slide slide={item} />
               </SwiperSlide>
            ))
         }
      </Swiper>
   )
}

export default Slider