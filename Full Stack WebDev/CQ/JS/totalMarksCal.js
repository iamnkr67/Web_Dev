var students=[
    {name:"a1",roll:"1"},
    {name:"a2",roll:"2"},
    {name:"a3",roll:"3"},
    {name:"a4",roll:"4"},
    {name:"a5",roll:"5"},
]


var marks=[
    {roll:"1",marks:[12,13,12,14]},
    {roll:"3",marks:[11,15,12,14]},
    {roll:"5",marks:[13,11,11,14]},
    {roll:"2",marks:[14,12,12,14]},    
    {roll:"4",marks:[11,16,14,14]},
    {roll:"6",marks:[1,14,14,12]}
    
]
 
function totalMarks(){
    let markSum;
    for (var i = 0; i < students.length; i++) {
        let student = students[i]
         markSum = 0;
        for (var j = 0; j < marks.length; j++) {
            if (marks[j].roll === student.roll) {
                marks[j].marks.forEach(ele => {
                    markSum += ele
                })
            }
        }
        console.log(`The total ${students[i].name} marks ${markSum}`);
    }
    
}

totalMarks()