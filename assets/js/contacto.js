$("#formcontact").validate({
    rules: {
        name: "required",
        correo: {
            required: true,
            email: true
        },
        city: "required",
        phone: {
            required: true,
            number: true
        },
        message: "required",
        profession : "required"
    },
    messages: {
        name: "Por favor, ingresa tu nombre",
        correo: {
            required: "Por favor, ingresa tu correo",
            email: "Ingrese bien su correo"
        },
        city: "Por favor, ingresa la ciudad donde vives",
        phone: {
            required : "Por favor, ingresa adecuadamente tu celular",
            number : "Ingrese solo números"
        },
        message: "Por favor, ingresa el mensaje a enviar",
        profession : "Ingrese su profesion"
    },
    submitHandler: function (form) {
        console.log("daasdasdasdasd")
        let fk = $(form)
        let button = fk.find("button")
        let loader = fk.find(".loading")
        let txtsend = fk.find(".text-send")
        let txterror = fk.find(".text-error")
        loader.slideDown()
        button.attr("disabled", true)
        $.ajax({
            data: fk.serialize(),
            type: "POST",
            url: fk.attr("action"),
            timeout: 40000
        }).done(function (d) {
            if (d) {
                txtsend.slideDown()
            } else {
                txterror.slideDown()
            }
            fk.trigger("reset")
            loader.slideUp()
            button.attr("disabled", false)
        }).fail((function (d) {
            loader.slideUp()
            button.attr("disabled", false)
        }))
    }
});