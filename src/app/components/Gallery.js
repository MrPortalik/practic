import React from 'react';
import Image from 'next/image';

const Gallery = () => {
  return (
    <section id="gallery"> 
        <div className="container">
            <h2>Загрузка</h2>
            <div className="galleryBox">
                <a href="/images/galleryImages/img1.webp">
                    <Image src="/images/galleryImages/img1.webp" 
                    alt="Чернокожий джентльмен с лишним весом" 
                    width={120} 
                    height={120}
                    priority
                    className='img'/>
                </a>
                <a href="/images/galleryImages/img2.webp">
                    <Image src="/images/galleryImages/img2.webp" 
                    alt="Cекси нигер" 
                    width={120} 
                    height={120}
                    priority
                    className='img'/>
                </a>
                <a href="/images/galleryImages/img3.webp">
                    <Image src="/images/galleryImages/img3.webp" 
                    alt="Владимир Обамович"
                    width={120} 
                    height={120}
                    priority
                    className='img'/>
                </a>
                <a href="/images/galleryImages/img4.webp">
                    <Image src="/images/galleryImages/img4.webp"
                    alt="Белоснеж и 18,5 гомо-гномов от Netflix" 
                    width={120} 
                    height={120}
                    priority
                    className='img'/>
                </a>
                <a href="/images/galleryImages/img5.webp">
                    <Image src="/images/galleryImages/img5.webp" 
                    alt="Отчим Валера"
                    width={120} 
                    height={120}
                    priority
                    className='img'/>
                </a>
                <a href="/images/galleryImages/img6.webp">
                    <Image src="/images/galleryImages/img6.webp" 
                    alt="Зубастик 2077"
                    width={120} 
                    height={120}
                    priority
                    className='img'/>
                </a>
                <a href="/images/galleryImages/img7.webp">
                    <Image src="/images/galleryImages/img7.webp" 
                    alt="Свой среди чужих"
                    width={120} 
                    height={120}
                    priority
                    className='img'/>
                </a>
                <a href="/images/galleryImages/img8.webp">
                    <Image src="/images/galleryImages/img8.webp" 
                    alt="Звуки битбокса 300м от вас"
                    width={120} 
                    height={120}
                    priority
                    className='img'/>
                </a>
            </div>
        </div>
    </section>
  )
}

export default Gallery