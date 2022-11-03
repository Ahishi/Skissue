/** @type {import('./$types').PageLoad} */
export function load() {
    return {
        groups: [
            {
                title: 'Testgroup',
                description: 'This is the bestest group of testing ever made ever',
                members: 3,
            },
            {
                title: 'Testgroup2',
                description: 'This is the bestest group of testing ever made ever',
                members: 3,
            },
            {
                title: 'Testgroup3',
                description: 'This is not the bestest group of testing ever made ever',
                members: 3,
            },
        ]
    };
}
