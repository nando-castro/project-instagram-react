function TopoMobile(){
    return (
        <div class="topo-mobile">
            <ion-icon name="logo-instagram"></ion-icon>
            <img src="images/logo.png" alt="Instagram" />
            <ion-icon name="paper-plane-outline"></ion-icon>
        </div>
    )
}

function FooterMobile(){
    return (
    <div class="bottom-mobile">
        <ion-icon name="home"></ion-icon>
        <ion-icon name="search-outline"></ion-icon>
        <ion-icon name="add-circle-outline"></ion-icon>
        <ion-icon name="heart-outline"></ion-icon>
        <ion-icon name="person-outline"></ion-icon>
    </div>
    )
}

export default function Mobile() {
    return (
        <div>
            <TopoMobile />
            <FooterMobile />
        </div>
    )
}