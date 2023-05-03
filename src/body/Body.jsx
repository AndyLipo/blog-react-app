import "./body.css"

export default function Body() {
  return (
    <div className="body">
        <div className="">
        <div className="imgF">
                <img className="imgC" src="https://http2.mlstatic.com/D_NQ_NP_726769-MLA51672952921_092022-C.jpg" alt=""/>
            </div>
            <div className="parrafo1">
                <br></br>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ut laoreet est.
                </p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ut laoreet est.
                </p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ut laoreet est.
                </p>
            </div>
            {/* <div className="imgF">
                <img className="imgC" src="https://http2.mlstatic.com/D_NQ_NP_726769-MLA51672952921_092022-C.jpg" alt=""/>
            </div>  */}
            <div className="parrafo2">
                <p>
                    Morbi non augue orci. Morbi mollis nunc ipsum, vel porttitor lacus aliquam non. 
                </p>
                <p>
                    Morbi non augue orci. Morbi mollis nunc ipsum, vel porttitor lacus aliquam non. 
                </p>
                <p>
                    Morbi non augue orci. Morbi mollis nunc ipsum, vel porttitor lacus aliquam non. 
                </p>
            </div>
            <div className="row">
                <div className="video">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/XctRwihO6EA" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                </div>
                <div className="fotos1">
                    <img src="https://www.arqhys.com/wp-content/fotos/2011/09/Dise%C3%B1oy-construccion-de-casas-de-madera.jpg" alt=""></img>
                </div>
                <div className="fotos2">
                    <img className="" src="https://images.homify.com/c_fill,f_auto,q_0,w_740/v1445857335/p/photo/image/1041089/Vivienda_modular_190_HD.jpg" alt=""></img>
                </div>
                <div className="fotos3">
                    <img className="" src="https://images.homify.com/c_fill,f_auto,q_0,w_740/v1445857335/p/photo/image/1041089/Vivienda_modular_190_HD.jpg" alt=""></img>
                </div>
            </div>
        </div>
    </div>
  )
}
