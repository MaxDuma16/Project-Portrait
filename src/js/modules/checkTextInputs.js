const checkTextInputs = (selector) => {
    const textinputs = document.querySelectorAll(selector);

    textinputs.forEach(input => {
        input.addEventListener('keypress', function(e) {
            if (e.key.match(/[^а-яё 0-9]/ig)) {
                e.preventDefault();
            }
        });
    });
};
export default checkTextInputs;
