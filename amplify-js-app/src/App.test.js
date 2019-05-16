import React from 'react';
import { render } from 'enzyme';
import App from './App';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Botella from './components/Botella';
import MiHistorial from './components/MiHistorial';
import Home from './components/Home';


configure({ adapter: new Adapter() });

 describe('Prueba de App', () => {
    it('App funcional', () => {
       render(<App />);
     });
 });


describe('Prueba de componente Botella', () => {
   it('Botella y caracteristicas', () => {
      const rBotella = render(<Botella />);
      //expect(rBotella.find("#test").text()).toEqual('');
      expect(rBotella.find("#test").text()).toEqual('Descripción de la botella: Tiene un color , un aroma , un sabor .SKU: Fecha de producción: ');
    });
});

describe('Prueba de componente MiHistorial', () => {
   it('Cosos en Historial', () => {
     const rMihistorial = render(<MiHistorial />);
      //expect(rMihistorial.find("#prueba").text()).toEqual('');
     expect(rMihistorial.find("#prueba").text()).toEqual('Ver tu historial de botellasHistorial');
    });
});

describe('Prueba de componente Home', () => {
   it('Home', () => {
     const rHome = render(<Home />);
     expect(rHome.find("#pruebaschidas").text()).toEqual('');
    });
});
