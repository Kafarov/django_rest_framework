import { NavLink, Outlet } from "react-router-dom";

const Layout = () => {
    return(
        <>
            <header className="header">
                <div className="grid">
                    <ul className="nav">
                        <li><NavLink exact to='/' className={({isActive}) => isActive? 'active-link': ''}>Список пользователей</NavLink></li>
                        <li><NavLink to='/Todo' className={({isActive}) => isActive? 'active-link': ''}>Список ToDo</NavLink></li>
                        <li><NavLink to='/Project' className={({isActive}) => isActive? 'active-link': ''}>Список проектов</NavLink></li>
                    </ul>
                </div>
            </header>
            <Outlet/>
                <footer className="footer">
                    <div className="grid">
                        <div className="footer-hafl">
                            <div className="col_1-2">
                                <h3>Проснись!</h3>
                                <p>
                                    Есть только один способ проделать большую работу – полюбить ее! &copy;Стив Джобс
                                </p>
                            </div>
                            <div className="footer_button">
                            <button>Синяя или красная?</button>
                            </div>
                        </div>
                        
                        <hr/>

                        <ul className="footer_list">
                            <li>
                                <button >Телеграмм</button>
                            </li>
                            <li>
                                <button >Discord</button>
                            </li>
                            <li>
                                <button>Email</button>
                            </li>
                        </ul>
                        <small>&copy;Все права защищены!</small>
                    </div>
                </footer>
        </>
        )
}


export { Layout }