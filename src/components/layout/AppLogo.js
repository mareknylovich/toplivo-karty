import AppLogoImage from '../../assets/images/logo.svg'

function AppLogo() {
    return (
        <a className="AppLogo" href="#">
            <img src={AppLogoImage} alt=""/>
        </a>
    );
}

export default AppLogo;
