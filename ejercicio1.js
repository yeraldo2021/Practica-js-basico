const datos={
    nombres: "Gerardo Alex",
    apellidos: "Quispe Antara",
    temasbootcamp: ["GitHub", "HTML y CSS", "JavaScript", "Base de datos"],
    redsocial:  [ {NombreRedSocial: "Facebook", link: "facebook.com"},
                  {NombreRedSocial: "Intagram", link: "instangram.com"},
                  {NombreRedSocial: "WhatsApp", link: "982527744"},
                  {NombreRedSocial: "Twitter", link: "twitter.com"},
                  {NombreRedSocial: "GitHub", link: "@yeraldo2021"}
                ]
        }
      console.log("Nombres:", datos.nombres);
      console.log("Apellidos:", datos.apellidos);
      console.log("Temas del bootcamp:", datos.temasbootcamp);
      console.log("Redes sociales:");
      datos.redsocial.forEach((i) => {
      console.log(` ${i.NombreRedSocial}: ${i.link}`)
        }
      )