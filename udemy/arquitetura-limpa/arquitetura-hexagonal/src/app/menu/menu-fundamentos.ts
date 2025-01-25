import TerminalUtil from "@/util/terminal-util";
import { terminal } from "terminal-kit";

export default async function menuFundamentos() {
    TerminalUtil.title("Fundamentos")

    const returned = await terminal.singleColumnMenu([
        '1. Poliformismo',
        'Voltar'
    ]).promise

    switch(returned.selectedIndex) {
        default: return
    }

    await menuFundamentos()
}
