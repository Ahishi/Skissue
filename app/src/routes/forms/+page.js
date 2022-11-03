/** @type {import('./$types').PageLoad} */
export function load() {
    return {
        presetForms: [
            {
                name: "Form1",
                color: "green",
                id: 1
            },
            {
                name: "Form2",
                color: "purple",
                id: 2
            },
            {
                name: "Form3",
                color: "red",
                id: 3
            },
            {
                name: "Form4",
                color: "purple",
                id: 4
            },
        ],
        favouriteForms: [
            {
                name: "Form1",
                color: "green",
                id: 1
            },
            {
                name: "Form2",
                color: "purple",
                id: 2
            },
            {
                name: "Form3",
                color: "red",
                id: 3
            }
        ],
    };
}
