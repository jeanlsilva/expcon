import { useRef, useState } from 'react';
import { FiMenu } from 'react-icons/fi';
import { Circle, Container, Logo, MenuItems } from './styles';

interface MenuProps {
    color?: string;
}

export default function Menu({ color }: MenuProps) {
    const menuListRef = useRef<HTMLUListElement>(null);
    const menuLayerRef = useRef<HTMLDivElement>(null);
    const [menuOpen, setMenuOpen] = useState(true);
    const [sectionColor, setSectionColor] = useState(color ? 'var(--white)' : 'var(--black)');

    function toggleMenu() {
        if (menuOpen) {
            setMenuOpen(false);
            menuListRef.current?.classList.add('banana');
            menuLayerRef.current?.classList.add('banana');
            if (color) {
                setSectionColor(color);
            } else {
                setSectionColor('var(--white)')
            }
        } else {
            setMenuOpen(true);
            if (color) {
                setSectionColor('var(--white)'); 
            } else {
                setSectionColor('var(--black)');
            }
            menuListRef.current?.classList.remove('banana');
            menuLayerRef.current?.classList.remove('banana');            
        }
    }

    return (
        <Container color={color} onClick={toggleMenu}>
            <div ref={menuLayerRef} >
                <Circle />
            </div>
            <FiMenu size={56} fontWeight='lighter' color={sectionColor || 'var(--black'} />
            <Logo color={sectionColor}>EXP|CON</Logo>
            <MenuItems ref={menuListRef}>
                <li>WHAT IS IT</li>
                <li>PERKS</li>
                <li>PRICING</li>
            </MenuItems>
        </Container>        
    );
}