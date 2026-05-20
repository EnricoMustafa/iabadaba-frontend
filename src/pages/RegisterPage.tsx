import { Link } from 'react-router-dom'
import '../styles/auth.css'
import { useState } from 'react'
import { useAuth } from '../contexts/AuthContext'

const TICKER = 'iabadaba · iabadaba · iabadaba · iabadaba · iabadaba · iabadaba · iabadaba · iabadaba · '

function Logo() {
  return (
    <svg width="54" height="54" viewBox="0 0 56 56" fill="none">
      <circle cx="28" cy="28" r="26" stroke="#4ADE80" strokeWidth="0.6" opacity="0.22"/>
      <path d="M 28 5 Q 39 28 28 51 Q 17 28 28 5" stroke="#4ADE80" strokeWidth="1.1" fill="none" opacity="0.55"/>
      <path d="M 5 28 Q 28 17 51 28 Q 28 39 5 28" stroke="#4ADE80" strokeWidth="1.1" fill="none" opacity="0.55"/>
      <circle cx="28" cy="28" r="7.5" stroke="#4ADE80" strokeWidth="0.9" fill="none" opacity="0.6"/>
      <circle cx="28" cy="28" r="2.2" fill="#4ADE80"/>
    </svg>
  )
}

export function RegisterPage() {

  const [ name, setName ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ error, setError ] = useState('');
  const [ message, setMessage ] = useState('');
  const {register} = useAuth();

  const handleSubmit = async (e:  React.FormEvent<HTMLFormElement>) => {

    e.preventDefault();

    setError('');

    if(!email) return setError('Email invalido');

    if(password.length < 6) return setError('Minimo de 6 digitos')
    
      try{
        await register(name, email, password);
        setMessage('Usuario Criado!');
        setTimeout(()=>{
          setMessage('');
        }, 5000);
      }catch{
        setError('Falha ao criar um usuario');
      }

  }
  return (
    <div className="auth-bg">

      <div className="bg-scene">
        <div className="bg-orb bg-orb-1" />
        <div className="bg-orb bg-orb-2" />
        <div className="bg-orb bg-orb-3" />
        <div className="bg-ticker-wrap">
          <div className="bg-ticker bg-ticker-left">
            <span>{TICKER}</span><span>{TICKER}</span>
          </div>
          <div className="bg-ticker bg-ticker-right">
            <span>{TICKER}</span><span>{TICKER}</span>
          </div>
        </div>
      </div>

      <div className="auth-card">

        <div className="auth-brand">
          <Logo />
          <h1 className="auth-brand-name">iabadaba</h1>
          <p className="auth-brand-tagline">criar conta</p>
        </div>

        <form className="auth-form" onSubmit={handleSubmit}>
          <div className="field">
            <label className="field-label">Nome</label>
            <input className="field-input" type="text" placeholder="Seu nome" value={name} onChange={(e) => setName(e.target.value)} />
          </div>
          <div className="field">
            <label className="field-label">Email</label>
            <input className="field-input" type="email" placeholder="seu@email.com" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="field">
            <label className="field-label">Senha</label>
            <input className="field-input" type="password" placeholder="••••••••" value={password} onChange={(e) => setPassword(e.target.value)}/>
          </div>
          {(error || message) && <p>{error || message}</p>}
          {/* <div className="field">
            <label className="field-label">Confirmar Senha</label>
            <input className="field-input" type="password" placeholder="••••••••"/>
          </div> */}
          <button className="btn-submit" type="submit">criar conta</button>
        </form>

        <p className="auth-footer">
          Já tem conta?{' '}
          <Link className="auth-link" to="/">entrar</Link>
        </p>

      </div>
    </div>
  )
}
