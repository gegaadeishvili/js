const array = [["gega"],["nika"],["gio"],["mari"]]

for (let i=0; i<array.length; i++){

    const array1 = array[i];

    for(let x = 0; x < array1.length; x++){

        if(array1[x]== "nika"){
            console.log("nika");
        }else{
            console.log("looking for" + " " +  array1[x])

        }



    }
}