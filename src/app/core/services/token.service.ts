// import { Injectable, OnDestroy, inject } from '@angular/core';
// import { BehaviorSubject, Subject, Subscription, share, timer } from 'rxjs';

// import { LocalStorageService } from '@shared';
// import { currentTimestamp, filterObject } from '../utils';
// import { Token } from '../models';
// import { BaseToken } from '../models';
// import { TokenFactory } from '.';

// @Injectable({
//   providedIn: 'root',
// })
// export class TokenService implements OnDestroy {
//   private readonly key = 'alphbetagammadelta';

//   private readonly store = inject(LocalStorageService);
//   private readonly factory = inject(TokenFactory);

//   private readonly change$ = new BehaviorSubject<BaseToken | undefined>(undefined);
//   private readonly refresh$ = new Subject<BaseToken | undefined>();

//   private timer$?: Subscription;

//   private _token?: BaseToken;

//   private get token(): BaseToken | undefined {
//     if (!this._token) {
//       this._token = this.factory.create(this.store.get(this.key));
//     }

//     return this._token;
//   }

//   change() {
//     return this.change$.pipe(share());
//   }

//   // refresh() {
//   //   this.buildRefresh();

//   //   return this.refresh$.pipe(share());
//   // }

//   set(token?: Token) {
//     this.save(token);

//     return this;
//   }

//   clear() {
//     this.save();
//   }

//   valid() {
//     return this.token?.valid() ?? false;
//   }

//   getBearerToken() {
//     return this.token?.getBearerToken() ?? '';
//   }

//   getRefreshToken() {
//     return this.token?.refresh_token;
//   }

//   ngOnDestroy(): void {
//     this.clearRefresh();
//   }

//   private save(token?: Token) {
//     this._token = undefined;

//     if (!token) {
//       this.store.remove(this.key);
//     } else {
//       const value = Object.assign({ accessToken: '', tokenType: 'Bearer' }, token, {
//         exp: token.expiresIn ? currentTimestamp() + token.expiresIn : null,
//       });
//       this.store.set(this.key, filterObject(value));
//     }

//     this.change$.next(this.token);
//     this.buildRefresh();
//   }

//   private buildRefresh() {
//     this.clearRefresh();

//     if (this.token?.needRefresh()) {
//       this.timer$ = timer(this.token.getRefreshTime() * 1000).subscribe(() => {
//         this.refresh$.next(this.token);
//       });
//     }
//   }

//   private clearRefresh() {
//     if (this.timer$ && !this.timer$.closed) {
//       this.timer$.unsubscribe();
//     }
//   }
// }
