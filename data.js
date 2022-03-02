let data = []
// lay title bai bao so sanh
// id = 1;
// while (id) {

//     x = document.getElementById(`title${id}`)
//     if(!x) break
//     console.log(x.title)
//     console.log(id)
//     id++
//     0
// }



//cho bao vao object
// moi trang se co dong title danh sau tu 1 den 1 so nao do,
id = 1;
while (id) {
    x = document.getElementById(`title${id}`)
    if (!x) break
    console.log(id)
    var temp = {
        title: x.title,
        link: x.href,
    }
    data.push(temp)
    id++
}
console.log(data)
// localStorage.setItem("allData",JSON.stringify(data))

var bigData = JSON.parse(localStorage.getItem("allData"))
console.log(bigData)

// //neu k co thi cho vao :D
if (bigData == null) {
    localStorage.setItem("allData", JSON.stringify(data))
    console.log(bigData)
} else {
    for (var i = 0; i < data.length; i++) {
        bigData.push(data[i])
    }
    for (var i = (bigData.length) - 2; i >= 0; i--) {
        for (var j = 0; j<i; j++)
            if (bigData[i].title == bigData[j].title)
            bigData.splice(i,data.length)
                
    }
    console.log(bigData)
    localStorage.setItem("allData", JSON.stringify(bigData))
}


// localStorage.setItem("dataTitle",JSON.stringify(data))

