/** @type {import('./$types').PageLoad} */
export function load() {
    return {
        groups: [
            {
                title: 'Testgroup',
                description: 'This is the bestest group of testing ever made ever',
                members: 3,
                groupForms: [
                    {
                        name: "Form1",
                        color: "green",
                        id: 1
                    },
                    {
                        name: "Form2",
                        color: "purple",
                        id: 2
                    }
                ]
            },
            {
                title: 'Testgroup2',
                description: 'This is the bestest group of testing ever made ever',
                members: 3,
                groupForms: [
                    {
                        name: "Form1",
                        color: "green",
                        id: 1
                    },
                    {
                        name: "Form2",
                        color: "purple",
                        id: 2
                    }
                ]
            },
            {
                title: 'Testgroup3',
                description: 'This is not the bestest group of testing ever made ever',
                members: 3,
                groupForms: [
                    {
                        name: "Form1",
                        color: "green",
                        id: 1
                    },
                    {
                        name: "Form2",
                        color: "purple",
                        id: 2
                    }
                ]
            },

        ],
    };
}
