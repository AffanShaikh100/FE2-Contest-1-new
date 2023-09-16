const data = [
    { name: "john", age: 24, profession: "developer" },
    { name: "jane", age: 27, profession: "admin" },
  ];
  
  // 1. Print Developers
  function printDeveloper() {
    
    for(let i=0; i<data.length;i++){
        if(data[i].profession=="developer"){
            console.log(data[i].name + " " + data[i].profession);
        }
    }
  }
  
  
  // 2. Add Data
  function addData() {
     const a = prompt ("Input your name");
     const b = prompt ("Input your Age");
     const c = prompt ("Input your Profession");
     const age12 = parseInt(b);
     const dataadd= {name:a, age:age12, profession:c};
     data.push(dataadd);
     console.log(data);
  }
  
  // 3. Remove Admins
  function removeAdmin() {
    for(let i=0; i<data.length; i++){
        if(data[i].profession=="admin")
        {
            data.splice(i,1);
        }
    }
    console.log(data);
  }
  
  // 4. Concatenate Array
  function concatenateArray() {
        let newdata ={ name: "affan", age: 27, profession: "developer" }
        let prototype = data.concat(newdata);
        console.log(prototype); 
  }
  
  // 5. Average Age
  function averageAge() {
     let total = data.length;
     let sum = 0;
     for(let i=0; i<data.length; i++)
     {
        sum+=data[i].age;
     }
     
     let average = sum/total;
     console.log(average);
  }
  
  // 6. Age Check
  function checkAgeAbove25() {
    let count = 0;
     for(let i=0; i<data.length; i++){
         if(data[i].age>25){
            count++;
            console.log(data[i].name + " "+"<= "+"This person exist");
         }
     }
     if(count=="0"){
        console.log("Not one person is above 25 there in Array, Please add new data who;s age is above 25");
     }
  }
  
  // 7. Unique Professions
  function uniqueProfessions() {

    for(let i=0; i<data.length; i++){
        console.log(data[i].profession);    
    }
  }
  
  // 8. Sort by Age
  function sortByAge() {

    data.sort((a, b) => {
        return a.age - b.age;
    });

    data.forEach((e)=>{
        console.log(e);
    })
  }
  
  // 9. Update Profession
  function updateJohnsProfession() {
    for(let i=0; i<data.length; i++){
        if(data[i].name=="john"){
            data[i].profession="manager";
        }  
    }
    console.log(data);
  }
  
  // 10. Profession Count
  function getTotalProfessions() {
    let admin = 0;
    let developer = 0;
    for(let i=0;i<data.length; i++)
    {
        if(data[i].profession=="developer")
        {
           developer++;
        }
        else if(data[i].profession=="admin")
        {
            admin++;
        }
    }
    console.log("Admin count"+"="+admin+" "+"&"+ " " +"Developer count"+"="+developer);
  }