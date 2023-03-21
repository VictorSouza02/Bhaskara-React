const Footer = () => {
    return (
        <footer className="bg-neutral-900 text-center text-white">
            <div className="w-[70%] max-w-[900px] mx-auto p-8">
                <div className="mb-6 flex justify-center gap-4">
                    <a
                        href="https://www.linkedin.com/in/victorsouza02"
                        target="_blank"
                        type="button"
                        className="
                            m-1 h-9 w-9 rounded-full border-2 border-white uppercase leading-normal 
                            text-white transition duration-150 ease-in-out hover:bg-black 
                            hover:bg-opacity-5 focus:outline-none focus:ring-0
                        "
                        data-te-ripple-init
                        data-te-ripple-color="light">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="mx-auto h-full w-4"
                            fill="currentColor"
                            viewBox="0 0 24 24">
                            <path
                                d="
                                    M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 
                                    1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 
                                    0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 
                                    0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z
                                "
                            />
                        </svg>
                    </a>

                    <a
                        href="https://github.com/VictorSouza02"
                        target="_blank"
                        type="button"
                        className="
                            m-1 h-9 w-9 rounded-full border-2 border-white uppercase leading-normal 
                            text-white transition duration-150 ease-in-out hover:bg-black 
                            hover:bg-opacity-5 focus:outline-none focus:ring-0
                        "
                        data-te-ripple-init
                        data-te-ripple-color="light">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="mx-auto h-full w-4"
                            fill="currentColor"
                            viewBox="0 0 24 24">
                            <path
                                d="
                                M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                    </a>
                </div>

                <div className="mb-6">
                    <p>
                        Aplicação desenvolvida por

                        <a
                            href="https://www.linkedin.com/in/victorsouza02"
                            target="_blank"
                            className="underline mx-1"
                        >
                            Souza Víctor
                        </a>

                        Com intuito de facilitar e ajudar pessoas no cálculo de tais equações aritméticas
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 p-2 bg-pink">
                    <div>
                        <h5 className="mb-2.5 font-bold uppercase">Bibliografia</h5>

                        <ul className="mb-0 list-none">
                            <li>
                                <a
                                    href="https://icons8.com.br/"
                                    target="_blank"
                                    className="text-white hover:underline"
                                >
                                    Icons 8
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://iconscout.com/contributors/luciyamaji"
                                    target="_blank"
                                    className="text-white hover:underline"
                                >
                                    LuciYamaji
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://icons8.com/illustrations/author/RogqKjMRAQ79"
                                    target="_blank"
                                    className="text-white hover:underline"
                                >
                                    Xopolin
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://codepen.io/flik185/pen/WxwLdX"
                                    target="_blank"
                                    className="text-white hover:underline"
                                >
                                    Animação Scroll Down
                                </a>
                            </li>
                            <li>
                                <a
                                    href="
                                    https://brasilescola.uol.com.br/o-que-e/matematica/o-que-e-equacao-2-grau.htm
                                    "
                                    target="_blank"
                                    className="text-white hover:underline"
                                >
                                    Brasil Escola
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h5 className="mb-2.5 font-bold uppercase">Souza Víctor</h5>

                        <ul className="mb-0 list-none">
                            <li>
                                <a
                                    href="https://victorsouza02.github.io/Portfolio/#/"
                                    target="_blank"
                                    className="text-white hover:underline"
                                >
                                    Portfólio
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://www.linkedin.com/in/victorsouza02/"
                                    target="_blank"
                                    className="text-white hover:underline"
                                >
                                    LinkedIn
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://github.com/VictorSouza02"
                                    target="_blank"
                                    className="text-white hover:underline"
                                >
                                    GitHub
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://www.instagram.com/victorsouza.png/"
                                    target="_blank"
                                    className="text-white hover:underline"
                                >
                                    Instagram
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div
                className="p-4 text-center bg-[rgba(0, 0, 0, 0.2)]">
                © 2023 Copyright:

                <a className="text-white mx-1" href="https://tailwind-elements.com/">
                    Souza Víctor
                </a>
            </div>
        </footer>
    )
}

export default Footer


