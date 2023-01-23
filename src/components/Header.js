import { useEffect, useState } from 'react';
import classes from './Header.module.scss';
import SearchBar from './SearchBar';

const Header = () => {

    const [layout, setLayout] = useState('desktop');

    useEffect(() => {

        window.addEventListener("resize", () => {
            if (window.innerWidth <= 600) {
                setLayout("mobile");
            }
            else {
                setLayout("desktop");
            }
        });

        return () => {
            window.removeEventListener("resize", () => {
                if (window.innerWidth <= 600) {
                    setLayout("mobile");
                }
                else {
                    setLayout("desktop");
                }
            });
        };
    }, [])

    return (
        <header>
            {
                layout === 'desktop' ?
                    <img src={`${process.env.PUBLIC_URL}/images/youtubeLogo.svg`} alt="logo" className={classes.logo} /> : <img src={`${process.env.PUBLIC_URL}/images/youtubeMinLogo.svg`} alt="logo" className={classes.logo} />
            }
            <SearchBar />
        </header>
    )
}

export default Header;