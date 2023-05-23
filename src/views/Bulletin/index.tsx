import { useCallback, useEffect, useState } from "react"
import { useBulletin } from "../../application/hooks/useBulletin"
import services from "../../infrastructure/services";
import BulletinItem from "./BulletinItem";

const itemRowHeight = 90;
const screenHeight = Math.max(
    document.documentElement.clientHeight,
    window.innerHeight || 0
);
const offset = screenHeight;
const rowsToRender = Math.floor((screenHeight + offset) / itemRowHeight);

const Bulletin = () => {
    const { competitions, dispatch } = useBulletin();

    const [displayStart, setDisplayStart] = useState(0);
    const [displayEnd, setDisplayEnd] = useState(0);
    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
        if (competitions.length === 0) {
            services.api.bulletin.getAllCompetitions().then(response => {
                dispatch({
                    type: "stored",
                    payload: response
                })
            });
        }
    }, [competitions, dispatch]);


    const setDisplayPositions = useCallback(
        (scroll: any) => {
            const scrollWithOffset = Math.floor(scroll - rowsToRender - offset / 2);
            const displayStartPosition = Math.round(
                Math.max(0, Math.floor(scrollWithOffset / itemRowHeight))
            );

            const displayEndPosition = Math.round(
                Math.min(displayStartPosition + rowsToRender, competitions.length)
            );

            setDisplayStart(displayStartPosition);
            setDisplayEnd(displayEndPosition);
        },
        [competitions.length]
    );

    useEffect(() => {
        setDisplayPositions(scrollPosition);
    }, [scrollPosition, setDisplayPositions]);

    useEffect(() => {
        const onScroll = () => {
            const scrollTop = window.scrollY;
            if (competitions.length !== 0) {
                setScrollPosition(scrollTop);
                setDisplayPositions(scrollTop);
            }
        };

        window.addEventListener("scroll", onScroll);

        return () => {
            window.removeEventListener("scroll", onScroll);
        };
    }, [setDisplayPositions, competitions.length]);

    const rows = [];

    rows.push(
        <tr
            key="startRowFiller"
            style={{ height: displayStart * itemRowHeight }}
        ></tr>
    );

    for (let i = displayStart; i < displayEnd; ++i) {
        const row = competitions[i];
        if (row !== undefined) {
            rows.push(
                <BulletinItem key={row.NID} competition={row} />
            );
        }
    }

    rows.push(
        <tr
            key="endRowFiller"
            style={{ height: (competitions.length - displayEnd) * itemRowHeight }}
        ></tr>
    );

    return (
        <>
            <table className="fixed w-full top-0 bg-pink-200">
                <thead>
                    <tr>
                        <th className="border border-slate-300 py-4 text-slate-500 w-96">Event Count: {competitions.length}</th>
                        <th className="border border-slate-300 py-4 text-slate-500 w-32">Yorumlar</th>
                        <th className="border border-slate-300 py-4 text-slate-500 w-9">&nbsp;</th>
                        <th className="border border-slate-300 py-4 text-slate-500 w-24">1</th>
                        <th className="border border-slate-300 py-4 text-slate-500 w-24">x</th>
                        <th className="border border-slate-300 py-4 text-slate-500 w-24">2</th>
                        <th className="border border-slate-300 py-4 text-slate-500 w-24">Alt</th>
                        <th className="border border-slate-300 py-4 text-slate-500 w-24">Üst</th>
                        <th className="border border-slate-300 py-4 text-slate-500 w-14">H1</th>
                        <th className="border border-slate-300 py-4 text-slate-500 w-7">1</th>
                        <th className="border border-slate-300 py-4 text-slate-500 w-7">x</th>
                        <th className="border border-slate-300 py-4 text-slate-500 w-7">2</th>
                        <th className="border border-slate-300 py-4 text-slate-500 w-14">H2</th>
                        <th className="border border-slate-300 py-4 text-slate-500 w-14">1-X</th>
                        <th className="border border-slate-300 py-4 text-slate-500 w-14">1-2</th>
                        <th className="border border-slate-300 py-4 text-slate-500 w-14">X-2</th>
                        <th className="border border-slate-300 py-4 text-slate-500">Var</th>
                        <th className="border border-slate-300 py-4 text-slate-500">Yok</th>
                        <th className="border border-slate-300 py-4 text-slate-500">+99</th>
                    </tr>
                </thead>
            </table>
            <table className="border-collapse border border-slate-400 w-full text-center mt-16">
                <tbody>
                    {rows.map(c => c)}
                </tbody>
            </table>
        </>
    )
}

export default Bulletin