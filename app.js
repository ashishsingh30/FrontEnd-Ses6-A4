var Employee =[ {name:"Ashish", age:"23", Salary:"333000", 
Address:{City:"Gandhinagar", State:"Gujarat", Pincode:"382016"}
               },
			    {name:"Jon", age:"29", Salary:"393000", 
Address:{City:"Gwalior", State:"Madhya Pradhesh", Pincode:"502016"}
               },
			    {name:"Ron", age:"27", Salary:"337000", 
Address:{City:"Shimla", State:"Himachal Pradhesh", Pincode:"205678"}
               },
			    {name:"Jack", age:"21", Salary:"433000", 
Address:{City:"Hyderabad", State:"Telangana", Pincode:"500081"}
               },
			    {name:"Joe", age:"24", Salary:"733000", 
Address:{City:"Pune", State:"Maharasthra", Pincode:"389016"}
               }
			   ];
for(var i=0; i<Employee.length; i++){
console.log("Details of Employee "+ (i+1));
console.log("Name : "+Employee[i].name);
console.log("Age : "+Employee[i].age);
console.log("Salary : "+Employee[i].Salary);
console.log("City : "+Employee[i].Address.City);
console.log("State : "+Employee[i].Address.State);
console.log("Pincode : "+Employee[i].Address.Pincode);
console.log("");
}