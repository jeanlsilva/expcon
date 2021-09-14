import { useEffect, useRef, useState } from "react";
import { CTAButton, Header } from "../../styles/global";
import Menu from "../Menu";
import { Container, LeftArea, LeftSoundBox, MainContent, RightArea, RightSoundBox } from "./styles";

export default function RedSection() {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef<HTMLAudioElement>(null);
    const [musicButtonText, setMusicButtonText] = useState('CLICK');

    useEffect(() => {
        if (!audioRef.current) {
            return;
        }

        if (isPlaying) {
            audioRef.current.play();
        } else {
            audioRef.current.pause();
        }
    }, [isPlaying]);

    function toggleMusic() {
        if (isPlaying) {
            setIsPlaying(false);
            setMusicButtonText('CLICK')
        } else {
            setIsPlaying(true);
            setMusicButtonText('PAUSE')
        }
    }

    return (
        <Container id="red">
            <Header>
                <Menu color="var(--light-red)" />
                <CTAButton 
                    onClick={() => window.location.href = '/pricing'} 
                    color="var(--light-red)">
                        TRY IT NOW
                </CTAButton>
            </Header>
            <MainContent>
                <LeftArea>
                    <h1>SUPERIOR SOUND</h1>
                    <h2>Experience live versions of your favourite songs.</h2>
                    <button>SEE DEMO</button>
                </LeftArea>
                <RightArea>
                    <LeftSoundBox src="/assets/images/medium17.png" width="254" alt="soundbox1" />
                    <RightSoundBox src="/assets/images/medium27.png" width="254" alt="soundbox2" />
                    <button onClick={toggleMusic}>{musicButtonText}</button>
                </RightArea>
            </MainContent>
            <audio
                src="/assets/music/sample.mp3"
                ref={audioRef}
                autoPlay={false}
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
            >
            </audio>
        </Container>
    )
}