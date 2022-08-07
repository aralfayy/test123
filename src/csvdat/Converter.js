const CSVtoJSON = require("csvtojson");
const JSONToCSV = require("json2csv").parse;
const fs = require("fs");

const csvFilePath = "./filecabang.csv";
CSVtoJSON()
  .fromFile(csvFilePath)
  .then((source) => {
    console.log(source);
    source.push({
      Nama_Cabang: "Cabang New",
      Alamat_Cabang: "Jalan Cikapundung",
      Kota: "Kwekkwek",
      Provinsi: "Selatan",
      Jumlah_Pegawai: "30",
    });
    const csv = JSONToCSV(source, {
      fields: [
        "Nama_Cabang",
        "Alamat_Cabang",
        "Kota",
        "Provinsi",
        "Jumlah_Pegawai",
      ],
    });
    fs.writeFileSync(csvFilePath, csv);
  });

export default CSVtoJSON;
