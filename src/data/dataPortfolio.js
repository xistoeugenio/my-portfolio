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
        id: "design",
        title: "Design",
    },
];

export const projects = {

    MERN: [
        {
            id: 4,
            title: "soccer",
            img: "assets/soccer.jpg",
        },
    ],
    react: []
}

export let fullData = []

for (let item in projects) {
    projects[item].forEach((i) => {
        fullData.push(i)
    })
}