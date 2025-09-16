// it defiens that these are the things which you gotta enter as props while using this component
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

// here this arrowKeys function is taking keys as arg which means basially an arr of keyProps that measn an arr of object and the element of those obejct are going to be which are define in keyProps thats basically label and size ....
const ArrowKeys = ({keys}: ArrowKeysProps) => {
    const [up, left , down, right] = keys;
// now for the line that's probably confusing you:

// const [up, left , down, right] = keys;

// This is a JavaScript feature called Array Destructuring. It's a shortcut. Instead of writing this:

// const up = keys[0];

// const left = keys[1];

// const down = keys[2];

// const right = keys[3];

// ...you can pull all the items out of the array and assign them to variables in a single, clean line. The first item in the keys array goes into the up variable, the second item goes into left, and so on
    

    return(
        <div className=" pl-4 gap-x-4 gap-0.5 grid grid-cols-3 h-14 items-center justify-center">
            {/* this is the first first item so basically  */}
            {/* row 1 col 1 */}
            <div></div>
            {/* row 1 col2  */}
            <SmallArrowKey label={up.label} />
            {/* row 1 col 3 */}
            <div></div>

            {/* row 2 col 1 */}
            <SmallArrowKey label={left.label} />
            {/* row 2 col 2 */}
            <SmallArrowKey label={down.label} />
            {/* row 2 col 3 */}
            <SmallArrowKey label={right.label} />


        </div>

    )
}

export default ArrowKeys