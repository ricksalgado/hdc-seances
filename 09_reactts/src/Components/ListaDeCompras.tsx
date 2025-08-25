import { useState } from "react";


const ListaDeCompras = () => {
    type Item = {
        id: number;
        name: string;
    }

    const [itens, setItens] = useState<Item[]>([]);

    const [newItem, setNewItem] = useState<string>("");

    const addItem = () => {
        const item: Item = {
            id: itens.length + 1,
            name: newItem,
        };

        setItens([...itens, item]);

        setNewItem("")
    }




    return (
        <div>
            <div>
                <input type="text" value={newItem} onChange={(e) => setNewItem(e.target.value)} />
                <button onClick={addItem}>Add Item</button>
            </div>
            <ul>
                {itens.map((item) => (

                    <li key={item.id}>{item.name}</li>
                ))}
            </ul>
        </div>
    )
}

export default ListaDeCompras
