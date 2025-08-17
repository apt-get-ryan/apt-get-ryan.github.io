'use client';

import React, { useRef, useState, useCallback, useEffect, useMemo} from 'react';
import { ContentBox } from '../contentBox/ContentBox';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Mousewheel, Keyboard} from 'swiper/modules';


import projectsData from '@/data/projectsData';

import 'swiper/css/bundle';
import "./custom-swiper.css";
import { FaClipboardCheck, FaGithub } from 'react-icons/fa6';
import { StyledButton } from '../styledButton/StyledButton';



export const DisplayProjects = () => {
  const [ slideIndex, setSlideIndex ] = useState(0);
  const [ projectIndex, setProjectIndex] = useState(0);
  const swiperRef = useRef(null);
  let slidesPerProject = [];
  const handleSlideChange = useCallback(() => {
    if(swiperRef.current) {
      setSlideIndex(swiperRef.current.realIndex);
    }
  })

  slidesPerProject = useMemo( () => {
    return projectsData.map(project => project.imageSources.length);
  }, []);
  
  useEffect(() => {
    let acumulator = 0;
    let foundIndex = 0;

    for(let i = 0; i < slidesPerProject.length; i++) {
      const nextSlides = acumulator + slidesPerProject[i] || 0;
      if (slideIndex < nextSlides) {
        foundIndex = i;
        break;
      }

      acumulator += nextSlides;
    }
    setProjectIndex(foundIndex);
  }, [slideIndex])

  return (
    <>
      <span className="flex items-center font-medium text-2xl">
        <FaClipboardCheck className="inline"/>&nbsp;Meus Projetos
      </span>
      <div className='grid my-5 grid-cols-1 gap-4 min-h-80 md:grid-cols-2'>
        <ContentBox>
          <Swiper 
            slidesPerView={1}
            modules={[Navigation, Pagination, Mousewheel, Keyboard]}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            grabCursor={true}
            mousewheel={{
              thresholdDelta: 20
            }}
            keyboard
            loop
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            onSlideChange={handleSlideChange}
            className='h-full'>
            {
              projectsData.map((project, index) => {
                return project.imageSources.map( 
                  (imgSrc, imgIndex) => {
                    return (
                      <SwiperSlide key={`${index}-${imgIndex}`} className='bg-slate-300 !flex justify-center items-center'>
                        <div className="relative w-full h-60 flex justify-center items-center">
                          <img 
                            src={imgSrc}
                            className='object-cover h-64'
                            alt={project.altText}
                            loading='lazy'
                          />
                          <div className="swiper-lazy-preloader"></div>
                        </div>
                      </SwiperSlide>
                    )
                })
              })
              
            }
          </Swiper>
        </ContentBox>
        <ContentBox className={"grid grid-cols-1 grid-rows-[auto,1fr,auto]"}>
          <h3 className='text-xl mb-1 font-bold'>{projectsData[projectIndex].title}</h3>
          {projectsData[projectIndex].description}
          <StyledButton variant="black">
            <div className='flex gap-1 items-center justify-center'>
              <FaGithub className='inline align-middle'/> Acessar GitHub
            </div>
          </StyledButton>
        </ContentBox>
      </div>
    </>
  )
}
