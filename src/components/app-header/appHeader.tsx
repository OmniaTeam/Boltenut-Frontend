import './styles.css'

export const AppHeader = () => {
    return <header className="app-header">
        <div className="app-header-left">
            <h2 className='app-header-left__title'>Boltenut</h2>
            <p className='app-header-left__description'>Система расчета допусков и посадок резьбовых соединений</p>
        </div>
        <div className="app-header-right"></div>
    </header>
}