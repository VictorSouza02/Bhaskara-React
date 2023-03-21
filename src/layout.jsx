import { Outlet } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';

const Layout = () => {
    return (
        <>
            <Header />

            <main className="w-full flex flex-col items-center gap-8">
                <Outlet />
            </main>

            <Footer/>
        </>
    )
}

export default Layout