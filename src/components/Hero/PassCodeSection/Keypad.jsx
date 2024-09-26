

export default function Keypad() {
    const number = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "", "0", "✕"]
    return (
        <div className="w-60 h-72 grid grid-cols-3 place-items-center mb-1 pt-10">
            {number.map((num) => (
                num !== '' ? (
                <button key={num} className="w-14 h-14 mb-3 rounded-full text-2xl font-semibold bg-pepperLightGray text-pepperWhite">{num}</button>
                ) : (
                    <div className="bg-pepperGray" key={num}></div>
                )
            ))}
        </div>
    )
}
