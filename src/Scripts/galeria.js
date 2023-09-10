

(function () {
    const getFigureData = (figure) => {
        return {
            imageElement: figure.querySelector('img'),
            title: figure.getAttribute('data-modal-title'),
            description: figure.getAttribute('data-modal-description'),
            repository: figure.getAttribute('data-modal-repository')
        };
    }
    const isValid = (value) => (value !== null && value !== '' && value !== undefined);
    const modal = document.querySelector("#modal-gallery-image");
    modal.addEventListener("show.bs.modal", function (event) {
        const processModal = (data) => {
            const hasInfo = () => { 
                const ignorableKeys = ['imageElement', 'title'];
                const filteredKeys = Object.keys(data).filter((key) => !ignorableKeys.includes(key));
                return filteredKeys.some(key => isValid(data[key]) === true);
            };
            this.querySelector(".modal-title").textContent = data.title;
            let templateBody = `
                <div class="gallery-display row">
                    ${ hasInfo() ? `
                    <div class="gallery-display-info col-lg-4 order-lg-2">
                        ${ isValid(data.description) ? `<p>${data.description}</p>` : ''}
                        <div class="row px-0 mb-3">
                            ${ isValid(data.repository) ? `
                            <div class="col-md-12">
                                <a class="btn d-block btn-outline-primary c-rounded-3" target="_blank" href="${data.repository}">Repositório</a>
                            </div>` : ''}
                        </div>
                    </div>` : ''}                    
                    <div class="gallery-display-demo ${ hasInfo() ? 'col-lg-8' : '' } order-lg-1 h-100">
                        <a href="${data.imageElement.src}">
                            <img class="img-fluid" style="margin: 0 auto; display: block;" src="${data.imageElement.src}">
                        </a>
                    </div>
                </div>
            `;
            this.querySelector('.modal-body').innerHTML = templateBody;
        }
        document.body.style.paddingRight = '0';
        let figure = event.relatedTarget;
        let figureData = getFigureData(figure);
        processModal(figureData);


    })
})();
