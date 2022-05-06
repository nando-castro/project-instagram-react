export default function Topo(){
    return (
        <div class="topo">
            <div class="menu">
                <div class="logo">
                <ion-icon name="logo-instagram"></ion-icon>
                <div class="barra"></div>
                <img src="images/logo.png" alt="Instagram" />
                </div>
                <div class="pesquisa">
                <form action="">
                    <input type="text" id="bar-pesquisa" placeholder="Pesquisar" />
                </form>
                </div>
                <div class="opcoes">
                <ion-icon name="paper-plane-outline"></ion-icon>
                <ion-icon name="compass-outline"></ion-icon>
                <ion-icon name="heart-outline"></ion-icon>
                <ion-icon name="person-outline"></ion-icon>
                </div>
            </div>
        </div>
    )
}
