import Header from "../components/header"

const Landing = () => {
    return (
        <section className="w-full h-full max-h-[100vh] mt-20 md:mt-36 flex flex-col items-center justify-center">
            <div className="w-full flex flex-col items-center justify-center md:flex-row md:justify-between gap-8">
                <div className="w-full max-w-[300px] md:max-w-[550px] sizeAnimation">
                    <img src="./media/landingTeacher.png" alt="Professor Teaching" />
                </div>

                <div className="flex flex-col items-center md:order-[-1] gap-4">
                    <div className="w-full flex flex-col gap-2">
                        <h1 className="text-3xl lg:text-5xl font-medium text-center text-color-dark">Calculadora</h1>
                        <h2 className="text-md text-center text-color-medium">
                            Nunca foi tão fácil calcular equações do 2º grau!
                        </h2>
                    </div>

                    <div className="scroll"></div>
                </div>
            </div>
        </section>
    )
}

export default Landing