document.addEventListener('click', (e)=>{

    const el = e.target;
    const tag = el.tagName.toLowerCase();

    if(tag === 'a'){
        e.preventDefault();
        loadPage(el);
    }

    function loadPage(el){

        const href = el.getAttribute('href');

        fetch(href)
            .then(res => {
                if(res.status !== 200) throw new Error('ERRO 404!');
                return res.text();
            })
            .then(html => setContent(html)).catch(e=>console.log(e))
    }

    function setContent(html){
        const content = document.querySelector('.content');
        content.innerHTML = html
    }

})