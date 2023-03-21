import { Link } from "react-router-dom"

const Header = () => {
    return (
        <header className="w-[70%] max-w-[900px] mx-auto relative">
            <nav
                class="absolute flex w-full items-center justify-between py-2"
                data-te-navbar-ref>
                <div class="flex w-full flex-wrap items-center justify-between">
                    <div class="flex items-center">
                        <button
                            class="
                                border-0 bg-transparent py-2 text-xl leading-none transition-shadow 
                                ease-in-out md:hidden ml-[20px]
                            "
                            type="button"
                            data-te-collapse-init
                            data-te-target="#navbarSupportedContentY"
                            aria-controls="navbarSupportedContentY"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span class="[&>svg]:w-5">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="currentColor"
                                    class="h-6 w-6"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                </svg>
                            </span>
                        </button>
                    </div>

                    <div className="justify-self-start md:order-[-1] overflow-hidden w-[64px] aspect-square rounded-full">
                        <img src="./media/calculator.gif" alt="Calculator" />
                    </div>

                    <div
                        class="
                            !visible hidden grow basis-[100%] items-center md:grow-0 md:basis-0
                            md:!flex bg-color-light md:bg-transparent mt-2 
                            rounded-md shadow-md md:shadow-none text-white md:text-color-medium
                            font-bold lg:text-lg lg:!flex lg:basis-auto hover-underline-animation
                        "
                        id="navbarSupportedContentY"
                        data-te-collapse-item>
                        <ul
                            class="flex flex-col md:flex-row md:w-full ml-6 py-2 md:ml-0 gap-2 md:gap-14 md:items-center"
                            data-te-navbar-nav-ref>
                            <li data-te-nav-item-ref className="flex gap-1 items-center">
                                <Link to='/landing' data-te-nav-link-ref>
                                    Home
                                </Link>

                                <div className="md:hidden">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="16"
                                        fill="currentColor"
                                        class="bi bi-arrow-right"
                                        viewBox="0 0 16 16"
                                    >
                                        <path
                                            fill-rule="evenodd"
                                            d="
                                                M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 
                                                0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 
                                                4a.5.5 0 0 1-.708-.708L13.293 
                                                8.5H1.5A.5.5 0 0 1 1 8z
                                            "
                                        />
                                    </svg>
                                </div>
                            </li>
                            <li data-te-nav-item-ref className="flex gap-1 items-center">
                                <Link to='/calculadora' data-te-nav-link-ref>
                                    Calculadora
                                </Link>

                                <div className="md:hidden">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="16"
                                        fill="currentColor"
                                        class="bi bi-arrow-right"
                                        viewBox="0 0 16 16"
                                    >
                                        <path
                                            fill-rule="evenodd"
                                            d="
                                                M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 
                                                0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 
                                                4a.5.5 0 0 1-.708-.708L13.293 
                                                8.5H1.5A.5.5 0 0 1 1 8z
                                            "
                                        />
                                    </svg>
                                </div>
                            </li>
                            <li data-te-nav-item-ref className="flex gap-1 items-center">
                                <a href="#!" data-te-nav-link-ref>
                                    Bhaskara
                                </a>

                                <div className="md:hidden">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="16"
                                        fill="currentColor"
                                        class="bi bi-arrow-right"
                                        viewBox="0 0 16 16"
                                    >
                                        <path
                                            fill-rule="evenodd"
                                            d="
                                                M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 
                                                0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 
                                                4a.5.5 0 0 1-.708-.708L13.293 
                                                8.5H1.5A.5.5 0 0 1 1 8z
                                            "
                                        />
                                    </svg>
                                </div>
                            </li>
                            <li data-te-nav-item-ref className="flex gap-1 items-center">
                                <a href="#!" data-te-nav-link-ref>
                                    Sobre
                                </a>

                                <div className="md:hidden">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="16"
                                        fill="currentColor"
                                        class="bi bi-arrow-right"
                                        viewBox="0 0 16 16"
                                    >
                                        <path
                                            fill-rule="evenodd"
                                            d="
                                                M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 
                                                0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 
                                                4a.5.5 0 0 1-.708-.708L13.293 
                                                8.5H1.5A.5.5 0 0 1 1 8z
                                            "
                                        />
                                    </svg>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header