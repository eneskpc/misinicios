import { useShoppingCard } from "../../application/hooks/useShoppingCard"
import Competition from "../../application/models/Competition"

type Props = {
    competition: Competition
}

const BulletinItem = ({ competition }: Props) => {

    const { items, dispatch } = useShoppingCard();

    const addToBasket = (OCG: number, OC: number, O: number) => {
        dispatch({
            type: "added",
            payload: {
                NID: competition.NID,
                C: competition.C,
                LN: competition.LN,
                MBS: competition.OCG[1].MBS,
                N: competition.N,
                O: O,
                OCG: OCG,
                OC: OC
            }
        });
    }

    const item = items.find(it => it.NID == competition.NID);

    return (
        <>
            <tr>
                <td className="border border-slate-300 p-1 text-slate-500 text-left w-96">
                    {competition.D} {competition.DAY} {competition.LN}
                </td>
                <td className="border border-slate-300 py-1 text-slate-500 w-32">Yorumlar</td>
                <td className="border border-slate-300 py-1 text-slate-500 w-9">&nbsp;</td>
                <td className="border border-slate-300 py-1 text-slate-500 w-24">1</td>
                <td className="border border-slate-300 py-1 text-slate-500 w-24">x</td>
                <td className="border border-slate-300 py-1 text-slate-500 w-24">2</td>
                <td className="border border-slate-300 py-1 text-slate-500 w-24">Alt</td>
                <td className="border border-slate-300 py-1 text-slate-500 w-24">Üst</td>
                <td className="border border-slate-300 py-1 text-slate-500 w-14">H1</td>
                <td className="border border-slate-300 py-1 text-slate-500 w-7">1</td>
                <td className="border border-slate-300 py-1 text-slate-500 w-7">x</td>
                <td className="border border-slate-300 py-1 text-slate-500 w-7">2</td>
                <td className="border border-slate-300 py-1 text-slate-500 w-14">H2</td>
                <td className="border border-slate-300 py-1 text-slate-500 w-14">1-X</td>
                <td className="border border-slate-300 py-1 text-slate-500 w-14">1-2</td>
                <td className="border border-slate-300 py-1 text-slate-500 w-14">X-2</td>
                <td className="border border-slate-300 py-1 text-slate-500">Var</td>
                <td className="border border-slate-300 py-1 text-slate-500">Yok</td>
                <td className="border border-slate-300 py-1 text-slate-500">+99</td>
            </tr>
            <tr className="transition-all hover:bg-slate-200">
                <td className="border border-slate-300 py-4 text-slate-500 text-left">
                    <strong>{competition.C}</strong> {competition.T} {competition.N}
                </td>
                <td className="border border-slate-300 py-4 text-slate-500">Yorumlar</td>
                <td className="border border-slate-300 py-4 text-slate-500">
                    {competition.OCG[1].MBS}
                </td>
                <td style={{
                    backgroundColor: item && item.OCG === 1 && item.OC == 0 ? "yellow" : "transparent",
                }} className="border border-slate-300 py-4 text-slate-500 cursor-pointer" onClick={() => addToBasket(1, 0, parseFloat(competition.OCG[1].OC[0].O))}>{competition.OCG[1].OC[0].O}</td>
                <td style={{
                    backgroundColor: item && item.OCG === 1 && item.OC == 1 ? "yellow" : "transparent",
                }} className="border border-slate-300 py-4 text-slate-500 cursor-pointer" onClick={() => addToBasket(1, 1, parseFloat(competition.OCG[1].OC[1].O))}>{competition.OCG[1].OC[1].O}</td>
                <td className="border border-slate-300 py-4 text-slate-500">&nbsp;</td>
                <td style={{
                    backgroundColor: item && item.OCG === 5 && item.OC == 25 ? "yellow" : "transparent",
                }} className="border border-slate-300 py-4 text-slate-500 cursor-pointer" onClick={() => addToBasket(5, 25, parseFloat(competition.OCG[5].OC[25].O))}>{competition.OCG[5].OC[25].O}</td>
                <td style={{
                    backgroundColor: item && item.OCG === 5 && item.OC == 26 ? "yellow" : "transparent",
                }} className="border border-slate-300 py-4 text-slate-500 cursor-pointer" onClick={() => addToBasket(5, 26, parseFloat(competition.OCG[5].OC[26].O))}>{competition.OCG[5].OC[26].O}</td>
                <td className="border border-slate-300 py-4 text-slate-500">&nbsp;</td>
                <td className="border border-slate-300 py-4 text-slate-500">&nbsp;</td>
                <td className="border border-slate-300 py-4 text-slate-500">&nbsp;</td>
                <td className="border border-slate-300 py-4 text-slate-500">&nbsp;</td>
                <td className="border border-slate-300 py-4 text-slate-500">&nbsp;</td>
                <td style={{
                    backgroundColor: item && item.OCG === 2 && item.OC == 3 ? "yellow" : "transparent",
                }} className="border border-slate-300 py-4 text-slate-500 cursor-pointer" onClick={() => addToBasket(2, 3, parseFloat(competition.OCG[2].OC[3].O))}>{competition.OCG[2].OC[3].O}</td>
                <td style={{
                    backgroundColor: item && item.OCG === 2 && item.OC == 4 ? "yellow" : "transparent",
                }} className="border border-slate-300 py-4 text-slate-500 cursor-pointer" onClick={() => addToBasket(2, 4, parseFloat(competition.OCG[2].OC[4].O))}>{competition.OCG[2].OC[4].O}</td>
                <td style={{
                    backgroundColor: item && item.OCG === 2 && item.OC == 5 ? "yellow" : "transparent",
                }} className="border border-slate-300 py-4 text-slate-500 cursor-pointer" onClick={() => addToBasket(2, 5, parseFloat(competition.OCG[2].OC[5].O))}>{competition.OCG[2].OC[5].O}</td>
                <td className="border border-slate-300 py-4 text-slate-500">&nbsp;</td>
                <td className="border border-slate-300 py-4 text-slate-500">&nbsp;</td>
                <td className="border border-slate-300 py-4 text-slate-500">3</td>
            </tr>
        </>
    )
}

export default BulletinItem