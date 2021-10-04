document.onreadystatechange = () => {
    if (document.readyState === "complete") {
        console.log('document.readyState === "complete"');
        processo().init();
    }
}




const processo = () => {

    const processo = {

        /** Funções executadas com o carregamento da página. */
        init: function () {
            console.log("init");
            setupCamera();
            detectFaces();
        },
        /** Aqui ficam todos os eventos da página */
        events: function () {
            console.log("events");

            let that = this;


            document.querySelector("#addTableItens").addEventListener("click", () => {

            });
        }
    }
    return processo;
}