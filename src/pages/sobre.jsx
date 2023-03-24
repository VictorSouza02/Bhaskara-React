const Sobre = () => {
    return (
        <section className="w-full min-h-[100vh] flex flex-col items-center justify-center">
            <div
                className="
                            w-[90%] md:w-[70%] max-w-[900px] mx-auto flex flex-col items-center justify-center md:flex-row 
                            md:justify-between gap-4 md:gap-8
                        "
            >


                <img
                    src="./media/working.gif"
                    alt="Working"
                    data-te-toggle="tooltip"
                    title="Por Irene M. Ray"
                />

                <div className="text-xl font-bold text-pink-400">
                    <h1>Página em construção</h1>
                    <h2>Desculpe o transtorno!</h2>
                </div>

            </div>
        </section>
    )
}

export default Sobre