import { Vehiculo } from "./Vehiculo.js";

export class Avion extends Vehiculo {
   constructor(numPlaca, color,marca,modelo,capacidadMax,numeroMotores, maximaPresion){
      super(numPlaca, color,marca,modelo,capacidadMax);
      this.numeroMotores = numeroMotores;
      this.maximaPresion = maximaPresion;
   }
}