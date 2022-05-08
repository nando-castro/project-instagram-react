export default function Conteudo(){
    return (
        <div class="conteudo">
            <Posts />
            <Sidebar />
        </div>
    )
}

function StoriesItem(props) {
    return(
        <div class={props.class}>
            <img src={props.image} />
            <div class={props.type}>
                <img src={props.img} alt={props.alt} />
            </div>
            <h4>{props.title}</h4>
        </div>
    )
}

function PostItem(props){
    return(
        <div class="post">
        <div class="topo-post">
            <div class={props.type}>
                <img src={props.icon} />
                <h3><strong>{props.title}</strong></h3>
            </div>
            <div class={props.typeDot}>
                <p>{props.titleDot}</p>
            </div>
        </div>
        <img src={props.image} />
        <div class="bot-post">
            <div class="box-a">
                <div class={props.typeB}>
                    <ion-icon name="heart-outline"></ion-icon>
                    <ion-icon name="chatbubble-outline"></ion-icon>
                    <ion-icon name="paper-plane-outline"></ion-icon>
                </div>
                <div class={props.typeC}>
                    <ion-icon name="bookmark-outline"></ion-icon>
                </div>
            </div>
            <div class={props.typeD}>
                <img src={props.icone} />
                <h3>
                    {props.text}<strong>{props.textb}</strong>{props.textc}
                    <strong>{props.textd}</strong>
                </h3>
            </div>
        </div>
        </div>
    )
}

function PostVideo(props){
    return(
        <div class="post">
        <div class="topo-post">
            <div class={props.type}>
                <img src={props.icon} />
                <h3><strong>{props.title}</strong></h3>
            </div>
            <div class={props.typeDot}>
                <p>{props.titleDot}</p>
            </div>
        </div>
        <video width="100%" height="auto" autoplay muted loop>
            <source src={props.videomp4} type={props.typemp4} />
            <source src={props.videogg} type={props.typeogg} />
            Your browser does not support HTML video.
        </video>
        <div class="bot-post">
            <div class="box-a">
                <div class={props.typeB}>
                    <ion-icon name="heart-outline"></ion-icon>
                    <ion-icon name="chatbubble-outline"></ion-icon>
                    <ion-icon name="paper-plane-outline"></ion-icon>
                </div>
                <div class={props.typeC}>
                    <ion-icon name="bookmark-outline"></ion-icon>
                </div>
            </div>
            <div class={props.typeD}>
                <img src={props.icone} />
                <h3>
                    {props.text}<strong>{props.textb}</strong>{props.textc}
                    <strong>{props.textd}</strong>
                </h3>
            </div>
        </div>
        </div>
    )
}

