import React from "react";


const MenuList = ({menu}) => {
    return(
        <header className="header">
            <div className="grid">
                <ul className="nav">
                    <li><a>Список пользователей</a></li>
                    <li>Список ToDo</li>
                    <li>Список проектов</li>
                </ul>
            </div>
        </header>
    )
}

export default MenuList