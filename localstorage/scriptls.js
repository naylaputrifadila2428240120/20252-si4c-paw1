let npm = document.getElementById("npm");
let nama = document.getElementById("nama");
let foto = document.getElementById("foto");

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
        nama: nama.value,
        foto: foto.value,
    })
    console.log(data)

    //simpan data terbaru ke dalam local storage
    //konversi dari object menjadi string
    localStorage.setItem("mahasiswa", JSON.stringify(data))

    //panggil tampil
    tampil()

}

function tampil(){
    //panggil dulu local storage
    let hasil = JSON.parse(localStorage.getItem("mahasiswa"))

    //clear element ul id=list-mhs
    document.getElementById("list-mhs").innerHTML=""

    //lakukan perulangan (forEach)
    hasil.forEach(element => {
        // console.log(element)
        document.getElementById("list-mhs").innerHTML += `<div class="col-lg-4 col-md-6">
        <h4
        class="text-primary">${element.nama}</h4>
        <h6 class="text-danger">${element.npm}</h6>
        <img class="img-fluid" src=${element.foto} alt="dak ad" />
        </div>`
        
    });
}

//jalankan function tampil()
tampil()