function Posts(){
    return (
        <div class="posts">
            <div class="stories">
                <ion-icon name="chevron-forward-circle-sharp"></ion-icon>
                <StoriesItem
                class="stories-box"
                image="images/stories_background.jpg"
                alt="image"
                type="contas"
                img="images/9gag.svg"
                title="9gag"
                />
                <StoriesItem
                class="stories-box"
                image="images/stories_background.jpg"
                alt="image"
                type="contas"
                img="images/meowed.svg"
                title="meowed"
                />
                <StoriesItem
                class="stories-box"
                image="images/stories_background.jpg"
                alt="image"
                type="contas"
                img="images/barked.svg"
                title="barked"
                />
                <StoriesItem
                class="stories-box"
                image="images/stories_background.jpg"
                alt="image"
                type="contas"
                img="images/nathanwpylestrangeplanet.svg"
                title="nathanwpyle..."
                />
                <StoriesItem
                class="stories-box"
                image="images/stories_background.jpg"
                alt="image"
                type="contas"
                img="/images/wawawicomics.svg"
                title="wawawiwac..."
                />
                <StoriesItem
                class="stories-box"
                image="images/stories_background.jpg"
                alt="image"
                type="contas"
                img="images/respondeai.svg"
                title="respondeai"
                />
                <StoriesItem
                class="stories-box"
                image="images/stories_background.jpg"
                alt="image"
                type="contas"
                img="images/filomoderna.svg"
                title="filomoderna"
                />
                <StoriesItem
                class="stories-box"
                image="images/stories_background.jpg"
                alt="image"
                type="contas"
                img="images/memeriagourmet.svg"
                title="memeriago."
                />
            </div>
                <PostItem 
                type="user-box"
                icon="images/respondeai.svg"
                title="respondeai"
                typeDot="user-dot"
                titleDot="..."
                image="images/bruxo.jpeg"
                alt="bruxo driven"
                class="none"
                typeB="box-b"
                typeC="box-c"
                typeD="box-d"
                icone="images/respondeai.svg"
                text="Curtido por "
                textb="respondeai"
                textc=" e "
                textd="outras 599.259 pessoas"
                />       
                <PostItem 
                type="user-box"
                icon="images/meowed.svg"
                title="meowed"
                typeDot="user-dot"
                titleDot="..."
                image="images/gato-telefone.svg"
                alt="gato telefone"
                typeB="box-b"
                typeC="box-c"
                typeD="box-d"
                icone="images/respondeai.svg"
                text="Curtido por "
                textb="respondeai"
                textc=" e "
                textd="outras 101.523 pessoas"
                />

                <PostItem 
                type="user-box"
                icon="images/barked.svg"
                title="barked"
                typeDot="user-dot"
                titleDot="..."
                image="images/dog.svg"
                alt="doguinho"
                typeB="box-b"
                typeC="box-c"
                typeD="box-d"
                icone="images/adorable_animals.svg"
                text="Curtido por "
                textb="respondeai"
                textc=" e "
                textd="outras 99.159 pessoas"
                />

                <PostVideo
                type="user-box"
                icon="images/adorable_animals.svg"
                title="adorableanimals"
                typeDot="user-dot"
                titleDot="..."
                class="video"
                videomp4="/videos/mov_bbb.mp4"
                typemp4="video/mp4"
                videogg="/videos/mov_bbb.ogg"
                typeogg="video/ogg"
                typeB="box-b"
                typeC="box-c"
                typeD="box-d"
                icone="images/meowed.svg"
                text="Curtido por "
                textb="meowed"
                textc=" e "
                textd="outras 75.499 pessoas"
                />

        </div>
    )
}

function Sidebar(){
    return(
        <div class="sidebar">
        <div class="user">
          <img src="images/icon-perfil.png" alt="icon"/>
          <div>
            <h3><strong>fernandoh_sousah</strong></h3>
            <p>Fernando Castro</p>
          </div>
        </div>
        <div class="texto">
          <p>Sugestões para você</p>
          <a><strong>Ver tudo</strong></a>
        </div>
        <div class="box-users">
          <img src="images/bad.vibes.memes.svg" />
          <div>
            <h3><strong>bad.vibes.memes</strong></h3>
            <p>Segue você</p>
          </div>
          <a href="#">Seguir</a>
        </div>
        <div class="box-users">
          <img src="images/chibirdart.svg" />
          <div>
            <h3><strong>chibirdart</strong></h3>
            <p>Segue você</p>
          </div>
          <a href="#">Seguir</a>
        </div>
        <div class="box-users">
          <img src="images/razoesparaacreditar.svg" />
          <div>
            <h3><strong>razoesparaacreditar</strong></h3>
            <p>Segue você</p>
          </div>
          <a href="#">Seguir</a>
        </div>
        <div class="box-users">
          <img src="images/adorable_animals.svg" />
          <div>
            <h3><strong>adorable_animals</strong></h3>
            <p>Segue você</p>
          </div>
          <a href="#">Seguir</a>
        </div>
        <div class="box-users">
          <img src="images/smallcutecats.svg" />
          <div>
            <h3><strong>smallcutecats</strong></h3>
            <p>Segue você</p>
          </div>
          <a href="#">Seguir</a>
        </div>
        <p id="copy">
          Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos •
          Localizações • Contas mais relevantes • Hashtags • Idioma
        </p>
        <p id="copy">© 2021 INSTAGRAM DO FACEBOOK</p>
        </div>
    )
}