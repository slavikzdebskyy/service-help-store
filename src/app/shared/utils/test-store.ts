import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export class TestStore<T> {
  private state: BehaviorSubject<T> = new BehaviorSubject({} as T);

  public setState(data: T): void {
    this.state.next(data);
  }

  public select(selector?: any): Observable<T> {
    return this.state.asObservable().pipe(map(selector));
  }

  public pipe(...args: any): Observable<T> {
    const obs: Observable<T> = this.state.asObservable();
    return obs.pipe.apply(obs, args) as Observable<T>;
  }

  public dispatch(action: any): any {}
}
