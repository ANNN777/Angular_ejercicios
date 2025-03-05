import { TestBed } from '@angular/core/testing';

import { EnvioFormularioService } from './envio-formulario.service';

describe('EnvioFormularioService', () => {
  let service: EnvioFormularioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EnvioFormularioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
