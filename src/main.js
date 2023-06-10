 const search = prompt(" Search donner by bold group");
 // filter each data form the bioBlobDonner array fo object 
 const result = bioBlodDonner.filter((data) => data.address === search || data.lastDonad === search || data.bloodGroup === search);
 // final date get variable 
 const finalResult = [];
 // get date 
 result.forEach((item, index) => {
     finalResult.push(item);
 })

 // call the date console table 
 console.table(finalResult);