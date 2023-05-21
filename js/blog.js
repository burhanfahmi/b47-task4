// let namaSiswa1="fahmi";
// let namaSiswa2="budi";
// let namaSiswa3="salsa";

// console.log(`nama saya ${namaSiswa1}`);
// console.log(`nama saya ${namaSiswa2}`);
// console.log(`nama saya ${namaSiswa3}`);

// =========ARRAY=========
// let namaSiswa = ["fahmi","budi","salsa"];
// console.log(namaSiswa);
// console.log(namaSiswa[2]);
// console.log(namaSiswa[0]);

//========OBJECT=======
// let nama = "Fahmi burhan";
// let usia = 24;
// let alamat = "Kota tangerang";

// console.log(nama);
// console.log(usia);
// console.log(alamat);

// let dataMahasiswa1={
//     nama:"Fahmi Burhan",
//     usia:24,
//     alamat: "Kota tangerang",
// };
// let dataMahasiswa2={
//     nama:"Wahyudin",
//     usia: 25,
//     alamat:"Jakarta Barat",
// };
// let dataMahasiswa3={
//     nama:"Bunga Lestari",
//     usia:26,
//     alamat:"Jakarta Timur",
// };
// let dataMahasiswa4={
//     nama:"Fatur",
//     usia:26,
//     alamat:"Bogor Selatan"
// };

// console.log(dataMahasiswa1);
// console.log(dataMahasiswa2);
// console.log(dataMahasiswa3);
// console.log(dataMahasiswa4);

//=========ARRAY OF OBJECT======
// let dataCaleg=[
//     {nama:"Jok Widodo",alamat:"Solo",koalisi:"Partai PDI"},
//     {nama:"Anis Baswedan",alamat:"Jakarta Barat",koalisi:"Partai Nasdem"},
//     {nama:"Prabowo",alamat:"Jakarta Timur",koalisi:"Parta Gerinda"}
// ];
// console.log(dataCaleg);

let myProject=[];

function projectPost(event){
    event.preventDefault();
 
   let projectName = document.getElementById('input-title').value;
   let startDate =document.getElementById('start-date').value;
   let endDate =document.getElementById('end-date').value;
   let message =document.getElementById('input-textarea').value;
   let image= document.getElementById('input-image').files;

   const nodeJs =`<i class="fa-brands fa-node-js">`;
   const javaScript=`<i class="fa-brands fa-js">`;
   const reactJs=`<i class="fa-brands fa-react"></i>`;
   const golang=`<i class="fa-brands fa-golang"></i>`;

   let iconNode=document.getElementById('next').checked ? nodeJs:"";
   let iconJavascript=document.getElementById('node').checked ? javaScript:"";
   let iconreact=document.getElementById('type').checked ? reactJs:"";
   let iconGolang=document.getElementById('react').checked ? golang:"";

   image = URL.createObjectURL(image[0]);
   console.log(image);

    let projectView={
        projectName,
        startDate,
        endDate,
        message,
        iconNode,
        iconreact,
        iconJavascript,
        iconGolang,
        image,
    };

   myProject.push(projectView);
   console.log(myProject);

   renderProject();
}

function renderProject(){
    document.getElementById('content').innerHTML = "";

    for(let i = 0; i <myProject.length; i++){
        document.getElementById('content').innerHTML  += `
        <div class="card">
                    <div class="galery">
                        <img src="${myProject[i].image}" alt="image">
                        <div class="deskripsi2">
                            <h3 ><a href="blog_detail.html">${myProject[i].projectName}</a></h3>
                            <span>
                                <p class="durasi">${myProject[i].startDate}-${myProject[i].endDate}</p>
                                <p class="durasi-1">${myProject[i].message}</p>
                             </span><br>
                             <div class="icon1">
                               ${myProject[i].iconNode}
                               ${myProject[i].iconreact}
                               ${myProject[i].iconJavascript}
                               ${myProject[i].iconGolang}
                            </div>
                            <div class="btn-group">
                                <button class="btn-edit">Edit</button>
                                <button class="btn-delete">Delete</button>
                
                            </div>
                        </div>
                    </div> 
                        `;
    }
}







