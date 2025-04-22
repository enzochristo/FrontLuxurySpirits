import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import styled from "styled-components";
import Autoplay from "embla-carousel-autoplay"
import React from "react";
import { Link } from "react-router-dom";

//  useRef é um jeito do React armazenar esse plugin 
// sem que ele reinicialize a cada renderização.

const images = [
  "/assets/firstcarousel.jpg",
  "/assets/secondcarousel.jpg",
  "/assets/thirdcarousel.jpg"
];


    // “Ei React, guarda esse plugin aqui e não reinicia ele
    //  toda hora que o componente atualizar”.
    
    export function HeroCarousel() {
        return (
          <HeroCarouselWrapper>
            <Carousel
              plugins={[
                Autoplay({
                  delay: 3000,
                }),
              ]}
            >
              <CarouselContent>
                {images.map((src, index) => (
                  <CarouselItem key={index}>
                    <SlideImage src={src} alt={`Slide ${index + 1}`} />
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
      
            <FixedTextBlock>
              <h1>O mundo das bebidas finas começa aqui</h1>
              <h3>
                Explore uma curadoria exclusiva com os melhores vinhos, destilados e
                cervejas do mundo, escolhidos para transformar cada momento em uma
                celebração.
              </h3>
              <div className="buttons">
                <Link to={""}>Conheça os rótulos</Link>
                <Link className="button-b" to={""}>Ver todas as categorias</Link>
              </div>
            </FixedTextBlock>
          </HeroCarouselWrapper>
        );
      }
      
      const HeroCarouselWrapper = styled.div`
      position: relative;
      width: 100%;
      max-height: 600px;
      overflow: hidden;
    `;
    
    const SlideImage = styled.img`
      width: 100%;
      height: 600px;
      object-fit: cover;
      filter: brightness(50%);
    `;
    
    const FixedTextBlock = styled.div`
      position: absolute;
      top: 0;
      left: 0;
      z-index: 2;
      width: 100%;
      height: 100%;
      padding: 2rem;
      color: white;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
    
      h1 {
        font-size: 2.5rem;
        font-family: Palatino Linotype, serif;
        margin-bottom: 1rem;
      }
    
      h3 {
        font-size: 1.2rem;
        max-width: 800px;
        margin-bottom: 2rem;
      }
    
      .buttons {
        display: flex;
        gap: 1rem;
      }
    
      .buttons a {
        background: #D8A55C;
        color: white;
        padding: 0.6rem 1.2rem;
        border-radius: 5px;
        text-decoration: none;
        font-weight: bold;
      }
        .button-b{
        background: rgba(37,36,36,0.9) !important;
        }
    `;
    