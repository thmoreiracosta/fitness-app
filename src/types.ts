// src/types.ts
// export interface User {
//   name: string;
//   password: string; // Adicionando a senha
//   workouts: {
//       A: string[];
//       B: string[];
//       C: string[];
//   };
//   // exerciseDescription: string; // Adicionando a descrição do exercício
//   sets: number; // Adicionando número de séries
//   reps: number; // Adicionando número de repetições
// }

export type WorkoutType = 'A' | 'B' | 'C';

export interface User {
    name: string;
    password: string;
    workouts: { [key in WorkoutType]: string[] }; // Usando uma index signature aqui
    sets: number;
    reps: number;
}
