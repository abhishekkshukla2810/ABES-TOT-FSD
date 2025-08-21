const employee={
    ename:"Abhishek Shukla",
    eage:"45",
    eaddress:"Ghaziabad" ,
    planguage:[
        {
            framework1:"Hibernaet",
            framework2:"Spring"
        },
        {
            lang1:"java",
            lang2:"Python"
        },
        {
            dataset1:"Oracle",
            dataset2:"Access"
        }
    ]
}
// employee.company="Infosys";
console.log(employee);
delete employee.ename;
console.log(employee);
