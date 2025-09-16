import React from 'react'


// define keyProps
type KeyProps = {
    label: string,
    size?: number
}

const Key = ({label, size = 1}: KeyProps) => {

    // const getSizeClass = (size: number) => {
    //     switch(size) {
    //         case 1: return 'grow-[1]'
    //         case 2: return 'grow-[2]'
    //         case 3: return 'grow-[3]'
    //         case 4: return 'grow-[4]'
    //         case 5: return 'grow-[5]'
    //         default: return 'grow-[1]'
    //     }
    // } ${getSizeClass(size)}

    return (
        <div 
            className={`h-12 text-sm flex justify-center items-center shadow-md shadow-neutral-400 bg-neutral-950 text-white cursor-pointer rounded-md hover:scale-95 hover:shadow-neutral-700 transition-all duration-100`}
            style={{
                flex: `${size} 1 0%`
            }}
        
        >
            {label}
        </div>
    )

}
export default Key