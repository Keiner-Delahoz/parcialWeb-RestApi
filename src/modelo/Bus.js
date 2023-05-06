import { Vehiculo } from "./Vehiculo.js";

export class Bus extends Vehiculo {
   constructor(numPlaca, color,marca,modelo,capacidadMax,numeroEjes, tieneBano, numeroTV){
      super(numPlaca, color,marca,modelo,capacidadMax);
      this.numeroEjes = numeroEjes;
      this.tieneBano = tieneBano;
      this.numeroTV = numeroTV;
   }
}