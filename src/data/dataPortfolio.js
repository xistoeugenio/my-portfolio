export function renderItemEmpty(amount) {
    let items = [];
    for (let i = 0; i < amount; i++) {
        items.push(<div className="item empty" key={i}><h3>coming soon...</h3></div>);
    }
    return (
        <>{items}</>
    );
}

export const list = [
    {
        id: "all",
        title: "all",
    },
    {
        id: "MERN",
        title: "MERN",
    },
    {
        id: "react",
        title: "react",
    },
    {
        id: "typescript",
        title: "typescript",
    },
];

export const projects = {

    MERN: [
        {
            id: 4,
            title: "Socciz",
            img: "assets/soccer.jpg",
            github: "https://github.com/xistoeugenio/soccer-quiz",
            preview: "https://socciz.online/"
        },
    ],
    react: [],
    typescript: [
        {
            id: 4,
            title: "typescript projects",
            img: "assets/typescript.png",
            github: "https://github.com/xistoeugenio/mini-typescript-projects",
            preview: "https://xistoprojects.online/"
        },
    ]
}

export let fullData = []

for (let item in projects) {
    projects[item].forEach((i) => {
        fullData.push(i)
    })
}