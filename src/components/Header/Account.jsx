import Pencil from "../icons/Pencil";
import TransferAccount from "../icons/TransferAccount";
import AccountLogo from "../icons/AccountLogo";
import Help from "../icons/Help"

export default function Account () {
    return (
        <div>
            <div className="absolute right-0 top-12 bg-background p-3 w-52 border-[1px] border-neutral-700">
                <div className="flex flex-col text-sm">
                    <div className="flex p-1 items-center">
                        <Pencil /><span className="hover:underline ml-2">Administrar perfil</span>
                    </div>
                    <div className="flex p-1 items-center">
                        <TransferAccount /><span className="hover:underline ml-2">Transferir perfil</span>
                    </div>
                    <div className="flex p-1 items-center">
                        <AccountLogo /><span className="hover:underline ml-2">Cuenta</span>
                    </div>
                    <div className="flex p-1 pb-3 items-center">
                        <Help /><span className="hover:underline ml-2">Centro de ayuda</span>
                    </div>
                </div>
                <div className="text-sm py-1 border-t-[1px] border-neutral-700 pt-3">
                    <span className="hover:underline">Cerrar sesión</span>
                </div>
            </div>
        </div>
    )
}