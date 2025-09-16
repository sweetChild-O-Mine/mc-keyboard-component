type SingleKey = {
    label: string,
    size?: number
};

type KeyBlock = {
    type: "arrows",
    keys: KeyType[],
    size?: number

}

export type KeyType = SingleKey | KeyBlock

export const KeyboardLayout: KeyType[][] = [
    // Row 1
    [
        {label: "Esc", size: 1.4},
        {label: "F1", size: 1},
        {label: "F2", size: 1},
        {label: "F3", size: 1},
        {label: "F4", size: 1},
        {label: "F5", size: 1},
        {label: "F6", size: 1},
        {label: "F7", size: 1},
        {label: "F8", size: 1},
        {label: "F9", size: 1},
        {label: "F10", size: 1},
        {label: "F11", size: 1},
        {label: "F12", size: 1}
    ],

    // row2
    [
        {label: "`", size: 1},
        {label: "1", size: 1},
        {label: "2", size: 1},
        {label: "3", size: 1},
        {label: "4", size: 1},
        {label: "5", size: 1},
        {label: "6", size: 1},
        {label: "7", size: 1},
        {label: "8", size: 1},
        {label: "9", size: 1},
        {label: "0", size: 1},
        {label: "-", size: 1},
        {label: "=", size: 1},
        {label: "delete", size: 2}
    ],

    // row3
    [
        {label: "Tab", size: 1.5},
        {label: "Q", size: 1},
        {label: "W", size: 1},
        {label: "E", size: 1},
        {label: "R", size: 1},
        {label: "T", size: 1},
        {label: "Y", size: 1},
        {label: "U", size: 1},
        {label: "I", size: 1},
        {label: "O", size: 1},
        {label: "P", size: 1},
        {label: "[", size: 1},
        {label: "]", size: 1},
        {label: "\\", size: 1}
    ],

    // row 4
    [
        {label: "Caps", size: 2},
        {label: "A", size: 1},
        {label: "S", size: 1},
        {label: "D", size: 1},
        {label: "F", size: 1},
        {label: "G", size: 1},
        {label: "H", size: 1},
        {label: "J", size: 1},
        {label: "K", size: 1},
        {label: "L", size: 1},
        {label: ";", size: 1},
        {label: "'", size: 1},
        {label: "return", size: 2.1}
    ],

    // row5
    [
        {label: "shift", size: 2.2},
        {label: "Z", size: 1},
        {label: "X", size: 1},
        {label: "C", size: 1},
        {label: "V", size: 1},
        {label: "B", size: 1},
        {label: "N", size: 1},
        {label: "M", size: 1},
        {label: ",", size: 1},
        {label: ".", size: 1},
        {label: "/", size: 1},
        {label: "shift", size: 2.3}
    ],

    // row 6 
    [
        {label: "fn", size: 1},
        {label: "control", size: 1.25},
        {label: "option", size: 1.25},
        {label: "command", size: 1.5},
        {label: "", size: 6},
        {label: "command", size: 1.5},
        {label: "option", size: 1.25},
        {
            type: "arrows",
            size: 3,
            keys: [
                {label: "↑", size: 1},
                {label: "←", size: 1},
                {label: "↓", size: 1},
                {label: "→", size: 1}
            ]
        }
    ]
]