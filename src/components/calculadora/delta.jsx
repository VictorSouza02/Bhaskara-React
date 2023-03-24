const Calculadora = (
    valorA,
    valorB,
    valorC,
    valorDelta
) => {

    return (
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
    )
}

export default Calculadora