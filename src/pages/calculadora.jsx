import { Link } from "react-router-dom"
import Modal from "../components/modal"
import { useState } from "react"

const Calculadora = () => {

    const [valorA, setValorA] = useState(Number)
    const [valorB, setValorB] = useState(Number)
    const [valorC, setValorC] = useState(Number)

    const valorDelta = valorB * valorB + -4 * valorA * valorC

    return (
        <section className="w-full min-h-[100vh] flex flex-col items-center justify-center">
            <div
                className="
                            w-[90%] md:w-[70%] max-w-[900px] mx-auto flex flex-col items-center justify-center md:flex-row 
                            md:justify-between gap-4 md:gap-8
                        "
            >
                <div className="w-full max-w-[100px] md:max-w-[250px] bg-white fancy-shape p-1">
                    <img
                        src="./media/calculadora.png"
                        alt="calculator"
                        data-te-toggle="tooltip"
                        title="Por Xopolin"
                        className="ml-2 md:ml-6"
                    />
                </div>

                <div className="w-full max-w-[325px]">
                    <form className="bg-white shadow-md rounded p-4 flex flex-col gap-4 md:gap-6 items-center w-full">
                        <div >
                            <label className="block text-color-dark text-sm font-bold mb-1" htmlFor="valorA">
                                A
                            </label>
                            <input
                                className="
                                    shadow appearance-none border rounded w-full py-2 px-3 text-color-dark text-center md:text-start 
                                    leading-tight focus:outline-none focus:shadow-outline text-sm md:text-base
                                "
                                id="valorA"
                                type="number"
                                value={valorA}
                                onChange={(e) => setValorA(e.target.value)}
                                placeholder="Insira o valor de A"
                            />
                        </div>

                        <div>
                            <label className="block text-color-dark text-sm font-bold mb-1" htmlFor="valorB">
                                B
                            </label>
                            <input
                                className="
                                    shadow appearance-none border rounded w-full py-2 px-3 text-color-dark text-center md:text-start 
                                    leading-tight focus:outline-none focus:shadow-outline text-sm md:text-base
                                "
                                id="valorB"
                                type="number"
                                value={valorB}
                                onChange={(e) => setValorB(e.target.value)}
                                placeholder="Insira o valor de B"
                            />
                        </div>

                        <div>
                            <label className="block text-color-dark text-sm font-bold mb-1" htmlFor="valorC">
                                C
                            </label>
                            <input
                                className="
                                    shadow appearance-none border rounded w-full py-2 px-3 text-color-dark text-center md:text-start 
                                    leading-tight focus:outline-none focus:shadow-outline text-sm md:text-base
                                "
                                id="valorC"
                                type="number"
                                value={valorC}
                                onChange={(e) => setValorC(e.target.value)}
                                placeholder="Insira o valor de C"
                            />
                        </div>

                        <button
                            className="
                                bg-color-medium hover:bg-color-dark text-white font-bold py-2 px-4 
                                rounded focus:outline-none focus:shadow-outline"
                            type="button"
                            data-te-toggle="modal"
                            data-te-target="#modalCalculadora"
                        >
                            Calcular
                        </button>
                    </form>
                </div>
            </div>

            <Modal idRef="modalCalculadora">
                <div className="flex flex-col items-center w-full text-xl md:text-2xl text-color-dark font-bold">
                    <div className="flex flex-col w-full items-center md:flex-row md:justify-around">
                        <div className="flex">
                            <h1>
                                Δ =
                            </h1>
                            <h1 className="ml-1 text-red-500 text-3xl">
                                {valorDelta}
                            </h1>
                        </div>

                        <div className="flex">
                            <h1>
                                x1 =
                            </h1>
                            <h1 className="ml-1 text-red-500 text-3xl">
                                {((- valorB) + (valorDelta ** 0.5)) / (2 * valorA)}
                            </h1>
                        </div>

                        <div className="flex">
                            <h1>
                                x2 =
                            </h1>
                            <h1 className="ml-1 text-red-500 text-3xl">
                                {((- valorB) - (valorDelta ** 0.5)) / (2 * valorA)}
                            </h1>
                        </div>
                    </div>

                    <div className="text-color-light flex flex-col w-full items-center">
                        <h1 className="ml-1 text-red-500 text-sm">
                            Delta:
                        </h1>

                        <span>
                            Δ = b&sup2; – 4.a.c
                        </span>

                        <span>
                            Δ = {valorB}&sup2; – 4.{valorA}.{valorC}
                        </span>

                        <span>
                            Δ = {valorB * valorB} + {-4 * valorA * valorC}
                        </span>

                        <span>
                            Δ = {valorDelta}
                        </span>
                    </div>

                    <div className="text-color-light flex flex-col w-full items-center bg-color-pink-500">
                        <h1 className="ml-1 text-red-500 text-sm">
                            x1:
                        </h1>

                        <span className="flex flex-col items-center">
                            <span>
                                x1 = – B + √Δ
                            </span>

                            <span className="w-[90%] bg-color-light h-0.5"></span>

                            <span>
                                2.a
                            </span>
                        </span>

                        <span className="flex flex-col items-center">
                            <span>
                                x1 = –
                                {valorB < 1
                                    ? <>({valorB})</>
                                    : valorB
                                }
                                + √{valorDelta}
                            </span>

                            <span className="w-[90%] bg-color-light h-0.5"></span>

                            <span>
                                2.{valorA < 1
                                    ? <>({valorA})</>
                                    : valorA
                                }
                            </span>
                        </span>

                        <span className="flex flex-col items-center">
                            <span>
                                x1 = {- valorB} + {valorDelta ** 0.5}
                            </span>

                            <span className="w-[90%] bg-color-light h-0.5"></span>

                            <span>
                                {2 * valorA}
                            </span>
                        </span>

                        <span className="text-red-500">
                            x1 = {((- valorB) + (valorDelta ** 0.5)) / (2 * valorA)}
                        </span>
                    </div>

                    <div className="text-color-light flex flex-col w-full items-center">
                        <h1 className="ml-1 text-red-500 text-sm">
                            x2:
                        </h1>

                        <span className="flex flex-col items-center">
                            <span>
                                x2 = – B - √Δ
                            </span>

                            <span className="w-[90%] bg-color-light h-0.5"></span>

                            <span>
                                2.a
                            </span>
                        </span>

                        <span className="flex flex-col items-center">
                            <span>
                                x2 = –
                                {valorB < 1
                                    ? <>({valorB})</>
                                    : valorB
                                }
                                - √{valorDelta}
                            </span>

                            <span className="w-[90%] bg-color-light h-0.5"></span>

                            <span>
                                2.{valorA < 1
                                    ? <>({valorA})</>
                                    : valorA
                                }
                            </span>
                        </span>

                        <span className="flex flex-col items-center">
                            <span>
                                x2 = {- valorB} - {valorDelta ** 0.5}
                            </span>

                            <span className="w-[90%] bg-color-light h-0.5"></span>

                            <span>
                                {2 * valorA}
                            </span>
                        </span>

                        <span className="text-red-500">
                            x2 = {((- valorB) - (valorDelta ** 0.5)) / (2 * valorA)}
                        </span>
                    </div>
                </div>
            </Modal>
        </section>
    )
}

export default Calculadora