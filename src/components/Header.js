import LoadingBar from 'react-redux-loading-bar';
import SearchBar from './SearchBar';
import classes from './Header.module.scss';

const Header = ({ layout }) => {

    return (
        <>
            {layout === 'desktop' && <LoadingBar className={classes.loadingBar}/>}
            <header>
                {
                    layout === 'desktop' ?
                        <img src={`${process.env.PUBLIC_URL}/images/youtubeLogo.svg`} alt="logo" className={classes.logo} /> : <img src={`${process.env.PUBLIC_URL}/images/youtubeMinLogo.svg`} alt="logo" className={classes.logo} />
                }
                <SearchBar layout={layout}/>
            </header>
        </>
    )
}

export default Header;