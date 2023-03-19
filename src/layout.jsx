import { Outlet } from 'react-router-dom';
import Header from './components/header';

const Layout = () => {
    return (
        <div className="w-[90%] md:w-[70%] mx-auto">
            <Header />

            <main className="w-full flex flex-col items-center gap-8">
                <Outlet />
            </main>
        </div>
    )
}

export default Layout