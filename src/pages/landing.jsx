import { Link } from "react-router-dom"
import Header from "../components/header"

const Landing = () => {
    return (
        <div className="w-full">
            <section className="w-full min-h-[100vh] flex flex-col items-center justify-center md:mt-10">
                <div
                    className="
                        w-[70%] max-w-[900px] mx-auto flex flex-col items-center justify-center md:flex-row 
                            md:justify-between gap-4 md:gap-8
                        "
                >
                    <div className="w-full max-w-[300px] md:max-w-[550px]">
                        <img src="./media/landingTeacher.png" alt="Professor Teaching" />
                    </div>

                    <div className="flex flex-col items-center md:order-[-1] gap-4">
                        <div className="w-full flex flex-col gap-2">
                            <h1 className="text-3xl lg:text-5xl font-bold text-center text-color-dark">
                                Calculadora
                            </h1>
                            <h2 className="text-md text-center text-color-medium">
                                Nunca foi tão fácil calcular equações do 2º grau!
                            </h2>
                        </div>

                        <Link
                            to='/calculadora'
                            className="
                                    px-2 py-1 bg-color-dark text-color-white rounded-lg 
                                    hover:border hover:border-color-dark hover:bg-color-lighter 
                                    hover:text-color-dark duration-500
                                "
                        >
                            Calcular agora!
                        </Link>

                        <div className="scroll"></div>
                    </div>
                </div>
            </section>

            <section
                className="
                    w-full min-h-[100vh] flex flex-col items-center justify-center 
                    bg-color-dark text-color-white
                "
            >
                <div className="w-[70%] max-w-[900px] mx-auto">
                    <div
                        className="
                            w-full flex flex-col items-center justify-center md:flex-row 
                            md:justify-between gap-8
                        "
                    >
                        <div
                            className="
                                w-full max-w-[300px] md:max-w-[550px] flex flex-col 
                                items-center justify-center
                            "
                        >
                            <img src="./media/study.png" alt="Itens relacionados ao estudo" />

                            <div className="flex gap-2 text-xs flex-wrap justify-center text-color-light">
                                <span>
                                    Ilustração por:
                                </span>

                                <a
                                    className="underline"
                                    href="https://icons8.com/illustrations/author/RogqKjMRAQ79"
                                >
                                    xopolin
                                </a>

                                <span>em:</span>

                                <a
                                    className="underline"
                                    href="https://icons8.com/illustrations"
                                >
                                    Ouch!
                                </a>
                            </div>
                        </div>

                        <div className="flex flex-col items-center md:order-[-1] gap-4">
                            <div className="w-full flex flex-col gap-5">
                                <h1 className="text-2xl md:text-3xl font-bold text-center">
                                    Mas afinal, oque seria uma equação do 2º grau?
                                </h1>

                                <p className="text-md text-center">
                                    Uma equação do 2° grau é toda e qualquer equação com uma
                                    incógnita que é expressa da seguinte forma:
                                </p>

                                <p className="text-xl text-center text-color-white font-bold">
                                    ax2 + bx + c = 0, a ≠ 0
                                </p>

                                <p className="text-md text-center">
                                    A letra x é a incógnita, e as letras a, b e c são números
                                    reais que exercem a função de coeficientes da equação.
                                    Quando resolvemos uma equação do 2° grau, podemos encontrar até dois resultados.
                                    Esses valores são chamados de raízes da equação.
                                </p>
                            </div>

                            <div className="scroll"></div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Landing