import AppLogo from './AppLogo'

function AppFooter() {
    return (
        <footer className="AppFooter">
            <div className="AppFooter__inner container">
                <div className="AppFooter__logo">
                    <AppLogo />
                </div>
                <p className="AppFooter__copy">
                    © Copyright 2003-2022
                </p>
            </div>
        </footer>
    );
}

export default AppFooter;
