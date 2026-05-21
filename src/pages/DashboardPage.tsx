import '../styles/dashboard.css'
import { useAuth } from '../contexts/AuthContext'

function Logo() {
  return (
    <svg width="30" height="30" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="28" cy="28" r="26" stroke="#4ADE80" strokeWidth="0.6" opacity="0.22"/>
      <path d="M 28 5 Q 39 28 28 51 Q 17 28 28 5" stroke="#4ADE80" strokeWidth="1.1" fill="none" opacity="0.55"/>
      <path d="M 5 28 Q 28 17 51 28 Q 28 39 5 28" stroke="#4ADE80" strokeWidth="1.1" fill="none" opacity="0.55"/>
      <circle cx="28" cy="28" r="7.5" stroke="#4ADE80" strokeWidth="0.9" fill="none" opacity="0.6"/>
      <circle cx="28" cy="28" r="2.2" fill="#4ADE80"/>
    </svg>
  )
}

export function DashboardPage() {
  const {user} = useAuth();

  return (
    <div className="dash-layout">

      {/* Sidebar */}
      <aside className="sidebar">

        <div className="sidebar-brand">
          <Logo />
          <span className="sidebar-brand-text">iabadaba</span>
        </div>

        <nav className="sidebar-nav">
          <div className="nav-item is-active">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <rect x="1" y="1" width="5" height="5" rx="1" stroke="currentColor" strokeWidth="1.2"/>
              <rect x="8" y="1" width="5" height="5" rx="1" stroke="currentColor" strokeWidth="1.2"/>
              <rect x="1" y="8" width="5" height="5" rx="1" stroke="currentColor" strokeWidth="1.2"/>
              <rect x="8" y="8" width="5" height="5" rx="1" stroke="currentColor" strokeWidth="1.2"/>
            </svg>
            Visão Geral
          </div>
          <div className="nav-item">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <rect x="1" y="4" width="12" height="9" rx="1.5" stroke="currentColor" strokeWidth="1.2"/>
              <path d="M1 7H13" stroke="currentColor" strokeWidth="1.2"/>
              <path d="M5 2L9 2" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
            </svg>
            Contas
          </div>
          <div className="nav-item">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <circle cx="7" cy="7" r="5.5" stroke="currentColor" strokeWidth="1.2"/>
              <circle cx="7" cy="7" r="2" stroke="currentColor" strokeWidth="1.2"/>
            </svg>
            Categorias
          </div>
          <div className="nav-item">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M7 1.5V12.5M4.5 10L7 12.5L9.5 10M4.5 4L7 1.5L9.5 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Transações
          </div>
        </nav>

        <div className="sidebar-footer">
          <div className="user-pill">
            <div className="user-avatar">E</div>
            <div>
              <p className="user-info-name">{user?.name}</p>
              <p className="user-info-role">{}</p>
            </div>
          </div>
        </div>

      </aside>

      {/* Main */}
      <main className="main">

        <div className="main-topbar">
          <h1 className="main-topbar-title">Visão Geral</h1>
          <span className="main-topbar-date">Maio · 2026</span>
        </div>

        <div className="main-body">

          {/* Stats */}
          <div className="stats-row">
            <div className="stat-card">
              <p className="stat-card-label">Saldo Total</p>
              <p className="stat-card-value">R$ 4.350,00</p>
              <p className="stat-card-sub">3 contas ativas</p>
            </div>
            <div className="stat-card">
              <p className="stat-card-label">Receitas do Mês</p>
              <p className="stat-card-value income">R$ 6.000,00</p>
              <p className="stat-card-sub">1 transação</p>
            </div>
            <div className="stat-card">
              <p className="stat-card-label">Despesas do Mês</p>
              <p className="stat-card-value expense">R$ 1.650,00</p>
              <p className="stat-card-sub">4 transações</p>
            </div>
          </div>

          {/* Accounts */}
          <div>
            <div className="section-header">
              <span className="section-label">Contas Bancárias</span>
              <span className="section-action">+ nova conta</span>
            </div>
            <div className="accounts-list">
              <div className="account-row">
                <div className="account-left">
                  <div className="account-icon">
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
                      <rect x="1" y="4" width="13" height="9" rx="1.5" stroke="#4ADE80" strokeWidth="1.1"/>
                      <path d="M1 7.5H14" stroke="#4ADE80" strokeWidth="1.1"/>
                      <path d="M4.5 2H10.5" stroke="#4ADE80" strokeWidth="1.1" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <div>
                    <p className="account-name">Nubank</p>
                    <p className="account-type-badge">Conta Corrente</p>
                  </div>
                </div>
                <span className="account-balance">R$ 1.200,00</span>
              </div>
              <div className="account-row">
                <div className="account-left">
                  <div className="account-icon">
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
                      <rect x="1" y="4" width="13" height="9" rx="1.5" stroke="#4ADE80" strokeWidth="1.1"/>
                      <path d="M1 7.5H14" stroke="#4ADE80" strokeWidth="1.1"/>
                      <path d="M4.5 2H10.5" stroke="#4ADE80" strokeWidth="1.1" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <div>
                    <p className="account-name">Itaú Personalité</p>
                    <p className="account-type-badge">Poupança</p>
                  </div>
                </div>
                <span className="account-balance">R$ 3.000,00</span>
              </div>
              <div className="account-row">
                <div className="account-left">
                  <div className="account-icon">
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
                      <circle cx="7.5" cy="5" r="3" stroke="#4ADE80" strokeWidth="1.1"/>
                      <path d="M2 13.5C2 11 4.5 9 7.5 9C10.5 9 13 11 13 13.5" stroke="#4ADE80" strokeWidth="1.1" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <div>
                    <p className="account-name">Carteira</p>
                    <p className="account-type-badge">Dinheiro</p>
                  </div>
                </div>
                <span className="account-balance">R$ 150,00</span>
              </div>
            </div>
          </div>

          {/* Transactions */}
          <div>
            <div className="section-header">
              <span className="section-label">Transações Recentes</span>
              <span className="section-action">ver todas</span>
            </div>
            <div className="transactions-table">
              <div className="tx-row">
                <div className="tx-left">
                  <div className="tx-dot"></div>
                  <div>
                    <p className="tx-desc">Salário</p>
                    <p className="tx-cat">Receita</p>
                  </div>
                </div>
                <div className="tx-right">
                  <p className="tx-amount">+ R$ 6.000,00</p>
                  <p className="tx-date">01 mai</p>
                </div>
              </div>
              <div className="tx-row">
                <div className="tx-left">
                  <div className="tx-dot expense"></div>
                  <div>
                    <p className="tx-desc">Aluguel</p>
                    <p className="tx-cat">Moradia</p>
                  </div>
                </div>
                <div className="tx-right">
                  <p className="tx-amount expense">- R$ 1.200,00</p>
                  <p className="tx-date">05 mai</p>
                </div>
              </div>
              <div className="tx-row">
                <div className="tx-left">
                  <div className="tx-dot expense"></div>
                  <div>
                    <p className="tx-desc">Mercado</p>
                    <p className="tx-cat">Alimentação</p>
                  </div>
                </div>
                <div className="tx-right">
                  <p className="tx-amount expense">- R$ 320,00</p>
                  <p className="tx-date">12 mai</p>
                </div>
              </div>
              <div className="tx-row">
                <div className="tx-left">
                  <div className="tx-dot expense"></div>
                  <div>
                    <p className="tx-desc">Netflix</p>
                    <p className="tx-cat">Lazer</p>
                  </div>
                </div>
                <div className="tx-right">
                  <p className="tx-amount expense">- R$ 55,90</p>
                  <p className="tx-date">15 mai</p>
                </div>
              </div>
              <div className="tx-row">
                <div className="tx-left">
                  <div className="tx-dot expense"></div>
                  <div>
                    <p className="tx-desc">Farmácia</p>
                    <p className="tx-cat">Saúde</p>
                  </div>
                </div>
                <div className="tx-right">
                  <p className="tx-amount expense">- R$ 74,10</p>
                  <p className="tx-date">17 mai</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </main>

    </div>
  )
}
