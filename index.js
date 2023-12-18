const input = document.getElementById("search");
input.addEventListener('input', search);

function search() {
    const inputVal = input.value.toLowerCase();
    const li = document.getElementsByTagName("li");

    for (let i = 0; i < li.length; i++) {
        if (li[i].innerHTML.toLowerCase().includes(inputVal)) {
            li[i].style.display = '';
        } else {
            li[i].style.display = 'none';
        }
    }
}