function Modal({ children, idRef }) {

    return (
        <div
            data-te-modal-init
            class="fixed top-0 left-0 z-[1055] hidden h-full w-full overflow-y-auto overflow-x-hidden outline-none"
            id={`${idRef}`}
            tabindex="-1"
            aria-modal="true"
            role="dialog">
            <div
                data-te-modal-dialog-ref
                class="pointer-events-none relative flex min-h-[calc(100%-1rem)] w-auto translate-y-[-50px] items-center opacity-0 transition-all duration-300 ease-in-out min-[576px]:mx-auto min-[576px]:mt-7 min-[576px]:min-h-[calc(100%-3.5rem)] min-[576px]:max-w-[500px]">
                <div
                    class="pointer-events-auto relative flex w-full flex-col rounded-md border-none bg-white bg-clip-padding text-current shadow-lg outline-none p-2">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Modal;