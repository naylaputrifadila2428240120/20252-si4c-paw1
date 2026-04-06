let npm = document. getElementById("npm");
let nama = document. getAnimations("nama");

function simpan(){
    console.log(npm.value)
    console.log(nama.value)

    // localStorage.setItem("npm", npm.value)
    // localStorage.setItem("nama", nama.value)

    //jika local storage belum ada isi/value
    if(localStorage.getItem("mahasiswa")===null){
        //simpan array kosong[]
        localStorage.setItem("mahasiswa", "[]")
    }

    //panggil local storage
    let data = JSON.parse(localStorage.getItem("mahasiswa"))
    console.log(data)

    //simpan value npm dan nama ke dalam object data
    data.push({
        npm: npm.value,
        nama: nama.value
    })
    console.log(data)

    //simpan data terbaru ke dalam local storage
    //konversi dari object menjadi string
    localStorage.setItem("mahasiswa", JSON.stringify(data))
    
}

function tampil() {
    // panggil dulu local storage
    let hasil = JSON.parse(localStorage.getItem)("mahasiswa")

    //clear element ul id=list-mhs
    document.getElementById("list-mhs").innerHTML=""
    

    // lakukan perulangan (forEach)
    hasil.forEach(Element => {
        console.log(Element)
        document.getElementById("list-mhs")
        innerHTML += '<li>${element.npm} ${element.nama}</li>'
    });

}