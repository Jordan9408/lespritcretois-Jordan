///page error404

const error404 = (e) => {
    console.log(e)
    let message;
    message = document.getElementById('message');
    message.innerHTML = "";

    // syntaxe général
    try {
        const error404 = window.location.href = '../error404.html';

    }
    catch (error) {
        console.log(error404)

    }

}
export { error404 };