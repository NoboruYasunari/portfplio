$.getJSON('js/matter.json', function(data) {
    for(let i = 0; i < data.length; i++) {
        $(
            '<div class="col-sm-12 col-md-6 col-lg-4">' +
                '<div class="neumorphism padd15 marB15 alignC">' +
                    '<span class="material-icons" style="font-size: 80px;">' +
                        data[i].icon +
                    '</span>' +
                    '<h3>' +
                        data[i].title +
                    '</h3>' +
                    '<p class="padd15 alignL">' +
                        data[i].sentence +
                    '</p>' +
                '</div>' +
            '</div>'
        )
        .appendTo('#saleDeals');
    }
});

document.getElementById("requestContent").addEventListener("blur", function() {
    let name = document.getElementById("name").value;
    let phone = document.getElementById("phone").value;
    let email = document.getElementById("email").value;
    let requestContent = document.getElementById("requestContent").value;
    let input = 0;
    if(name !== "") {
        input++;
    }
    if(phone !== "") {
        input++;
    }
    if(email !== "") {
        input++;
    }
    if(requestContent !== "") {
        input++;
    }
    if(input >= 4) {
        document.getElementById("submitButton").removeAttribute("disabled");
    }
});
var app = new Vue({
	el: "#app",
	data:{
		message01: "フェイクやろう",
		message02: "ぶたやろう",
		message03: "シャケやろう"
	}
});