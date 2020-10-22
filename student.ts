export class Student {
    codigo: string;
    cedula: string;
    edad: string;
    direccion: string;
    telefono: string;
    nombre: string;
  
    constructor(codigo: string, cedula: string, edad: string, direccion: string, telefono: string, nombre: string) {
      this.codigo = codigo;
      this.cedula = cedula;
      this.edad = edad;
      this.direccion = direccion;
      this.telefono = telefono;
      this.nombre = nombre;

    }
  }