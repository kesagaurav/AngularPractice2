import { Interceptor1 } from './book.interceptor.ts.pipe';

describe('BookInterceptorTsPipe', () => {
  it('create an instance', () => {
    const pipe = new Interceptor1();
    expect(pipe).toBeTruthy();
  });
});
