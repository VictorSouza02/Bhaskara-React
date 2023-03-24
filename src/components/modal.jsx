function Modal({ children, idRef }) {

    return (
        <div
            data-te-modal-init
            className="fixed top-0 left-0 z-[1055] hidden h-full w-full overflow-y-auto overflow-x-hidden outline-none bg-[rgba(0,0,0,0.7)]"
            id={`${idRef}`}
            tabIndex="-1"
            aria-modal="true"
            role="dialog">
            <div
                data-te-modal-dialog-ref
                className="
                    pointer-events-none relative flex min-h-[calc(100%-1rem)] w-auto 
                    translate-y-[-50px] items-center opacity-0 transition-all duration-300 ease-in-out 
                    min-[576px]:mx-auto min-[576px]:mt-7 min-[576px]:min-h-[calc(100%-3.5rem)] 
                    min-[576px]:max-w-[900px]
                "
            >
                <div
                    className="
                    pointer-events-auto relative flex w-[85%] md:w-[70%] max-w-[900px] mx-auto 
                    flex-col rounded-md border-none bg-white bg-clip-padding text-current 
                    shadow-lg outline-none py-10 px-4 min-h-[100px] my-8 max-h-[80vh] md:max-h-min
                    "
                >
                    <button
                        data-te-toggle="modal"
                        data-te-target={`#${idRef}`}
                        className='absolute right-2 top-2 rounded-full bg-color-dark p-1 md:p-2 hover:bg-red-500 duration-[0.6s]'
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="white"
                        >
                            <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 
                            .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 
                            0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
                        </svg>
                    </button>

                    {children}
                </div>
            </div>
        </div>
    )
}

export default Modal;