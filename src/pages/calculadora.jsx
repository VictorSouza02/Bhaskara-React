import Modal from "../components/modal"
import { useState } from "react"
import Math from "../media/mathIcons.gif"
import ImageEr from "../media/error.png"

const Calculadora = () => {

    const [valorA, setValorA] = useState(null)
    const [valorB, setValorB] = useState(null)
    const [valorC, setValorC] = useState(null)

    return (
        <section className="w-full min-h-[100vh] flex flex-col items-center justify-center">
            <div
                className="
                            w-[90%] md:w-[70%] max-w-[900px] mx-auto flex flex-col items-center justify-center md:flex-row 
                            md:justify-between gap-4 md:gap-8
                        "
            >
                <div className="w-full max-w-[150px] md:max-w-[300px] bg-white fancy-shape p-4">
                    <img
                        src={Math}
                        alt="Icones matemáticos"
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
                {isNaN(((- valorB) + ((valorB * valorB + -4 * valorA * valorC) ** 0.5)) / (2 * valorA)
                    &&
                    ((- valorB) + ((valorB * valorB + -4 * valorA * valorC) ** 0.5)) / (2 * valorA))
                    ?

                    <div
                        className="
                            flex flex-col items-center
                        "
                    >
                        <img
                            src={ImageEr}
                            alt="Erro"
                            data-te-toggle="tooltip"
                            title="Por Xopolin"
                        />

                        <div className="font-bold text-xl md:text-2xl text-red-500 text-center">
                            <h1>Ocorreu um erro</h1>

                            <p>
                                favor conferir os valores inseridos
                            </p>
                        </div>

                    </div>


                    :

                    <div
                        className="
                            flex flex-col md:flex-row md:items-start flex-wrap items-center w-full text-xl justify-center
                            md:text-2xl text-color-dark font-bold gap-2
                        "
                    >
                        <div
                            className="
                            flex gap-6 flex-wrap w-full items-center justify-center md:flex-row md:justify-around 
                            pb-2 md:pb-4 border-b-2 border-color-dark
                        "
                        >
                            <h1 className="rounded-md shadow-md text-white bg-orange-500 px-2 py-1">
                                Δ = {valorB * valorB + -4 * valorA * valorC}
                            </h1>

                            <h1 className="rounded-md shadow-md text-white bg-orange-500 px-2 py-1">
                                x1 = {((- valorB) + ((valorB * valorB + -4 * valorA * valorC) ** 0.5)) / (2 * valorA)}
                            </h1>

                            <h1 className="rounded-md shadow-md text-white bg-orange-500 px-2 py-1">
                                x2 = {((- valorB) - ((valorB * valorB + -4 * valorA * valorC) ** 0.5)) / (2 * valorA)}
                            </h1>
                        </div>

                        <div className="text-color-dark rounded-md shadow-md bg-color-light p-4 flex flex-col items-center gap-2">
                            <h1 className="rounded-md shadow-md text-white bg-color-dark px-2 py-1">
                                Delta
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

                            <span className="text-orange-500 px-2 py-1 rounded-md bg-white">
                                Δ = {valorB * valorB + -4 * valorA * valorC}
                            </span>
                        </div>

                        <div className="text-color-dark rounded-md shadow-md bg-color-light p-4 flex flex-col items-center gap-2">
                            <h1 className="rounded-md shadow-md mb-1 text-white bg-color-dark px-2 py-1">
                                x1
                            </h1>

                            <span className="flex flex-col items-center">
                                <span>
                                    x1 = – B + √Δ
                                </span>

                                <span className="w-[90%] bg-color-dark h-0.5"></span>

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
                                    + √{(valorB * valorB + -4 * valorA * valorC)}
                                </span>

                                <span className="w-[90%] bg-color-dark h-0.5"></span>

                                <span>
                                    2.{valorA < 1
                                        ? <>({valorA})</>
                                        : valorA
                                    }
                                </span>
                            </span>

                            <span className="flex flex-col items-center">
                                <span>
                                    x1 = {- valorB} + {(valorB * valorB + -4 * valorA * valorC) ** 0.5}
                                </span>

                                <span className="w-[90%] bg-color-dark h-0.5"></span>

                                <span>
                                    {2 * valorA}
                                </span>
                            </span>

                            <h1 className="text-orange-500 px-2 py-1 rounded-md bg-white">
                                x1 = {((- valorB) + ((valorB * valorB + -4 * valorA * valorC) ** 0.5)) / (2 * valorA)}
                            </h1>
                        </div>

                        <div className="flex flex-col items-center text-color-dark rounded-md shadow-md bg-color-light p-4 gap-2">
                            <h1 className="rounded-md shadow-md text-white bg-color-dark px-2 py-1">
                                x2
                            </h1>

                            <span className="flex flex-col items-center">
                                <span>
                                    x2 = – B - √Δ
                                </span>

                                <span className="w-[90%] bg-color-dark h-0.5"></span>

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
                                    - √{(valorB * valorB + -4 * valorA * valorC)}
                                </span>

                                <span className="w-[90%] bg-color-dark h-0.5"></span>

                                <span>
                                    2.{valorA < 1
                                        ? <>({valorA})</>
                                        : valorA
                                    }
                                </span>
                            </span>

                            <span className="flex flex-col items-center">
                                <span>
                                    x2 = {- valorB} - {(valorB * valorB + -4 * valorA * valorC) ** 0.5}
                                </span>

                                <span className="w-[90%] bg-color-dark h-0.5"></span>

                                <span>
                                    {2 * valorA}
                                </span>
                            </span>

                            <h1 className="text-orange-500 px-2 py-1 rounded-md bg-white">
                                x2 = {((- valorB) - ((valorB * valorB + -4 * valorA * valorC) ** 0.5)) / (2 * valorA)}
                            </h1>
                        </div>
                    </div>
                }
            </Modal>
        </section>
    )
}

export default Calculadora