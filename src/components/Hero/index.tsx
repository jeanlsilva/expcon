import { Bullet, BulletWrapper, Container, HeroContainer, HeroSection, Image1, Image2, Image3, Subtitle, Title } from "./styles";
import { useSpringCarousel } from 'react-spring-carousel-js';
import { BaseSyntheticEvent, useEffect, useRef } from "react";
import CTAButton from "../CTAButton";
import Menu from "../Menu";
import { Header } from "../../styles/global";

export default function Hero() {
    const bulletRef = useRef<HTMLDivElement>(null);

    const { carouselFragment, slideToItem, slideToNextItem } = useSpringCarousel({
        withThumbs: false,
        withLoop: true,
        items: [
            {
                id: 'item-1',
                renderItem: <Image1 />,
            },
            {
                id: 'item-2',
                renderItem: <Image2 />,
            },
            {
                id: 'item-3',
                renderItem: <Image3 />,
            },
        ],
    });

    useEffect(() => {
        let counter = 0;
        setInterval(() => {
            slideToNextItem();
            if (counter < 2) {
                counter++;
            } else {
                counter = 0;
            }
            document.querySelectorAll(Bullet).forEach(item => item.classList.remove('selected'));         
            document.querySelectorAll(Bullet)[counter].classList.add('selected');
        }, 10000);
    }, [slideToNextItem]);

    function handleChangeSlide(e: BaseSyntheticEvent, id: string) {
        document.querySelectorAll(Bullet).forEach(item => item.classList.remove('selected'));
        e.currentTarget.classList.add('selected');
        slideToItem(id);
    }

    return (
        <HeroSection id="hero">
            <Header>
                <Menu color="var(--white)" />
            </Header>
            <Container>
                <HeroContainer>{carouselFragment}</HeroContainer>            
                <Title>INTERACTIVE CONCERT EXPERIENCE</Title>
                <Subtitle>
                    Experience your favourite artists like 
                    never before and from the comfort of your own home.
                </Subtitle>
                <CTAButton>TRY IT NOW</CTAButton>
                <BulletWrapper>
                    <Bullet className="selected" onClick={(e) => handleChangeSlide(e, 'item-1')} />
                    <Bullet ref={bulletRef} onClick={(e) => handleChangeSlide(e, 'item-2')} />
                    <Bullet ref={bulletRef} onClick={(e) => handleChangeSlide(e, 'item-3')} />
                </BulletWrapper>
            </Container>
        </HeroSection>
    )
}