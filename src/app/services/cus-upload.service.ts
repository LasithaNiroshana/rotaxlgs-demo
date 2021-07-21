import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import * as Papa from 'papaparse';
import * as _ from 'lodash';
import { MatSnackBar } from '@angular/material/snack-bar';
@Injectable({
providedIn: 'root'
})
export class Csv2fireService {
csv_rec: any[] = [];
header = false;
constructor(private afs: AngularFirestore,private snackBar:MatSnackBar) { }
process(file, collection) {
Papa.parse(file, {
complete: res => {
this.csv_rec = res;
this.firethis(this.csv_rec['data'], collection);
},
header: true
});
}
firethis(json, collection) {
return new Promise<void>((resolve) => {
_.map(json, (e, i) => {
_.keys(e).map(() => {
this.afs.collection('orders').doc('doc ' + i).set(e);
this.openSnackBar('List of orders added successfully','')
})
})
resolve();
})
}

openSnackBar(message: string, action: string) {
  this.snackBar.open(message, action, {
    duration: 3200,
  });
}

}
