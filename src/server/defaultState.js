export const defaultSate = {
    users: [{
        id: "U1",
        name: "code"
    },{
        id: "U2",
        name: "Sir Phil",
    }],
    groups: [{
        name: "To Do",
        id: "G1",
        owner: "U1"
    },{
        name: "Doing",
        id: "G2",
        owner: "U1"
    },{
        name: "Done",
        id: "G3",
        owner: "U1"
    }
],
    tasks: [{
        name: "Do test",
        id: "T1",
        group: "G1",
        owner: "U1",
        isComplete: false,
    },{
        name: "Meet with CTO",
        id: "T2",
        group: "G1",
        owner: "U1",
        isComplete: true,
    },{
        name: "Update component snapshot",
        id: "T3",
        group: "G2",
        owner: "U2",
        isComplete: false,
    },{
        name: "Compile Es6",
        id: "T4",
        group: "G2",
        owner: "U1",
        isComplete: true,
    },{
        name: "Production Optimization",
        id: "T5",
        group: "G3",
        owner: "U1",
        isComplete: false,
    }],
    comments: [{
        owner: "U1",
        id: "C1",
        task: "T1",
        content: "Great work!"
    }]
}