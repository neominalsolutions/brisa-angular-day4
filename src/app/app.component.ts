import { Component, ElementRef, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { Button } from 'primeng/button';
import {HttpClient} from '@angular/common/http';
import { SpinnerService } from './spinner/spinner.service';
import { debounce, debounceTime, delay, map } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Day4';
  items:any = [
    {
      label: 'Videos', icon: 'pi pi-fw pi-video',
      items: [
        [
          {
            label: 'Video 1',
            items: [{ label: 'Video 1.1' }, { label: 'Video 1.2' }]
          },
          {
            label: 'Video 2',
            items: [{ label: 'Video 2.1' }, { label: 'Video 2.2' }]
          }
        ],
        [
          {
            label: 'Video 3',
            items: [{ label: 'Video 3.1' }, { label: 'Video 3.2' }]
          },
          {
            label: 'Video 4',
            items: [{ label: 'Video 4.1' }, { label: 'Video 4.2' }]
          }
        ]
      ]
    },
    {
      label: 'Users', icon: 'pi pi-fw pi-users',
      items: [
        [
          {
            label: 'User 1',
            items: [{ label: 'User 1.1' }, { label: 'User 1.2' }]
          },
          {
            label: 'User 2',
            items: [{ label: 'User 2.1' }, { label: 'User 2.2' }]
          },
        ],
        [
          {
            label: 'User 3',
            items: [{ label: 'User 3.1' }, { label: 'User 3.2' }]
          },
          {
            label: 'User 4',
            items: [{ label: 'User 4.1' }, { label: 'User 4.2' }]
          }
        ],
        [
          {
            label: 'User 5',
            items: [{ label: 'User 5.1' }, { label: 'User 5.2' }]
          },
          {
            label: 'User 6',
            items: [{ label: 'User 6.1' }, { label: 'User 6.2' }]
          }
        ]
      ]
    },
    {
      label: 'Events', icon: 'pi pi-fw pi-calendar',
      items: [
        [
          {
            label: 'Event 1',
            items: [{ label: 'Event 1.1' }, { label: 'Event 1.2' }]
          },
          {
            label: 'Event 2',
            items: [{ label: 'Event 2.1' }, { label: 'Event 2.2' }]
          }
        ],
        [
          {
            label: 'Event 3',
            items: [{ label: 'Event 3.1' }, { label: 'Event 3.2' }]
          },
          {
            label: 'Event 4',
            items: [{ label: 'Event 4.1' }, { label: 'Event 4.2' }]
          }
        ]
      ]
    },
    {
      label: 'Settings', icon: 'pi pi-fw pi-cog',
      items: [
        [
          {
            label: 'Setting 1',
            items: [{ label: 'Setting 1.1' }, { label: 'Setting 1.2' }]
          },
          {
            label: 'Setting 2',
            items: [{ label: 'Setting 2.1' }, { label: 'Setting 2.2' }]
          },
          {
            label: 'Setting 3',
            items: [{ label: 'Setting 3.1' }, { label: 'Setting 3.2' }]
          }
        ],
        [
          {
            label: 'Technology 4',
            items: [{ label: 'Setting 4.1' }, { label: 'Setting 4.2' }]
          }
        ]
      ]
    }
  ]

 
  constructor(private http:HttpClient, private spinner:SpinnerService) {
  }

  ngOnInit(): void {
    // this.spinner.show();

    this.http.get('https://jsonplaceholder.typicode.com/todos').subscribe((data => {
      console.log('data', data);
      // this.spinner.hide();
    }))
  }

  clickMe(){
    alert('clicked');
  }

  // bir element referansına angular ts dosyasında erişmek için @ViewChild declaration kullanarak ElementRef tipinde erişiriz.
  @ViewChild('btn1') btn1!: ElementRef;
  @ViewChild('btn2') btn2!:Button;
  // elementin içerisindeki bir property yada methodu değiştirmemiz sağlar.

  focus(){
    console.log('this.btn.nativeElement',this.btn1.nativeElement)
    this.btn1.nativeElement.style.color = 'red';
    this.btn1.nativeElement.style.backgroundColor = 'blue';

    this.btn2.badge= "15";
    this.btn2.disabled = true;
  }
}
