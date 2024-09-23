import React, { useState, useContext } from 'react';
import { UserContext } from '../components/UserContext';

// Função para gerar uma senha aleatória
const generateRandomPassword = () => {
  const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let password = "";
  for (let i = 0; i < 8; i++) { // Senha de 8 caracteres
      const randomIndex = Math.floor(Math.random() * charset.length);
      password += charset[randomIndex];
  }
  return password;
};

const UserRegistration: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [dob, setDob] = useState('');
  const { setUsers } = useContext(UserContext);

  const handleRegister = () => {
      const password = generateRandomPassword();
      // Aqui você deve implementar a lógica para enviar o e-mail com a senha gerada.
      // sendEmail(email, password); // Função fictícia para enviar e-mail.

      setUsers(prevUsers => [
          ...prevUsers,
          { 
              name, 
              password, 
              workouts: { A: [], B: [], C: [] }, 
              email,
              address,
              phone,
              dob,
              sets: 1,
              reps: 1,
          },
      ]);
      alert(`Usuário ${name} registrado com sucesso! A senha foi enviada para o e-mail ${email}.`);
      // Limpa os campos
      setName('');
      setEmail('');
      setAddress('');
      setPhone('');
      setDob('');
  };

  return (
      <div className="p-6 bg-gray-100 min-h-screen flex flex-col items-center">
          <h2 className="text-2xl font-semibold mb-4">Cadastro Aluno Novo</h2>
          <input
              type="text"
              placeholder="Nome completo"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border border-gray-300 rounded-lg p-2 mb-4 w-80"
          />
          <input
              type="email"
              placeholder="E-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border border-gray-300 rounded-lg p-2 mb-4 w-80"
          />
          <input
              type="text"
              placeholder="Endereço"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="border border-gray-300 rounded-lg p-2 mb-4 w-80"
          />
          <input
              type="tel"
              placeholder="Telefone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="border border-gray-300 rounded-lg p-2 mb-4 w-80"
          />
          <input
              type="date"
              placeholder="Data de Nascimento"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
              className="border border-gray-300 rounded-lg p-2 mb-4 w-80"
          />
          <button
              onClick={handleRegister}
              className="bg-blue-600 text-white rounded-lg px-4 py-2 hover:bg-blue-500"
          >
              Cadastrar Aluno
          </button>
      </div>
  );
};

export default UserRegistration;
