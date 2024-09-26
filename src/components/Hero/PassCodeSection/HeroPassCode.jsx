import Button from "./Button";
import InputSection from "./InputSection";
import Keypad from "./Keypad";


export default function HeroPassCode() {
    return (
        <div className="flex flex-col justify-center items-center w-1/2 h-full">
            <Button />
            <InputSection />
            <Keypad />
        </div>
    )
}
