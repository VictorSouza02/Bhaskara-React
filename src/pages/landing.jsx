import { Outlet } from 'react-router-dom';

const Landing = () => {
    return (
        <div className="w-[70%] mx-auto">
            <Header />

            <main className="w-full flex flex-col items-center mb-8 gap-8">
                <Outlet />
            </main>
        </div>
    )
}

export default Landing