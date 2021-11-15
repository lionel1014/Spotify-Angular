import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';
import * as mockRaw from '../../../data/user.json'
import { of } from 'rxjs';

describe('AuthService', () => {
  let service: AuthService;
  let mockUser : any = (mockRaw as any).default;
  let httpClientSpy : { post : jasmine.Spy}

  beforeEach(() => { //lo que se ejecuta entes de cada enunciado
    TestBed.configureTestingModule({
      imports:[
        HttpClientTestingModule
      ]
    });

    httpClientSpy = jasmine.createSpyObj('HttpClient' , ['post'])

    //nuevo instanciamiento del servicio
    service = new AuthService(httpClientSpy as any)
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  //Prueba sendCredentials
  it('Debe retornar un objeto con "data" y "tokensession"', (done:DoneFn) =>{

    //Pruebas AAA -> Arrange (preparar)

    const user : any = mockUser.userOk; //usuario a usar

    const mockResponse = {
      data: {},
      tokenSession:'0x0x0x',
    }

    httpClientSpy.post.and.returnValue( of(mockResponse) ) //lo que la API va a responder

    //Act(actuar)
    service.sendCredentials(user.email, user. password )
      .subscribe(responseAPI =>{

        const getProperties = Object.keys(responseAPI) // ['data','tokenSession']

        //Assert(afirmar)
        expect(getProperties).toContain('data')
        expect(getProperties).toContain('tokenSession')
        console.log('Response API❤❤❤ ->',responseAPI);
        done() //done porque es asincrona la paticion

      })

  })
});
