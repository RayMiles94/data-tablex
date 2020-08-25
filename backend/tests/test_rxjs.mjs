/* this test work only in ES6 and rxjs installed */
import { from } from 'rxjs';
import { filter, map } from 'rxjs/operators';

let numberObservale = from([1, 2, 3, 4, 5]);
let squareNumber = numberObservale.pipe(
  filter(val => val > 2),
  map(val => val * val)  
);

squareNumber.subscribe(
    data => {
        console.log(data);
    }
)