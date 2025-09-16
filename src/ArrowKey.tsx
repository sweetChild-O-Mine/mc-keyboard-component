type KeyProps = {
    label: string,
    size? : number
}

const SmallArrowKey = ({label}: KeyProps) => {
    return(
        <div className=" h-6 w-8 text-xs flex justify-center items-center shadow-md shadow-neutral-200 bg-neutral-950 text-white cursor-pointer rounded-md hover:scale-95 hover:shadow-neutral-700 transition-all duration-75">
            {label}
        </div>
    )
}


type ArrowKeysProps = {
    keys: KeyProps[];
}

const ArrowKeys = ({keys}: ArrowKeysProps) => {
    const [up, left , down, right] = keys;

    return(
        <div className=" pl-4 gap-x-4 gap-0.5 grid grid-cols-3 h-14 items-center justify-center">
            <div></div>
            <SmallArrowKey label={up.label} />
            <div></div>

            <SmallArrowKey label={left.label} />
            <SmallArrowKey label={down.label} />
            <SmallArrowKey label={right.label} />


        </div>

    )
}

export default ArrowKeys