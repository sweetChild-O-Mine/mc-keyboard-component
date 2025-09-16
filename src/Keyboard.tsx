import { KeyboardLayout } from "./keyboard-layout";
import Key from "./Key";
import ArrowKeys from "./ArrowKey";

const Keyboard = () => {

    return (
        // main keybaord container
        <div className=" flex flex-col justify-center w-full max-w-5xl mx-auto  bg-neutral-900 gap-3 py-3 px-3 rounded-xl shadow-md shadow-neutral-700">
            {
                KeyboardLayout.map((row, rowInd) => (
                    <div
                    key={rowInd}
                    className="flex gap-3 w-full ">
                        {row.map((keyData, keyInd) => {
                            if('type' in keyData && keyData.type == "arrows"){
                                return(
                                    <div 
                                    className="h-12 flex items-center"
                                    key={keyInd}
                                    style={{
                                        flex: `${keyData.size} 1 0%` 
                                    }}
                                    >
                                        {/* arrowkey compoe */}
                                        <ArrowKeys keys={keyData.keys as Array<{label:string, size?: number}>} />
                                    </div>
                                )
                            } 
                            const singleKey = keyData as { label: string; size?: number };
                                return(
                                    <Key 
                                        key = {singleKey.label+ rowInd + keyInd}
                                        label = {singleKey.label}
                                        size = {singleKey.size}
                                    />
                                )
                        } )}
                    </div>
                ) )
            }
        </div>
    )

}

export default Keyboard