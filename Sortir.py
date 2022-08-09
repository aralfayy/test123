import pandas as pd
import numpy as np
# DataFrame to read our input CS file
dataFrame = pd.read_csv("./src/csvdat/filecabang.csv")
print(dataFrame)
para = ["Nama_Cabang", "Alamat_Cabang", "Kota", "Provinsi", "Jumlah_Pegawai"]
# print("List Kolom :\n")
# [print(x) for x in para]


i = int(input("\nPilih Kolom yang ingin disortir(\n 1. Nama Cabang\n 2.Alamat Cabang\n 3. Kota\n 4. Provinsi\n 5.Jumlah Pegawai\n) : "))
sort = (input("\nAscendant/Descendant? :(A/D) "))
page = int(input("\nMasukkan mulai dari data keberapa yang ingin ditampilkan : "))
rowDat = int(input("\nMasukkan Jumlah baris yang ingin ditampilkan : "))


if sort == "A":
    dataFrame.sort_values(para[i-1],
                          axis=0, ascending=True, inplace=True, na_position='first')
    ascend = dataFrame.iloc[page-1:rowDat]
    print("\nSorted CSV file (according to multiple columns) = \n ", ascend)


else:
    dataFrame.sort_values(para[i-1], axis=0, ascending=False,
                          inplace=True, na_position='first')
    descend = dataFrame.iloc[page-1:rowDat]
    print("\nSorted CSV file (according to multiple columns) = \n ", descend)
