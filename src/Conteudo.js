import React from "react";

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


    const [curtir, setCurtir] = React.useState("like");

    function Curtir(){
        if(curtir == "nolike"){
            setCurtir("like");
        }else{
            setCurtir("nolike");
        }
    }

    function DesLike(){
        if(curtir == "like"){
            setCurtir("nolike");
        }else{
            setCurtir("like");
        }
    }

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
                    <ion-icon onClick={Curtir} name="heart-outline"></ion-icon>
                    <ion-icon class={curtir} onClick={Curtir} name="heart"></ion-icon>
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

    const stories = [
        {
            class: "stories-box",
            image: "images/stories_background.jpg",
            alt: "image",
            type: "contas",
            img: "images/9gag.svg",
            title: "9gag"
        },
        {
            class: "stories-box",
            image: "images/stories_background.jpg",
            alt: "image",
            type: "contas",
            img: "images/9gag.svg",
            title: "9gag"
        },
        {
            class: "stories-box",
            image: "images/stories_background.jpg",
            alt: "image",
            type: "contas",
            img: "images/9gag.svg",
            title: "9gag"
        },
        {
            class: "stories-box",
            image: "images/stories_background.jpg",
            alt: "image",
            type: "contas",
            img: "images/9gag.svg",
            title: "9gag"
        },
        {
            class: "stories-box",
            image: "images/stories_background.jpg",
            alt: "image",
            type: "contas",
            img: "images/9gag.svg",
            title: "9gag"
        },
        {
            class: "stories-box",
            image: "images/stories_background.jpg",
            alt: "image",
            type: "contas",
            img: "images/9gag.svg",
            title: "9gag"
        },
        {
            class: "stories-box",
            image: "images/stories_background.jpg",
            alt: "image",
            type: "contas",
            img: "images/9gag.svg",
            title: "9gag"
        },
        {
            class: "stories-box",
            image: "images/stories_background.jpg",
            alt: "image",
            type: "contas",
            img: "images/9gag.svg",
            title: "9gag"
        },
        {
            class: "stories-box",
            image: "images/stories_background.jpg",
            alt: "image",
            type: "contas",
            img: "images/9gag.svg",
            title: "9gag"
        },
    ]

    const items = [
        {
            type: "user-box",
            icon: "images/respondeai.svg",
            title: "respondeai",
            typeDot: "user-dot",
            titleDot: "...",
            image: "images/bruxo.jpeg",
            alt: "bruxo driven",
            class: "none",
            typeB:"box-b",
            typeC: "box-c",
            typeD: "box-d",
            icone: "images/respondeai.svg",
            text: "Curtido por ",
            textb: "respondeai",
            textc: " e ",
            textd: "outras 599.259 pessoas"
        },
        {
            type: "user-box",
            icon: "images/meowed.svg",
            title: "meowed",
            typeDot: "user-dot",
            titleDot: "...",
            image: "images/gato-telefone.svg",
            alt: "gato telefone",
            class: "none",
            typeB:"box-b",
            typeC: "box-c",
            typeD: "box-d",
            icone: "images/respondeai.svg",
            text: "Curtido por ",
            textb: "respondeai",
            textc: " e ",
            textd: "outras 101.523 pessoas",
        },
        {
            type: "user-box",
            icon: "images/barked.svg",
            title: "barked",
            typeDot: "user-dot",
            titleDot: "...",
            image: "images/dog.svg",
            alt: "doguinho",
            class: "none",
            typeB:"box-b",
            typeC: "box-c",
            typeD: "box-d",
            icone: "images/adorable_animals.svg",
            text: "Curtido por ",
            textb: "respondeai",
            textc: " e ",
            textd: "outras 99.159 pessoas"
        }
    ]

    const itens = [
        {
            type: "user-box",
            icon: "images/adorable_animals.svg",
            title: "adorableanimals",
            typeDot: "user-dot",
            titleDot: "...",
            class: "video",
            videomp4: "/videos/mov_bbb.mp4",
            typemp4: "video/mp4",
            videogg: "/videos/mov_bbb.ogg",
            typeogg: "video/ogg",
            class: "none",
            typeB:"box-b",
            typeC: "box-c",
            typeD: "box-d",
            icone: "images/meowed.svg",
            text: "Curtido por ",
            textb: "meowed",
            textc: " e ",
            textd: "outras 75.499 pessoas"
        }
    ]

    const storis = stories.map(item => <StoriesItem 
            class={item.class}
            image={item.image} 
            alt={item.alt}
            type={item.type} 
            img={item.img}
            title={item.title} 
    />)

    const posts = items.map(item => <PostItem
        type={item.type}
        icon={item.icon}
        title={item.title}
        typeDot={item.typeDot}
        titleDot={item.titleDot}
        image={item.image}
        alt={item.alt}
        class={item.class}
        typeB={item.typeB}
        typeC={item.typeC}
        typeD={item.typeD}
        icone={item.icone}
        text={item.text}
        textb={item.textb}
        textc={item.textc}
        textd={item.textd}    
        /> )

    const videos = itens.map(item => <PostVideo
        type={item.type}
        icon={item.icon}
        title={item.title}
        typeDot={item.typeDot}
        titleDot={item.titleDot}
        class={item.class}
        videomp4={item.videomp4} 
        typemp4={item.typemp4}
        videogg={item.videogg}
        typeogg={item.typeogg}
        typeB={item.typeB}
        typeC={item.typeC}
        typeD={item.typeD}
        icone={item.icone}
        text={item.text}
        textb={item.textb}
        textc={item.textc}
        textd={item.textd}    
        /> )

    return (
        <div class="posts">
            <div class="stories">
                <ion-icon name="chevron-forward-circle-sharp"></ion-icon>
                {storis}
                {/* <StoriesItem
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
                /> */}
            </div>
            {posts}
            {videos}
        </div>
    )
}

function User(props){
    return(
        <div class="user">
          <img src={props.image} alt={props.alt}/>
          <div>
            <h3><strong>{props.user}</strong></h3>
            <p>{props.name}</p>
          </div>
        </div>
    )
}

function BoxUser(props){
    return(
        <div class="box-users">
          <img src={props.image} />
          <div>
            <h3><strong>Segue você</strong></h3>
            <p>{props.text}</p>
          </div>
          <a href="#">Seguir</a>
        </div>
    )
}

function Sidebar(){

    const items = [
        {
            image: "images/bad.vibes.memes.svg",
            title: "bad.vibes.memes"
        },
        {
            image: "images/chibirdart.svg",
            title: "chibirdart"
        },
        {
            image: "images/razoesparaacreditar.svg",
            title: "razoesparaacreditar"
        },
        {
            image: "images/adorable_animals.svg",
            title: "adorable_animals"    
        },
        {
            image: "images/smallcutecats.svg",
            title: "smallcutecats"
        }
    ]

    const users = items.map(item => <BoxUser 
    image={item.image}
    title={item.title}
    />)

    return(
        <div class="sidebar">
        <User
        image="images/icon-perfil.png"
        alt="icon"
        user="fernandoh_sousah"
        name="Fernando Castro"
        />
        <div class="texto">
          <p>Sugestões para você</p>
          <a><strong>Ver tudo</strong></a>
        </div>
        
        {users}

        <p id="copy">
          Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos •
          Localizações • Contas mais relevantes • Hashtags • Idioma
        </p>
        <p id="copy">© 2021 INSTAGRAM DO FACEBOOK</p>
        </div>
    )
}