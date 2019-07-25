var app = new function(data) {
    this.getName = document.getElementById("Name");
    this.getKelas = document.getElementById("kelas");
    this.Name = [];
    this.Kelas = [];

    this.Hitung = function(data){
        var use = document.getElementById("hitung");
        var name =  "Siswa";

        if (data) {
            use.innerHTML = data + " " + name;
        }else{
            use.innerHTML = " Tidak ada " + name;
        }
    };

    this.ShowData = function(data){
        var data1 = " ";
        if(this.Name.length > 0) {
        if(this.Kelas.length > 0) {
            for (i = 0; i < this.Name.length; i++) {
                data1 += "<tr>";
                data1 += "<td>" + this.Name[i] + "</td>";
                data1 += "<td>" + this.Kelas[i] + "</td>";
                data1 += '<td> <button class = "btn btn-info" onclick="app.Edit (' + i + ')"> Edit </button> </td>';
                data1 += '<td> <button class = "btn btn-danger" onclick="app.Delete (' + i + ')"> Delete </button> </td>';
                data1 += "</tr>";
            }
        }
        }
        this.Hitung(this.Name.length);
        return (this.getName.innerHTML) = data1;
    };

    this.Add = function(data) {
        var getIdAddName = document.getElementById("addName");
        var getIdAddKelas = document.getElementById("addKelas");
        var tnama = getIdAddName.value;
        var tkelas = getIdAddKelas.value;

        if (getIdAddName) {
        if (getIdAddKelas) {
            this.Name.push(tnama.trim());
            this.Kelas.push(tkelas.trim());

            getIdAddName.value = " ";
            getIdAddKelas.value = " ";
            this.ShowData();
        }
        }
    };

    this.Edit = function(item) {
        var editN = document.getElementById("editName");
        var editK = document.getElementById("editKelas");
        editN.value = this.Name(item);
        editK.value = this.Kelas(item);
        document.getElementById("formEdit").style.display = "block";

        yurod = this;
        document.getElementById("saveEdit").onsubmit = function(){
            var newName = editN.value;
            var newKelas = editK.value;
            if (newName) {
            if (newKelas) {
                yurod.Name.splice(item, 1, newName.trim());
                yurod.Kelas.splice(item, 1, newKelas.trim());
                yurod.ShowData();
                CloseInput();
            }
            }
        };
    };

    this.Delete = function(item) {
        this.Name.splice(item, 1);
        this.Kelas.splice(item, 1);
        this.ShowData();
    };
};