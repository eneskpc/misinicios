import { useShoppingCard } from "../../application/hooks/useShoppingCard";

const ShoppingCart = () => {
    const { items } = useShoppingCard();

    return (
        <div className="fixed rounded-lg right-1 bottom-1 bg-white border p-3 max-w-md w-full border-slate-300 shadow">
            <div>
                {
                    items.map(item => (
                        <div key={item.NID} className="border-b border-slate-300 py-2">{item.MBS} Kod: <strong>{item.C}</strong> Maç: {item.N} <strong>Oran: {item.O}</strong></div>
                    ))
                }
            </div>
            <div className="mt-3">Toplam Tutar: {!items || items.length === 0 ? 0 : items.map(i => i.O).reduce((a, b) => a * b).toFixed(2)} TL</div>
        </div>
    )
}

export default ShoppingCart