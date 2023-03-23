import { Link } from "react-router-dom"
import Modal from "../components/modal"

const Calculadora = () => {
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

                <div class="w-full max-w-[325px]">
                    <form class="bg-white shadow-md rounded p-4 flex flex-col gap-4 md:gap-6 items-center w-full">
                        <div >
                            <label class="block text-color-dark text-sm font-bold mb-1" for="valorA">
                                A
                            </label>
                            <input
                                class="
                                    shadow appearance-none border rounded w-full py-2 px-3 text-color-dark text-center md:text-start 
                                    leading-tight focus:outline-none focus:shadow-outline text-sm md:text-base
                                "
                                id="valorA"
                                type="number"
                                placeholder="Insira o valor de A"
                            />
                        </div>

                        <div>
                            <label class="block text-color-dark text-sm font-bold mb-1" for="valorB">
                                B
                            </label>
                            <input
                                class="
                                    shadow appearance-none border rounded w-full py-2 px-3 text-color-dark text-center md:text-start 
                                    leading-tight focus:outline-none focus:shadow-outline text-sm md:text-base
                                "
                                id="valorB"
                                type="number"
                                placeholder="Insira o valor de B"
                            />
                        </div>

                        <div>
                            <label class="block text-color-dark text-sm font-bold mb-1" for="valorC">
                                C
                            </label>
                            <input
                                class="
                                    shadow appearance-none border rounded w-full py-2 px-3 text-color-dark text-center md:text-start 
                                    leading-tight focus:outline-none focus:shadow-outline text-sm md:text-base
                                "
                                id="valorC"
                                type="number"
                                placeholder="Insira o valor de C"
                            />
                        </div>

                        <button
                            class="
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

            </Modal>
        </section>
    )
}

export default Calculadora