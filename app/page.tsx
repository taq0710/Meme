import React from 'react';
import ImageCarousel from './game/page';
import Image from 'next/image';
import Logo from '../public/images/aion-logo02-min.png'

const images = [
  '/images/banner.jpg',
  '/images/image1.jpg',
  '/images/image2.jpg',
  '/images/image3.jpg',
  '/images/image4.jpg',
  '/images/image5.jpg',
  '/images/image6.jpg',
  '/images/image7.jpg',
  '/images/image8.jpg',
  '/images/image9.jpg',
  '/images/image10.jpg',
  '/images/image11.jpg',
  '/images/image12.jpg',
  '/images/image13.jpg',
  '/images/image14.jpg',
  '/images/image15.jpg',
  '/images/image16.jpg',
  '/images/image17.jpg',
  '/images/image18.jpg',
  '/images/image19.jpg',
  '/images/image20.jpg',
  '/images/image21.jpg',
  '/images/image22.jpg',
  '/images/image23.jpg',
  '/images/image24.jpg',
  '/images/image25.jpg',
  '/images/image26.jpg',
  '/images/image27.jpg',
  '/images/image28.jpg',
  '/images/image29.jpg',
  '/images/image30.jpg',
  '/images/image32.jpg',
  '/images/image32.jpg',
  '/images/image33.jpg',
  '/images/image34.jpg',
  '/images/image35.jpg',
  '/images/image36.jpg',
  '/images/image37.jpg',
  '/images/image38.jpg',
  '/images/image39.jpg',
  '/images/image40.jpg',
  '/images/image41.jpg',
  '/images/image42.jpg',
  '/images/image43.jpg',
  '/images/image44.jpg',
  '/images/image45.jpg',
  '/images/image46.jpg',
  '/images/image47.jpg',
  '/images/image48.jpg',
  '/images/image49.jpg',
  '/images/image50.jpg',
  '/images/image51.jpg',
  '/images/image52.jpg',
  '/images/image53.jpg',
  '/images/image54.jpg',
  '/images/image55.jpg',
  '/images/image56.jpg',
  '/images/image57.jpg',
  '/images/image58.jpg',
  '/images/image59.jpg',
  '/images/image60.jpg',
];

const HomePage: React.FC = () => {
  return (
    <div className="container flex flex-col items-center mx-auto justify-center h-screen gap-5">
      <Image src={Logo} alt='' width={500} height={500}/>
      <ImageCarousel images={images} />
    </div>
  );
};

export default HomePage;
