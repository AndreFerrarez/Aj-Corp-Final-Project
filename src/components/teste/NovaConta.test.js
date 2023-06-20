import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import NovaConta from '../ui/NovaConta';

jest.mock('../../infra/Usuarios', () => ({
  criarConta: jest.fn(),
}));

describe('NovaConta', () => {
  it('deve chamar criarConta ao enviar o formulário', () => {
    const setUsuario = jest.fn();

    render(<NovaConta usuario={{}} setUsuario={setUsuario} />);

    const nomeInput = screen.getByLabelText('Nome:');
    fireEvent.change(nomeInput, { target: { value: 'John Doe' } });

    const emailInput = screen.getByLabelText('Email:');
    fireEvent.change(emailInput, { target: { value: 'john.doe@example.com' } });

    const foneInput = screen.getByLabelText('Telefone:');
    fireEvent.change(foneInput, { target: { value: '1234567890' } });

    const senhaInput = screen.getByLabelText('Senha:');
    fireEvent.change(senhaInput, { target: { value: 'password' } });

    const tipoInput = screen.getByLabelText('Analista');
    fireEvent.click(tipoInput);

    const criarContaButton = screen.getByText('Criar Conta');
    fireEvent.click(criarContaButton);

    expect(setUsuario).toHaveBeenCalledWith((objetoAtual) => {
      return {
        ...objetoAtual,
        nome: 'John Doe',
        email: 'john.doe@example.com',
        fone: '1234567890',
        senha: 'password',
        tipo: 'Empresa',
      };
    });

    expect(criarConta).toHaveBeenCalledWith(
      {
        nome: 'John Doe',
        email: 'john.doe@example.com',
        fone: '1234567890',
        senha: 'password',
        tipo: 'Empresa',
      },
      setUsuario
    );
  });
});