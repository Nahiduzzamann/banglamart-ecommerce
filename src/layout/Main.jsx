import { useEffect, useState } from 'react'
import { Outlet } from "react-router-dom";
import ScrollToTop from '../components/ScrollToTop';
import Header from '../pages/Shared/Header/Header';
import Footer from '../pages/Shared/Footer/Footer';
import Loading from '../components/Loading';


const Main = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Simulate a delay to demonstrate loading animation
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2000);

        // Clean up the timer when the component unmounts
        return () => clearTimeout(timer);
    }, []);

    return (
        <div>

            {isLoading ? (
                <Loading />
            ) : (
                <>
                    <Header></Header>
                    <Outlet></Outlet>
                    <Footer></Footer>
                    <ScrollToTop />

                </>
            )}
        </div>
    );
};

export default Main;