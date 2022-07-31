import { Component, OnInit } from '@angular/core';
import { count, filter, interval, map, Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private firstObsSubscription: Subscription;

  constructor() { }

  ngOnInit(): void {
    // this.firstObsSubscription = interval(1000).subscribe(count => {
    //   console.log(count);
    // });

    //Writing and handling your own Observable
    const customIntervalObservable = Observable.create(observer => {
      let count = 0;
      setInterval(() => {
        observer.next(count);
        if (count === 5) {
          //observer will come to a halt
          observer.complete();
        }
        if (count > 3) {
          observer.error(new Error('Count is greater than 3'));
        }
        count++; //increment count by 1
      }, 1000);
    });

    //Operators - Every Observable has a pipe method

    this.firstObsSubscription = customIntervalObservable.pipe(filter(data => {
      return data > 0; //return true if data is greater than 0
    }), map((data: number) => {
      return 'Round ' + (data + 1);
    })).subscribe(data => {
      console.log(data);
    }, error => {
      console.log(error);
      alert(error.message);
    }, () => {
      console.log('Completed');
    });
  }

  //When we leave the component, it wont console.log(count)
  ngOnDestroy(): void {
    this.firstObsSubscription.unsubscribe();
  }

}
