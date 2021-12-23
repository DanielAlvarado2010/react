/** Estudiante:
 * Nombre
 * Edad
 * Genero
 * Carrera
 * Hace tareas
 * Estudia
 * */

class Student {
  constructor(name, age, gender, career) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.career = career;
  }

  doHomework() {
    return `${this.name} is doing homework`;
  }

  study() {
    return `${this.name} is studying`;
  }
}

/**
 * Koder:
 * Lenguaje
 * Generacion
 * Programa
 * Crea apps
 */

class Koder extends Student {
  constructor(name, age, gender, languages, generation) {
    super(name, age, gender, "developer");
    this.languages = languages;
    this.generation = generation;
  }

  code() {
    return `Koder ${this.name} is coding`;
  }

  developingApp() {
    return `Koder ${this.name} is developing an app`;
  }
}

Xavier = new Student("Xavier", 25, "male", "architect");

console.log(Xavier);

Daniel = new Koder("Daniel", 25, "male", "Javascript", "JS14");

console.log(Daniel);
