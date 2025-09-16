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
        {label: "q", size: 1},
        {label: "w", size: 1},
        {label: "e", size: 1},
        {label: "r", size: 1},
        {label: "t", size: 1},
        {label: "y", size: 1},
        {label: "u", size: 1},
        {label: "i", size: 1},
        {label: "o", size: 1},
        {label: "p", size: 1},
        {label: "[", size: 1},
        {label: "]", size: 1},
        {label: "\\", size: 1}
    ],

    // row 4
    [
        {label: "Caps", size: 2},
        {label: "a", size: 1},
        {label: "s", size: 1},
        {label: "d", size: 1},
        {label: "f", size: 1},
        {label: "g", size: 1},
        {label: "h", size: 1},
        {label: "j", size: 1},
        {label: "k", size: 1},
        {label: "l", size: 1},
        {label: ";", size: 1},
        {label: "'", size: 1},
        {label: "Return", size: 2.1}
    ],

    // row5
    [
        {label: "shift", size: 2.2},
        {label: "z", size: 1},
        {label: "x", size: 1},
        {label: "c", size: 1},
        {label: "v", size: 1},
        {label: "b", size: 1},
        {label: "n", size: 1},
        {label: "m", size: 1},
        {label: ",", size: 1},
        {label: ".", size: 1},
        {label: "/", size: 1},
        {label: "shift", size: 2.3}
    ],

    // row 6 
    [
        {label: "fn", size: 1},
        {label: "ctrl", size: 1.25},
        {label: "opt", size: 1.25},
        {label: "cmd", size: 1.5},
        {label: "", size: 6},
        {label: "cmd", size: 1.5},
        {label: "opt", size: 1.25},
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