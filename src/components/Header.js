import SearchBar from './SearchBar';
import classes from './Header.module.scss';

const Header = ({ layout }) => {

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