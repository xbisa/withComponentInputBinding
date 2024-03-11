import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignInComponent implements OnInit {
  private route = inject(ActivatedRoute);
  // this.route.snapshot.queryParams['success'] returns undefined when there is no such parameter.
  // !!undefined returns false
  private success = !!this.route.snapshot.queryParams['success'];

  // http://localhost:4200/sign-in?success=true
  ngOnInit(): void {
    console.log(this.success);  // true

    // OR
    this.success = !!this.route.snapshot.queryParams['success'];
    console.log(this.success); // true
    this.success = false;

    // OR
    this.route.queryParams
      .subscribe({
        next: (params: Params) => {
            const { success } = params; // returns undefined when there is no such parameter.
            this.success = !!success;
            console.log(this.success); // true
        },
      });
  }
}

// import { booleanAttribute, ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
//
// @Component({
//   selector: 'app-sign-in',
//   standalone: true,
//   imports: [],
//   templateUrl: './sign-in.component.html',
//   styleUrl: './sign-in.component.scss',
//   changeDetection: ChangeDetectionStrategy.OnPush
// })
// export class SignInComponent implements OnInit {
//   @Input({ transform: booleanAttribute }) public success: boolean = false;
//
//   ngOnInit(): void {
//     console.log(this.success);
//   }
// }

