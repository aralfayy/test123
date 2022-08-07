import pandas as pd
import numpy as np
# DataFrame to read our input CS file
dataFrame = pd.read_csv("./src/csvdat/filecabang.csv")
# print("\nInput CSV file = \n", dataFrame)
para = ["Nama_Cabang", "Alamat_Cabang", "Kota", "Provinsi", "Jumlah_Pegawai"]
print(para)

i = (input("\nMasukkan Tabel yang ingin disortir : ", ))
sort = (input("\nAscendant/Descendant? : "))
page = (input("\nMasukkan mulai dari data keberapa yang ingin ditampilkan : "))
rowDat = (input("\nMasukkan Jumlah baris yang ingin ditampilkan : "))

if sort == "A":
    dataFrame.sort_values([i],
                          axis=0, ascending=True, inplace=True, na_position='first')
    print("\nSorted CSV file (according to multiple columns) = \n ", dataFrame)
else:
    dataFrame.sort_values([i], axis=0, ascending=False,
                          inplace=True, na_position='first')
    print("\nSorted CSV file (according to multiple columns) = \n ", dataFrame)
