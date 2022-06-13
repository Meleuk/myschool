import "./style.css";
import * as React from 'react';

export function Dropdown() {

    return (
        <div>
            <select>
                <option value="bacA">Baccalaureat A</option>
                <option value="bacC">Baccalaureat C</option>
                <option value="bacAutres">Baccalaureat Autres</option>
            </select>
        </div>
    )
}